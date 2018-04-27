class R {

    private list : any = {}

    register(path : string, controller : Function) {

        const arrT = path
            .split('/')
            .filter(e => e !== '')
        let out = {
            name: [],
            reg: ''
        }
        const arrReg = arrT.map(e => {

            let name : any = '|'
            let regex = ''
            let type = 'part'

            if (/^([a-zAZ0-9_\-]+)$/.test(e)) {
                const m = /^([a-zAZ0-9_\-]+)$/.exec(e);
                name = m[1]
                type = 'part'
                regex = `\/${name}`
            } else if (/^<[a-zA-Z0-9_\-]+:(int)>$/.test(e)) {
                const m = /^<([a-zAZ0-9_\-]+):(int)>$/.exec(e);
                name = m[1]
                type = 'int'
                regex = '\/[0-9]+'
            } else if (/^<[a-zA-Z0-9_\-]+:(string)>$/.test(e)) {
                const m = /^<([a-zAZ0-9_\-]+):(string)>$/.exec(e);
                name = m[1]
                type = 'string'
                regex = '\/(?=.*[a-z|A-Z])[a-zAZ0-9_\-]+'
            }

            out.reg += regex
            out.name.push({name, type})
            return e
        })

        this.list = {
            ...this.list,
            [`^${out.reg}$`]: {
                controller,
                name: out.name
            }
        }
    }

    match(url) {

        return new Promise((resolve, reject) => {
            let controller : Function = null
            let params = {}
            Object
                .keys(this.list)
                .forEach((e, i) => {
                    const reg = new RegExp(e)
                    // console.log(reg); Evaluar url con expresión regular
                    if (reg.test(url)) {
                        // Create attr
                        const urlPart = url
                            .split('/')
                            .filter(e => e != '')
                        urlPart.forEach((el, i) => {
                            const valueRoute = this.list[e].name[i]
                            if (valueRoute.type !== 'part') {
                                params = {
                                    ...params,
                                    [valueRoute.name]: el
                                }
                            }

                        });
                        //asignar controller
                        controller = this.list[e].controller
                    }
                })
            if (controller) {
                resolve({controller, params})
            } else {
                reject(`404: [${url}] no existe`);
            }
        })
    }

}

export default R
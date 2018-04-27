const http = require('http')
const port = 3000

import RouterStack from './common/RouterStack'
import Route from './common/Route'
import { resolve } from 'path'
import Controller from './controller/Controller'
import IController from './controller/IController';
import R from './common/R';


class App {

    private server = null
    private port : number = 3333

    private routerStack : RouterStack = new RouterStack()

    constructor (port : number) {
        this.port = port || this.port
        this.server = http.createServer(this.requestHandler)
    }

    public registerRoute(path : string, controller : IController) : void {
        this.routerStack.register(new Route(path, controller))
    }

    private requestHandler = (request, response) : void => {

        /* ejemplo route parametrico */
        const r = new R()
        r.register('/algo/<id:int>/<el-super-feliz:string>', params => console.log('1', params))
        r.register('/otra/<id:int>/<bla:string>', params => console.log('2', params))
        r.register('/algo/<id:int>/<bla:int>', params => console.log('3', params))
        r.register('/user', params => console.log('3', params))

        r.match(request.url).then((object : any) => { object.controller(object.params) }).catch(e => console.log(e))

        const resolveRoute = this.routerStack.routeResolve(request.url, request, response)
    }

    public start (): void {
        this.server.listen(this.port)
    }
}

export const base = {
    Controller: Controller,
    App: App,
}
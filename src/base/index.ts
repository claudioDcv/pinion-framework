const http = require('http')
const port = 3000

import { resolve } from 'path'
import Controller from './controller/Controller'
import IController from './controller/IController';
import R from './common/R';


class App {

    private server = null
    private port : number = 3333

    private r = new R()

    constructor (port : number) {
        this.port = port || this.port
        this.server = http.createServer(this.requestHandler)
    }

    public registerRoute(path : string, controller : IController) : void {
        this.r.register(path, controller)
    }

    private requestHandler = (request, response) : void => {

        /* ejemplo route parametrico */
        this.r.match(request.url, request, response)
        .then((object : any) => {
            
            const cont : Controller = new object.controller({
                path: request.url,
                request,
                response,
                params: object.params.q,
            })
            cont.compile()
        })
        .catch(e => console.log(e))
    }

    public start (): void {
        this.server.listen(this.port)
    }
}

export const base = {
    Controller: Controller,
    App: App,
}
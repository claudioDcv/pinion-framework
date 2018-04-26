import Route from './Route'
import Controller from '../controller/Controller';
import Props from '../controller/Props';

class RouterStack {
    private routerList : Array<Route> = []
    
    public register(route : Route) {
        this.routerList[route.name] = route
    }

    public getRouterList() : Array<Route> {
        return this.routerList
    }

    public routeResolve(path, request, response) : void {
        // Exclude ico
        if (path != '/favicon.ico') {
            const route : Route = this.routerList[path]

            console.log(route);
            

            if (route == undefined) {
                console.log('Error');
                
                class Error {
                    public code = 500
                    public message = 'Error de servidor'
                }

                const error = new Error

                const defaultController = new Controller({ path, request, response, error: Error })
                defaultController.compile()
                return;
            } else {
                const controller : Controller = route.makeController({ path, request, response })
                controller.compile()
            }        
        }
    }
}


export default RouterStack
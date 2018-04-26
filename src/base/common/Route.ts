import IController from "../controller/IController";

class Route {
    public name : string;
    public controller : any;

    public constructor(name : string, controller : IController) {
        this.name = name
        this.controller = controller
    }

    public makeController(props) : any {
        return new this.controller(props)
    }
}

export default Route
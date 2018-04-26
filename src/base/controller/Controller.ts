import Props from "./Props";
import TemplateEngine from "../view/TemplateEngine";
import IController from "./IController";

class Controller implements IController{

    public model = {}
    public html = ''
    public path
    public request
    public response
    public error
    public contentType : string = 'application/json'

    public constructor(props : Props) {
        this.path = props.path
        this.request = props.request
        this.response = props.response
        this.error = props.error || false

        this.response.writeHeader(200, { "Content-Type": this.contentType });  
    }

    beforeGet(resolve : Function, reject : Function) {
        resolve('No Implement (beforeGet)')
    }

    protected get(resolve : Function, reject : Function) : void {
        resolve('Not Implement (render)')
    }

    afterGet(resolve : Function, reject : Function) {
        resolve('No Implement (afterGet)')
    }

    private promBeforeGet = (beforeData : any) => new Promise(this.get)

    private promGet = (data : string) => {
        let out = data
        if(this.contentType === 'text/html') {
            out = TemplateEngine(data, this.model)
        } else if(this.contentType === 'application/json') {
            out = JSON.stringify(data)
        }
        const buffer = new Buffer(out)
        this.response.end(buffer)
        return new Promise(this.afterGet)
    }

    private promAfterGet = (dataAfert : any) => {
        console.log(dataAfert)
    }

    private promError = (e) => {
        console.error(e)
        const buffer = new Buffer(e)
        this.response.end(buffer)
    }
    // Compila en resultado de la promesa render, para retornar el response al cliente
    // en caso de ser text/html, compila la data con el modelo
    compile() {
        if(this.request.method === 'GET') {
            new Promise(this.beforeGet)
            .then(this.promBeforeGet)
            .then(this.promGet)
            .then(this.promAfterGet)
            .catch(this.promError)
        } else {
            const buffer = new Buffer(this.request.method)
            this.response.end(buffer)
        }
        
    }
}

export default Controller
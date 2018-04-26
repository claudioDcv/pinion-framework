"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TemplateEngine_1 = require("../view/TemplateEngine");
class Controller {
    constructor(props) {
        this.model = {};
        this.html = '';
        this.contentType = 'application/json';
        this.promBeforeGet = (beforeData) => new Promise(this.get);
        this.promGet = (data) => {
            let out = data;
            if (this.contentType === 'text/html') {
                out = TemplateEngine_1.default(data, this.model);
            }
            else if (this.contentType === 'application/json') {
                out = JSON.stringify(data);
            }
            const buffer = new Buffer(out);
            this.response.end(buffer);
            return new Promise(this.afterGet);
        };
        this.promAfterGet = (dataAfert) => {
            console.log(dataAfert);
        };
        this.promError = (e) => {
            console.error(e);
            const buffer = new Buffer(e);
            this.response.end(buffer);
        };
        this.path = props.path;
        this.request = props.request;
        this.response = props.response;
        this.error = props.error || false;
        this.response.writeHeader(200, { "Content-Type": this.contentType });
    }
    beforeGet(resolve, reject) {
        resolve('No Implement (beforeGet)');
    }
    get(resolve, reject) {
        resolve('Not Implement (render)');
    }
    afterGet(resolve, reject) {
        resolve('No Implement (afterGet)');
    }
    // Compila en resultado de la promesa render, para retornar el response al cliente
    // en caso de ser text/html, compila la data con el modelo
    compile() {
        if (this.request.method === 'GET') {
            new Promise(this.beforeGet)
                .then(this.promBeforeGet)
                .then(this.promGet)
                .then(this.promAfterGet)
                .catch(this.promError);
        }
        else {
            const buffer = new Buffer(this.request.method);
            this.response.end(buffer);
        }
    }
}
exports.default = Controller;
//# sourceMappingURL=Controller.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Controller_1 = require("../../base/controller/Controller");
class Cristofer extends Controller_1.default {
    constructor(props) {
        super(props);
        this.model = {
            skills: ["Cristofer"],
            showSkills: true
        };
    }
    render() {
        return ('My skills:' +
            '<%if(this.showSkills) {%>' +
            '<%for(var index in this.skills) {%>' +
            '<a href="#"><%this.skills[index]%></a>' +
            '<%}%>' +
            '<%} else {%>' +
            '<p>none</p>' +
            '<%}%>');
    }
}
exports.default = Cristofer;
//# sourceMappingURL=Cristofer.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Controller_1 = require("../../base/controller/Controller");
class Bie extends Controller_1.default {
    constructor(props) {
        super(props);
        this.model = {
            skills: ["js", "html", "css"],
            showSkills: false
        };
        this.model.skills.push('Claudio');
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
exports.default = Bie;
//# sourceMappingURL=Bie.js.map
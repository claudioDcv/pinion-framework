import Controller from "../../base/controller/Controller";
import User from "../model/User";

class UserCreate extends Controller {

    public model = {
        skills: ["js", "html", "css"],
        showSkills: true
    }

    public constructor(props) {
        super(props)
    }

    protected get = (resolve : Function, reject : Function): void => {
        User().sync({force: false}).then(() => {
            // Table created
            User().create({
                firstName: this.params.name,
                lastName: this.params.lasName,
            })
            .then(user => resolve(user))
        });
    }
}

export default UserCreate
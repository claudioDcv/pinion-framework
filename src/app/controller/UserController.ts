import Controller from "../../base/controller/Controller";
import User from "../model/User";

class UserController extends Controller {
    public model = {}
    public constructor(props) {
        super(props)
    }
    protected get =(resolve : Function, reject : Function): void => {
        User().findAll().then(users => {
            resolve(users)
          })
    }
}

export default UserController
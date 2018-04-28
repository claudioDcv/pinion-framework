import {base} from './base'
import UserController from './app/controller/UserController';
import UserCreate from './app/controller/UserCreate';
import IController from './base/controller/IController';

/* ******* */

const app = new base.App(3333)

app.registerRoute('/user/<id:int>', UserController)
// app.registerRoute('/user/{id}', UserController)

app.registerRoute('/user/<name:string>/<lastname:string>', UserCreate)

app.start()

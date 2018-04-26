import { base } from './base'
import UserController from './app/controller/UserController';
import UserCreate from './app/controller/UserCreate';


const app = new base.App(3333)

app.registerRoute('/user', UserController)
app.registerRoute('/user/{id}', UserController)

app.registerRoute('/user-create', UserCreate)

app.start()
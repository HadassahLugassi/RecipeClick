import bodyParser from "body-parser"
import {Router} from "express"
import UsersController from "../controllers/UsersController.js"
import userMiddleware from "../middleware/userMiddleware.js"
const UsersRouter=Router()
UsersRouter.use(bodyParser.json())
UsersRouter.get('/getAllUsers',UsersController.getAllUsers)
UsersRouter.post('/getUserByNameAndPass',UsersController.getUserByNameAndPass)
UsersRouter.get('/getFavoriteRecipesIdByUserId/:id',UsersController.getFavoriteRecipesId)
UsersRouter.post('/addUser',userMiddleware.writeUserWhenRegister,UsersController.addUser)
UsersRouter.post('/addfavoriteRecipesId',UsersController.addFavoriteRecipesId)
export default UsersRouter
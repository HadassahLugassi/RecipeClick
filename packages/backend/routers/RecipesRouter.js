import bodyParser from "body-parser"
import {Router} from "express"
import RecipesController from "../controllers/RecipesController.js"
const RecipesRouter=Router()
RecipesRouter.use(bodyParser.json())
RecipesRouter.get('/getAllRecipes',RecipesController.getAllRecipes)
RecipesRouter.get('/getRecipeById/:id',RecipesController.getRecipeById)
RecipesRouter.post('/addRecipe',RecipesController.addRecipe)
RecipesRouter.put('/updateRecipe/:id',RecipesController.updateRecipe)
RecipesRouter.delete('/deleteRecipe',RecipesController.deleteRecipe)
export default RecipesRouter
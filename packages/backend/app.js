import express from "express"
import dotenv from 'dotenv'
import mongoose from "mongoose"
import RecipesRouter from "./routers/RecipesRouter.js"
import UsersRouter from "./routers/UsersRouter.js"
import cors from "cors"
const app = express()

app.use(express.static('public'))
app.use(cors())

dotenv.config()

app.listen(process.env.PORT, () => {
    console.log("run on port " + process.env.PORT)
})

 app.use('/users', UsersRouter)
 app.use('/recipes', RecipesRouter)

mongoose.connect('mongodb://localhost:27017/project2025_HadassahLugassi')
    .then(x => {
        console.log("connect")
    })
    .catch(err => {
        console.log("not connect. the error: ");
        console.log((err.message));
    })

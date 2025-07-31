import fs from "fs"
const userMiddleware = {
    writeUserWhenRegister: (req, res, next) => {
        fs.appendFileSync('./RegisterUser1.txt', "name" +JSON.stringify(req.body.name)+"password" +JSON.stringify(req.body.password) + ", date: " + new Date() + "\n")
        console.log("מנסה");
        next()
    }
}
export default userMiddleware
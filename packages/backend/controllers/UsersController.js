import UsersModel from "../models/UsersModel.js"


export const UsersController = {

    getAllUsers: (req, res) => {

        try {
            UsersModel.find()
                .then((dbUsers) => { res.status(200).json(dbUsers) })
                .catch((err) => { res.status(500).json(err.message) })
        }
        catch (e) {
            res.status(404).json(e)
        }
    },
    getFavoriteRecipesId: (req, res) => {
        try {
            UsersModel.findById(req.params.id)
                .then(user => {
                    res.status(200).send(user.favoriteRecipesId)
                })
                .catch(err => {
                    res.status(500).send(err.message)
                })
        }
        catch (err) {
            res.status(404).json(err.message)
        }
    },
    addUser: (req, res) => {        
        try {
            const newUser = new UsersModel(req.body)
            newUser.save()
                .then(flag => { res.status(200).send(true) })
                .catch(err => { res.status(500).send(err) })
        }
        catch (err) {
            res.status(404).json(err.message)
        }
    },
    getUserByNameAndPass: (req, res) => {
        const { name, password } = req.body;
        UsersModel.findOne({ name: name, password: password })
            .then(user => {
                if (user) {
                    res.status(200).json(user);
                } else {
                    res.status(404).json({ message: "User not found" });
                }
            })
            .catch(err => {
                res.status(500).json({ message: "Error retrieving user" });
            });
    },
    addFavoriteRecipesId: (req, res) => {
        const { userId, recipeId } = req.body;
        UsersModel.findByIdAndUpdate(
            userId,
            { $addToSet: { favoriteRecipesId: recipeId } },
            { new: true }
        )
            .then(flag => {
                if (flag) { res.status(200).json(flag) }
                else { res.status(404).json({ message: "User not found" }) }
            })
            .catch(err => {
                res.status(500).json({ message: "Error updating user", error: err });
            })
    }

    
    



}
export default UsersController
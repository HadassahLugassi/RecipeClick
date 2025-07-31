import RecipesModel from "../models/RecipesModel.js"
import UsersModel from "../models/UsersModel.js"

export const RecipesController = {
    getAllRecipes: (req, res) => {
        try {
            RecipesModel.find().populate("user_id").then((dbRecipes) => {
                res.status(200).json(dbRecipes)
            }).catch((err) => {
                res.status(500).json(err.message)
            })
        }
        catch (err) {
            res.status(404).json(err)
        }
    },
    getRecipeById: (req, res) => {
        try {
            RecipesModel.findById(req.params.id)
                .then(recipe => {
                    res.status(200).send(recipe)
                })
                .catch(err => {
                    res.status(500).send(err.message)
                })
        }
        catch (err) {
            res.status(404).send(err)
        }
    },
    addRecipe: (req, res) => {
        try {
            const newRecipe = new RecipesModel(req.body)
            newRecipe.save()
                .then(r => { res.status(200).send(true) })
                .catch(err => { res.status(500).send(err) })
        }
        catch (err) {
            res.status(404).json(err.message)
        }
    },
    updateRecipe: (req, res) => {
        try {
            RecipesModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
                .then(r => { res.status(200).send(true) })
                .catch(err => res.status(500).send(err))
        }
        catch (err) {
            res.status(404).send(err)

        }
    },

    deleteRecipe: (req, res) => {
        const { recipeId, userId } = req.body;

        RecipesModel.findById(recipeId)
            .then(recipe => {
                if (!recipe) {
                    return res.status(404).json({ message: "Recipe not found" });
                }
                if (recipe.user_id.toString() !== userId) {
                    return UsersModel.findById(userId)
                        .then(user => {
                            if (!user || !user.isManager) {
                                return res.status(403).json({ message: "You do not have permission to delete this recipe" });
                            }
                            return RecipesModel.findByIdAndDelete(recipeId);
                        });
                }
                return RecipesModel.findByIdAndDelete(recipeId);
            })
            .then(deletedRecipe => {
                if (deletedRecipe) {
                    res.status(200).json({ message: "Recipe deleted successfully" });
                } else {
                    res.status(500).json({ message: "Error deleting recipe" });
                }
            })
            .catch(err => {
                res.status(500).json({ message: "Error processing request", error: err.message });
            });
    }
}    
export default RecipesController




//     deleteRecipe: (req, res) => {
//         console.log(req);
//         flag = false
//         const { recipeId, userId } = req.body
//         RecipesModel.findById(recipeId)
//             .then(recipe => {
//                 if (recipe.user_id == userId) {
//                     flag = true;
//                 }
//                 else {
//                     UsersModel.findById(userId).then(user => {
//                         if (user.isManager == true)
//                             flag = true;
//                     })
//                 }
//                 if (!flag) {
//                     return res.status(404).json({ message: "you dont have the הרשאה to delete this recipe" })
//                 }
//                 return RecipesModel.findByIdAndDelete(recipeId);
//             })
//             .then(deletedRecipe => {
//                 if (deletedRecipe) {
//                     res.status(200).json({ message: "Recipe deleted successfully" });
//                 } else {
//                     res.status(500).json({ message: "Error deleting recipe" });
//                 }
//             })
//             .catch(err => {
//                 res.status(500).json({ message: "Error processing request", error: err.message });
//             })
//             .catch(err => {
//                 return res.status(404).json({ message: "the recipe id not fond" })
//             })
//     }
// }














// deleteRecipe: (req, res) => {
//     const { recipeId, userId } = req.body
//     const recipe = {}
//     RecipesModel.findById(recipeId)
//         .then(recipe => {
//             UsersModel.findById(userId)
//                 .then(user => {
//                     if (!user) {
//                         return res.status(404).json({ message: "the user id not fond" })
//                     }
//                     if (userId !== recipe.user_id.toString() && !user.isManager) {
//                         return res.status(404).json({ message: "You do not have permission to delete the recipe." })
//                     }
//                     return RecipesModel.findByIdAndDelete(recipeId);
//                 })
//                 .then(deletedRecipe => {
//                     if (deletedRecipe) {
//                         res.status(200).json({ message: "Recipe deleted successfully" });
//                     } else {
//                         res.status(500).json({ message: "Error deleting recipe" });
//                     }
//                 })
//                 .catch(err => {
//                     res.status(500).json({ message: "Error processing request", error: err.message });
//                 });
//         })
//         .catch(err => {
//             return res.status(404).json({ message: "the recipe id not fond" })
//         })
// }







//    deleteRecipe: (req, res) => {
//     const { userId, recipeId, password } = req.body;

//     UsersModel.findById(userId)
//         .then(user => {
//             if (!user) {
//                 return res.status(404).json({ message: "User not found" });
//             }

//             // בדיקת סיסמת המשתמש
//             if (user.password !== password && !user.isManager) {
//                 return res.status(403).json({ message: "Unauthorized - Incorrect password or not a manager" });
//             }

//             // בדיקת אם המתכון שייך למשתמש
//             return RecipesModel.findById(recipeId);
//         })
//         .then(recipe => {
//             if (!recipe) {
//                 return res.status(404).json({ message: "Recipe not found" });
//             }

//             // אם המשתמש הוא המנהל או שהמתכון שייך לו
//             if (recipe.user_id.toString() !== userId && !user.isManager) {
//                 return res.status(403).json({ message: "Unauthorized - Not the recipe owner or manager" });
//             }

//             return RecipesModel.findByIdAndDelete(recipeId);
//         })
//         .then(deletedRecipe => {
//             if (deletedRecipe) {
//                 res.status(200).json({ message: "Recipe deleted successfully" });
//             } else {
//                 res.status(500).json({ message: "Error deleting recipe" });
//             }
//         })
//         .catch(err => {
//             res.status(500).json({ message: "Error processing request", error: err.message });
//         });
// }

// // בקטע הקוד הזה:

// // אנו מבצעים חיפוש של המשתמש לפי userId ומוודאים שהוא קיים.

// // אם סיסמת המשתמש אינה נכונה והוא אינו מנהל, אנו מחזירים הודעת שגיאה לא מורשית.

// // אנו מבצעים חיפוש של המתכון לפי recipeId.

// // אם המתכון לא שייך למשתמש והמשתמש אינו מנהל, אנו מחזירים הודעת שגיאה לא מורשית.

// // אם כל התנאים מתקיימים, המתכון נמחק מהמסד נתונים.






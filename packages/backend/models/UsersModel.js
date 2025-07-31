import mongoose from "mongoose";
import GeneralValidate from "../validators/GeneralValidate.js";


const UsersModel = mongoose.Schema({
    // id: {
    //     type: String,
    //     required: true,
    //     validate: {
    //         validator: (id) => GeneralValidate.check_id(id)
    //     }
    // },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: false
    },
    phone: {
        type: String,
        required: true
    },
    isManager: {
        type: Boolean,
        required: true
    },
    favoriteRecipesId: [
        {
            required: false,
            type: mongoose.Schema.Types.ObjectId,
            ref: 'RecipesCollection'
        }
    ]

})
export default mongoose.model('UsersCollection', UsersModel)
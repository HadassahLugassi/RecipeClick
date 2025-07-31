*import mongoose from "mongoose";
import GeneralValidate from "../validators/GeneralValidate.js";

const RecipesModel = mongoose.Schema({
    // _id: {
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
    img: {
        type: String,
        required: true
    },
    level: {
        type: String,
        required: true,
        validate: {
            validator: (level) => GeneralValidate.checkLevel(level)
        }
    },
    time: {
        type: Number,
        required: true,
    },
    type: {
        type: String,
        required: true,
        validate: {
            validator: (type) => GeneralValidate.checkType(type)
        }
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UsersCollection'
    },
    prepering:{
        type: String,
        required: true,
    },
    components: 
        [{
            name: {
                type: String,
                required: true
            },
            quantity: {
                type: Number,
                required: true
            }
        }]

})
export default mongoose.model('RecipesCollection',RecipesModel)
import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({


    name:{
        type:String,
        required: true,
    },
    author:{
        type:String,
        required: true,
    },
    cover:{
        type:String,
    },
    category:{
        // todo:外建
        type:String,
    },
    stock:{
        type:Number,
        default:0,
    },
    publishAt:{
        type:Number,
        default:null,
    },
    createdAt:{
        type:Number,
        default:Date.now
    },
    updateAt:{
        type:Number,
        default:Date.now
    }
});

export default bookSchema;

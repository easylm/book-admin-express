import bookSchema from "./bookModel";
import userSchema from "./userMondel";

import mongoose from 'mongoose';

var uri = 'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.2';


async function main() {

    mongoose.connect(uri);
}

main().then(()=>{

    console.log('MongoDB Connected');

}).catch((err)=>{
    console.log(err);
});

const User  = mongoose.model('User',userSchema);

const Book = mongoose.model('Book',bookSchema);
export {User,Book};
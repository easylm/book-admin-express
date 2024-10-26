"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const model_1 = require("../model");
const router = express_1.default.Router();
// router.get('/',(req:Request,res:Response)=>{
//      res.json({success:true});
// });
router.get('/', (req, res) => {
    const bookModel = new model_1.Book({
        name: 'sanmu book',
        author: 'sanmu',
        category: '1',
        stock: 10
    });
    bookModel.save();
    res.json({ success: true });
});
exports.default = router;

import express,{Request,Response} from 'express';
import { Book } from '../model';



const router = express.Router();

// router.get('/',(req:Request,res:Response)=>{
//      res.json({success:true});
// });

router.get('/',(req:Request,res:Response)=>{
    const bookModel = new Book({
        name:'sanmu book',
        author:'sanmu',
        category:'1',
        stock:10
    });
    bookModel.save();
    res.json({success:true});
});

export default router;
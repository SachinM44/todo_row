const mongoose=require("mongoose");
const { boolean } = require("zod");
mongoose.connect("mongodb+srv://xxdev123:mahindra123@cluster0.uwvstmj.mongodb.net/");



const todoSchema=mongoose.Schema({
    title:String,
    decription:String,
    completed:Boolean,
});
const todo =mongoose.model("todos",todoSchema)

module.exports=({
    todo:todo
});
// const mongoose=require("mongoose");
// const { string, boolean } = require("zod");

// mongoose.connect("mongodb+srv://xxdev123:mahindra123@cluster0.uwvstmj.mongodb.net/");
// const todocshema=mongoose.Schema({
//     title:String,
//     descriptoin:String,
//     completed:Boolean,
// })
// const todo =mongoose.model("todos",todocshema)

// module.exports={
//    todo
// };
 

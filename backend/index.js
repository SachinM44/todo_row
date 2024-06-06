/////lets create fullstack  todo app, backend in the HP machine and frontend in the replit 
const express=require("express"); 
const { createTodos, updateTodos } = require("./types");
const { todo } = require("./mongo");
const cors =require("cors")
const app=express()

/*if u wnat to allo only frontend url 
hit this BE endpoint is just use cors 
and mention the ip of FE*/
app.use(cors({
    origin: "localhost:5173"
}))
app.use(express.json())
app.post("/todo",async function(req,res){
    //to post the new todo
    const createpayload=req.body; /// to create list of todos from the body itself;
    const parsepayload=createTodos.safeparse(createpayload)
    if(!parsepayload.success){
       res.status(404).json({
        msg:"you posted wrong inputs here"
       });
       return;
    }
    /// here add it in database/////
    //u can awit this as well bcz then the database is  down it needs to await ..
    await todo.create({
        title:parsepayload.title,
        description:parsepayload.description,
        completed : false

    })

    res.json({
        msg:"todo created succsesfully "
    })


});
app.get("/todos",async function(req,res){
/// to get the list of todos
 const todos =await todo.find({})
///if u log without async fn it will be the pormise.. so to cut down the delay to hit the
//----the database use async func here 
res.json({
    todos
})


});
 
app.put("/completed",async function(req,res){
    //to mark the tod as completed
    const  createpayload=req.body;
    const parsepayload=upadtetodos.safeparse(createpayload);
    if(!parsepayload.success){
        res.status(404).json({
            msg:"its the wrong input"
        });
        return;
    }

    await todo.update({
     _id:req.body.id
  },{
    completed:true
  })
  res.json({
    msg:"todo mark as done "
  })

});


app.listen(3026)













// //express js
// const express =require("express");
// const app=express();
// const {creatTodo,updateTodo}=require("./types");
// const {todo}=require("./mongo")
// app.use(express.json());


// //creating the todos
// app.post("/todo",async function(req,res){
//     //////////error getting part 
//     const {title , description}=req.body;
//     const response=creatTodo.safeParse(title,description)
//     //////////////////
//     if(!(title && response.succes)){
//         res.status(411).json({
//             msg:"check the input that u given above"
//         });
//     }
    
//     //now add on the data into database 
//     /////////////////////
//     await todo.create({
//         title:title,
//         description:description,
//         completed:false,
//     })
//     res.send({
//         response
//     })

// });
// //fr getting the otodos
// app.get("/todos",async function(req,res){
// //fr marking as done for the all the todos\/
// const todos=await todo.find({})
// res.json({
//     todos
// })
// });

// app.put("/completed",async function(req,res){
// const {title , description}=req.body;
// const response=creatTodo.safeParse(title,description)
// if(!(title&&discription.succes)){
//     res.status(411).json({
//         msg:"the wrong input the u given here ..check it out "
//     });
//     return;
// }
// await todos.update({
//     _id:req.body.id
// },{
//     completed: true
// });
// res.json({
//     msg:"mark as completed "
// })
// });
// //////////connect it database to store all of these to mongodb 
// app.listen(4000)



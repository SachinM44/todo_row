const zod =require("zod"); 
const createTodos=zod.object({
    title:zod.string(),
    description:zod.string()
});
// for to put a mark as read
const updateTodos=zod.object({
    id:zod.string()
});

module.exports=({
    createTodos,
    updateTodos
});


// const zod = require("zod")

// const createTodos=zod.object({
//     title:zod.string(),
//     description:zod.string(),
// });



// ////////////for put reques to amrk as read //

// const updateTodo=zod.object({
//     id:zod.string(),
// })
// //this is how to exprort it into the express file
// module.exports = {
//     createTodos: createTodos,
//     updateTodo: updateTodo
// };
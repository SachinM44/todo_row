/* her u pass array of todo and des.. as an input so th at it needs  to render
 that arrat of input for that here is the new syntax ..and u passing the {todo} as the arguement here*/
export function Todos(todos){
    return <div>
        {Todos.map(function(todo){
          return <div>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button>{todo.completed == true ? "completed" : "mark as completd" }</button>
          </div>
        })}
    </div>
}
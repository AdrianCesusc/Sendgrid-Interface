export async function getStaticProps(){

const data = await fetch('https://jsonplaceholder.typicode.com/comments/1')

const todos = await data.json()

console.log(todos)


  return{
 props:{todos},
  }
}

export default function Todos({todos}) {
    return(
        <div>
        <h1> Tarefas para fazer:</h1>
        <ul>
            {todos.map((todo) => (
            <li key={todo.id}> {todo.title}</li>
            ))}
        </ul>
        </div>


    )
}
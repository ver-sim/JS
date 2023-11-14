async function getTodos() {
    let todo= await fetch("https://jsonplaceholder.typicode.com/todos");
    let convert = await todo.json();
    return console.log(convert);
}

getTodos();

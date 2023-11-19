async function getTodos() {
    let todo= await fetch("https://jsonplaceholder.typicode.com/todos");
    let convert = await todo.json();
    return convert;
}

getTodos()
    .then((val) => console.log(val))
    .then((err) => console.log("error", err))

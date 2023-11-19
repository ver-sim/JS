// const user = {
//   id: 1,
//   name: "John",
//   age: 25,
// };

function fetchData(){
    const local = localStorage.getItem("user")
    const user = JSON.parse(local)
    return user
}

fetchData();


const user = {
  id: 1,
  name: "John",
  age: 25,
};

function DataUser(){
  const local = JSON.stringify(user)
  localStorage.setItem("user", local)
}

DataUser();
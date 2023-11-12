const isLogged = true;

function isLoggedUser(isLogged) {
    return new Promise((resolve, reject) => {
        if (isLogged === true){
            resolve(Math.random());
        }
        else{
            reject(new Error("is not logged"));
        }
    })    
}

function userData(num) {
    return new Promise((resolve, reject) => {
        if (num > 0.5) {
            resolve(new Object({name: "John", age: 24}))
        }
        else {
            reject(new Error("error"))
        }
    })
}

isLoggedUser(isLogged)
    .then(userData)
    .then((user) => console.log(user))
    .catch((err) => console.error(err))
    .finally(() => console.log("finally"))


function printAsyncName(callback, name) {
   let id = setInterval(callback, 1000);
   setTimeout(() => {clearInterval(id), console.log(name)}, 2000);
}

printAsyncName(() => console.log("Hello"), "verdiana");
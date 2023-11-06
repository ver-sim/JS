
function repeatHello(callback) {
    let id = setInterval(callback, 1000);
    setTimeout(() => clearInterval(id), 5000);
}

repeatHello(() => console.log("Hello"));

//perché rende la scrittura delle funzioni più sintetico rispetto alla scrittura classica, e quindi è buona prassi usarla quando bisogna scrivere una funzione semplice
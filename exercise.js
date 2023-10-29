const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

// Print values of person using Object.keys

let key = Object.keys(person);

key.forEach(el => {
  console.log(el + ": " + person[el]);
});

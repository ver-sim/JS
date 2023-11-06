const person = {
  id: 1,
  firstname: 'Mario',
  lastname: 'Rossi',
  age: 25
};

const { id, firstname: name, lastname: surname, age: old } = person;
console.log(id, name, surname, old);
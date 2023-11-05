const person1 = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
  address: {
    state: 'Italy',
    city: 'Rome',
    street: 'Via Romano, 12'
  }
};

//const person2= { ...person1 };
// person2.address.city = 'Milan';
const person2 = JSON.stringify(person1 , (key, val) => {
  if (key === "city") return "Milan";
  return val;});


console.log(person1);
console.log(JSON.parse(person2));
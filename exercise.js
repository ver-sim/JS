const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};

const json = JSON.stringify(person, (key, val) => {
  if (typeof(val) === "string")  return key = undefined;
  return val;
});


console.log(json); // Should return: { id: 1, age: 25 }
class Person {
  firstName = " ";
  lastName = " ";
  age = 0;
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  set age(newVal){
    if (newVal < 1){
      this._age = 1;
    }
    else if (newVal > 110) {
      this._age = 110;
    }
    else {
      this._age = newVal;
    }
  }

  get age(){
    return this._age;
  }

  set firstName(newName){
    if(typeof(newName) !== "string"){
      this._firstName = String(firstName);
    }
    else{
      this._firstName = firstName;
    }
  }

  get firstName(){
    return this._firstName;
  }

  set lastName(lastName){
    if(typeof(lastName) !== "string"){
      this._lastName = String(lastName);
    }
    else{
      this._lastName = lastName;
    }
  }

  get lastName(){
    return this._lastName;
  }

  get fullName() {
    return this.firstName + " " + this.lastName;
  }
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);
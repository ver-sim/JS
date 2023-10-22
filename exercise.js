// ceo => 2200
// manager => 1800
// cto => 1800
// developer => 1500
// default => 1000
function calculateSalary(role) {
  let sal;
    switch (role) {
      case "ceo":
        sal="2200€";
        break;
      case "manager":
      case "cto":
        sal="1800€";
        break;
      case "developer":
        sal="1500€";
        break;
      default:
        sal= '1000€';
    }
    return sal;
}

const ceoSalary = calculateSalary('ceo');
const managerSalary = calculateSalary('manager');
const ctoSalary = calculateSalary('cto');
const developerSalary = calculateSalary('developer');
const otherSalary = calculateSalary('other');

console.log(ceoSalary);
console.log(managerSalary);
console.log(ctoSalary);
console.log(developerSalary);
console.log(otherSalary);
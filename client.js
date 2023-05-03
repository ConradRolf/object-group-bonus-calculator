// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }

];

// console.log('array of employee data: ',  employees );


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.




// This function will calculate 1 employee's bonus!
//
function calculateIndividualEmployeeBonus() { 
  const employeeBonus = {
    name: employees[i].name,
    bonusPercentage: '0%',
    totalCompensation: 0,
    totalBonus: 0
  }; 
  // your logic here
    
      if(employees[i].reviewRating <= 2){
        employeeBonus.totalCompensation = Number(employees[i].annualSalary);
      } else if(Number(employees[i].annualSalary) > 65000){
          employeeBonus.totalBonus = .01 * employees[i].annualSalary;
            employeeBonus.bonusPercentage = '1%';
            employeeBonus.totalCompensation=Number(employees[i].annualSalary)+employeeBonus.totalBonus;
        } else if (employees[i].reviewRating === 3){
            employeeBonus.totalBonus = .04 * employees[i].annualSalary;
            employeeBonus.bonusPercentage = '4%';
            employeeBonus.totalCompensation=Number(employees[i].annualSalary)+employeeBonus.totalBonus;
            if(employees[i].employeeNumber.length === 4){
              employeeBonus.totalBonus+=employees[i].annualSalary*.05;
              employeeBonus.bonusPercentage = '9%';
              employeeBonus.totalCompensation=Number(employees[i].annualSalary)+employeeBonus.totalBonus;
            }
        } else if (employees[i].reviewRating === 4){
          employeeBonus.totalBonus = .06 * employees[i].annualSalary;
          employeeBonus.bonusPercentage = '6%';
          employeeBonus.totalCompensation=Number(employees[i].annualSalary)+employeeBonus.totalBonus;
          if(employees[i].employeeNumber.length === 4){
            employeeBonus.totalBonus+=employees[i].annualSalary*.05;
            employeeBonus.bonusPercentage = '11%';
            employeeBonus.totalCompensation=Number(employees[i].annualSalary)+employeeBonus.totalBonus;
          }
        } else if (employees[i].reviewRating === 5){
          employeeBonus.totalBonus = .10 * employees[i].annualSalary;
          employeeBonus.bonusPercentage = '10%';
          employeeBonus.totalCompensation=Number(employees[i].annualSalary)+employeeBonus.totalBonus;
          if(employees[i].employeeNumber.length === 4){
            employeeBonus.totalBonus+=employees[i].annualSalary*.03;
            employeeBonus.bonusPercentage = '13%';
            employeeBonus.totalCompensation=Number(employees[i].annualSalary)+employeeBonus.totalBonus;
          }
        }
    

  
  // return new object with bonus results
  // console.log(employeeBonus);

}


// for (i=0; i<employees.length; i++){

// calculateIndividualEmployeeBonus(employees[i]);
// }

function calculateBonus() {
  const employeeBonus = {
    name: employees[i].name,
    bonusPercentage: 0,
    totalCompensation: 0,
    totalBonus: 0
  }
  if (employees[i].reviewRating <= 2) {
    employeeBonus.bonusPercentage = 0.0
  }
    else if (employees[i].reviewRating === 3) {
    employeeBonus.bonusPercentage = 0.04
  }
    else if (employees[i].reviewRating === 4) {
    employeeBonus.bonusPercentage = 0.06
  }
    else if (employees[i].reviewRating === 5) {
    employeeBonus.bonusPercentage = 0.10
  }
  if (employees[i].employeeNumber.length < 5 && employees[i].reviewRating > 2) {
    employeeBonus.bonusPercentage += 0.05
  }
  if (Number(employees[i].annualSalary) > 65000 && employees[i].reviewRating > 2) {
    employeeBonus.bonusPercentage -= 0.01
  }
  if (employeeBonus.bonusPercentage > 0.13) {
    employeeBonus.bonusPercentage = 0.13
  } 

  employeeBonus.totalBonus = Math.round(Number(employees[i].annualSalary) * employeeBonus.bonusPercentage)
  employeeBonus.totalCompensation = Math.round(employeeBonus.totalBonus + Number(employees[i].annualSalary))

  console.log(employeeBonus.name, 'has a bonus percentage of', employeeBonus.bonusPercentage.toString() + '%', 'which gives them a total bonus of',
  '$' + employeeBonus.totalBonus.toString(), 'and a total compensation of', '$' + employeeBonus.totalCompensation.toString(), 'for the year.')
 
  document.write(employeeBonus.name, ' has a bonus percentage of ', employeeBonus.bonusPercentage.toString() + '%', ' which gives them a total bonus of ',
   '$' + employeeBonus.totalBonus.toString(), ' and a total compensation of ', '$' + employeeBonus.totalCompensation.toString(), ' for the year. ')
}

function runCode(){
for (i=0; i<employees.length; i++) {
  calculateBonus(employees[i]);
}
}

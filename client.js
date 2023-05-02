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

console.log('array of employee data: ',  employees );


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.




// This function will calculate 1 employee's bonus!
//
function calculateIndividualEmployeeBonus( employee ) { 
  let bonus= 0;
  const employeeBonus = {
    name: employee,
    bonusPercentage: 0,
    totalCompensation: 0,
    totalBonus: 0
  }; 
  // your logic here
  for (let i = 0; i<employees.length; i++){//loop thru employees array
    
    if (employees[i].name===employee){//matching the name given to the name in the array.
      if(Number(employees[i].annualSalary) > 65000){
        employeeBonus.totalBonus = .01 * employees[i].annualSalary;
            employeeBonus.bonusPercentage = '1%';
            employeeBonus.totalCompensation=Number(employees[i].annualSalary)+employeeBonus.totalBonus;
        }if(employees[i].reviewRating <= 2){
          console.log (employees[i].name,'has a rating too low for bonus');
        } else if (employees[i].reviewRating === 3){
            employeeBonus.totalBonus = .04 * employees[i].annualSalary;
            employeeBonus.bonusPercentage = '4%';
            employeeBonus.totalCompensation=Number(employees[i].annualSalary)+employeeBonus.totalBonus;
            if(employees[i].employeeNumber.length === 4){
              employeeBonus.totalBonus+=employees[i].annualSalary*.05;
              employeeBonus.bonusPercentage = '9%';
              employeeBonus.totalCompensation=Number(employees[i].annualSalary)+employeeBonus.totalBonus;
            }
            console.log(employeeBonus);
        } else if (employees[i].reviewRating === 4){
            bonus = .06 * employees[i].annualSalary;
            console.log(employees[i].name,'received a', bonus, 'dollar bonus');
        } else if (employees[i].reviewRating === 5){
            bonus = .10 * employees[i].annualSalary;
            console.log(employees[i].name,'received a', bonus, 'dollar bonus');
        }
    }
  }
  
  // return new object with bonus results
  console.log(employeeBonus);
  return employeeBonus;

}

calculateIndividualEmployeeBonus('Atticus');
// calculateIndividualEmployeeBonus('Jem');
// calculateIndividualEmployeeBonus('Scout');
// calculateIndividualEmployeeBonus('Robert');
// calculateIndividualEmployeeBonus('Mayella');



// for (employee of employees){//loop thru array of employees
//   if(employee.reviewRating <= 2){
//     console.log (employee.name,'has a rating too low for bonus');
//   } else if (employee.reviewRating === 3){
//     bonus = .04 * employee.annualSalary;
//     console.log(employee.name,'received a', bonus, 'dollar bonus');
//   } else if (employee.reviewRating === 4){
//     bonus = .06 * employee.annualSalary;
//     console.log(employee.name,'received a', bonus, 'dollar bonus');
//   } else if (employee.reviewRating === 5){
//     bonus = .10 * employee.annualSalary;
//     console.log(employee.name,'received a', bonus, 'dollar bonus');
//   }
// }
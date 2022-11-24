// Write your solution in this file!
const employee = {
    name: "",
    streetAddress: "",
};

function beforeEach() {
    for (const key in employee) {
      delete employee[key];
    }
    employee.name = 'Sam';
};

//Q1
function updateEmployeeWithKeyAndValue(obj, key, value){
    beforeEach();
    const newEmployee = {...obj};
   newEmployee[key]= value;
   return newEmployee;
}


//Q2
function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    beforeEach();
    obj[key] = value
    return obj;
}


//Q3
function deleteFromEmployeeByKey(obj, key){
    beforeEach();
    const newObj = {...obj};
    delete newObj[key]
    return newObj;
}
//let newEmployee = deleteFromEmployeeByKey(employee, 'name')


//Q4
function destructivelyDeleteFromEmployeeByKey(obj, key){
    beforeEach();
    delete obj[key]
    return obj;
}
let newEmployee = destructivelyDeleteFromEmployeeByKey(employee, 'name');

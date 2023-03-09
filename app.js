'use strict';
let employees = [];
function EmployManagmantSystem(EmployeeID,FullName,Department,Level,ImagrURL){
    this.EmployeeID = EmployeeID;
    this.FullName = FullName;
    this.Department = Department;
    this.Level = Level;
    this.ImagrURL = ImagrURL;
    employees.push(this);
}

let GhaziSamer = new EmployManagmantSystem (1000,'GhaziSamer','Administration','Senior') ;
let LanaAli = new EmployManagmantSystem (1001,'LanaAli','Finance','Senior');
let TamaraAyoub = new EmployManagmantSystem (1002,'TamaraAyoub','Marketing','Senior');
let SafiWalid = new EmployManagmantSystem (1003,'SafiWalid','Administration','Mid-Senior');
let OmarZaid = new EmployManagmantSystem (1004,'OmarZaid','Development','Senior');
let RanaSaleh = new EmployManagmantSystem (1005,'RanaSaleh','Development','Junior');
let HadiAhmad = new EmployManagmantSystem (1006,'HadiAhmad','Finance','Mid-Senior');

EmployManagmantSystem.prototype.Salary = function () {
if(this.Level== "Senior"){
    let min=1500; let max=2000;
    return Math.floor(Math.random() * (max - min) ) + min;
}else if(this.Level == 'Mid-Senior'){
    let min=1000; let max=1500;
    return Math.floor(Math.random() * (max - min) ) + min;
}else if(this.Level == 'Junior'){
    let min=500; let max=1000;
    return Math.floor(Math.random() * (max - min) ) + min;
}
}
EmployManagmantSystem.prototype.NetSalary = function () {
return this.Salary()*0.925;
}

EmployManagmantSystem.prototype.render = function () {
document.write(`Name:${this.FullName} `);
document.write(`Salary = ${this.Salary()} `); 
document.write(`Net Salary = ${this.NetSalary()}`)
}

function employeesDetails (){
for(let i=0 ; i<employees.length ; i++){

    employees[i].render();

}
}

employeesDetails();

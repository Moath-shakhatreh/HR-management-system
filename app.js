'use strict';
let employees = [];
function EmployManagmantSystem(EmployeeID,FullName,Department,Level,ImagrURL){
    this.employeeID = EmployeeID;
    this.fullName = FullName;
    this.department = Department;
    this.level = Level;
    this.imagrURL = ImagrURL;
    this.salary= 0;
    employees.push(this);
    
    
    
}

let GhaziSamer = new EmployManagmantSystem (1000,'GhaziSamer','Administration','Senior') ;
let LanaAli = new EmployManagmantSystem (1001,'LanaAli','Finance','Senior');
let TamaraAyoub = new EmployManagmantSystem (1002,'TamaraAyoub','Marketing','Senior');
let SafiWalid = new EmployManagmantSystem (1003,'SafiWalid','Administration','Mid-Senior');
let OmarZaid = new EmployManagmantSystem (1004,'OmarZaid','Development','Senior');
let RanaSaleh = new EmployManagmantSystem (1005,'RanaSaleh','Development','Junior');
let HadiAhmad = new EmployManagmantSystem (1006,'HadiAhmad','Finance','Mid-Senior');

EmployManagmantSystem.prototype.salaryC = function () {
if(this.Level== 'Senior'){
    this.salary = cal(1500,2000);
}else if(this.Level == 'Mid-Senior'){
    this.salary = cal(1000,1500);
}else{
    this.salary= cal(500,1000)    
};
this.salary = netSal(this.salary);
}

function cal (min,max){
    return (Math.floor(Math.random() * (max - min) ) + min);
}

function netSal (sal){
    return sal*0.925;
}


EmployManagmantSystem.prototype.render = function () {
document.write(`<h3>Name:${this.fullName} & Salary = ${this.salary}</h3>`);
// document.write(`Salary = ${this.salary} `); 
// document.write(`Net Salary = ${this.NetSalary()}`)
}

function employeesDetails (){
for(let i=0 ; i<employees.length ; i++){

    employees[i].salaryC();
    employees[i].render();
}
}

employeesDetails();


'use strict';
let div1 = document.getElementById('div1');
let sectionE1 = document.getElementById("sec1");
let sectionE2 = document.getElementById('sec2');
let sectionE3 = document.getElementById('sec3');
let sectionE4 = document.getElementById('sec4');
let form = document.getElementById("form");


let employees = [];
function EmployManagmantSystem(EmployeeID,FullName,Department,Level,ImagrURL){
    this.EmployeeID = EmployeeID;
    this.FullName = FullName;
    this.Department = Department;
    this.Level = Level;
    this.ImagrURL = ImagrURL;
    employees.push(this);
}

let GhaziSamer = new EmployManagmantSystem (1000,'GhaziSamer','Administration','Senior',"https://github.com/LTUC/amman-prep-d10/blob/main/Class-08/lab/assets/Ghazi.jpg?raw=true") ;
let LanaAli = new EmployManagmantSystem (1001,'LanaAli','Finance','Senior',"https://github.com/LTUC/amman-prep-d10/blob/main/Class-08/lab/assets/Lana.jpg?raw=true");
let TamaraAyoub = new EmployManagmantSystem (1002,'TamaraAyoub','Marketing','Senior',"https://github.com/LTUC/amman-prep-d10/blob/main/Class-08/lab/assets/Tamara.jpg?raw=true");
let SafiWalid = new EmployManagmantSystem (1003,'SafiWalid','Administration','Mid-Senior',"https://github.com/LTUC/amman-prep-d10/blob/main/Class-08/lab/assets/Safi.jpg?raw=true");
let OmarZaid = new EmployManagmantSystem (1004,'OmarZaid','Development','Senior',"https://github.com/LTUC/amman-prep-d10/blob/main/Class-08/lab/assets/Omar.jpg?raw=true");
let RanaSaleh = new EmployManagmantSystem (1005,'RanaSaleh','Development','Junior',"https://github.com/LTUC/amman-prep-d10/blob/main/Class-08/lab/assets/Rana.jpg?raw=true");
let HadiAhmad = new EmployManagmantSystem (1006,'HadiAhmad','Finance','Mid-Senior',"https://github.com/LTUC/amman-prep-d10/blob/main/Class-08/lab/assets/Hadi.jpg?raw=true");

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

// let avgSalary = [];
// EmployManagmantSystem.prototype.AvgSal = function (){
//     for (let i = 0; i < employees.length ;i++) {
//         avgSalary[i]= this.NetSalary();
//     }
// }    


EmployManagmantSystem.prototype.NetSalary = function () {
      return this.Salary()*0.925;
}



// function netSalary (Salary) {
//     return this.Salary()*0.925;
//     }



EmployManagmantSystem.prototype.render = function () {

let divCard =document.createElement('div');
divCard.innerHTML = `<div class='card'>
<img src='${this.ImagrURL}' alt='img'>
<p>Name: ${this.FullName} - ID: ${this.EmployeeID} Department: ${this.Department} - Level:${this.Level}
${this.NetSalary()}</p> </div> `;
div1.appendChild(divCard);

}



function employeesDetails (){
for(let i=0 ; i<employees.length ; i++){

    employees[i].render();
}
}


var pad = (function(num) {
    return function() {
      var str = String(num++);
      while (str.length < 4) str = "0" + str;
      return str;
    }
  })(1); 



form.addEventListener("submit",submitHandler);
    function submitHandler(event) {

        event.preventDefault();
        let Name = event.target.Name.value;
        let idNUm = pad();
        let Department = event.target.Department.value;
        let Level = event.target.Level.value;
        let Image = event.target.Image.value;
        console.log(Name,Department,Level,Image)
        let employeeDet = new EmployManagmantSystem(idNUm,Name,Department,Level,Image);
        employeeDet.render(); 
        saveData(employees);
    }

    

function saveData(data){
    let stringArr = JSON.stringify(data);
    localStorage.setItem('employees',stringArr);
}

function getData (){
    let retreiveArr = localStorage.getItem('employees');
    let objArr = JSON.parse(retreiveArr);
    if (objArr != null){
        for (let i = 7; i < objArr.length; i++) {
            new EmployManagmantSystem(objArr[i].EmployeeID,objArr[i].FullName,objArr[i].Department,objArr[i].Level,objArr[i].ImagrURL);
        }
    }
    
}

getData();
saveData(employees);
employeesDetails();

// console.log(avgSalary)

// function saveData1(data){
//     let stringArr = JSON.stringify(data);
//     localStorage.setItem('avgSalary',stringArr);
// }
// saveData1(avgSalary);


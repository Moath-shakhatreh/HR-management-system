'use strict';

let sectionEl = document.getElementById("sec1");
let sectionE02 = document.getElementById('sec2');
// let sectionE01 = document.getElementById('sec01')
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

// let GhaziSamer = new EmployManagmantSystem (1000,'GhaziSamer','Administration','Senior',"https://github.com/LTUC/amman-prep-d10/blob/main/Class-08/lab/assets/Ghazi.jpg?raw=true") ;
// let LanaAli = new EmployManagmantSystem (1001,'LanaAli','Finance','Senior',"https://github.com/LTUC/amman-prep-d10/blob/main/Class-08/lab/assets/Lana.jpg?raw=true");
// let TamaraAyoub = new EmployManagmantSystem (1002,'TamaraAyoub','Marketing','Senior',"https://github.com/LTUC/amman-prep-d10/blob/main/Class-08/lab/assets/Tamara.jpg?raw=true");
// let SafiWalid = new EmployManagmantSystem (1003,'SafiWalid','Administration','Mid-Senior',"https://github.com/LTUC/amman-prep-d10/blob/main/Class-08/lab/assets/Safi.jpg?raw=true");
// let OmarZaid = new EmployManagmantSystem (1004,'OmarZaid','Development','Senior',"https://github.com/LTUC/amman-prep-d10/blob/main/Class-08/lab/assets/Omar.jpg?raw=true");
// let RanaSaleh = new EmployManagmantSystem (1005,'RanaSaleh','Development','Junior',"https://github.com/LTUC/amman-prep-d10/blob/main/Class-08/lab/assets/Rana.jpg?raw=true");
// let HadiAhmad = new EmployManagmantSystem (1006,'HadiAhmad','Finance','Mid-Senior',"https://github.com/LTUC/amman-prep-d10/blob/main/Class-08/lab/assets/Hadi.jpg?raw=true");

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

// function netSalary (Salary) {
//     return this.Salary()*0.925;
//     }

EmployManagmantSystem.prototype.render = function () {


// Image
let imgEl = document.createElement('img');
imgEl.src = this.ImagrURL;
imgEl.style.width = '200px' ;
imgEl.style.height = '200px'; 



// OthersDetails
let Name = document.createElement('p');
Name.textContent = `Name: ${this.FullName}`;
let idNUm = document.createElement('p');
idNUm.textContent = `ID: ${this.EmployeeID}`;
let Department = document.createElement('p');
Department.textContent = `Department: ${this.Department}`;
let Level = document.createElement('p');
Level.textContent = `Level: ${this.Level}`;
let Salary = document.createElement('p');
Salary.textContent = `${this.NetSalary()}`;

function call (){
sectionEl.appendChild(imgEl);
sectionEl.appendChild(Name); 
sectionEl.appendChild(idNUm);
sectionEl.appendChild(Department);
sectionEl.appendChild(Level);
sectionEl.appendChild(Salary);
}
call();

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
    }

    
    


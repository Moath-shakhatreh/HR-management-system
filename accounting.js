'use strict'
let row22 = document.getElementById('2-2');
let r22 = document.createElement('p');
let row32 = document.getElementById('3-2');
let r32 = document.createElement('p');
let row42 = document.getElementById('4-2');
let r42 = document.createElement('p');
let row52 = document.getElementById('5-2');
let r52 = document.createElement('p');
let row62 = document.getElementById('6-2');
let r62 = document.createElement('p');
let row23 = document.getElementById('2-3');
let r23 = document.createElement('p');
let row33 = document.getElementById('3-3');
let r33 = document.createElement('p');
let row43 = document.getElementById('4-3');
let r43 = document.createElement('p');
let row53 = document.getElementById('5-3');
let r53 = document.createElement('p');
let row63 = document.getElementById('6-3');
let r63 = document.createElement('p');
let row24 = document.getElementById('2-4');
let r24 = document.createElement('p');
let row34 = document.getElementById('3-4');
let r34 = document.createElement('p');
let row44 = document.getElementById('4-4');
let r44 = document.createElement('p');
let row54 = document.getElementById('5-4');
let r54 = document.createElement('p');
let row64 = document.getElementById('6-4');
let r64 = document.createElement('p');




function getData (){
let retreiveArr = localStorage.getItem('employees');
return JSON.parse(retreiveArr);
}
let employees = getData();




function numOfEmployee (){
    let DevN = 0, MarN = 0, FinN= 0, AdmN= 0;

for (let i = 0; i < employees.length; i++) {
    if (employees[i].Department == "Development") {
        DevN +=1;
    }else if (employees[i].Department == "Marketing") {
        MarN +=1;
    }else if (employees[i].Department == "Finance") {
        FinN +=1;
    }else if (employees[i].Department == "Administration") {
        AdmN +=1;
    }
}
    r22.innerHTML = `${AdmN}`;
    row22.appendChild(r22);
    r32.innerHTML = `${MarN}`;
    row32.appendChild(r32);
    r42.innerHTML = `${DevN}`;
    row42.appendChild(r42);
    r52.innerHTML = `${FinN}`;
    row52.appendChild(r52);
    r62.innerHTML = `${DevN+MarN+FinN+AdmN}`;
    row62.appendChild(r62);
}



function AvarageSalary(){
    let DevS = 0, MarS = 0, FinS= 0, AdmS= 0;
    let DevN = 0, MarN = 0, FinN= 0, AdmN= 0;
    for (let i = 0; i < employees.length; i++) {
        if (employees[i].Department == "Development") {
            DevS += employees[i].salary;
            DevN +=1;;
        }else if (employees[i].Department == "Marketing") {
            MarS += employees[i].salary;
            MarN +=1;
        }else if (employees[i].Department == "Finance") {
            FinS += employees[i].salary;
            FinN +=1;
        }else if (employees[i].Department == "Administration") {
            AdmS += employees[i].salary;
            AdmN +=1;
        }
    }
    r23.innerHTML = `${AdmS/3}`;
    row23.appendChild(r23);
    r33.innerHTML = `${MarS/3}`;
    row33.appendChild(r33);
    r43.innerHTML = `${DevS/3}`;
    row43.appendChild(r43);
    r53.innerHTML = `${FinS/3}`;
    row53.appendChild(r53);
    r63.innerHTML = `${DevS/3+MarS/3+FinS/3+AdmS/3}`;
    row63.appendChild(r63);

    r24.innerHTML = `${AdmS}`;
    row24.appendChild(r24);
    r34.innerHTML = `${MarS}`;
    row34.appendChild(r34);
    r44.innerHTML = `${DevS}`;
    row44.appendChild(r44);
    r54.innerHTML = `${FinS}`;
    row54.appendChild(r54);
    r64.innerHTML = `${DevS+MarS+FinS+AdmS}`;
    row64.appendChild(r64);
}





numOfEmployee();
AvarageSalary();

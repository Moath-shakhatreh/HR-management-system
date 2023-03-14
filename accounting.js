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




function getData (){
let retreiveArr = localStorage.getItem('employees');
return JSON.parse(retreiveArr);
}
let employees1 = getData();


// function getData1 (){
//     let retreiveArr = localStorage.getItem('avgSalary');
//     return JSON.parse(retreiveArr);
//     }
//     let avgSalary = getData1();
//  console.log(avgSalary);




function numOfEmployee (){
    let DevN = 0, MarN = 0, FinN= 0, AdmN= 0;

for (let i = 0; i < employees1.length; i++) {
    if (employees1[i].Department == "Development") {
        DevN +=1;
    }else if (employees1[i].Department == "Marketing") {
        MarN +=1;
    }else if (employees1[i].Department == "Finance") {
        FinN +=1;
    }else if (employees1[i].Department == "Administration") {
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
    let DevA = 0, MarA = 0, FinA= 0, AdmA= 0;
    let DevN = 0, MarN = 0, FinN= 0, AdmN= 0;
    for (let i = 0; i < employees1.length; i++) {
        if (employees1[i].Department == "Development") {
            DevA +=avgSalary[i];
            DevN +=1;
        }else if (employees1[i].Department == "Marketing") {
            MarA +=avgSalary[i];
            MarN +=1
        }else if (employees1[i].Department == "Finance") {
            FinA +=avgSalary[i];
            FinN +=1
        }else if (employees1[i].Department == "Administration") {
            AdmA +=avgSalary[i];
            AdmN +=1;
        }
    }
    DevA=DevA/DevN;
    MarA=MarA/MarN;
    FinA=FinA/FinN;
    AdmA=AdmA/AdmN;
    console.log(DevA=DevA/DevN,MarA=MarA/MarN,FinA=FinA/FinN,AdmA=AdmA/AdmN)
}





numOfEmployee();

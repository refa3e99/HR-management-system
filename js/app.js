'use strict';

let allEmployee = []
// constructor
function employee(employee_ID , employee_name , department , level ){
    this.employee_ID = employee_ID;
    this.employee_name = employee_name;
    this.department = department;
    this.level = level;

    allEmployee.push(this);
}


let emp1 = new employee(1000 , "Ghazi Samer" , "Administration" , "Senior");
let emp2 = new employee(1001 , "Lana Ali" , "Finance" , "Senior");
let emp3 = new employee(1002 , "Tamara Ayoub" , "Marketing" , "Senior");
let emp4 = new employee(1003 , "Safi Walid" , "Administration" , "Mid-Senior");
let emp5 = new employee(1004 , "Omar Zaid" , "Development" , "Senior");
let emp6 = new employee(1005 , "Rana Saleh" , "Development" , "Junior");
let emp7 = new employee(1006 , "Hadi Ahmad" , "Finance" , "Mid-Senior");

employee.prototype.salary = function(){
    
    if(this.level == "Senior"){
        this.salary = (Math.floor(Math.random() * (2000 - 1500) ) + 1500)-(Math.floor(Math.random() * (2000 - 1500) ) + 1500)*7.5/100 ;
    }
    else if(this.level == "Mid-Senior"){
        this.salary = (Math.floor(Math.random() * (1500 - 1000) ) + 1000)-(Math.floor(Math.random() * (1500 - 1000) ) + 1000)*7.5/100 ;
    }
    else if(this.level == "Junior"){
        this.salary = (Math.floor(Math.random() * (1000 - 500) ) + 500)-(Math.floor(Math.random() * (1000 - 500) ) + 500)*7.5/100 ;
    }
    return this.salary
}



employee.prototype.render = function(){

/*let table = document.getElementById("table");

for (let i = 0; i<allEmployee.length;i++){
    let row = `<tr>
                    <td>${allEmployee[i].employee_name}</td>
               </tr>
    `
    table.innerHTML += row

}*/

  document.write(`<p>${this.employee_name} </p>` + `<p>${this.salary()} </p>`)
}


for(let i=0; i<=allEmployee.length-1;i++){
    allEmployee[i].render();
}


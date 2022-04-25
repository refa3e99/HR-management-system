'use strict';

// connect html to js
let main = document.getElementById("main");
let form = document.getElementById("form");
let submitButton = document.getElementById("submit");





let allEmployee = [];
let num=1000;

// constructor
function employee(employee_name , department , level ,profilePic){
    this.employee_ID = num++;
    this.employee_name = employee_name;
    this.department = department;
    this.level = level;
    this.profilePic = profilePic;
    allEmployee.push(this);
}

//employee data **hard coded**
/*
let emp1 = new employee( "Ghazi Samer" , "Administration" , "Senior","./style/assest/profilepic.jpg");
let emp2 = new employee( "Lana Ali" , "Finance" , "Senior" , "./style/assest/profilepic.jpg");
let emp3 = new employee( "Tamara Ayoub" , "Marketing" , "Senior" , "./style/assest/profilepic.jpg");
let emp4 = new employee( "Safi Walid" , "Administration" , "Mid-Senior" , "./style/assest/profilepic.jpg");
let emp5 = new employee( "Omar Zaid" , "Development" , "Senior" , "./style/assest/profilepic.jpg");
let emp6 = new employee( "Rana Saleh" , "Development" , "Junior" , "./style/assest/profilepic.jpg");
let emp7 = new employee( "Hadi Ahmad" , "Finance" , "Mid-Senior" , "./style/assest/profilepic.jpg");
*/


//employee salary
employee.prototype.salary = function(){
    
    if(this.level == "Senior"){
        this.salary = Math.floor((Math.floor(Math.random() * (2000 - 1500) ) + 1500)-(Math.floor(Math.random() * (2000 - 1500) ) + 1500)*7.5/100 );
    }
    else if(this.level == "Mid-Senior"){
        this.salary = Math.floor((Math.floor(Math.random() * (1500 - 1000) ) + 1000)-(Math.floor(Math.random() * (1500 - 1000) ) + 1000)*7.5/100 );
    }
    else if(this.level == "Junior"){
        this.salary = Math.floor((Math.floor(Math.random() * (1000 - 500) ) + 500)-(Math.floor(Math.random() * (1000 - 500) ) + 500)*7.5/100 );
    }
    return this.salary;
}


// employee render
employee.prototype.render = function(){

    let empCard = document.createElement("div");
    empCard.setAttribute("class","empCard")
    main.appendChild(empCard);

    let profilePic = document.createElement("img");
    profilePic.setAttribute("src",this.profilePic);
    empCard.appendChild(profilePic);

    let name = document.createElement("span");
    name.textContent = "Name: " + this.employee_name +" - ID: "+ this.employee_ID;
    empCard.appendChild(name);

    let department = document.createElement("span");
    department.textContent = "Department : "+this.department + " - Level : "+this.level+" "+this.salary()+"JD";
    empCard.appendChild(department);
    
}





form.addEventListener('submit' , handleSubmit);

function handleSubmit(event){
  //  event.preventDefault();
    let name = event.target.fullName.value;
    let department = event.target.department.value;
    let level = event.target.level.value;
    let image = event.target.image.value;
    let newEmployee = new employee( name , department , level , image);

    newEmployee.render();

    saveData(allEmployee);

}



//save to local localStorage
function saveData(data){
    let strObj = JSON.stringify(data);
    localStorage.setItem("employees" , strObj);
}




//get data from localStorage
function getData(){
    let receivedData = localStorage.getItem("employees");

    //convert strings to original dataType
    let arrData = JSON.parse(receivedData);
    if (arrData != null) {
        for (let i = 0; i < arrData.length; i++) {
               var element = new employee(
                arrData[i].employee_name ,
                arrData[i].department ,
                arrData[i].level ,
                arrData[i].profilePic );
                element.render();
        }
        
    }
}

getData();


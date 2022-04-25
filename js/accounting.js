'use strict'

//connect html elements
let infoTable = document.getElementById("info");

//get data from localStorage
function getData(){
    let receivedData = localStorage.getItem("employees");

    //convert strings to original dataType
    let arrData = JSON.parse(receivedData);
    console.log(arrData)
    calcEmp(arrData);


}

//calculate employees number 
function calcEmp(data) { 
    
    let admNum = 0; let admS = 0; let admTS = 0;
    let marNum = 0; let marS = 0; let marTS = 0;
    let devNum = 0; let devS = 0; let devTS = 0;
    let finNum = 0; let finS = 0; let finTS = 0;

    for (let i = 0; i < data.length; i++) {

        if (data[i].department=="Administration") {
            admNum++;
            let td = document.getElementById("adm_num");
            td.textContent = admNum;
            admS += Math.floor(data[i].salary / admNum);
            let As = document.getElementById("adm_s");
            As.textContent = Math.floor(admS);
            admTS += Math.floor(data[i].salary)
            let Ts = document.getElementById("adm_Ts");
            Ts.textContent = admTS;
        }
        if (data[i].department=="Marketing") {
            marNum++;
            let td = document.getElementById("mar_num");
            td.textContent = marNum;
            marS += Math.floor(data[i].salary / marNum);
            let As = document.getElementById("mar_s");
            As.textContent = Math.floor(marS);
            marTS += Math.floor(data[i].salary)
            let Ts = document.getElementById("mar_Ts");
            Ts.textContent = marTS;
        }
        if (data[i].department=="Development") {
            devNum++;
            let td = document.getElementById("dev_num");
            td.textContent = devNum;
            devS += Math.floor(data[i].salary / devNum);
            let As = document.getElementById("dev_s");
            As.textContent = Math.floor(devS);
            devTS += Math.floor(data[i].salary)
            let Ts = document.getElementById("dev_Ts");
            Ts.textContent = devTS;
            
        }
        if (data[i].department=="Finance") {
            finNum++;
            let td = document.getElementById("fin_num");
            td.textContent = finNum;
            finS += Math.floor(data[i].salary / finNum);
            let As = document.getElementById("fin_s");
            As.textContent = Math.floor(finS);
            finTS += Math.floor(data[i].salary);
            let Ts = document.getElementById("fin_Ts");
            Ts.textContent = finTS;
        }

        let totalEmp = document.getElementById("total_emp");
        totalEmp.textContent = data.length;

        let avgS = document.getElementById("avgS");
        avgS.textContent = admS + marS + devS + finS ;

        let totalS = document.getElementById("totS");
        totalS.textContent = admTS + marTS + devTS + finTS;

    }

}

getData();

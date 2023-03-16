
// 
import  country_list from "./country.js";

//DOM VALUES
const dropList = document.querySelectorAll("form select");
let toCurrency = document.querySelector(".to select");
let fromCurrency = document.querySelector(".from select");
const  Icon = document.querySelector(".fa-arrow-right-arrow-left");
const  exchangeBtn = document.querySelector(".btn");
const displayRate= document.querySelector(".rate");
const apikey= "e3d58e2ec19985c4a4626319";
// require('dotenv').config();

// console.log(process.env)

//DROPDOWN LIST FOR THE FROM AND TO 
console.log(dropList)
97676
for(let i=0;i<dropList.length;i++){

    for(let Currency_code in country_list){
        let selected = i == 0 ? Currency_code == "USD" ? "selected" : "" : Currency_code == "NPR" ? "selected" : "";
        let optionTag = `<option value="${Currency_code}" ${selected}>${Currency_code}</option>`;
        console.log(dropList[i])
        dropList[i].insertAdjacentHTML("beforeend", optionTag);
}
}

//EVENT LISTENER FOR THE EXCHANGE ICON
const exchangeIcon=()=>{
    let mainCurrency=fromCurrency.value;
    fromCurrency.value=toCurrency.value;
    toCurrency.value= mainCurrency;
  
 
}
Icon.addEventListener('click',exchangeIcon)
// NUMBER INPUT FOR EXCHANGE

//EVENT LISTENER FOR THE EXCHANGE ICON

exchangeBtn.addEventListener("click",getboy)
 


async function getboy() {
let input= document.querySelector("form input");
inputNumber=input.value

console.log(inputNumber)

// Condition for if the input is 0 or  empty
if (inputNumber==" "||inputNumber==0){
    input.value="1";
    inputNumber=1;
}

displayRate.innerText = "Getting exchange rate...";


    let url = `https://v6.exchangerate-api.com/v6/${apikey}/latest/${fromCurrency.value}`;

    try {
        const one= await fetch(url)
        const result= await one.json()
        console.log(result)  
        let mainRate= result.conversion_rates[toCurrency.value]
        console.log(mainRate)
        let totalRate= (inputNumber*mainRate).toFixed(2);
        console.log(totalRate)
        console.log(inputNumber)
   
        displayRate.innerText=`${inputNumber}${fromCurrency.value}=${totalRate}${toCurrency.value}`
    } catch (error) {
        
    }
 }
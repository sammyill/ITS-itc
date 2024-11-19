'use strict';

let startingValue=0;
let userNumber=0;
const resoult=document.querySelector(".resoult");
const myAdd=document.querySelector(".add");
const mySub=document.querySelector(".sub");
const myMul=document.querySelector(".mul");
const myDiv=document.querySelector(".div");
const myPot=document.querySelector(".pot");
const myUg=document.querySelector(".ug");
const myRes=document.querySelector(".res");
resoult.textContent=0;

const myoperation=function(operazione){
    userNumber=Number(document.querySelector(".usernumber").value);
    switch(operazione){
            case "add":
                startingValue=startingValue+userNumber;
                break;
            case "sub":
                startingValue=startingValue-userNumber;
                 break;
            case "mul":
                startingValue=startingValue*userNumber;
                break;
            case "div":
                startingValue=startingValue/userNumber;
                break;
            case "pot":
                startingValue=startingValue**userNumber;
                break;
            default:
                alert("we are broken");
            

    }
    resoult.textContent=`Risultato: ${startingValue}`
}

myAdd.addEventListener("click",function(){
    myoperation("add");
})

mySub.addEventListener("click",function(){
   myoperation("sub");
})

myMul.addEventListener("click",function(){
   myoperation("mul");
})

myDiv.addEventListener("click",function(){
myoperation("div");
})

myPot.addEventListener("click",function(){
 myoperation("pot");
})



myRes.addEventListener("click",function(){
    startingValue=0;
    userNumber=0;
    resoult.textContent=startingValue
})

/*try*/ 



// vecchio metodo
/*
const val1=Number(prompt("inserisci A"));
const val2=Number(prompt("inserisci B"));
const operazione=prompt(`scegli un operatione,inserisci il simbolo 
    o le 3 cifre del nome dell' operazione
    + (add), -(sub),x(mul),/(div),^(pot)`);
let risultato=0;
switch(operazione){
    case "+":
    case "add":
    risultato=val1+val2;
    alert(risultato);
    break;
    case "-":
    case "sub":
    risultato=val1-val2;
    alert(risultato);
    break;
    case "x":
    case "mul":
    risultato=val1*val2;
    alert(risultato);
    break;
    case "/":
    case "div":
    risultato=val1/val2;
    alert(risultato);
    break;
    case "^":
    case "pot":
    risultato=val1**val2;
    alert(risultato);
    break;
    default:
        alert("dati inseriti non validi");
}
*/


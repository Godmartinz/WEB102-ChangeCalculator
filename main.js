// Write your JavaScript here
var dollars,
    quarters,
    dimes,
    nickels,
    pennies;
    
    function CalculateChange(amountDue, amountReceived){

    change= amountReceived-amountDue;
    if (change==0){
        console.log("exact change, thanks!")
    
    }
    if(change<=-1){
        console.log("Hey, you owe "+change+" more than this");
    }
    else console.log("Your change is: " + parseFloat(change).toFixed(2));

    dollars=Math.floor(change/1.00);
    change=change%1.00;
    console.log("Dollars: " + dollars);
    quarters=Math.floor(change/.25);
    change=change%.25;
    console.log("quarters: " + quarters);
    dimes=Math.floor(change/.10);
    change=change%.10;
    console.log("dimes: " + dimes);
    nickels=Math.floor(change/.05)
    change=change%.05;
    console.log("nickels: " + nickels);
    pennies=(change*100).toFixed(0);
    console.log("Pennies: " + pennies)


}

function handleClickEvent(e){
    amountDue=document.getElementById('amount-due').value;
    amountReceived=document.getElementById('amount-received').value;
    parseFloat(Math.round((amountDue)*100)/100).toFixed(2);
    parseFloat(Math.round((amountReceived)*100)/100).toFixed(2);
    result= CalculateChange(amountDue, amountReceived);
   /* document.getElementById('pennies-output').innerHTML= "pennies: " + pennies;
    document.getElementById('nickels-output').innerHTML= "nickels: " + nickels;
    document.getElementById('dimes-output').innerHTML= "dimes: " + dimes;
    document.getElementById('quarters-output').innerHTML= "quarters: " + quarters;
    document.getElementById('dollars-output').innerHTML= "Dollars: " + dollars;
    */
   document.getElementById('pennies-output').innerHTML= pennies;
   document.getElementById('nickels-output').innerHTML= nickels;
   document.getElementById('dimes-output').innerHTML= dimes;
   document.getElementById('quarters-output').innerHTML= quarters;
   document.getElementById('dollars-output').innerHTML= dollars;
}
    
;
var myOperator = "-";
var myNumber1 = prompt("geef aub een getal op?");
var myNuber2 = prompt("geef aub een getal op?");
var resultaat ;

if(myOperator == "+"){
    
    
    resultaat = myNumber1 + myNuber2;
    document.getElementById(resultaat).innerHTML = resultaat;

    
    
    
    // hier komt code 
    // console.log("De operator is  " + myOperator);



} else if(myOperator == "-") {
    
    resultaat = myNumber1 - myNuber2;
    document.getElementById("resultaat").innerHTML = resultaat;
    
    // Hier komt een code
    // console.log("De operator is  " - myOperator);

}

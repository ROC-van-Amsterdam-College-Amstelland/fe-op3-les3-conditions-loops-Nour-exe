//javascript code

for( var teller = 1; teller <=100; teller ++) {
    
    if ( teller % 3 == 0 && teller % 5 == 0){ 
    document.getElementById("resultaat").innerHTML += "<div><strong>VET COOL<strong><div/>";
    }

    if(teller % 3 == 0){
        document.getElementById("resultaat").innerHTML += "<div><strong><div/>VET";
    }

    else if(teller % 5 == 0){
        document.getElementById("resultaat").innerHTML += "<div><strong><div/>COOL";
    }
    
    
    else {
        document.getElementById("resultaat").innerHTML += teller + "<br>";

    }
}


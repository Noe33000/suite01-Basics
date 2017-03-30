// PART 1

function plus(number1, number2){
    return number1 + number2;
}
function moins(number1, number2){
    return number1 - number2;
}
function fois(number1, number2){
    return number1 * number2;
}
function divi(number1, number2){
    return number1 / number2;
}
function rest(number1, number2){
    return number1 % number2;
}

function evalExpr(number1, number2, operator){
    switch (true){        
        case (operator === '+'):
            return plus(number1, number2);
            break;
        case (operator === '-'):
            return moins(number1, number2);
            break;
        case (operator === '*'):
            return fois(number1, number2);
            break;
        case (number2 == 0 && operator === '/'):
            return 'Impossible de diviser par 0';
            break;
        case (operator === '/'):
            return divi(number1, number2);
            break;
        case (operator === '%'):
            return rest(number1, number2);
            break;
        default:
            return "Erreur: entrez 2 chiffres et un operateur";
            break;
    }
}
/*
    Vérification STEP 1

 console.log(evalExpr(4, 5, "*")); // 20
 console.log(evalExpr(3, 3, "+")); // 6
 console.log(evalExpr(2, 2, "%")); // 0
 console.log(evalExpr(3, 3, "-")); // 0
 console.log(evalExpr(10, 2, "/")); // 5

 console.log(evalExpr(10, 0, "/")); // 0
*/

 function getRandNum(){
     return Math.floor(Math.random() * 10000);
 }
 function getSign(){
     return Math.floor(getRandNum() / 2000);
 }
 /*
    Vérification STEP 2

 console.log(getRandNum());
 console.log(getSign());
 */
document.getElementById("submit").addEventListener("click", function(event){
    event.preventDefault();    
});

function showCalculs(zone, calcul){
    return zone.innerHTML += "<li>" + calcul + "</li>";
}

function selectSign(nbre){
    var sign = "";    
    switch (true){        
        case (nbre === 0):
            result = plus(number1, number2); 
            sign = "+";
            break;
        case (nbre === 1):
            result = moins(number1, number2); 
            sign = "-";
            break;
        case (nbre === 2):
            result = fois(number1, number2); 
            sign = "*";
            break;
        case (nbre === 3):
            result = divi(number1, number2); 
            sign = "/";
            break;
        case (nbre === 4):
            result = rest(number1, number2); 
            sign = "%";
            break;
    }
    return sign;
}

function generateCalculs(){
    numberOfcalculs = document.getElementById('nbreCalculs').value;
    var zoneCalculs = document.getElementById('calculsArea');
    if(!(parseInt(numberOfcalculs))){
        alert("Veuillez entrer un chiffre entier !");
    }else{
        for(i = 0; i < numberOfcalculs; i++){
            var nbre = getSign();
            var number1 = getRandNum(); 
            var number2 = getRandNum();
            var result = 0;
            var sign = getSign(nbre);
            var final = number1 + " " + sign + " " + number2 + " = " + result;
            
            zoneCalculs.innerHTML += "<li>" + final + "</li>";
        }
            document.getElementById("formCalcul").reset();
    }
};
/*

    Eval Expr

    // // // step 1

    // Write a function "evalExpr" that can solve simples arithmetic calculs;

    // We will pass only positive integer numbers.

    // Exemples:

    // evalExpr(4, 5, "*"); // 20
    // evalExpr(3, 3, "+"); // 6
    // evalExpr(2, 2, "%"); // 0
    // evalExpr(3, 3, "-"); // 0
    // evalExpr(10, 2, "/"); // 5

    // evalExpr(10, 0, "/"); // 0

    // Validation:
    // I want to see at least 5 functions.

    // Forbidden functions:
    // eval

    // // // step 2

    // Code a function "getRandNum" that return a random number between 0(included) and 10 000(included).

    // Validation:
    // really random please.

    // Code a function "getSign" that return a random number between 0(included) and 4(included).

    // Validation:
    // Reuse getRandNum

    // // // step 3

    // Write a function "generateCalculs" that can generate random calculs and display the result in the console;
    // We will pass a number, which is the desired number calculs.

    Tips:
    Reuse getSign ;)
    
    // // // step 4 - BONUS

    // On a new branch "bonus"

    // Migrate your script to a HTML page in a new file named "bonus.js".
    // You will reuse generateCalculs

    // Try to do a HTML/CSS interface that can:
        - control the number calcul (input);
        - display all strings like "6 + 3 = 9" in the DOM
            - you need to write this string in the DOM
            - Delay the application with "setTimeout", with 150ms between each calculs

    // // // step 5 - SUPER BONUS

    // Stay on your branch "bonus"

    // Add animations when calculs are displayed
    // Add more things as you can done !!
    // Be creative !

    // When it's done, merge it to the "master" and send me a pull request !

    // // // step 6 - ++SUPER BONUS++

    // Done it responsive :)

    Please use Objects it is very nice :)

*/

// write your code below this comment
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
            return 0;
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
     return Math.floor(Math.random() * (900 - 100 + 1) + 100) ;
 }
 function getRandSign(){
     return Math.floor(Math.random() * 5);
 }

 /*
    Vérification STEP 2

 console.log(getRandNum());
 console.log(getSign());
 */

function generateCalculs(numberOfcalculs){
    for(i = 0; i < numberOfcalculs; i++){
        var nbre = getRandSign();
        var number1 = getRandNum(); 
        var number2 = getRandNum();
        var sign = "";
        var result = 0;
        
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
            var final = number1 + " " + sign + " " + number2 + " = " + result;
            console.log(final);
    }
};

generateCalculs(5);

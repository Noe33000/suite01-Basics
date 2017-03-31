/*

    getPerson

    Ecrire une fonction "getPerson", prenant en paramètre:

    "firstName": pour le prénom ("toto"),
    "lastName": pour le nom de famille ("tata"),
    "age": pour l'age (45)

    Nous attendons un objet comme valeur de retour.

    Cet objet contiendra:

        - un attribut "fullName" pour le prénom et le nom ensemble "toto tata"
        - un attribut "age" pour l'age de la personne
        - une fonction "isAdult" pour tester si la personne est majeur;

*/
function isAdult(age){
    if (age > 18){
        return true;
    }
    else{
        return false;
    }
}

function getPerson(firstName, lastName, age){
    var informations = {
        fullName: firstName + ' ' + lastName,
        age: age,
        isAdult: isAdult(age)
    }
    return informations;
};
console.log(getPerson("toto","tata", 44));
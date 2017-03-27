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

function getPerson(firstName, lastName, age){
    var informations = {
        fullName: firstName + ' ' + lastName,
        age: age,
        isAdult: function(age){
            if (age => 0 && age < 18){
                return 'mineur';
            }
            else if (age => 18 && age < 124){
                return 'majeur';
            }
            else{
                return 'Impossible... ou encore jamais vu';
            }
        }
    }
    return informations;
};
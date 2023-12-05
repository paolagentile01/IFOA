/* ESERCIZIO 1*/
class User {
    constructor(firstName, lastName, age, location){
       this.firstName = firstName;
       this.lastName = lastName;
       this.age = age;
       this.location = location;
    }

    getConfrontoAge(x, y){
    if(x.age > y.age){
    console.log(x.firstName + ' è più vecchio di '+ y.firstName);
    } else if(x.age < y.age){
        console.log(y.firstName + ' è più vecchio di '+ x.firstName);
    } else if (x.age === y.age){
        console.log(x.firstName +' e '+ y.firstName + '  hanno la stessa età');
    }
}
}

const user1 = new User("Mario", "Rossi", 25, "Milano");
const user2 = new User("Giacomo", "Verdi", 20, "Roma");
user1.getConfrontoAge(user1, user2);
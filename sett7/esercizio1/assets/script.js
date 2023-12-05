/* ESERCIZIO 1*/
class User {
    constructor(firstName, lastName, age, location){
       this.firstName = firstName;
       this.lastName = lastName;
       this.age = age;
       this.location = location;
    }

    getConfrontoAge(user2){
    if(this.age > user2.age){
    console.log(this.firstName + ' è più vecchio di '+ user2.firstName);
    } else if(this.age < user2.age){
        console.log(user2.firstName + ' è più vecchio di '+ this.firstName);
    } else if (this.age === user2.age){
        console.log(this.firstName +' e '+ user2.firstName + '  hanno la stessa età');
    }
}
}

const user1 = new User("Mario", "Rossi", 18, "Milano");
const user2 = new User("Giacomo", "Verdi", 20, "Roma");
user1.getConfrontoAge(user2);
/* ESERCIZIO 2*/


let petName = document.getElementById("pet-name");
let ownerName = document.getElementById("owner-name");
let species = document.getElementById("species");
let bread = document.getElementById("bread"); 
let list = document.getElementById("list");
let button = document.getElementById("bottone");
const pets = [];
class Pet {
    constructor(petName, ownerName, species, bread){
       this.petName = petName;
       this.ownerName = ownerName;
       this.species = species;
       this.bread = bread;
    }

    getConfrontoOwner(pet){
    if(this.ownerName === pet.ownerName){
    return true;
    } else{
    return false;
    }
}
}

button.onclick = function(){
    let newPet = new Pet(petName.value, ownerName.value, species.value, bread.value);

    pets.push(newPet);
    renderedList();
    petName.value = "";
    ownerName.value = "";
    species.value = "";
    bread.value = "";
}


function renderedList(){
    list.innerHTML = '';
    pets.forEach(pet => {
       const newLi = document.createElement("li");
       newLi.innerHTML = pet.petName + " " + pet.ownerName + " " + pet.species + " " + pet.bread;
       list.appendChild(newLi);
    });
}

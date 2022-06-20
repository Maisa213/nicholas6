/*
    პირველი დავალება:  6 ქულა
    მოცემული გაქვთ ფუნქცია promp, რომელიც მომხმარებელს ეკითხება წლოვანებას და მიღებულ პასუხს ინახავს ცვლადში 
    askAge.
    თქვენი ამოცანაა შეამოწმოთ ცვლადი askAge, თუ ცვლადის მნიშვნელობა ნაკლებია 18-ზე გამოიძახეთ alert სტრიქონით 
    "You are too young", თუ ცვლადის მნიშვნელობა მეტია ან ტოლია 18 ზე გამოიძახეთ alert სტრიქონით "Welcome". 
    გამოიყენეთ ტერნარული ოპერაცია.
*/
let askAge = prompt("Hello, How old are you?");
if (askAge < 18) {
    alert("You are too young") 
} else { 
    alert("Welcome")
}

/* 
    მეორე დავალება: 6 ქულა
    მოცემული გაქვთ ცვლადები name, lname, age, address.
    თქვენი ამოცანაა ცვლადების გამოყენებით შექმნათ სტრიქონი 
    "Hello, my name is John Doe, I am 20 years old and I am living in Georgia, Tbilisi" 
    და შეინახოთ ცვლადში str. console.log-ში მოცემული მნიშვნელობა უნდა იყოს true.
*/

const fname = "Nicholas";
const lname = "Maisuradze";
const age = 15;
const address = "Georgia, Tbilisi";

let str = "Hello, my name is " + fname + " " + lname + ", I am " + age + " years old and I am living in " + address;

console.log(str == "Hello, my name is Nicholas Maisuradze, I am 15 years old and I am living in Georgia, Tbilisi");

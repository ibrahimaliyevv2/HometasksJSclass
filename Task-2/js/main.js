let str = "Apple, Ananas, Kiwi";
alert(str.slice(7));

const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };

  let text1 = "Hello World!";
alert(text1.toUpperCase());

let text2 = "Hello World!";
alert(text1.toLowerCase()); 

const numbers2 = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  txt += value + "<br>";
}


const numbers = [45, 4, 9, 16, 25];
const over18 = numbers.filter(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}   
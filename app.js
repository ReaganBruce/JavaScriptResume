let myName = "Reagan"; //Output: Reagan

const numOfStates = 50; //Output: 50

let add = 5 + 4; //Output: 9

let veggies = [
  "Broccoli",
  "Cauliflower",
  "Asparagus",
  "Brussel Sprouts",
  "Cucumbers",
];
for (i = 0; i < veggies.length; i++) {
  console.log(veggies[i]);
}



function sayHello() {
  alert("Hello!");
}
sayHello();





function checkAge(name, age) {
  if (age < 21) {
    alert("Sorry " + name + ", you aren't old enough to view this page!");
  }
}

checkAge("Reagan", 25);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);

let objects = [
  {
    name: "Reagan",
    age: 25,
  },
  {
    name: "Rebecca",
    age: 30,
  },
  {
    name: "Dan",
    age: 20,
  },
  {
    name: "Will",
    age: 26,
  },
  {
    name: "Connor",
    age: 20,
  },
];

for (i = 0; i < objects.length; i++) {
  checkAge(objects[i].name, objects[i].age);
}

function getLength(word) {
    console.log(word.length);
    if (word.length == 12) {
        console.log('The world is nice and even!');
    } else {
        console.log('The world is an odd place!');
    }
}
getLength("Hello World!");




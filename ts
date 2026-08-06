let age: number = 20;
//if-else-statement
if (age >= 18){
    console.log("You can vote")
}
else{
    console.log("You are too young to vote")
}

let num: number = -3;

//nested if-else statement
if (num > 0) {
    if (num % 2 == 0) {
        console.log("Positive even");
    } else {
        console.log("Positive odd")
    }
}
else{
    console.log("Number is Negative")
}

//swtich-case-statement
let dayNumber: number = 4;

switch (dayNumber) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day number");
}

//loop

//FOR LOOP
for (let i = 1; i <= 7; i++) {
  console.log(i);
}


//WHILE LOOP
let i : number = 1;
while (i <= 7) {
  console.log(i);
  i++;
}

//DO-WHILE-LOOP

let x : number = 1;
do {
  console.log(i);
  i++;
} while (i <= 7);

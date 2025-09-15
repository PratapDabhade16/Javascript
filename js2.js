//create a number variable num with some value 
// now print good if the number is divisible by 10 and print bad if it is not 


let num = 10 ;
if(num % 10 == 0){
console.log("good");
}
else{
console.log("bad");
}

// take the user name and age as the prompts then retrun back the following statement to the suser as an alert
// by substituing their name and age 

let name = prompt("enter your name ");
let age = prompt("enter your age ");

alert("hello" +name+"you are" +age+ "years old");

// write a statement to print the months in a quarter 

let quarter = 1 ;
switch(quarter){

  case 1: console.log("january , february , march ");
    break ;
  case 2 : console.log("april , may , june ");
    break ;
  case 3 : console.log("july , august , september");
    break ;
  case 4 : console.log("october , november , december");
    break ;
  default : console.log("not a quarter");



let str = "apples"
if(str[0] == 'a' || str[0] == 'A' && str.length > 5){
console.log("golden string");
}
    else{
    console.log("not a golden string ")
    }

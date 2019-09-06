let number = "4";
if (number % 3 == 0 && number % 5 == 0 ){
    console.log ("this number is divisible by 3 or 5")
}
else if (number % 3 != 0 && number % 5 == 0 ){
    console.log ("this number is only divisible by 5")
}
else if (number % 3 == 0 && number % 5 != 0 )  {
    console.log ("this number is only divisible by 3")
}
else {
console.log("this number is not divisible by 3 or 5");
}
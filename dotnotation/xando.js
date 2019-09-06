let space1 = "x";
let space2 = " ";
let space3 = " ";
let space4 = " ";
let space5 = " ";
let space6 = "x";
let space7 = " ";
let space8 = " ";
let space9 = "x";
console.log("    |   |   ");
console.log(`  ${space1} | ${space2} | ${space3} `);
console.log("    |   |   ");
console.log("-------------");
console.log("    |   |   ");
console.log(` ${space4}  | ${space5} | ${space6} `);
console.log("    |   |   ");
console.log("-------------");
console.log("    |   |   ");
console.log(` ${space7}  | ${space8} | ${space9} `);
console.log("    |   |   ");

if (space1 == "x" && space2 == "x" && space3 == "x") {
    console.log("X's Wins");
}
else if (space1 == "o" && space2 == "o" && space3 == "o") {
    console.log("O's Wins");
}
else if (space4 == "x" && space5 == "x" && space6 == "x") {
    console.log("X's Wins");
}
else if (space4 == "o" && space5 == "o" && space6 == "o") {
    console.log("O's Wins");
}
else if (space7 == "x" && space8 == "x" && space9 == "x") {
        console.log("X's Wins");
    }
else if (space7 == "o" && space8 == "o" && space9 == "o") {
        console.log("O's Wins");
}
else if (space1 == "x" && space5 == "x" && space9 == "x") {
    console.log("X's Wins");
}
else if (space1 == "o" && space5 == "o" && space9 == "o") {
    console.log("O's Wins");
}
else if (space3 == "x" && space5 == "x" && space7 == "x") {
    console.log("X's Wins");
}
else if (space3 == "o" && space5 == "o" && space7 == "o") {
    console.log("O's Wins");
}
else if (space1 == "x" && space4 == "x" && space7 == "x") {
    console.log("X's Wins");
}
else if (space1 == "o" && space4 == "o" && space7 == "o") {
    console.log("O's Wins");
 }
  else if (space2 == "x" && space5 == "x" && space8 == "x") {
        console.log("X's Wins");
}
else if (space2 == "o" && space5 == "o" && space8 == "o") {
        console.log("O's Wins");
}
else if (space3 == "x" && space6 == "x" && space9 == "x") {
    console.log("X's Wins");
}
else if (space3 == "o" && space6 == "o" && space9 == "o") {
    console.log("O's Wins");
}
else {
       console.log ("No Winner");
}
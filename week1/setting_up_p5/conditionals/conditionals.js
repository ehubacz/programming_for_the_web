const age = window.prompt("how old are you?");
console.log("As a number" , number(age));
console.log("As a string" , age);
if (number(age) > "21") {
    console.log("old enough");
} else {
    console.log("nope");
}
/* "if" for either or
    "===" is for exact matches
    "number(method name)" is to have display in console as number vs string output
    

if (age === "21") {
    console.log("old enough");
} else {
    console.log ("nope");
} */
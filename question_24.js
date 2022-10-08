// More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
// If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
let name = "malik";
console.log(name == "malik");
console.log(name == "saad");

// Tests using the lower case function
let language = "Urdu";
let languageLower = language.toLowerCase();
console.log(language == languageLower);
let languageUpper = language.toUpperCase();
console.log(language == languageUpper);

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let num = 8;
console.log(num>=8);
console.log(num<=8);
console.log(num==8);

// • Tests using "and" and "or" operators
console.log(num>=8 && num<=20);
console.log(num>5 || num<15);

// • Test whether an item is in a array
const languages = ["mom","dad","brother","sister","me"];
console.log(languages.includes("brother"));

// Test whether an item is not in a array
console.log(languages.indexOf("dad"));

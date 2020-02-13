//STEP 1 -	Convert the identifiers to camelCase notation:
var someMonth;
function theMonth();
var currentMonth;
var summerMonth;
var myLibraryFunction;

//STEP 2 - an example of the literal expression
5.4          // numeric literal
"Wellcome!"  // string literal
false        // Boolean literal
true         // Boolean literal
null         // null literal

//STEP 3 - the examples of the complex/variable expression
let someExpression = 6/5 + 7;
let aThirdExpression = aSecondExpression + anExpression;

//STEP 4 - declare 9 variables (without definition), use camelCase and Hungarian Notation 
var firstName;
var address;
var lastName;
var city;
var state;
var zipCode;
var yourAge;
var referralSource;
var mayWeContactYou;

//STEP 5 -Take the 9 variables, 3 methods for declaring and assigning values to those variables 
var firstName = "Mona" ;
var address = "new";
var lastName = "Bergman";
var city = "San Diego";
var state = "CA";
var zipCode = "92111";
var yourAge = "99";
var referralSource = "awesome";
var mayWeContactYou = "619-35-35";

var state;
state = "CA";

var zipCode;
zipCode = "92111";

var firstName;
firstname = "Mona";
alert(firstname);

var address;
address = "San Diego, Aero Dr, 8355";
alert(address);

let firstName;
firstname = "Mona";

//STEP 6 -Create a variable. Add a number and a string and display the coerced result in the browser’s console window. 
var total = 100;
var frutty = "apple";
window.console.log("We ate" + total + frutty);

//STEP 7 -

//STEP 8 - string literal
var someString = "Who once said, \"Only two things are infinite, the universe and human stupidity, and I'm not sure about the former. \"";
window.console.log(someString);

//STEP 9 -Create a variable that produces a null value in the console window. Create a variable that produces an undefined value in the console window.

let x;
window.console.log(x);  //undefined value

let x = 10;
let y = 10;
window.document.write(x-10);

let x = 200;
let y = null;
x = null;
window.console.log(x);
window.console.log(y); //produce a null value in the console window


//STEP 10 - typeof operator on various literals to return the following types within the console window: string, number, Boolean, object, and undefined

typeof "Peter";  // returns string
typeof 5.8       // returns number
typeof NaN       //returns number
typeof false     // returns Boolean
typeof true      // returns Boolean
typeof [1,2,3]   // returns object
typeof myRose    // returns undefined
typeof null      // returns object


//STEP 11 - Within an alert box, use the concatenation operator (+) to display text in the alert box that appears. Substitute the name; use 2 concatenation operators to construct this string of text. One after the text “Hello” and a second one after your name and before the comma. 

var firstName = "Zak"; 
var lastName = "Ruvalcaba";
alert("Hello" + firstName + "" + lastName + "Welcome to the JavaScript class!");

firstName = "Tatiana";
LastName = "Bergman";
alert("Hello" + firstName + "" + lastName + "Welcome to the JavaScript class!");


//STEP 12 -Declare a variable called name and set it equal to your name. 
var name = "Tatiana";
alert("Hello" + name + ", welcome to the JavaScript class!");

//STEP 13 -
var course = "JavaScript"; 
alert(course);

//STEP 14 - line break added 
var course = "JavaScript"; 
var name = "Zak Ruvalcaba";
let courseName = "Hello" + name\n"Welcome to the" + course;
window.console.log(courseName);

//string finding segments

//problem 01
// var sentence = "The quick brown fox jumps over the lazy dog";
// var word = "fox";
// var isWordFound = sentence.indexOf(word);
// console.log("the index of the word fox is : " + isWordFound);

//problem 02
// var text = "Hello world , welcome to the world of programming.";
// var segment = "world";
// var counter = 0;

// for (var i = 0; i < text.length; i++) {
//     if (text[i] === segment) {
//         counter++;
//     }
// }
// console.log(counter);

// problem 03
// var text01 = "javascript";
// var index = 4;
// var charAtIndex = text01.charAt(index);

// if (charAtIndex === "") {
//     alert("Index out of bond")
// } else {
//     alert(charAtIndex);
// }

// problem 04
// var stringText = "banana";
// var char = "a";
// var charIndices = [];
// for (var i = 0; i < stringText.length; i++) {
//     if (stringText[i] === char) {
//         charIndices.push(i);
//     }
// }
// console.log(charIndices);

// problem 05
// var strText = "mississippi";
// var oldChar = "s";
// var newChar = "z";
// for (var i = 0; i < strText.length; i++) {
//     strText[i] === oldChar;
//     var newText = strText.replace(oldChar, newChar);

// }
// console.log(newText);




// Exercise 1
// Task: Declare a variable str and assign it the value "Welcome to JavaScript!". Print the length of the string.
// var str = "welcome to JavaScript!";
// console.log(str.length)

// Exercise 2
// Task: Declare a variable str and assign it the value "Programming is awesome". Extract and print the word "awesome" from the string.
var str = "Programming is awesome";
var ext = "awesome";
var extracted = "";
for (var i = 0; i < str.length; i++) {
    str[i] === ext;
    
}
console.log(extracted);



// Exercise 3
// Task: Declare a variable str and assign it the value "Hello, Universe!". Extract and print the first five characters of the string.

// Exercise 4
// Task: Declare a variable str and assign it the value "Full Stack Developer". Extract and print the substring "Stack".

// Exercise 5
// Task: Declare a variable str and assign it the value "Javascript Strings" Extract and print the last four characters of the string.
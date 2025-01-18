let str = "Hello";
// index er string ta dekhabe 
// -1 mane last index  bujhai 


// console.log(str.at(1)); // 'e'
// console.log(str.at(-1)); // 'o'

let str2 = "Hello, World!";
// slice(start, end)
// console.log(str2.slice(0, 5,'jj')); // 'Hello'
// console.log(str2.slice(7)); // 'World!'


// Similar to slice, but does not support negative indices.

let str3 = "Hello, World!";
// console.log(str3.substring(0, 5)); // 'Hello'
// console.log(str3.substring(7)); // 'World!'

let str4 = "JavaScript";

// console.log(str4.substr(4, 6)); // 'Script'
let str5 = "hello";
// console.log(str5.toUpperCase()); // 'HELLO'

let str6 = "HELLO";
// console.log(str6.toLowerCase()); // 'hello'

let str7 = ["Hello", "World"];
let str8 = "World";
// console.log(str7.concat(" ", str8, " ")); // 'Hello, World!'
// console.log(str7.join(" k ")); //

let str9 = "   Hello, World!   ";
// console.log(str9.trim()); // 'Hello, World!'

let str10 = "5";
// console.log(str10.padStart(3, "0")); // '005'

let str11 = "5";
// console.log(str11.padEnd(3, "0")); // '500'


let str12 = "Hi!";
// console.log(str12.repeat(3)); // 'Hi!Hi!Hi!'



// replace 1 ta ke replac kore 

let str13 = "Hello, World!";
// console.log(str13.replace("World", "JavaScript")); // 'Hello, JavaScript!'

// replace sob gulake replac kore

let str14 = "Banana, banana, banana!";
// console.log(str14.replaceAll("banana", "apple")); // 'Banana, apple, apple!'


let str15 = "a,b,c,d";
// console.log(str15.split(",")); // ['a', 'b', 'c', 'd']
// console.log(str15.split(",").join(' ')); // a b c d


// first er index check kore 
let str16 = "Hello, World!";
// console.log(str16.indexOf("o")); // 4

// last er index check kore 

let str17 = "Hello, World!";
// console.log(str17.lastIndexOf("o")); // 8

// case sensastive  vabe check more 

let str18 = "Hello, World!";
// console.log(str18.search("World")); // 7
// console.log(str18.includes("World")); // TRUE 

let str19 = "The rain in Spain";
// console.log(str19.match(/Spain/g)); // ['Spain']


// start ki diye hoiche seita check hoiche 
let str20 = "JavaScript";
console.log(str20.startsWith("Java")); // true

// ses ki diye hoiche seita check hoiche 

let str21 = "JavaScript";
console.log(str21.endsWith("Script")); // true





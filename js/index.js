console.log("I'm ready!");

// Iteration 1:
let hacker1 = 'Ben';

let hacker2 = 'Louis';

console.log(`The driver's name is ${hacker1}`);

console.log(`The navigator's name is ${hacker2}`);


// Iteration 2:

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
 } else if (hacker2.length > hacker1.length) {
   console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
 }


 // Iteration 3:

//3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

let newHacker1 = ' ';

for (i = 0; i < hacker1.length ; i++) { 
  newHacker1 += ' ';
  newHacker1 += hacker1[i].toUpperCase();
  }
console.log(newHacker1)
  
// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

//for (i = hacker2.length - 1 ; i >= hacker2.length ; i--) { 
// console.log(i);
//  }



/* 3.3 Depending on the lexicographic order of the strings, print:
- The driver's name goes first.
- Yo, the navigator goes first definitely.
- What?! You both have the same name?
*/

if hacker1.localeCompare(hacker2 = 0 {
  console.log("Yo, the navigator goes first definitely.");
}


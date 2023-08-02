function isPalindrome(word) {
  // Write your algorithm here

  //Declare a new array
  let newArray = [];
  let palindromeTest = true;
  const wordLength = word.length;

  /* 
  Add your pseudocode here
*/

  //pop off the last character of the string and assign it to the beginning of the new string with shift() without destroying the original array. Repeat until completed new array.
  for(let i = 0; i < wordLength; i++) {
      newArray.unshift(word[i]);

  }



  //test the new array against the old array.  

//THIS FOR LOOP IS WHERE YOU LEFT OFF AND YOU NEED TO PICK BACK UP HERE!
//Test the newArray against the word to see if they're the same.  
for(let i = 0; i < wordLength; i++){

  if (newArray[i] === word[i] && palindromeTest !== false) {
      palindromeTest = true;
  }
  else {
    palindromeTest = false;
  }
}

return palindromeTest;

};



/*
  Add written explanation of your solution here
*/
// The function isPalindrome takes in a word.  A new array is declared, which will be the reversed word that is passed to the function, and then it is tested. A variable is defined as the length of the word length for clarity's sake rather than rewriting word.length in the rest of the code.  Inside a for loop that loops for wordLength number of times, the new array is assigned the last character, that hasn't already been assigned yet, of the word that is passed in, until a reversed copy of the word is assigned to the newArray.  The function then tests the newArray against the word that was passed in to see if they match.  If they do, then the function returns true, if not it returns false.  For the test, The palindromeTest variable begins as true.  In the for loop that tests the word against the newArray, there is an if statement that checks to see if palindromeTest has been set to false.  If it has not been set to false, and if the index of the newArray and the index of the word match.


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));


}

module.exports = isPalindrome;

isPalindrome("racecar");
isPalindrome("abba");
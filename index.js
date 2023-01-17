function isPalindrome(string) {
  let reversedString = string.split('').reverse().join('');
  return string === reversedString;
}

/* 
  Add your pseudocode here
*/

/*
      Create a variable reversedString and set it equal to the input string reversed using the .split('').reverse().join('') method
    Compare the reversed string to the original input string
    If they are the same, return true
    If they are different, return false
*/

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

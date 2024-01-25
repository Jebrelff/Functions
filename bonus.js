function funPhrase(str) {
    // Retrieve only the last character from strings with lengths of 3 or less.
    // Retrieve only the first 3 characters from strings with lengths larger than 3.
    const modifiedStr =
    str.length <= 3 ? str.slice(-1) : str.slice(0, 3);
  
    // Use a template literal to return the phrase
    return `We put the '${modifiedStr}' in '${str}'.`;
  }
  
// Test the function
const str = 'Functions rock!';
console.log(funPhrase(str));

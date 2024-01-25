const array1 = ['apple', 'potato', 'Capitalized Words'];
const array2 = [123, 8897, 42, 1138, 8675309];
const array3 = ['hello', 'world', 123, 'orange'];

// Function to reverse the characters in a string or the digits in a number.
const reverseCharacters = (value) => {
    const valusIsNumber = (typeof value === 'number');
    if(valusIsNumber) {
        // Convert the number to a string, and continue reversing it like a string
        value = value.toString();
    }

    // reversing the value string
    value = value.split('').reverse().join('');

    if(valusIsNumber) {
        // Convert the reversed string back to a number
        value = parseInt(value);
    }

    return value;
}

// Function to reverse the elements in an array and the array too and returns the final reversed array.
const reverseArray = (array) => {
    const reversedElementsArray = [];

    for(let i = 0; i < array.length; i++) {
        // For each element in the old array, call reverseCharacters to flip the characters or digits.
        const reversedElement = reverseCharacters(array[i]);

        // Add the reversed string (or number) to the array
        reversedElementsArray.push(reversedElement);
    }

    return reversedElementsArray.reverse();
}

// Test and Print the result
console.log("Original Array:\n", array1);
console.log("Reversed Array:\n", reverseArray(array1), "\n");

console.log("Original Array:\n", array2);
console.log("Reversed Array:\n", reverseArray(array2), "\n");

console.log("Original Array:\n", array3);
console.log("Reversed Array:\n", reverseArray(array3), "\n");

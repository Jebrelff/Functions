// Function to calculate the area of a rectangle
const calculateArea = (length, width) => {
    // If only one argument is passed, assume it's a square
    if (width === undefined) {
        width = length;
    }

    // Calculate the area
    const area = length * width;

    // Return the area
    return area;
}
  
// Test cases
const area1 = calculateArea(2, 4);
console.log('length = 2, width = 4');
console.log(`The area is ${area1} cm^2.\n`); // Expected 8.

const area2 = calculateArea(14, 7);
console.log('length = 14, width = 7');
console.log(`The area is ${area2} cm^2.\n`); // Expected 98.

const area3 = calculateArea(20);
console.log('length = 20');
console.log(`The area is ${area3} cm^2.`); // Expected 400.

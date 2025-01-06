const fs = require('fs');
const path = './my-file.txt';

// Define your JavaScript function
function appendDateToFile(filePath) {
  const currentDate = new Date().toISOString();
  let newLine = `\nUpdated at ${currentDate}\n`;
  console.log(newLine);

}

// Execute the function
appendDateToFile(path);
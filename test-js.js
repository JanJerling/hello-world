const fs = require('fs');
const path = './my-file.txt';

// Define your JavaScript function
function appendDateToFile(filePath) {
  const currentDate = new Date().toISOString();
  const newLine = `\nUpdated at ${currentDate}\n`;
  fs.appendFileSync(filePath, newLine.toString());

}

// Execute the function
appendDateToFile(path);
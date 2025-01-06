const fs = require('fs');
const path = './my-file.txt';

// Define your JavaScript function
function appendDateToFile(filePath) {
  const currentDate = new Date().toISOString();
  console.log(`\nUpdated at ${currentDate}\n`.toString());

}

// Execute the function
appendDateToFile(path);
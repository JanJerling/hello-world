const fs = require('fs');
const path = './my-file.txt';

// Define your JavaScript function
function appendDateToFile(filePath) {
  const currentDate = new Date().toISOString();
  console.log('test');

}

// Execute the function
appendDateToFile(path);
const fs = require('fs');

// Read the CSV file
fs.readFile('data.csv', 'utf8', (error, data) => {
  if (error) {
    console.error('Error reading the file:', error);
    return;
  }
  // Split the CSV data into an array of rows
  rows = data.split('\n');
});

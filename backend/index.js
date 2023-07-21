const fs = require("fs");
const { exec } = require("child_process");
const newPatient = require("./newPatient");
const newObservation = require("./newObservation.js");

// TODO: Convert the above im

//Patient Resource maker functions
const resourceMaker = (data) => {
  const arr = data.split(",");
  const currID = arr[1];
  exec(`ls ../resources/patient/${currID}*`, (out, o2, o3) => {
    if (o2.length > 0) {
      newObservation(arr);
    } else {
      newPatient(arr);
      newObservation(arr);
    }
  });
};

const generateResource = () => {
  // Read the CSV file
  fs.readFile("data.csv", "utf8", (error, data) => {
    if (error) {
      console.error("Error reading the file:", error);
      return;
    }
    // Split the CSV data into an array of rows
    const rows = data.split("\n");
    for (let i = 1; i < rows.length - 1; i++) {
      resourceMaker(rows[i]);
    }
  });
};

module.exports = generateResource;

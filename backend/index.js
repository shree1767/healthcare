const fs = require('fs');
const {exec} = require("child_process")
const newPatient = require("./newPatient")

//Patient Resource maker functions
const resourceMaker = (data) =>{

  const arr = data.split(',')
  console.log(arr);
  const currID = arr[1]

  exec(`ls ./resources/patient/${currID}*` , (out,o2,o3)=>{
    if(o2.length > 0){
      newVersion(arr);
    }
    else{
      newPatient(arr);
    }
  })  
}


// Read the CSV file
fs.readFile('data.csv', 'utf8', (error, data) => {
  if (error) {
    console.error('Error reading the file:', error);
    return;
  }
  // Split the CSV data into an array of rows
  const rows = data.split('\n');
  resourceMaker(rows[1]);
});

const fs = require("fs")
const fhir = require("fhir-validator")

const newPatient = (data)=>{
    const currPID = data[1];
    const pbdate = data[2];

    var pgen = data[3] === 'w'?"female":"male";

    const filedata = {
        "resourceType": "Patient",
        "id": currPID,
        "gender": pgen,
        "birthDate": pbdate
    }
    const jsondata = JSON.stringify(filedata , null , 2);

    const result = fhir.validate(jsondata)
    if(result["errors"].length === 0){

        fs.writeFile(`../resources/patient/${currPID}.json`, jsondata, 'utf8', (error) => {
            if (error) {
            console.error('Error writing to the file:', error);
            return;
            }
        });
    }else{
        console.log(`There is something wrong with the data at index ${data[0]}\n error message : \n ${result["errors"]}`);
    }
}

module.exports = newPatient;
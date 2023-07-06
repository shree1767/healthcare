const obvMaker = require("./obvMaker.js")
const fs = require("fs")
const fhir = require("fhir-validator")
const { v4: uuidv4 } = require("uuid")



const newObservation = (data) => {

    let finalResource = {
        "resourceType": "Bundle",
        "type": "transaction",
        "id": `${data[1]}`,
        "entry": obvMaker(data),

    }

    const jsondata = JSON.stringify(finalResource, null, 2);
    const result = fhir.validate(jsondata)
    if (result["errors"].length === 0) {



        fs.writeFile(`./resources/observation/${uuidv4()}.json`, jsondata, 'utf8', (error) => {
            if (error) {
                console.error('Error writing to the file:', error);
                return;
            }
        });
    } else {
        console.log(`There is something wrong with the data at index ${data[0]}\n error message : \n ${result["errors"]}`);
    }


}




module.exports = newObservation
const obvMaker = require("./obvMaker.js")


const newObservation = (data) => {

    let finalResource = {
        "resourceType" : "Bundle",
        "type":"transaction",
        "identifier":`${data[3]}`,
        "entry":[],
        "timestamp": `${data[10]}T00:00:00Z`
    }

    for(let i = 4 ; i <= 23 ; i++){
        if(data[i] == "-1"  || i == 10) continue;
        else{
            finalResource["entry"].push(obvMaker[i-4](data[i]))
        }
    }
}

module.exports = newObservation
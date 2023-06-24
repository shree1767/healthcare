let template = {
  "request": {
    "method": "POST",
    "url": "Observation"
  },
  "resource": {
    "resourceType": "Observation",
    "status":"final",
    "code": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "",
          "display": ""
        }
      ],
    },

  }
}

const obvMaker = [

  function APOPLEX(data){
    let obj = {
      ...template
    }
    obj["resource"]["code"]["coding"][0]["code"] = "237701005"
    obj["resource"]["code"]["coding"][0]["display"] = "Pituitary apoplexy" 
    obj["resource"]["valueBoolean"] = Boolean(data)
    return obj
  },

  function HToniye(data) {
    let obj = {
      ...template
    }
    obj["resource"]["code"]["coding"][0]["code"] = "38341003"
    obj["resource"]["code"]["coding"][0]["display"] = "High blood pressure" 
    obj["resource"]["valueBoolean"] = Boolean(data)
    return obj
  },
  function Dbt(data){
    let obj = {
      ...template
    }
    obj["resource"]["code"]["coding"][0]["code"] = "73211009"
    obj["resource"]["code"]["coding"][0]["display"] = "Diabetes mellitus" 
    obj["resource"]["valueBoolean"] = Boolean(data)
    return obj
  },
  function Hattack(data){
    let obj = {
      ...template
    }
    obj["resource"]["code"]["coding"][0]["code"] = "73211009"
    obj["resource"]["code"]["coding"][0]["display"] = "Diabetes mellitus" 
    obj["resource"]["valueBoolean"] = Boolean(data)
    return obj
  },
  function Thinner(data){
    let obj = {
      ...template
    }
    obj["resource"]["code"]["coding"][0]["code"] = "372862008"
    obj["resource"]["code"]["coding"][0]["display"] = "Anticoagulant" 
    obj["resource"]["valueBoolean"] = Boolean(data)
    return obj
  },
  function side(data){
    let obj = {
      ...template
    }
    obj["resource"]["code"]["coding"][0]["code"] = "272741003"
    obj["resource"]["code"]["coding"][0]["display"] = "Laterality" 
    obj["resource"]["valueCodeableConcept"] = {
      "coding":[{
        "system":"http://snomed.info/sct",
        "code": data == "right"?"24028007":"7771000",
        "display": data == "right"?"Right":"Left"
      }]
    }
    return obj
  },function voider(){},
  function CRT(data){
    let obj = {
      ...template
    }
    obj["resource"]["code"]["coding"][0]["code"] = "57108-3"
    obj["resource"]["code"]["coding"][0]["display"] = "Macular grid.center point thickness by OCT" 
    obj["resource"]["code"]["coding"][0]["system"] = "http://loinc.org" 
    obj["resource"]["valueQuantity"] = {
      "value": Number(data),
      "unit": "micrometers"
    }
    return obj
  },
  function intraretfluid(data){ // nil

  },
  function SubretinalFluid(data){
    let obj = {
      ...template
    }
    obj["resource"]["code"]["coding"][0]["code"] = "421843005"
    obj["resource"]["code"]["coding"][0]["display"] = "Subretinal fluid" 
    obj["resource"]["valueBoolean"] = Boolean(data)
    return obj
  },
  function RPE_detach(data){
    let obj = {
      ...template
    }
    obj["resource"]["code"]["coding"][0]["code"] = "52002008"
    obj["resource"]["code"]["coding"][0]["display"] = "Serous detachment of retinal pigment epithelium" 
    obj["resource"]["valueBoolean"] = Boolean(data)
    return obj
  },
  function subretinalfibro(data){
    let obj = {
      ...template
    }
    obj["resource"]["code"]["coding"][0]["code"] = "247162007"
    obj["resource"]["code"]["coding"][0]["display"] = "Subretinal fibrosis" 
    obj["resource"]["valueBoolean"] = Boolean(data)
    return obj
  },
  function RPE(data){
    let obj = {
      ...template
    }
    obj["resource"]["code"]["coding"][0]["code"] = "280662007"
    obj["resource"]["code"]["coding"][0]["display"] = "Entire retinal pigment epithelium" 
    obj["resource"]["valueBoolean"] = Boolean(data)
    return obj
  },
  function ELM(data){
    let obj = {
      ...template
    }
    obj["resource"]["code"]["coding"][0]["code"] = "280676008"
    obj["resource"]["code"]["coding"][0]["display"] = "Entire external limiting membrane of retina" 
    obj["resource"]["valueBoolean"] = Boolean(data)
    return obj
  },
  function ellipsoid(data){ //nil

  },
  function fovealdepression(data){//nil

  },
  function scars(data){
    let obj = {
      ...template
    }
    obj["resource"]["code"]["coding"][0]["code"] = "280676008"
    obj["resource"]["code"]["coding"][0]["display"] = "Corneal scars and opacities" 
    obj["resource"]["valueBoolean"] = Boolean(data)
    return obj
  },
  function DAMD(data){
    let obj = {
      ...template
    }
    obj["resource"]["code"]["coding"][0]["code"] = "267718000"
    obj["resource"]["code"]["coding"][0]["display"] = "Age related macular degeneration" 
    obj["resource"]["valueCodeableConcept"] = {
      "coding":[{
        "system":"http://snomed.info/sct",
        "code": data == "wet"?"17461003":"13880007",
        "display": data == "wet"?"Wet":"Dry"
      }]
    }
    return obj
  },
  function cataract(data){
    let obj = {
      ...template
    }
    obj["resource"]["code"]["coding"][0]["code"] = "193570009"
    obj["resource"]["code"]["coding"][0]["display"] = "Cataract" 
    obj["resource"]["valueBoolean"] = Boolean(data)
    return obj
  },
  function pdpdk(data){
    let obj = {
      ...template
    }
    obj["resource"]["code"]["coding"][0]["code"] = "309523001"
    obj["resource"]["code"]["coding"][0]["display"] = "Pseudophakia" 
    obj["resource"]["valueBoolean"] = Boolean(data)
    return obj
  },
  function RVO(data){
    let obj = {
      ...template
    }
    obj["resource"]["code"]["coding"][0]["code"] = "1237532002"
    obj["resource"]["code"]["coding"][0]["display"] = "Retinal vein occlusion" 
    obj["resource"]["valueBoolean"] = Boolean(data)
    return obj
  },
  function DME (data){
    let obj = {
      ...template
    }
    obj["resource"]["code"]["coding"][0]["code"] = "312912001"
    obj["resource"]["code"]["coding"][0]["display"] = "Diabetic macular edema" 
    obj["resource"]["valueBoolean"] = Boolean(data)
    return obj
  },
  function DRP(data){
    let obj = {
      ...template
    }
    obj["resource"]["code"]["coding"][0]["code"] = "4855003"
    obj["resource"]["code"]["coding"][0]["display"] = "Diabetic retinopathy" 
    obj["resource"]["valueBoolean"] = Boolean(data)
    return obj
  },
  function GLiosis(data){
    let obj = {
      ...template
    }
    obj["resource"]["code"]["coding"][0]["code"] = "81415000"
    obj["resource"]["code"]["coding"][0]["display"] = "Gliosis" 
    obj["resource"]["valueBoolean"] = Boolean(data)
    return obj
  }


]

//ye testing k h , remove in prod
let test = obvMaker[23]("true");
console.log(JSON.stringify(test));
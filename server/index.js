//package imports 
import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import helmet from "helmet"
import cors from "cors"
import morgan from "morgan"
import bodyParser from "body-parser"

//routes import
import patientRouter from "./routes/patient.js"
import observationRouter from "./routes/observation.js"

//expresss app
const app = express()

//config
dotenv.config()
app.use(express.json())
app.use(morgan("common"))
app.use(bodyParser.urlencoded({extended:false}))
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}))
app.use(cors())

//routing
app.use("/Patient",patientRouter)
app.use("/Observation",observationRouter)


//DB con && app listener
mongoose.connect(process.env.MONGODBURI)
.then(
    app.listen(process.env.PORT,()=>{console.log("listening");})
)


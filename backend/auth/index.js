import express from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";
import generateResource from "../index.js";
import fs, { readFile } from "fs";
import * as path from "path";

const app = express();
app.use(cors());
app.use(express.json());
const port = 4000;

let currentNumber = 99999;
function getFormattedDate() {
  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");

  return `${day}-${month}-${year}`;
}

function generateSequentialNumber() {
  currentNumber = (currentNumber + 1) % 1000000;
  return (currentNumber + 100000).toString();
}

async function readFiles(dir) {
  try {
    // read directory
    let fileNames = await fs.promises.readdir(dir);

    let data = [];

    for (const filename of fileNames) {
      const filepath = path.resolve(dir, filename);

      // get information about the file
      const stat = await fs.promises.stat(filepath);

      // check if the current path is a file or a folder
      const isFile = stat.isFile();
      const ext = path.parse(filename).ext;

      // exclude folders
      if (isFile && ext === ".json") {
        // callback, do something with the file
        try {
          const fileContent = await fs.promises.readFile(filepath, "utf-8");
          data.push({
            id: generateSequentialNumber(),
            researchId:
              JSON.parse(
                fileContent
              ).entry[0].resource.code.coding[0].code.toString(),
            lastVisit: getFormattedDate(),
            firstOccurrence: getFormattedDate(),
          });
        } catch (error) {
          console.log(error);
        }
      }
    }
    return data;
  } catch (error) {
    throw error;
  }
}

app.post("/login", async (req, res) => {
  const { doctorID, password } = req.body;
  console.log(doctorID, password);
  const prisma = new PrismaClient();
  if (!doctorID || !password) {
    return res.send({ status: "Please provide the required fields" });
  }
  try {
    const doctor = await prisma.user.findUnique({
      where: {
        doctorID: doctorID,
      },
    });
    if (doctor.password === password) {
      return res.send({
        status: "success",
        data: {
          doctorID: doctor.doctorID,
          name: doctor.name,
        },
      });
    } else {
      return res.send({ status: "failure" });
    }
  } catch (error) {
    console.log(error);
    return res.send(error);
  }
});

app.post("/register", async (req, res) => {
  const { doctorID, password, name } = req.body;
  const prisma = new PrismaClient();
  if (!doctorID || !password || !name) {
    return res.send({ status: "Please provide the required fields" });
  }
  try {
    const docCheck = await prisma.user.findUnique({
      where: {
        doctorID: doctorID,
      },
    });
    if (docCheck) {
      return res.send({ status: "Doctor already exists" });
    }
    await prisma.user.create({
      data: {
        doctorID: doctorID,
        password: password,
        name: name,
      },
    });
    const doctor = await prisma.user.findUnique({
      where: {
        doctorID: doctorID,
      },
    });
    return res.send({
      status: "success",
      data: {
        doctorID: doctor.doctorID,
        name: doctor.name,
      },
    });
  } catch (error) {
    console.log(error);
    return res.send(error);
  }
});

app.get("/generate", async (req, res) => {
  try {
    generateResource();
    res.send({ status: "success" });
  } catch (error) {
    console.log(error);
    // res.send(error);
  }
});

app.get("/getObservations", async (req, res) => {
  try {
    const data = await readFiles("../resources/observation");
    res.send({ status: "success", data });
  } catch (error) {
    res.send(error);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

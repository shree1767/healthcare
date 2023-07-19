import express from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
const port = 4000;

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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

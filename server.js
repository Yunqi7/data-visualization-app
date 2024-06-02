const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/visualization", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const dataSchema = new mongoose.Schema({
  patientName: String,
  patientId: Number,
  date: String,
  safe: String,
  atRisk: String,
  position: String,
  timeInBed: String,
  timeOutOfBed: String,
  disconnectedTime: String,
  shift: String,
});

const Data = mongoose.model("Data", dataSchema);

app.get("/api/data", async (req, res) => {
  try {
    const data = await Data.find({});
    res.json(data);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get("/api/shifts/:date", async (req, res) => {
  try {
    const date = req.params.date;
    console.log("Querying for date:", date); // 打印查询日期
    const data = await Data.find({ date: date });
    console.log("Shifts data for date", date, ":", data); // 打印数据以调试
    res.json(data);
  } catch (err) {
    console.error("Error fetching shift data:", err); // 打印错误信息
    res.status(500).send(err);
  }
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});

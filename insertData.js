const mongoose = require("mongoose");

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

const data = [
  // 添加所有病人的数据
  {
    patientName: "Audrey",
    patientId: 21,
    date: "2023-06-01",
    safe: "100.0%",
    atRisk: "0.0%",
    position: "N/A",
    timeInBed: "54.17%",
    timeOutOfBed: "45.83%",
    disconnectedTime: "0.0%",
    shift: "7 am - 3 pm",
  },
  {
    patientName: "Audrey",
    patientId: 21,
    date: "2023-06-01",
    safe: "100.0%",
    atRisk: "0.0%",
    position: "N/A",
    timeInBed: "54.17%",
    timeOutOfBed: "45.83%",
    disconnectedTime: "0.0%",
    shift: "3 pm - 9 pm",
  },
  {
    patientName: "Audrey",
    patientId: 21,
    date: "2023-06-01",
    safe: "100.0%",
    atRisk: "0.0%",
    position: "N/A",
    timeInBed: "54.17%",
    timeOutOfBed: "45.83%",
    disconnectedTime: "0.0%",
    shift: "9 pm - 7 am",
  },
  {
    patientName: "Edward",
    patientId: 48,
    date: "2023-06-02",
    safe: "81.86%",
    atRisk: "18.14%",
    position: "supine",
    timeInBed: "68.12%",
    timeOutOfBed: "31.87%",
    disconnectedTime: "0.0%",
    shift: "7 am - 3 pm",
  },

  {
    patientName: "Kathleen",
    patientId: 54,
    date: "2023-06-02",
    safe: "82.24%",
    atRisk: "17.76%",
    position: "right",
    timeInBed: "63.33%",
    timeOutOfBed: "36.67%",
    disconnectedTime: "0.0%",
    shift: "3 pm - 9 pm",
  },
  {
    patientName: "Sheryle",
    patientId: 16,
    date: "2023-06-03",
    safe: "82.24%",
    atRisk: "17.76%",
    position: "right",
    timeInBed: "63.33%",
    timeOutOfBed: "36.67%",
    disconnectedTime: "0.0%",
    shift: "9 pm - 7 am",
  },
];

Data.insertMany(data)
  .then(() => {
    console.log("Data inserted successfully");
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error("Error inserting data:", err);
    mongoose.connection.close();
  });

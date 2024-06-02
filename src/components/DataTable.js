import React, { useState, useEffect } from "react";
import axios from "axios";

const DataTable = () => {
  const [data, setData] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [shiftData, setShiftData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/data")
      .then((response) => {
        console.log("Initial data:", response.data); // 打印初始数据以调试
        setData(response.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleRowClick = (date) => {
    setSelectedDate(date);
    axios
      .get(`http://localhost:3001/api/shifts/${date}`)
      .then((response) => {
        console.log("Shift data for date", date, ":", response.data); // 打印班次数据以调试
        setShiftData(response.data);
      })
      .catch((error) => console.error("Error fetching shift data:", error));
  };

  return (
    <div>
      <h1>Monthly Pressure Injury Risk Report</h1>
      <table>
        <thead>
          <tr>
            <th>Patient Name</th>
            <th>Patient ID</th>
            <th>Date</th>
            <th>SAFE (%)</th>
            <th>AT RISK (%)</th>
            <th>Position</th>
            <th>Time in Bed (%)</th>
            <th>Time out of Bed (%)</th>
            <th>Disconnected Time (%)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <React.Fragment key={index}>
              <tr onClick={() => handleRowClick(item.date)}>
                <td>{item.patientName}</td>
                <td>{item.patientId}</td>
                <td>{item.date}</td>
                <td>{item.safe}</td>
                <td>{item.atRisk}</td>
                <td>{item.position}</td>
                <td>{item.timeInBed}</td>
                <td>{item.timeOutOfBed}</td>
                <td>{item.disconnectedTime}</td>
              </tr>
              {selectedDate === item.date &&
                shiftData.length > 0 &&
                shiftData.map((shiftItem, shiftIndex) => (
                  <tr key={shiftIndex}>
                    <td>{shiftItem.shift}</td>
                    <td>{shiftItem.safe}</td>
                    <td>{shiftItem.atRisk}</td>
                    <td>{shiftItem.position}</td>
                    <td>{shiftItem.timeInBed}</td>
                    <td>{shiftItem.timeOutOfBed}</td>
                    <td>{shiftItem.disconnectedTime}</td>
                  </tr>
                ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;

import React from "react";

const ShiftTable = ({ data }) => {
  if (!data || data.length === 0) {
    return null;
  }

  return (
    <div>
      <h2>Shift Data</h2>
      <table>
        <thead>
          <tr>
            <th>Shift</th>
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
            <tr key={index}>
              <td>{item.shift}</td>
              <td>{item.safe}</td>
              <td>{item.atRisk}</td>
              <td>{item.position}</td>
              <td>{item.timeInBed}</td>
              <td>{item.timeOutOfBed}</td>
              <td>{item.disconnectedTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShiftTable;

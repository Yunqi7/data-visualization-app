import React from "react";
import { Line } from "react-chartjs-2";

const HistoricalChart = ({ date, data }) => {
  if (!data || data.length === 0) {
    return null;
  }

  const chartData = {
    labels: data.map((item) => item.shift),
    datasets: [
      {
        label: "Safe (%)",
        data: data.map((item) => parseFloat(item.safe)),
        borderColor: "rgba(75, 192, 192, 1)",
        fill: false,
      },
      {
        label: "At Risk (%)",
        data: data.map((item) => parseFloat(item.atRisk)),
        borderColor: "rgba(255, 99, 132, 1)",
        fill: false,
      },
    ],
  };

  return (
    <div>
      <h2>Historical Data for {date}</h2>
      <Line data={chartData} />
    </div>
  );
};

export default HistoricalChart;

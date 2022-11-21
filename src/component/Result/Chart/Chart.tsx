import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

interface ChartProps {
  correctAmount: number;
  wrongAmount: number;
}

const Chart = ({ correctAmount, wrongAmount }: ChartProps) => {
  return (
    <Doughnut
      data={{
        labels: ["맞힌 문제", "틀린 문제"],
        datasets: [
          {
            data: [correctAmount, wrongAmount],
            backgroundColor: [
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 99, 132, 0.2)",
            ],
            borderColor: ["rgba(54, 162, 235, 1)", "rgba(255, 99, 132, 1)"],
            borderWidth: 1,
            datalabels: {
              color: "black",
              font: { size: 24 },
            },
          },
        ],
      }}
      options={{
        plugins: {
          datalabels: {
            color: "white",
            display: function (context) {
              return true;
            },
            font: {
              weight: "bold",
            },
            formatter: (context) => {
              return (
                Math.floor(
                  (Number(context) / (correctAmount + wrongAmount)) * 1000
                ) / 10
              );
            },
          },
        },
      }}
    />
  );
};

ChartJS.register(ArcElement, Tooltip, ChartDataLabels);

export default Chart;

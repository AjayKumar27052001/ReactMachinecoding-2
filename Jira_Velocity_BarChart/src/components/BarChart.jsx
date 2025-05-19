import { useMemo, useState, useEffect } from "react";
import chartData from "../utils/chartdata";

const Bar = ({ item, height }) => {
  const [heightAnimation, showHeightAnimation] = useState(0);
  useEffect(() => {
    let timer = setTimeout(() => showHeightAnimation(height), 10);

    return () => clearTimeout(timer);
  }, [height]);
  return (
    <div
      className="bar"
      style={{
        height: `${heightAnimation * 100}%`,
        backgroundColor: item.colour,

        width: "40px",

        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
      }}
    >
      <div className="tooltip">
        {item.name}-{item.ticketCount}
      </div>
    </div>
  );
};
const BarChart = () => {
  const maxTicketCountVal = () =>
    Math.max(...chartData.map((item) => item.ticketCount));
  const maxTicketCount = useMemo(maxTicketCountVal, []);
  return (
    <div className="chart-Container">
      <div className="chart">
        {chartData.map((item) => (
          <Bar
            key={item.id}
            item={item}
            height={item.ticketCount / maxTicketCount}
          />
        ))}
      </div>
      <div className="y-axis-label">Number of Tickets</div>
      <div className="x-axis-label">Departments</div>
    </div>
  );
};
export default BarChart;

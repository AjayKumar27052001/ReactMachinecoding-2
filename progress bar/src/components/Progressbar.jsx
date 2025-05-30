import React, { useEffect, useState } from "react";

const bars = [0, 5, 10, 40, 80, 60, 50, 30, 90, 70];

const Eachbar = ({ item }) => {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setTimeout(() => setWidth(item), 100);
  }, [width]);
  return (
    <div className="outer">
      <div
        className="inner"
        style={{
          width: `${width}%`,
          transition: "width 1s ease-in-out",
          backgroundColor: item > 5 ? "green" : "red",
          textAlign: "right",
        }}
      >
        {item}%
      </div>
    </div>
  );
};

const Progressbar = () => {
  return (
    <div className="container">
      {bars.map((item, index) => (
        <Eachbar key={index} item={item} />
      ))}
    </div>
  );
};

export default Progressbar;

import React, { useState } from "react";
const accordionData = [
  { id: 1, header: "header-1", content: "content-1" },
  { id: 2, header: "header-2", content: "content-2" },
  { id: 3, header: "header-3", content: "content-3" },
];

const ControlledAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <div className="accordion-container">
      {accordionData.map((item) => (
        <div key={item.id} className="accordion-item">
          <div className="accordion-header-button">
            <div>{item.header}</div>
            <button onClick={() => setActiveIndex(item.id)}>Toggle</button>
          </div>
          {activeIndex === item.id && (
            <div className="accordion-content "> {item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ControlledAccordion;

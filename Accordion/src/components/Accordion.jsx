import { useState } from "react";

const accordionData = [
  { id: 1, header: "header-1", content: "content-1" },
  { id: 2, header: "header-2", content: "content-2" },
  { id: 3, header: "header-3", content: "content-3" },
];

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };
  return (
    <div className="accordion-container">
      {accordionData.map((item) => (
        <div className="accordion-item" key={item.id}>
          <div className="accordion-header-button">
            <div className="accordion-header">{item.header}</div>
            <button
              className="accordion-button"
              onClick={() => handleToggle(item)}
            >
              view
            </button>
          </div>
          {item === activeIndex && (
            <div className="accordion-content"> {item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;

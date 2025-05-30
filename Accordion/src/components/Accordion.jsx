import { useState } from "react";
import ChildComp from "./childComp";

//normal Accordion

const accordionData = [
  { id: 1, header: "header-1", content: "content-1" },
  { id: 2, header: "header-2", content: "content-2" },
  { id: 3, header: "header-3", content: "content-3" },
];

const Accordion = () => {
  const [show, setShow] = useState({
    content1: true,
    content2: true,
    content3: true,
  });
  //const [activeIndex, setActiveIndex] = useState(null);

  const setToggle = (content) => {
    setShow((prev) => ({ ...prev, [content]: !prev[content] }));
  };

  return (
    <div className="accordion-container">
      {accordionData.map((item) => (
        <div key={item.id} className="accordion-item">
          <div className="accordion-header-button">
            <div>{item.header}</div>
            <button onClick={() => setToggle(item.content)}>Toggle</button>
          </div>
          {show[item.content] && (
            <div className="accordion-content "> {item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;

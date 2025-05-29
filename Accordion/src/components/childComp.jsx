import React, { useState } from "react";

const ChildComp = ({ item }) => {
  const [show, setShow] = useState(false);
  return (
    <div key={item.id} className="accordion-item">
      <div className="accordion-header-button">
        <div>{item.header}</div>
        <button onClick={() => setShow((prev) => !prev)}>Toggle</button>
      </div>
      {show && <div className="accordion-content "> {item.content}</div>}
    </div>
  );
};

export default ChildComp;

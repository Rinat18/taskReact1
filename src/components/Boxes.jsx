import React from "react";

const Boxes = ({style}) => {
  return (
    <div>
      <ul>
        {style.map((elem, index) => (
          <li key={index} style={{
            width: elem.width,
            height: elem.height,
            backgroundColor: elem.backgroundColor
          }}></li>
        ))}
      </ul>
    </div>
  );
};

export default Boxes;

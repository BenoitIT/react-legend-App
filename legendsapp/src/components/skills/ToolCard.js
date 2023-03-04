import React from "react";
import './toolcard.css';
const ToolCard = ({header,icon,description}) => {
  return (
    <div className="tool-card">
      <div className="icon">
       {icon}
      </div>
      <div className="tool-title">
       {header}
      </div>
      <div className="tool-descript">
       {description}
      </div>
    </div>
  );
};

export default ToolCard;

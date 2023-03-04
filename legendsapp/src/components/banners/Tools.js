import React from "react";
import ToolDescription from "../skills/ToolDescription";
import ToolCard from "../skills/ToolCard";
import { GrNode } from "react-icons/gr";
import { SiMongodb } from "react-icons/si";
import { FaLaravel } from "react-icons/fa";
import { GrReactjs } from "react-icons/gr";
import "../skills/toolcard.css";
const Tools = () => {
  return (
    <div className="tools-Container">
      <div className="description">
        <div className="heading">
          <h1>My Work tools</h1>
          <h4>libraries and framework to do my work</h4>
        </div>
        <ToolDescription />
      </div>
      <div className="tools-cards">
        <div>
          <ToolCard
            header="React js"
            icon={<GrReactjs />}
            description=" developing responsive designs using React JS
        as well as to build scalable, and
        responsive web applications that provide an excellent user experience."
          />
        </div>
        <div>
          <ToolCard
            header="node js"
            icon={<GrNode />}
            description="node js is useful for building real-time web applications and microservices 
            architectures, as it can handle multiple concurrent connections 
            without creating multiple threads."
          />
        </div>
        <div>
          <ToolCard
            header="Mongo db"
            icon={<SiMongodb />}
            description="  It is particularly useful for handling large amounts of data, 
            and its flexible schema design allows for 
            easy modification and scalability. "
          />
        </div>
        <div>
          <ToolCard
            header="Laravel"
            icon={<FaLaravel />}
            description="  open-source PHP web application framework used for building
             web applications following the Model-View-Controller
              (MVC) architectural pattern."
          />
        </div>
      </div>
    </div>
  );
};

export default Tools;

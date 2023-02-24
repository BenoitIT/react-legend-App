import "./App.css";
import React,{useState} from "react";
import Routings from "./components/Routings";
function App() {
  const [scrollTop, setScrollTop] = useState(0);

  const handleScroll = (event) => {
    setScrollTop(event.currentTarget.scrollTop);
    console.log(scrollTop);
  };
  return (
   
    <div className="App" onScroll={handleScroll}>
      <Routings scrollsensor={scrollTop}/>
    </div>
  );
}

export default App;

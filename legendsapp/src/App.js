import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import Routings from "./components/Routings";
import CardListings from "./components/cardComponents/CardListings";
function App() {
  return (
   
    <div className="App">
      <Routings/>
    </div>
  );
}

export default App;

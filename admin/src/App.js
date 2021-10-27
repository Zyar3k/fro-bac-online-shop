import { BrowserRouter as Router } from "react-router-dom";

import Sidebar from "./components/Sidebar/Sidebar";
import TopBar from "./components/TopBar/TopBar";
import Home from "./pages/Home/Home";

import "./App.css";

function App() {
  return (
    <Router>
      <TopBar />
      <div className="container">
        <Sidebar />
        <Home />
      </div>
    </Router>
  );
}

export default App;

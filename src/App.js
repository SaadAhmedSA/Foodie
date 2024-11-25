import "./App.css";
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar/>
    <Outlet/>
      <Footer />
    </div>
  );
}

export default App;

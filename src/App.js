import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import './components/NAvbar';
import NAvbar from "./components/NAvbar";
import Homee from "./pages/Homee";
import About from "./pages/About";
import Service from "./pages/Service";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NAvbar />
        <Routes>
         <Route path="/" element={<Homee />} />
         <Route path="/about" element={<About />} />
         <Route path="/service" element={<Service />} />
         <Route path="/signup" element={<Signup />} />
         <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

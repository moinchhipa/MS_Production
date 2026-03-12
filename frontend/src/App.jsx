import { Routes, Route } from "react-router";
import "./App.css";
import Home from "./pages/Home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/home" element={<Home />}/>
    </Routes>
  );
}

export default App;

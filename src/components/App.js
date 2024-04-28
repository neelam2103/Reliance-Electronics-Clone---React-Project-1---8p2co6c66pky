import "../styles/App.css";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "../pages/Home";
import Library from "../pages/Library";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Navbar from "./Navbar";

function App() {
  return <div >
<BrowserRouter>
<Navbar/>
<Routes>
  <Route path="/" element={<Home/>}/> 
  <Route path="/login" element={<Login/>}/> 
  <Route path="/register" element={<Register/>}/> 
  <Route path="/library" element={<Library/>}/> 
  <Route path="/" element={<Home/>}/> 
</Routes>
</BrowserRouter>

  </div>;
}

export default App;

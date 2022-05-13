import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Layout from "./components/LayoutComponents/Layout";
import RegiterUser from "./components/RegisterUser/RegisterUser";
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegiterUser />} />
        <Route path="/dashboard" element={<Layout />} />
      </Routes>
    </>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreatePoem from "./pages/CreatePoem";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";
import "./index.css";
// import Footer from "./components/Footer";


export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/" element={<Footer/>}/> */}

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />


        {/* Protected */}
        <Route
          path="/create"
          element={
            <ProtectedRoute>
              <CreatePoem />
            </ProtectedRoute>
          }
          />
  
      </Routes>
     
    </BrowserRouter>
  );
}

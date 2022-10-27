import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login";
import RegistrationPage from "./Components/RegistrationPage";
import data from "./ContextApi";
import "./App.css";

function App() {
  const [userData, setUserData] = useState({});
  console.log(userData);
  return (
    <div className="app">
      <data.Provider value={{ setUserData }}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={userData && userData._id ? <Dashboard /> : <Login />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<RegistrationPage />} />
          </Routes>
        </BrowserRouter>
      </data.Provider>
    </div>
  );
}

export default App;

import React, { useContext, useState } from "react";
import "../App.css";
import axios from "axios";
import data from "../ContextApi";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({
    username: "",
  });
  const { setUserData } = useContext(data);
  const Navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleClick = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/login", user).then((res) => {
      alert(res.data.message);
      setUserData(res.data.user);
    });
  };

  return (
    <div>
      <form className="login">
        <h1>Login</h1>
        <label>
          UserName:
          <input
            type="text"
            id="username"
            name="username"
            value={user.username}
            onChange={handleChange}
          />
        </label>
      </form>
      <div className="click">
        <button className="btn" onClick={handleClick}>
          Login
        </button>
        <div>
          <button className="btn" onClick={() => Navigate("/register")}>
            Register
          </button>
          <span>(If not Registered)</span>
        </div>
      </div>
    </div>
  );
};

export default Login;

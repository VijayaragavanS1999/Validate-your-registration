import React, { useState } from "react";
import "../App.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegistrationPage = () => {
  const [register, setRegister] = useState({
    fname: "",
    lname: "",
    username: "",
    password: "",
    photo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegister((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(register);
    await axios.post("http://localhost:8000/register", register).then((res) => {
      alert(res.data.message);
      Navigate("/");
    });
  };
  const Navigate = useNavigate();
  return (
    <div>
      <form className="login">
        <h1> Register </h1>
        <label>
          FirstName:
          <input
            type="text"
            name="fname"
            value={register.fname}
            onChange={handleChange}
          />
        </label>
        <label>
          LastName:
          <input
            type="text"
            name="lname"
            value={register.lname}
            onChange={handleChange}
          />
        </label>
        <label>
          UserName:
          <input
            type="text"
            name="username"
            value={register.username}
            onChange={handleChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={register.password}
            onChange={handleChange}
          />
        </label>
        <label>
          Photo:
          <input type="file" />
        </label>
      </form>
      <div className="click">
        <button className="btn" onClick={handleSubmit}>
          Register
        </button>
        <div>
          <button className="btn" onClick={() => Navigate("/")}>
            Login
          </button>

          <span>(If not Registered)</span>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;

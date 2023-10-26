import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsFillEyeSlashFill } from "react-icons/bs";

const Login = () => {
  const [toggle, setToggle] = useState(true);
  const handletogle = () => {
    setToggle(!toggle);
  };
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  function handleEmail(event) {
    setFormData((prevState) => ({
      ...prevState,
      email: event.target.value,
    }));
  }

  function handlePassword(event) {
    setFormData((prevState) => ({
      ...prevState,
      password: event.target.value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const res = await fetch(
        "https://saint-stream-server.onrender.com/api/user/login",
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: { "Content-Type": "application/json" },
        }
      );

      const data = await res.json();
      alert(JSON.stringify(data));
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <div className="signup">
      <h2>Login to your Account</h2>
      <label htmlFor="email">Email Address</label>
      <input type="email" id="email" onChange={handleEmail} value={email} />

      <label htmlFor="password">Password</label>
      <div className="input1">
        <input
          type={toggle ? "password" : "text"}
          id="password"
          onChange={handlePassword}
          value={password}
        />
        <span className="icon">
          <BsFillEyeSlashFill onClick={handletogle} />
        </span>
      </div>

      <button className="btn" onClick={handleSubmit}>
        Submit
      </button>
      <p>
        Don't have an Account <Link to="/">Signup</Link>
      </p>
      <p>
        Forget Password <Link to="/reset">Click Here</Link>
      </p>
    </div>
  );
};

export default Login;

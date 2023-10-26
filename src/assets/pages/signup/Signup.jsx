import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsFillEyeSlashFill } from "react-icons/bs";

const Signup = () => {
  const [signupData, setsignupData] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const { username, email, password, confirmpassword } = signupData;

  const [toggle, setToggle] = useState(true);
  const handletoggle = () => {
    setToggle(!toggle);
  };
  const [togglee, setTogglee] = useState(false);
   const handletogglee = () => {
     setTogglee(!togglee);
   };

  function handleUsername(event) {
    setsignupData((prevState) => ({
      ...prevState,
      username: event.target.value,
    }));
  }

  function handleEmaill(event) {
    setsignupData((prevState) => ({
      ...prevState,
      email: event.target.value,
    }));
  }

  function handlePasswordd(event) {
    setsignupData((prevState) => ({
      ...prevState,
      password: event.target.value,
    }));
  }

  function handleConfirmpassword(event) {
    setsignupData((prevState) => ({
      ...prevState,
      confirmpassword: event.target.value,
    }));
  }

  async function handleSubmitt(event) {
    event.preventDefault();
    try {
      const res = await fetch(
        "https://saint-stream-server.onrender.com/api/user/register",
        {
          method: "POST",
          body: JSON.stringify(signupData),
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
      <h2>Sign up for an Account</h2>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        onChange={handleUsername}
        value={username}
      />
      <label htmlFor="email">Email Address</label>
      <input type="text" id="email" onChange={handleEmaill} value={email} />
      <label htmlFor="password">Password</label>
      <div className="input1">
        <input
          type={toggle ? "password" : "text"}
          id="password"
          placeholder="must contain 8 letters"
          onChange={handlePasswordd}
          value={password}
        />
        <span className="icon">
          <BsFillEyeSlashFill onClick={handletoggle}>
            {" "}
            {toggle ? "Hide" : "show"}{" "}
          </BsFillEyeSlashFill>
        </span>
      </div>

      <label htmlFor="confirm">Confirm Password</label>
      <div className="input1">
        <input
          type={togglee ? "text" : "password"}
          id="confirm"
          onChange={handleConfirmpassword}
          value={confirmpassword}
        />
        <span className="icon">
          <BsFillEyeSlashFill onClick={handletogglee}>
            {" "}
            {togglee ? "Hide" : "show"}{" "}
          </BsFillEyeSlashFill>
        </span>
      </div>

      <button className="btn" onClick={handleSubmitt}>
        Submit
      </button>

      <p>
        Have an Account <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Signup;

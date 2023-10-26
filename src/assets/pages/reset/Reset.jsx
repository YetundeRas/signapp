import React, { useState } from "react";
import { Link } from "react-router-dom";

const Reset = () => {
  const [forgetpasswordData, setforgetpasswordData] = useState({
    email: "",
  });
  const { email } = forgetpasswordData;
  function handleeEmail(event) {
    setforgetpasswordData((prevState) => ({
      ...prevState,
      email: event.target.value,
    }));
  }
  async function handleSubmmit(event) {
    try {
      const res = await fetch(
        "https://saint-stream-server.onrender.com/api/v1/user/forgot-password",
        {
          method: "POST",
          body: JSON.stringify(forgetpasswordData),
          headers: { "content-Type": "application/json" },
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
      <h2>Forget Password</h2>
      <label htmlFor="email">Email Address</label>
      <input
        type="text"
        id="email"
        placeholder="enter Email address"
        onChange={handleeEmail}
        value={email}
      />
      

      <button className="btn" onClick={handleSubmmit}>
        Reset Password
      </button>
      <p>
        Remember my Password <Link to="/login">Login</Link>{" "}
      </p>
      {/* <Link to="/changepassword">password</Link> */}
    </div>
  );
};

export default Reset;

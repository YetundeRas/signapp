import React, { useState } from 'react'
import {BsFillEyeSlashFill} from 'react-icons/bs'

const Changepassword = () => {
  const [changepasswordData, setchangepasswordData] = useState({
    password:""
  })
  const { password } = changepasswordData;
  
  function handlepassworddd(event) {
    setchangepasswordData((prevState) => ({
      ...prevState,
      password: event.target.value,
    }))
  }
  async function handleSubmittt(event) {
    try {
      const res = await fetch(
        "https://saint-stream-server.onrender.com/api/user/reset-password/:resetToken",
        {
          method: "GET",
          body: JSON.stringify(changepasswordData),
          headers: {"content-Type": "application/json"}
        }
      );
      const data = await res.json();
      alert(JSON.stringify(data))

      
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className="signup">
      <h2>Reset Password</h2>
      <label htmlFor="password">Password</label>
      <div className="input1">
        <input
          type="password"
          id="password"
          placeholder="must contain 8 letters"
          onChange={handlepassworddd}
          value={password}
        />
        <span className="icon">
          <BsFillEyeSlashFill />
        </span>
      </div>
      <label htmlFor="confirm">Confirm Password</label>
      <div className="input1">
        <input type="password" id="confirm" />
        <span className="icon">
          <BsFillEyeSlashFill />
        </span>
      </div>
      <button className="btn" onClick={handleSubmittt}>
        Submit
      </button>
    </div>
  );
}

export default Changepassword

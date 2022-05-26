import React, {useState, useEffect} from "react";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onFormSubmit = ()=> {
        
    }
  return(
      <>
      <form onSubmit={onFormSubmit}>
          <label htmlFor="username">Username</label>
          <input
          type="text"
          id="username"
          value={username}
          onChange={(e)=>setUsername(e.target.value)}/>

          <label htmlFor="password">Password</label>
          <input
          type="text"
          id="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}/>

          <button type="submit">Submit</button>
      </form>

      </>
  )
};
export default Login;



import {  useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import NavBar from "../Shared/NavBar/NavBar";
import { useRef } from "react";



const Login = () => {
    const navigate = useNavigate();
    const email = useRef();
    const password = useRef();
  
    const handleLogin = (event) => {
      event.preventDefault();
      console.log(email.current.value, password.current.value);
      if (email.current.value === 'softypy@gmail.com' && password.current.value === 'S@ftyPyAdmin24') {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Login Successfully!',
          showConfirmButton: false,
          timer: 1500
        });
        navigate('/dashboard');
      } else {
        Swal.fire({
          icon: "error",
          position: 'center',
          title: 'Invalid Email & Password',
          showConfirmButton: false,
          timer: 1500
        });
      }
    };

  return (
    <div>
    <div className="shadow-lg">
    <NavBar />
  </div>
      <div className="signupWrap">
      <h3 className="mb-5 text-3xl font-bold text-center capitalize ">Login to admin pannel !</h3>
        
        <form className="businessFormWrap" onSubmit={handleLogin}>
          <div className="my-5">
            <input
            ref={email}
            name="email"
              className="signupInput border p-2 rounded-sm"
              label="Email "
              size="small"
              
            />
          </div>
          <div className="mb-5">
            <input
            ref={password}
            name="password"
            type='password' 
              className="signupInput border p-2"
              label="Password "
              size="small"
            />
          </div>
          <button
            type="submit"
            className="  bg-[#1586FD] w-[310px] h-10 text-white businessBtn"
          >
            Login{" "}
          </button>

        
        </form>
   
      </div>
    </div>
  );
};

export default Login;

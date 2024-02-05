import { useForm } from "react-hook-form";
import NavBar from "../Shared/NavBar/NavBar";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import Swal from "sweetalert2";


const Login = () => {
  const {signin} = useContext(AuthContext)
  const navigate = useNavigate()
    const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
   signin(data.email, data.password)
   .then((data)=>{
    console.log(data)
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Login Successfully ! ',
      showConfirmButton: false,
      timer: 1500
    })
    navigate('/')
   })
   .catch(error=>console.log(error))
  };
  
  return (
    <div>
     <div className=" clientSection">
        <div className="navsBarWrap">
          <NavBar />
        </div>
      </div>
    <div className="my-16">
      <h2 className="text-3xl font-bold text-center">Hi There, Welcome Back!</h2>
      <div className="w-full mx-auto addServicesWrap">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="formControl">
            <div className="singleForm">
              <label>Email </label>
              <input
               {...register("email", { required: true })}
                name="email"
                placeholder="Email"
                type="email"
                className="inputField"
                autoComplete="off"
              />

            </div>
            <div className="singleForm">
              <label>Password</label>
              <input
                {...register("password", { required: true })}
                name="password"
                placeholder="Password"
                type="password"
                className="inputField"
                autoComplete="off"
              />
            </div>
          </div>

          <div className="formControl">
            <button className="submitBtn" type="submit">
              Submit
            </button>
          </div>
          <div>
            <p className="text-center ">By proceeding, I agree to SoftyPy's <b className="text-[#951FE8]">Terms & Conditions, Community Guidelines</b>, & <b className="text-lg text-[#951FE8]">Privacy Policy</b></p>
          </div>
          <div className="my-8 signupLine"> </div>
          <div className="text-center">
            <p>Don’t have an account an account?  <Link to='/signup'><b className="text-[#951FE8]">Sign up</b></Link></p>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Login;

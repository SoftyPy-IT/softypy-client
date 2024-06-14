import { FormControl, InputLabel, Select, TextField } from "@mui/material";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import NavBar from "../Shared/NavBar/NavBar";
import { useSetRegisterMutation } from "../../redux/features/auth/authApi";

const Signup = () => {
  const navigate = useNavigate();
  const [setRegister, { isSuccess }] = useSetRegisterMutation();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const { name, email, password, role } = data;
    const userInfo = {
      name,
      email,
      password,
      role
    };
    console.log(userInfo)
    setRegister(userInfo);
    reset();
  };
  if (isSuccess) {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Register successfully !",
      showConfirmButton: false,
      timer: 1500,
    });
    navigate("/login");
  }

  return (
    <div className="">
      <div className="shadow-lg ">
        <NavBar />
      </div>
      <div className="signupWrap">
        <h3 className="text-3xl font-bold text-center   capitalize">
          Create an account
        </h3>

        <form className="SignupFormWrap" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className="flex items-center mt-5">
              <TextField
                {...register("name")}
                className="signupInput"
                label="Full Name "
                id="name"
                size="small"
              />
            </div>
            <div className="mt-5">
              <FormControl>
                <InputLabel htmlFor="grouped-native-select">
                  Select Role
                </InputLabel>
                <Select
                  className="signupInput"
                  {...register("role", { required: true })}
                  name="role"
                  fullWidth
                  native
                  id="grouped-native-select"
                  label="Select Role"
                  size="small"
                >
                  <option value="User">
                    Select Role
                  </option>
                  <option>
                  User
                </option>
                  <option value="Admin">Admin</option>
                </Select>
              </FormControl>
            </div>

            <div className="flex items-center mt-5">
              <TextField
                {...register("email")}
                className="signupInput"
                label="Email Address "
                id="email"
                size="small"
              />
            </div>
            <div className="flex items-center my-5">
              <TextField
                {...register("password")}
                className="signupInput"
                label="Password "
                id="password"
                size="small"
              />
            </div>
            <button
              type="submit"
              className="  bg-[#1586FD] h-10 text-white businessBtn"
            >
              Register
            </button>
          </div>
        </form>
        <span className="block mt-3 text-center ">
       Already have an account?
        <Link to="/login">
          {" "}
          <b className="text-[#1586FD]">
           Login
          </b>
        </Link>
      </span>
      </div>
    </div>
  );
};

export default Signup;

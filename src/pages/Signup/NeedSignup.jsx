// /* eslint-disable react/no-unescaped-entities */
// import { useForm } from "react-hook-form";
// import NavBar from "../Shared/NavBar/NavBar";
// import { Link, useNavigate } from "react-router-dom";
// import { useContext } from "react";
// import { AuthContext } from "../../contexts/AuthProvider";
// import Swal from "sweetalert2";

// const Signup = () => {
//   const { createUser, updateUserProfile } = useContext(AuthContext);
//   const navigate = useNavigate();
//   const { register, handleSubmit } = useForm();
//   const onSubmit = (data) => {
//     createUser(data.email, data.password)
//       .then((result) => {
//         const loggedUser = result.user;
//         console.log(loggedUser)
//         updateUserProfile(data.name, data.photoURL)
//           .then(() => {
//             console.log(data)
//             Swal.fire({
//               position: "center",
//               icon: "success",
//               title: "Sign Up Successfully ! ",
//               showConfirmButton: false,
//               timer: 1500,
//             });
//             navigate("/");
//           })
//           .catch((error) => console.log(error));
//       })
//       .catch((error) => console.log(error));
//   };

//   return (
//     <div>
//       <div className=" clientSection">
//         <div className="navsBarWrap">
//         <div className="text-white">
//         <NavBar />
//         </div>
//         </div>
//       </div>
//       <div className="my-16">
//         <h2 className="text-3xl font-bold text-center">
//           Create A New Account{" "}
//         </h2>
//         <div className="w-full mx-auto addServicesWrap">
//           <form onSubmit={handleSubmit(onSubmit)}>
//             <div className="formControl">
//               <div className="singleForm">
//                 <label>Name </label>
//                 <input
//                   {...register("name", { required: true })}
//                   name="name"
//                   placeholder="Name"
//                   type="text"
//                   className="inputField"
//                   autoComplete="off"
//                 />
//               </div>
//               <div className="singleForm">
//                <select>
//                 <option value="User">User</option>
//                 <option value="Admin">Admin</option>
//                </select>
//               </div>
//               <div className="singleForm">
//                 <label>Email </label>
//                 <input
//                   {...register("email", { required: true })}
//                   name="email"
//                   placeholder="Email"
//                   type="email"
//                   className="inputField"
//                   autoComplete="off"
//                 />
//               </div>
//               <div className="singleForm">
//                 <label>Password</label>
//                 <input
//                   {...register("password", { required: true })}
//                   name="password"
//                   placeholder="Password"
//                   type="password"
//                   className="inputField"
//                   autoComplete="off"
//                 />
//               </div>
//             </div>

//             <div className="formControl">
//               <button className="submitBtn" type="submit">
//                 Submit
//               </button>
//             </div>
//             <div>
//               <p className="text-center ">
//                 By proceeding, I agree to SoftyPy's{" "}
//                 <b className="text-[#680C70]">
//                   Terms & Conditions, Community Guidelines
//                 </b>
//                 , & <b className="text-lg text-[#680C70]">Privacy Policy</b>
//               </p>
//             </div>
//             <div className="my-8 signupLine"> </div>
//             <div className="text-center">
//               <p>
//                 Already have an account?{" "}
//                 <Link to="/login">
//                   <b className="text-[#680C70]">Login</b>
//                 </Link>
//               </p>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;

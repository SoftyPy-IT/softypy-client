import Container from "../../ui/Container";
import NavBar from "../Shared/NavBar/NavBar";
import { HiOutlineLink } from "react-icons/hi";
import "./Careers.css";
import { useNavigate } from "react-router-dom";
import { useEmployeeMutation } from "../../redux/features/employee/employeeApi";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
const CareersApply = () => {
  const navigate = useNavigate();
  const [employee, { isSuccess }] = useEmployeeMutation();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('phone', data.phone);
    formData.append('message', data.message);
    formData.append('github', data.github);
    formData.append('linkedIn', data.linkedIn);
    formData.append('cv', data.cv[0]);
    console.log()

    try {
      employee(formData);
      if (isSuccess) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Application submitted successfully!.",
          showConfirmButton: false,
          timer: 1500,
        });
      }
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="shadow-lg">
        <NavBar />

      </div>
      <Container>
        <div className="sectionMargin">
          <div className="flex items-center">
            <h3 className="text-xl md:text-3xl font-bold mr-2">
              Frontend Developer
            </h3>
            <span>(Fresher)</span>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-5 w-full md:max-w-[830px] space-y-8">
            <div className="block md:flex items-center justify-between space-y-3">
              <div className="relative w-max">
                <input
                name='name'
                {...register("name", { required: true })}
                  className=" peer border-b applyInput border-[#40C7F4] py-2 text-[#40C7F4] focus:outline-none "
                  placeholder=""
                  type="text"
                />
                <label className="applyLevel" htmlFor="">
                  Name
                </label>
              </div>
              <div className="relative w-max">
                <input
                name='email'
                {...register("email", { required: true })}
                  className=" peer border-b applyInput border-[#40C7F4]  py-2 text-[#40C7F4] focus:outline-none "
                  placeholder=""
                  type="text"
                />
                <label className="applyLevel" htmlFor="">
                  Email
                </label>
              </div>
            </div>
            <div className="block md:flex items-center justify-between  space-y-3">
              <div className="relative w-max">
                <input
                name='phone'
                {...register("phone", { required: true })}
                  className=" peer border-b applyInput border-[#40C7F4]  py-2 text-[#40C7F4] focus:outline-none "
               
                  type="number"
                />
                <label className="applyLevel" htmlFor="">
                  Phone Number
                </label>
              </div>
              <div className="relative w-max">
                <input
                name='linkedIn'
                {...register("linkedIn", { required: true })}
                  className=" peer border-b applyInput border-[#40C7F4]  py-2 text-[#40C7F4] focus:outline-none "
                  placeholder=""
                  type="text"
                />
                <label className="applyLevel" htmlFor="">
                  LinkedIn
                </label>
              </div>
            </div>
            <div className="block md:flex items-center justify-between  space-y-3">
              <div className="relative w-max">
                <input
                name='github'
                {...register("github", { required: true })}
                  className=" peer border-b applyInput border-[#40C7F4]  py-2 text-[#40C7F4] focus:outline-none "
                  placeholder=""
                  type="text"
                />
                <label className="applyLevel" htmlFor="">
                  Github Link
                </label>
              </div>
              <div className="relative w-max">
                <input
                name='message'
                {...register("message", { required: true })}
                  className=" peer border-b applyInput border-[#40C7F4]  py-2 text-[#40C7F4] focus:outline-none "
                  placeholder=""
                  type="text"
                />
                <label className="applyLevel" htmlFor="">
                  Message
                </label>
              </div>
            </div>
            <div className="block md:flex items-center justify-between space-y-3">
            <div className="donationFields">
              <input
                name='cv'
                {...register("cv", { required: true })}
                type="file" id="files" className="hidden" />
              <label
                htmlFor="files"
                className="flex  font-bold items-center text-[#40C7F4] cursor-pointer  "
              >
                <span>
                  <HiOutlineLink size={22} className="mr-1" />
                </span>
                Attach Your CV
              </label>
            </div>
            <button type="submit" className="applyBtn">
              Send Your CV
            </button>
          </div>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default CareersApply;

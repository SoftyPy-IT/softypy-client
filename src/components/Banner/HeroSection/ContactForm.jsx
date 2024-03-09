import { useForm } from "react-hook-form";
import { useCrateOrderMutation } from "../../../redux/features/orders/ordersApi";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";

const ContactForm = () => {
  const navigate = useNavigate();
  const [crateOrder, { isSuccess }] = useCrateOrderMutation();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    const user = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message,
    };

    try {
      if (isSuccess) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Thank you for submission ! We will contact you soon.",
          showConfirmButton: false,
          timer: 1500,
        });
      }
      crateOrder(user);
    } catch (error) {
      console.log(error);
    }
    navigate("/");
  };

  return (
    <>
      <div className=" flex items-center py-8 px-6">
        <div className="w-full">
          <h2 className=" text-[#F81600] font-bold text-4xl uppercase mb-10">
            Get In Touch
          </h2>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex items-center justify-between ">
                <div className="formControl">
                  <TextField
                    {...register("name", { required: true })}
                    name="name"
                    fullWidth
                    label="Enter Your Full Name"
                    className="getContactField"
                  />
                </div>
                <div className="formControl">
                  <TextField
                    {...register("name", { required: true })}
                    name="name"
                    fullWidth
                    label="Phone Number "
                    className="getContactField"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between ">
                <div className="formControl">
                  <TextField
                    {...register("name", { required: true })}
                    name="name"
                    fullWidth
                    label="Email Address "
                    className="getContactField"
                  />
                </div>
                <div className="formControl">
                  <TextField
                    {...register("name", { required: true })}
                    name="name"
                    fullWidth
                    label="Message "
                    className="getContactField"
                  />
                </div>
              </div>
              {errors.name && (
                <p className="text-red-500 ">Name is required!</p>
              )}
            
              <div>
                <button className="sendMessageBtn">Send Message </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;

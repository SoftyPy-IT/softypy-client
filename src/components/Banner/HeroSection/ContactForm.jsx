import { useForm } from "react-hook-form";

import Swal from "sweetalert2";
import { TextField } from "@mui/material";
import { useCreateOrderMutation } from "../../../redux/features/orders/ordersApi";

const ContactForm = ({ onClose }) => {
  const [createOrder, { isSuccess }] = useCreateOrderMutation();
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
      createOrder(user);
    } catch (error) {
      console.log(error);
    }
    onClose();
  };

  return (
    <>
      <div className=" flex items-center py-8 px-6">
        <div className="w-full">
          <h2 className=" text-[#2D57A2] font-bold text-2xl md:text-4xl uppercase mb-10">
            Get In Touch
          </h2>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className=" block md:flex items-center justify-between ">
                <div className="formControl">
                  <TextField
                    {...register("name", { required: true })}
                    name="name"
                    fullWidth
                    label="Enter Your Full Name"
                    className="getContactField"
                  />
                  {errors.name && (
                    <p className="text-red-500 ">Name is required!</p>
                  )}
                </div>

                <div className="formControl">
                  <TextField
                    {...register("phone", { required: true })}
                    name="phone"
                    type="text"
                    fullWidth
                    label="Phone Number "
                    className="getContactField"
                  />
                  {errors.name && (
                    <p className="text-red-500 ">Phone number is required!</p>
                  )}
                </div>
              </div>
              <div className="block md:flex  items-center justify-between ">
                <div className="formControl">
                  <TextField
                    {...register("email", { required: true })}
                    name="email"
                    type="email"
                    fullWidth
                    label="Email Address "
                    className="getContactField"
                  />
                  {errors.name && (
                    <p className="text-red-500 ">Email is required!</p>
                  )}
                </div>

                <div className="formControl">
                  <TextField
                    {...register("message")}
                    name="message"
                    type="text"
                    fullWidth
                    label="Message "
                    className="getContactField"
                  />
                </div>
              </div>

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

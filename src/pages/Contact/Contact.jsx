import {
  FaFacebookF,
  FaPhoneAlt,
  FaEnvelope,
  FaTwitter,
  FaUsers,
} from "react-icons/fa";
import Iframe from "react-iframe";
import "./Contact.css";
import { useRef } from "react";
import { useEffect } from "react";
import NavBar from "../Shared/NavBar/NavBar";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Subscribe from "../../components/Subscribe/Subscribe";
import Container from "../../ui/Container";
import { TextField } from "@mui/material";
import contact from "../../../public/assets/message.png";
import address from "../../../public/assets/address.png";
import address2 from "../../../public/assets/address2.png";
import address3 from "../../../public/assets/address3.png";
import { useCreateOrderMutation } from "../../redux/features/orders/ordersApi";
const Contact = () => {
  const [createOrder, { isSuccess }] = useCreateOrderMutation();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();
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
    navigate("/");
  };

  const ref = useRef(null);
  useEffect(() => {
    import("@lottiefiles/lottie-player");
  });

  const addressData = [
    {
      id: 1,
      name: "Office Address",
      title: "Ta-134/A, Bissaw Road",
      text: "Link Rd, Dhaka",
      img: address,
    },
    {
      id: 1,
      name: "Email Us ",
      title: "support@renovix.net",
      text: "info@codesless.com",
      img: address2,
    },
    {
      id: 1,
      name: "Call Us",
      title: "01762-380594",
      text: "01670-405744",
      img: address3,
    },
  ];


  return (
    <div>
      <section>
        <div className=" contactHeroSection">
          <div className="navsBarWrap">
            <div className="text-white">
              <NavBar />
            </div>
            <div className="items-center justify-center text-center md:flex">
              <div className="questionWrap">
                <lottie-player
                  id="firstLottie"
                  ref={ref}
                  autoplay
                  loop
                  mode="normal"
                  src="/question.json"
                  className="animation"
                ></lottie-player>
              </div>
              <div className="ml-3 text-white">
                <h2 className="mt-2 text-3xl font-bold capitalize md:mt-0 md:text-4xl">
                  Need Exceptional Services? <br /> call us 24/7
                </h2>
                <span className="block mt-2">+880 1762-380594</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Container>
        <div className="contactInfoWrap">
          <section className="getInTouch">
            <div className="getInTouchLeft">
              <div className="getInTouchHead">
                <p className="text-xl font-bold uppercase">
                  Reach & Contact us
                </p>
                <h2 className="my-2 text-4xl font-bold uppercase">
                  Get in touch{" "}
                </h2>
                <p className="mb-3">
                  We would love to talk about how we can work together. Send us
                  a message below and we will respond as soon as possible.
                </p>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="formControl">
                  <label>
                    {" "}
                    Name <span className="text-xl text-red-500">*</span>
                  </label>
                  <input name="name" type="text" placeholder=" " />
                  <TextField
                    {...register("name", { required: true })}
                    name="name"
                    fullWidth
                    label="Enter Your Full Name"
                    className="inputField"
                  />
                </div>
                {errors.name && (
                  <p className="text-red-500 ">Name is required!</p>
                )}
                <div className="formControl">
                  <label>
                    {" "}
                    Email <span className="text-xl text-red-500">*</span>
                  </label>
                  <TextField
                    {...register("email", { required: true })}
                    name="email"
                    fullWidth
                    label="Enter Your Email "
                    className="inputField"
                  />
                </div>
                <div className="formControl">
                  <label>
                    {" "}
                    Phone Number <span className="text-xl text-red-500">*</span>
                  </label>
                  <TextField
                    {...register("phone", { required: true })}
                    name="phone"
                    type="number"
                    fullWidth
                    label="Enter Your Phone Number  "
                    className="inputField"
                  />
                  {errors.phone && (
                    <p className="text-red-500 ">Phone number is required!</p>
                  )}
                </div>
                <div className="formControl">
                  <label> Message </label>
                  <textarea
                    {...register("message", { required: true })}
                    name="message"
                    placeholder=" Enter Your Message"
                    id=""
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>
                <div>
                  <button className="sendMessageBtn">Submit Order </button>
                </div>
              </form>
            </div>
            <div className="mt-5 getInTouchRight md:mt-0 ">
              <img src={contact} alt="" />
              <div className="contactInfo">
                <div className="flex items-center">
                  <FaPhoneAlt className="contactIcon" />
                  <div className="ml-2">
                    <p className="text-2xl font-bold uppercase upercase">
                      Phone Number
                    </p>
                    <strong>+880 1762-380594</strong>
                  </div>
                </div>
                <div className="contactLine"></div>
                <div className="flex items-center">
                  <FaEnvelope className="contactIcon" />
                  <div className="ml-2">
                    <p className="text-2xl font-bold uppercase upercase">
                      Email
                    </p>
                    <strong>softypy@gmail.com</strong>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="socialMedia sectionMargin">
            <div className="singleSocialMedia">
              <div className="contacSocialIcon">
                <FaFacebookF />
              </div>
              <h4 className="my-2 text-3xl font-bold">33K</h4>
              <strong>Follower</strong>
            </div>
            <div className="singleSocialMedia">
              <div className="contacSocialIcon">
                <FaUsers />
              </div>
              <h4 className="my-2 text-3xl font-bold">99K</h4>
              <strong>Members</strong>
            </div>
            <div className="activeSocial">
              <div className="contacSocialIcon">
                <FaTwitter />
              </div>
              <h4 className="my-2 text-3xl font-bold">59K</h4>
              <strong>Followers</strong>
            </div>
            <div className="singleSocialMedia">
              <div className="contacSocialIcon">
                <FaEnvelope />
              </div>
              <h4 className="my-2 text-3xl font-bold">150K</h4>
              <strong>Subscribes</strong>
            </div>
          </section>
        </div>
        <section className="sectionMargin">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 place-items-center">
            {addressData.map((address) => (
              <div key={address.id} className="address">
                <img src={address.img} alt="address" />
                <h3 className="text-3xl font-semibold">{address.name}</h3>
                <p>{address.title} </p>
                <p>{address.text}</p>
              </div>
            ))}
          </div>
        </section>
      </Container>
      <div className="sectionMargin"></div>
      <section className="flex flex-row items-center justify-center w-full mx-auto mb-32 md:my-24 md:mb-32">
        <Iframe
          className="lg:h-[600px] h-[300px] "
          url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.702714087243!2d-118.24379858493394!3d34.05149622521712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c648957fbb05%3A0x8c6c875a0069f4c9!2s26%20N%20Los%20Angeles%20St%2C%20Los%20Angeles%2C%20CA%2090012%2C%20USA!5e0!3m2!1sen!2sbd!4v1674159891667!5m2!1sen!2sbd"
          width="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          position="relative"
        ></Iframe>
      </section>
      <Subscribe />
    </div>
  );
};

export default Contact;

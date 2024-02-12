import SectionTitle from "../../pages/Shared/SectionTitle/SectionTitle";
import { FaArrowRight } from "react-icons/fa";
import "./Services.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    })
    


  return (
    <div className="my-16 w-[1200px] mx-auto">
      <div className="mb-10">
        <SectionTitle
          title="Our Services"
          text="We Have A Wide Array Of Services To Offer Our Clients. But We Can Generally Boil All Of Our Services Down Into Different Categories"
        ></SectionTitle>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 ">
        {services.map((service) => (
          <div key={service.id} className="serviceBox mt-5 ">
            <img src={service.img} alt="web" />
            <div className="text-left">
              <h4 className="text-xl text-[#F99049] font-bold">
                {service.title}
              </h4>
              <p className="my-2">{service.subTitle}</p>
             <Link to={`/services/${service._id}`}>
             <div className="flex items-center">
                <button className="mr-2">Learn More</button>
                <FaArrowRight className="text-[#951FE8] " />
              </div>
             </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

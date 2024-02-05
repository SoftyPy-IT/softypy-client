import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import "./Services.css";
import { FaArrowRight } from "react-icons/fa";
import usePopularServices from "../../../hooks/usePopularServices";
import { Link } from "react-router-dom";

const Services = () => {
const [singleservices] = usePopularServices()
console.log(singleservices)
const handleDetails = ()=>{
  fetch('',{
    method: "POST",
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify()
  })
  .then(res=>res.json())
  .then(data=>{
    console.log(data)
  })
}

  // const cardData = [
  //   {
  //     id: 1,
  //     img: icon,
  //     category: 'Development'
  //     name: "Web & APP Development",
  //     desc:"SoftyPy specializes in crafting dynamic websites and innovative mobile apps, delivering a seamless user experience and digital solutions tailored to your needs."
  //   },
  //   {
  //     id: 2,
  //     img: icon2,
  //     category: 'Design'
  //     name: "ERP Solutions",
  //     desc: "ERP Solutions optimize business operations through integrated software, fostering efficiency and informed decision-making for sustained growth."
  //   },
    
  //   {
  //     id: 3,
  //     img: icon5,
  //     name: "UI/UX Design ​",
  //     desc: "At SoftyPy, we craft exceptional UI/UX designs that harmonize aesthetics and functionality, ensuring delightful user experiences for your digital products."
  //   },
  //   {
  //     id: 4,
  //     img: icon3,
  //     name: "Digital Marketing",
  //     desc:"SoftyPy drives business growth with data-driven digital marketing strategies, elevating your online presence and engaging target audiences for lasting results."
  //   },
  //   {
  //     id: 5,
  //     img: icon4,
  //     name: "SEO ",
  //     desc: 'SoftyPy SEO services can build your high rankings and achieving your organic traffic & improve search engine result.'
  //   },
    
  // ];
  return (
    <div className="servicesWraps">
      <div className="">
        <SectionTitle
          title="Our Services"
          text=" Unlocking digital potential, we provide bespoke IT services that blend innovation with reliability, ensuring your business stands out in a rapidly evolving tech landscape"
        ></SectionTitle>
      </div>
      <div className="ourServicesWrap">
        <div  className="ourServiceLeftSide">
          <h3 className="text-3xl mb-3 text-[#F87015] font-bold ">
            Your Vision, Our Mission.
          </h3>
          <p>
            {" "}
            At SoftyPy, we drive digital excellence through our range of IT
            services. Our innovative solutions are tailored to meet your
            specific needs, ensuring your business remains agile and
            competitive. Partner with us to accelerate your digital journey and
            thrive in the evolving tech landscape.
          </p>
        </div>
        <div className="ourServicesRightSide">
          <div>
            <div className="cardsWrap">
              {singleservices.map((card) => (
                <div key={card.id} className="cards">
                  <div className="inner-box">
                    <div className="cards-front cards-front5">
                      <div className="iconWrap">
                        <img src={card.image} alt="icon" />
                      </div>
                      <p className="mt-2 font-bold">{card.title}</p>
                    </div>
                    <div className="cards-back text-white">
                      <div className="cards-back-content md:px-3 text-center">
                        <b className="block"> {card.title}</b>
                        <small className="my-1 md:my-3">
                         {card.subtitle.slice(0, 80)}...
                        </small>
                        <div onClick={handleDetails}>
                          <Link to={`singleService/${card._id}`}> <div className="flex items-center justify-center"> <span>Read More </span><small><FaArrowRight/></small></div></Link>
                          </div>
                          {/* type=${packageType} */}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

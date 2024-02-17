import { FaArrowRight } from "react-icons/fa";
import "./Product.css";
import { FaLaptopCode } from "react-icons/fa";
const Products = () => {
  const cardData = [
    {
      id: 1,
      name: "Web & APP Development",
      desc:"SoftyPy specializes in crafting dynamic websites and innovative mobile apps, delivering a seamless user experience and digital solutions tailored to your needs."
    },
    {
      id: 2,
      name: "ERP Solutions",
      desc: "ERP Solutions optimize business operations through integrated software, fostering efficiency and informed decision-making for sustained growth."
    },
    
    {
      id: 3,
      name: "UI/UX Design ​",
      desc: "At SoftyPy, we craft exceptional UI/UX designs that harmonize aesthetics and functionality, ensuring delightful user experiences for your digital products."
    },
    {
      id: 4,
      name: "Digital Marketing",
      desc:"SoftyPy drives business growth with data-driven digital marketing strategies, elevating your online presence and engaging target audiences for lasting results."
    },
    // {
    //   id: 5,
    //   name: "SEO ",
    //   desc: 'SoftyPy SEO services can build your high rankings and achieving your organic traffic & improve search engine result.'
    // },
    
  ];
  return (
    <div className="my-24">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-6">
        {cardData.map((data) => (
          <div key={data.id} className="productCard">
            <div className="moreServiceIconWrap">
           <FaLaptopCode className="" size={70} />
            </div>
            <div className="productCardContent">
              <h3 className="text-xl font-bold">{data.name}</h3>
              <small>{data.desc}</small>
              <div className="flex items-center cursor-pointer mt-2">
                <span>Learn More </span>
                <FaArrowRight className="ml-2 text-[#F81600] " />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;

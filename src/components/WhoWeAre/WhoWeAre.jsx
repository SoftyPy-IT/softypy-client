import "./WhoWeare.css";
import Container from "../../ui/Container";
import img from '../../../public/assets/sortware.png'
const WhatWeDo = () => {
  return (
    <div className="sectionMargin h-[420px] overflow-hidden">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-center" >
          <div className="w-[50%] ">
           <img src={img} className="w-[500px] object-cover" alt="software" />
          </div>
          <div className="w-[100%] md:w-[50%]">
            <h2 className=" mb-3 text-[#680C70] font-bold text-4xl">
              Who We Are ?
            </h2>
            <p>
              {" "}
              At <b className="text-[#680C70]">SoftyPy</b>, we are dedicated to
              providing rapid and effective disaster relief and humanitarian
              assistance to communities in crisis around the world. Our mission
              is to alleviate suffering, restore dignity, and promote resilience
              among those affected by emergencies, natural disasters, conflicts,
              and other humanitarian crises.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WhatWeDo;

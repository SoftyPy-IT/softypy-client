import { FaAngleRight } from "react-icons/fa";
import NavBar from "../Shared/NavBar/NavBar";
import "./ERP.style.css";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import { HiClipboardList, HiOutlineCloudDownload } from "react-icons/hi";
import { FaGear } from "react-icons/fa6";
const ERP = () => {
  const erpData = [
    {
      id: 1,
      title: "ENTERPRISE",
      text: "Complete ERP Suite for all organizational levels",
    },

    {
      id: 1,
      title: " ON-CLOUD",
      text: "Self serviced cloud based ERP applications for SMEs",
    },

    {
      id: 1,
      title: "ON-PREMISE",
      text: "Subscription based On-Premise Logic Business Applications for SMEs",
    },
  ];
  return (
    <div>
      <div className="text-white bg-[#680C70]">
        <NavBar />
      </div>
      <div className="aboutContainers">
        <div className="aboutContent">
          <div className="flex items-center uppercase bg-[#680C70] text-white rounded-md w-[200px] justify-between mb-5 px-3 py-3">
            <p>Home</p>
            <FaAngleRight />
            <p>ERP </p>
          </div>
          <h2 className="md:text-5xl ml-0 xl:-ml-20 font-bold text-3xl text-left md:text-center uppercase ">
            ERP Solution
          </h2>
        </div>
      </div>

      <div className=" erpWraps pt-16">
        <div>
          <div className="max-w-[1000px] pl-8 ">
            <SectionTitle
              title="ERP Applications Platforms"
              text="Best fitting and sustainable infrastructure for your business."
            />

            <div className="grid grid-cols-3 gap-5 mt-10">
              {erpData.map((data, i) => (
                <div key={data.id} className="erpCard">
                  <div>
                    {i === 0 && (
                      <HiOutlineCloudDownload className="mx-auto" size={90} />
                    )}
                    {i === 1 && <FaGear className="mx-auto" size={90} />}
                    {i === 2 && (
                      <HiClipboardList className="mx-auto" size={90} />
                    )}
                    <h3 className="text-2xl font-bold mt-5">{data.title}</h3>
                    <p className=" my-4">{data.text}</p>
                    <button className="erpBtn">View More </button>
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

export default ERP;

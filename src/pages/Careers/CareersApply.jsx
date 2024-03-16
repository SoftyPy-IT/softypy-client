import Container from "../../ui/Container";
import NavBar from "../Shared/NavBar/NavBar";
import { HiOutlineLink } from "react-icons/hi";
import "./Careers.css";
const CareersApply = () => {
  return (
    <div>
      <div className="text-white bg-[#40C7F4]">
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
          <div className="mt-5 max-w-[830px] space-y-8">
            <div className="block md:flex items-center justify-between ">
              <div className="relative w-max">
                <input
                  className=" peer border-b applyInput border-[#6D146C] py-2 text-[#6D146C] focus:outline-none "
                  placeholder=""
                  type="text"
                />
                <label className="applyLevel" htmlFor="">
                  Name
                </label>
              </div>
              <div className="relative w-max">
                <input
                  className=" peer border-b applyInput border-[#6D146C]  py-2 text-[#6D146C] focus:outline-none "
                  placeholder=""
                  type="text"
                />
                <label className="applyLevel" htmlFor="">
                  Email
                </label>
              </div>
            </div>
            <div className="block md:flex items-center justify-between ">
              <div className="relative w-max">
                <input
                  className=" peer border-b applyInput border-[#6D146C]  py-2 text-[#6D146C] focus:outline-none "
                  placeholder=""
                  type="text"
                />
                <label className="applyLevel" htmlFor="">
                  Phone Number
                </label>
              </div>
              <div className="relative w-max">
                <input
                  className=" peer border-b applyInput border-[#6D146C]  py-2 text-[#6D146C] focus:outline-none "
                  placeholder=""
                  type="text"
                />
                <label className="applyLevel" htmlFor="">
                  LinkedIn
                </label>
              </div>
            </div>
            <div className="block md:flex items-center justify-between ">
              <div className="relative w-max">
                <input
                  className=" peer border-b applyInput border-[#6D146C]  py-2 text-[#6D146C] focus:outline-none "
                  placeholder=""
                  type="text"
                />
                <label className="applyLevel" htmlFor="">
                  Github Link
                </label>
              </div>
              <div className="relative w-max">
                <input
                  className=" peer border-b applyInput border-[#6D146C]  py-2 text-[#6D146C] focus:outline-none "
                  placeholder=""
                  type="text"
                />
                <label className="applyLevel" htmlFor="">
                  Message
                </label>
              </div>
            </div>
            <div className="block md:flex items-center justify-between">
              <div className="donationFields">
                <input name="image" type="file" id="files" className="hidden" />
                <label
                  htmlFor="files"
                  className="flex  font-bold items-center text-[#6D146C] cursor-pointer  "
                >
                  <span>
                    <HiOutlineLink size={22} className="mr-1" />
                  </span>
                  Attach Your CV
                </label>
              </div>
              <button className="applyBtn">
                Send Your CV
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CareersApply;

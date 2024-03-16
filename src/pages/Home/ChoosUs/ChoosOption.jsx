import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import "./Choos.css";
import Tilt from "react-parallax-tilt";
import { FaArrowRight } from "react-icons/fa";
const Effect3D = () => {
  return (
    <div className="chooseWrap">
      <SectionTitle title="Why SoftyPy Is The Best Chooice"></SectionTitle>

      <div>
        <div className="container">
          <Tilt
            className="parallax-effect-img"
            tiltMaxAngleX={40}
            tiltMaxAngleY={40}
            perspective={800}
            transitionSpeed={1500}
            scale={1.1}
            gyroscope={true}
          >
            <div className="box">
              <div className="imgBx boxContent">
                <h4 className="text-3xl font-bold">FULL TRANSPARENCY</h4>
              </div>
              <div className="contentBx">
                <h2 className="text-xl font-bold">FULL TRANSPARENCY </h2>
                <p>
                  Every penny we spend and day that we work for you is fully
                  accountable, always open for discussion.
                </p>
                <div className="flex text-white mt-3 items-center justify-center bg-[#2D57A2] w-32 h-10 mx-auto rounded-full radius">
                  <button>See more </button>
                  <FaArrowRight className="ml-2" />
                </div>
              </div>
            </div>
          </Tilt>
          <Tilt
            className="parallax-effect-img"
            tiltMaxAngleX={40}
            tiltMaxAngleY={40}
            perspective={800}
            transitionSpeed={1500}
            scale={1.1}
            gyroscope={true}
          >
            <div className="box">
              <div className="imgBx boxContent">
                <h4 className="text-3xl font-bold"> DRIVEN BY RESULTS</h4>
              </div>
              <div className="contentBx">
                <h2 className="text-xl font-bold"> DRIVEN BY RESULTS </h2>

                <p>
                  We measure everything. No hiding. We let the results speak for
                  themselves.
                </p>
                <div className="flex text-white mt-3 items-center justify-center bg-[#2D57A2] w-32 h-10 mx-auto rounded-full radius">
                  <button>See more </button>
                  <FaArrowRight className="ml-2" />
                </div>
              </div>
            </div>
          </Tilt>
          <Tilt
            className="parallax-effect-img"
            tiltMaxAngleX={40}
            tiltMaxAngleY={40}
            perspective={800}
            transitionSpeed={1500}
            scale={1.1}
            gyroscope={true}
          >
            <div className="box">
              <div className="imgBx boxContent">
                <h4 className="text-3xl font-bold">
                  {" "}
                  DEDICATED ACCOUNT MANAGER
                </h4>
              </div>
              <div className="contentBx">
                <h2 className="text-xl font-bold">
                  {" "}
                  DEDICATED ACCOUNT MANAGER{" "}
                </h2>
                <p>
                  When you work with us, you will be working with seasoned
                  professionals. We will also assign a dedicated account manager
                  for you.
                </p>
                <div className="flex text-white mt-3 items-center justify-center bg-[#2D57A2] w-32 h-10 mx-auto rounded-full radius">
                  <button>See more </button>
                  <FaArrowRight className="ml-2" />
                </div>
              </div>
            </div>
          </Tilt>
        </div>
      </div>
    </div>
  );
};

export default Effect3D;

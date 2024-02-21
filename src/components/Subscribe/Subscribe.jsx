import { FaArrowRight, FaRegEnvelope } from "react-icons/fa";
import laptop from "../../../public/assets/laptop.png";
import { Link } from "react-router-dom";
import Container from "../../ui/Container";
const Subscribe = () => {
  return (
    <div className="sectionMargin mb-[80px]">
      <Container>
        <div className="footerTop">
          <div className="footerTopBarContent">
            <div className="leftSideContent">
              <div>
                <p className="text-2xl mt-2 font-bold">
                  Empowering Your Business with SoftyPy Technology
                </p>
                <p className="my-2">
                  SoftyPy is your digital navigator, expertly charting the
                  course for your IT voyage. As a trusted IT solutions provider,
                  we craft bespoke software, steer your network to smooth
                  waters, guard your cybersecurity like a fortress, and keep
                  your hardware shipshape. We are not just a compass; we are
                  your guiding star in the digital realm.
                </p>
              </div>
              <div className="flex contaact items-center flex-wrap sm:mt-8">
                <div className="requestDemo">
                  <FaRegEnvelope className="mr-2 emalIcon" />
                  <input
                    autoComplete="off"
                    type="text"
                    placeholder="Email Address "
                  />
                </div>
                <div className="contactBtn">
                  <button className="mr-2">Request Now </button>
                  <FaArrowRight />
                </div>
              </div>
            </div>
            <Link to="/">
              <div className="rightSideImgWRap">
                <img src={laptop} alt="laptop" />
              </div>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Subscribe;

import { Link } from "react-router-dom";
import Container from "../../ui/Container";
import CommonButton from "../Shared/CommonButton/CommonButton";

const WantToTalk = () => {
    return (
        <div className="sectionMargin">
        <Container>
          <div className="wantToTalk">
            <h2 className="text-2xl md:text-4xl lg:text-[50px] lg:w-[40%] w-full text-center font-semibold">
              Want to talks us ?{" "}
            </h2>
            <div className="mt-5 lg:mt-24 w-full text-center  xl:w-[60%]">
              <p className="text-xl md:text-[80px]">softypy@gmail.com</p>
              <p className=" mt-3 md:mt-14 md:mb-10 md:text-3xl lg:text-[80px]">
                +88-01762-380594
              </p>
              <p className=" mt-5 md:mt-14 mb-10 md:text-3xl lg:text-[80px]">
                +88-01303042561
              </p>
              <Link to="/contact">
                <CommonButton text="Contact Us " />
              </Link>
            </div>
          </div>
        </Container>
      </div>
    );
};

export default WantToTalk;
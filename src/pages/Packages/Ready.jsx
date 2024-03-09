/* eslint-disable react/no-unescaped-entities */

import ready from "../../../public/assets/ready-banner.jpg";
import CommonButton from "../Shared/CommonButton/CommonButton";
const Ready = () => {
  return (
    <div className="sectionMargin">
      <div className="w-[600px] mx-auto text-center ">
      <span>Let's Get Started </span>
        <h2 className="text-center text-4xl font-semibold">
          Are you ready for a better, more <br />
          productive business?
        </h2>
        <p className="text-xl mt-2">
          Stop worrying about technology problems. Focus on your business. Let
          us provide the support you deserve.
        </p>
      </div>
      <div className="grid place-content-center mt-2">
        <CommonButton text="Contact Us " />
      </div>
      <img src={ready} alt="ready" />
    </div>
  );
};

export default Ready;

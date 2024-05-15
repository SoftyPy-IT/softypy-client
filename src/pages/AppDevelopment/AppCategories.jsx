

import {
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import { Link } from "react-router-dom";
import "./AppDevelopment.css";
import AppDevelopmentFAQ from "../../components/FrequentlyAskQuestions/AppDevelopmentFAQ";

const AppCategories = () => {

  return (
    <div className="sectionMargin appCategoriesWraps">
      <h2 className="text-3xl font-bold text-black md:text-5xl">
        Enterprise and consumer-oriented Android apps for any industry
      </h2>
      <p className="w-full my-5 text-xl md:max-w-[70%]">
        {" "}
        We develop Android apps tailored to your specific needs. Whether you
        want better business processes, insights into customer data or millions
        of downloads on Google Play, we cover it all, making sure your app
        performs seamlessly across the Android ecosystem and delivers
        outstanding user experience.
      </p>

     <AppDevelopmentFAQ/>
      <Link to="/contact">
        <button className="bg-[#40C7F4] mt-10 text-white w-[200px] h-[45px] flex items-center justify-center">
          <span>Contact Us</span> <HiOutlineArrowNarrowRight className="ml-2" />
        </button>
      </Link>
    </div>
  );
};

export default AppCategories;



import "./AppDevelopment.css";
import AppDevelopmentFAQ from "../../components/FrequentlyAskQuestions/AppDevelopmentFAQ";

const AppCategories = () => {

  return (
    <div className="sectionMargin appCategoriesWraps">
      <h2 className="text-xl md:text-3xl font-bold text-black lg:text-5xl">
        Enterprise and consumer-oriented Android apps for any industry
      </h2>
      <p className="w-full my-5 md:text-xl md:max-w-[70%]">
        {" "}
        We develop Android apps tailored to your specific needs. Whether you
        want better business processes, insights into customer data or millions
        of downloads on Google Play, we cover it all, making sure your app
        performs seamlessly across the Android ecosystem and delivers
        outstanding user experience.
      </p>

     <AppDevelopmentFAQ/>
      
    </div>
  );
};

export default AppCategories;

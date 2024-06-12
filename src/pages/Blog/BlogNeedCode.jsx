/* eslint-disable no-unused-vars */
import Container from "../../ui/Container";
import NavBar from "../Shared/NavBar/NavBar";
import {
  FaArrowRight,
  FaFacebook,
  FaHeart,
  FaInstagramSquare,
  FaLinkedin,
  FaRegEnvelope,
} from "react-icons/fa";
import { Divider } from "@mui/material";
import { useGetAllSingleServicesQuery } from "../../redux/features/singleServices/singleServicesApi";
import { useGetSingleBlogQuery } from "../../redux/features/Blog/blogApi";
import { Link, useParams } from "react-router-dom";
import ReactHtmlParser from "react-html-parser"; 

const BlogDetails = () => {
  const id = useParams();
  const { data: blogs, isLoading, isError } = useGetSingleBlogQuery(id);
  console.log(blogs);


  const renderContent = (content) => {
    const parsedContent = ReactHtmlParser(content);
  
    return parsedContent.map((element, index) => {
      if (element.type === "h1") {
        return <h1 key={index} className="text-3xl font-bold mb-4 text-center">{element.props.children}</h1>;
      } else if (element.type === "h2") {
        return <h2 key={index} className="text-2xl font-bold mb-3 text-center">{element.props.children}</h2>;
      } else if (element.type === "h3") {
        return <h3 key={index} className="text-xl font-bold mb-2 text-center">{element.props.children}</h3>;
      } else if (element.type === "p") {
        return <p key={index} className="mb-2">{element.props.children}</p>;
      } else if (element.type === "img") {
        return <img key={index} className="w-full h-auto object-cover mb-4" src={element.props.src} alt="Blog Image" />;
      } else if (element.type === "div" && element.props.className === "ql-align-center") {
        return <div key={index} className="text-center mb-2">{element.props.children}</div>;
      } else if (element.type === "div" && element.props.className === "ql-align-right") {
        return <div key={index} className="text-right mb-2">{element.props.children}</div>;
      } else if (element.type === "div" && element.props.className === "ql-align-left") {
        return <div key={index} className="text-left mb-2">{element.props.children}</div>;
      } else {
        return null;
      }
    });
  };

  console.log(renderContent)
  return (
    <div>
      <div className="shadow-lg">
        <NavBar />
      </div>

      <div className="careerContainerWraps">
        <div className="careerText">
          <h3 className="leading-30 md:text-4xl xl:text-4xl font-bold">
          {blogs?.title}
          </h3>
        </div>
      </div>
      <div className="bg-[#2D57A2] text-[#fff] py-16">
        {/* <Container>
      <img src={banner} alt="" className="w-full h-[200px] object-contain " />
      </Container> */}

        <Container>
          <div className="flex items-center justify-between mb-10 ">
            <div>
              <h4 className="text-3xl font-semibold">{blogs?.name}</h4>
              <span>{blogs?.date}</span>
            </div>
            <div className="flex items-center justify-center space-x-3 ">
             <Link to='/'> <FaFacebook /></Link>
             <Link to='/'> <FaLinkedin /></Link>
             <Link to='/'> <FaInstagramSquare /></Link>
       
            
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold">
              ব্যবসা প্রতিষ্টানের জন্য ইকমার্স ওয়েভ সাইট কেন প্রয়োজন ?
            </h2>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                ১. বিশ্বব্যাপী পৌঁছানো
              </h3>
              <p className="leading-8">
                {" "}
                ই-কমার্স ওয়েবসাইট ব্যবসাগুলোকে স্থানীয় ভৌগলিক এলাকার বাইরেও
                পৌঁছাতে সাহায্য করে। এটি সম্ভাব্য গ্রাহক সংখ্যাকে বৈশ্বিক স্তরে
                বৃদ্ধি করে, যার ফলে বাজারের পৌঁছানো এবং বিক্রির সুযোগ
                উল্লেখযোগ্যভাবে বৃদ্ধি পায়। ই-কমার্স ওয়েবসাইটের মাধ্যমে
                ব্যবসাগুলো বিভিন্ন দেশের এবং বিভিন্ন ভাষার মানুষের কাছে পৌঁছাতে
                পারে। এটি একটি সীমাবদ্ধ স্থানীয় বাজার থেকে বৈশ্বিক বাজারে
                প্রবেশের সুযোগ প্রদান করে। ব্যবসাগুলো তাদের পণ্য ও পরিষেবাগুলোকে
                বিশ্বব্যাপী ক্রেতাদের কাছে প্রদর্শন করতে পারে, যা আন্তর্জাতিক
                বিক্রির সম্ভাবনা বৃদ্ধি করে।{" "}
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">২. ২৪/৭ উপলভ্যতা</h3>
              <p className="leading-8">
                ই-কমার্স ওয়েবসাইট শারীরিক দোকানের মতো সীমাবদ্ধ নয় এবং
                সার্বক্ষণিক ২৪/৭ চালু থাকে। গ্রাহকরা যেকোনো সময়ে পণ্য ব্রাউজ
                এবং ক্রয় করতে পারেন, যা গ্রাহকদের জন্য সুবিধাজনক এবং বিক্রির
                সম্ভাবনা বাড়ায়। ই-কমার্স ওয়েবসাইট শারীরিক দোকানের মতো
                সীমাবদ্ধ নয় এবং সার্বক্ষণিক ২৪/৭ চালু থাকে। গ্রাহকরা যেকোনো
                সময়ে পণ্য ব্রাউজ এবং ক্রয় করতে পারেন, যা গ্রাহকদের জন্য
                সুবিধাজনক এবং বিক্রির সম্ভাবনা বাড়ায়।
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">৩. ব্যয় সাশ্রয়</h3>
              <p className="leading-8">
                অনলাইন স্টোর পরিচালনা করা শারীরিক দোকান পরিচালনার তুলনায়
                সাধারণত কম খরচে হয়। ভাড়া, বিদ্যুৎ, এবং দোকানের কর্মীদের খরচ
                উল্লেখযোগ্যভাবে কমে যায়। এর ফলে ব্যবসাগুলো আরও প্রতিযোগিতামূলক
                মূল্য দিতে পারে এবং বিপণন ও পণ্য উন্নয়নের মতো অন্যান্য ক্ষেত্রে
                বিনিয়োগ করতে পারে। অনলাইন স্টোর পরিচালনা করা শারীরিক দোকান
                পরিচালনার তুলনায় সাধারণত কম খরচে হয়। ভাড়া, বিদ্যুৎ, এবং
                দোকানের কর্মীদের খরচ উল্লেখযোগ্যভাবে কমে যায়। এর ফলে ব্যবসাগুলো
                আরও প্রতিযোগিতামূলক মূল্য দিতে পারে এবং বিপণন ও পণ্য উন্নয়নের
                মতো অন্যান্য ক্ষেত্রে বিনিয়োগ করতে পারে।
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">
                ৪. ব্যক্তিগতকৃত কেনাকাটার অভিজ্ঞতা
              </h3>
              <p className="leading-8">
                ই-কমার্স প্ল্যাটফর্মগুলো প্রায়শই ব্যক্তিগতকৃত কেনাকাটার
                অভিজ্ঞতা প্রদান করে। ব্যবসাগুলো গ্রাহকের তথ্য ব্যবহার করে পণ্যের
                সুপারিশ করতে পারে, ব্যক্তিগতকৃত ছাড় দিতে পারে, এবং লক্ষ্যযুক্ত
                বিপণন প্রচারণা তৈরি করতে পারে। এটি গ্রাহকের সন্তুষ্টি এবং
                বিশ্বস্ততা বৃদ্ধি করে।
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">৬. সহজতর পরিচালনা</h3>
              <p className="leading-8">
                ই-কমার্স ওয়েবসাইটের মাধ্যমে পণ্যের মজুদ, অর্ডার, এবং গ্রাহক
                সেবার পরিচালনা সহজ হয়। অনলাইন সিস্টেমের মাধ্যমে অর্ডার
                ট্র্যাকিং, পেমেন্ট প্রসেসিং, এবং গ্রাহক সহায়তা স্বয়ংক্রিয়ভাবে
                করা যায়, যা সময় এবং শ্রম সাশ্রয় করে।
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                ৬. বিস্তারিত বিশ্লেষণ
              </h3>
              <p className="leading-8">
                ই-কমার্স ওয়েবসাইটগুলো গ্রাহকের আচরণের উপর মূল্যবান অন্তর্দৃষ্টি
                প্রদান করে বিস্তারিত বিশ্লেষণের মাধ্যমে। ব্যবসাগুলো সাইট
                ট্রাফিক, পণ্যের কার্যকারিতা, গ্রাহকের পছন্দ, এবং বিক্রির প্রবণতা
                সহ বিভিন্ন মেট্রিক ট্র্যাক করতে পারে। এই ডেটা বিপণন কৌশল,
                ইনভেন্টরি অপ্টিমাইজেশন সহ সঠিক সিদ্ধান্ত নিতে সাহায্য করে।
              </p>
            </div>
          </div>
          <div className="like flex items-center justify-center mt-8">
            <div className="bg-[#4168AB] p-5 rounded-md h-10 flex items-center justify-center mr-3">
              <FaHeart size={25} />
            </div>
            <span className="text-3xl font-bold">450 Likes </span>
          </div>
          <Divider sx={{ background: "#fff", marginTop: "30px" }} />
          <div className="flex justify-center contaact items-center flex-wrap sm:mt-8">
            <div className="requestDemo blogSubscribe">
              <FaRegEnvelope className="mr-2 emalIcon" />
              <input
                autoComplete="off"
                type="text"
                placeholder="Email Address "
              />
            </div>
            <div className="contactBtn bg-[#4168AB]">
              <button className="mr-2">Subscribe Us </button>
              <FaArrowRight />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default BlogDetails;

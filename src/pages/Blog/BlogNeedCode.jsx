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
import { useGetSingleBlogQuery } from "../../redux/features/Blog/blogApi";
import { Link, useParams } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";

const renderContent = (content) => {
  const parsedContent = ReactHtmlParser(content);

  return parsedContent.map((element, index) => {
    if (element.type === "h1") {
      return <h1 key={index} className="text-3xl font-bold mb-4">{element.props.children}</h1>;
    } else if (element.type === "h2") {
      return <h2 key={index} className="text-2xl font-bold mb-3 ">{element.props.children}</h2>;
    } else if (element.type === "h3") {
      return <h3 key={index} className="text-xl font-bold mb-2 ">{element.props.children}</h3>;
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

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, isLoading, isError } = useGetSingleBlogQuery(id);
  console.log(blog);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading blog post.</div>;
  }

  return (
    <div>
      <div className="shadow-lg">
        <NavBar />
      </div>

      <div className="careerContainerWraps">
        <div className="careerText">
          <h3 className="leading-30 md:text-4xl xl:text-4xl font-bold">
            {blog?.title}
          </h3>
        </div>
      </div>
      <div className=" py-16">
        <Container>
          <div className="flex items-center justify-between mb-10">
            <div>
              <h4 className="text-3xl font-semibold">{blog?.name}</h4>
              <span>{blog?.date}</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Link to="/">
                <FaFacebook />
              </Link>
              <Link to="/">
                <FaLinkedin />
              </Link>
              <Link to="/">
                <FaInstagramSquare />
              </Link>
            </div>
          </div>
        
          <div className="space-y-8">{renderContent(blog?.content)}</div>
          <div className="like flex items-center justify-center mt-8">
            <div className="bg-[#4168AB] p-5 rounded-md h-10 flex items-center justify-center mr-3">
              <FaHeart size={25} />
            </div>
            <span className="text-3xl font-bold">450 Likes</span>
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

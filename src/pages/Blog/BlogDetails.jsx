import { Button, Divider, Grid } from "@mui/material";
import { FaCalendarAlt, FaUser } from "react-icons/fa";
import { HiChevronRight } from "react-icons/hi";
import { useParams } from "react-router-dom";
import { useGetSingleBlogQuery } from "../../redux/features/Blog/blogApi";
import ReactHtmlParser from "react-html-parser";
import Container from "../../ui/Container";
import NavBar from "../Shared/NavBar/NavBar";
import facebook from "../../assets/icon/facebook.png";
import linkedIn from "../../assets/icon/linkedin.png";
import twitter from "../../assets/icon/twitter.png";
import instagram from "../../assets/icon/instagram.png";
import user from "../../assets/icon/user.jpg";

const renderContent = (content) => {
  const parsedContent = ReactHtmlParser(content);

  return parsedContent.map((element, index) => {
    if (element.type === "h1") {
      return (
        <h1 key={index} className="text-3xl font-bold mb-4">
          {element.props.children}
        </h1>
      );
    } else if (element.type === "h2") {
      return (
        <h2 key={index} className="text-2xl font-bold mb-3 ">
          {element.props.children}
        </h2>
      );
    } else if (element.type === "h3") {
      return (
        <h3 key={index} className="text-xl font-bold mb-2 ">
          {element.props.children}
        </h3>
      );
    } else if (element.type === "p") {
      return (
        <p key={index} className="mb-2">
          {element.props.children}
        </p>
      );
    } else if (element.type === "img") {
      return (
        <img
          key={index}
          className="w-full h-auto object-cover mb-4 hidden "
          src={element.props.src}
          alt="Blog Image"
        />
      );
    } else if (
      element.type === "div" &&
      element.props.className === "ql-align-center"
    ) {
      return (
        <div key={index} className="text-center mb-2">
          {element.props.children}
        </div>
      );
    } else if (
      element.type === "div" &&
      element.props.className === "ql-align-right"
    ) {
      return (
        <div key={index} className="text-right mb-2">
          {element.props.children}
        </div>
      );
    } else if (
      element.type === "div" &&
      element.props.className === "ql-align-left"
    ) {
      return (
        <div key={index} className="text-left mb-2">
          {element.props.children}
        </div>
      );
    } else {
      return null;
    }
  });
};

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, isLoading, isError } = useGetSingleBlogQuery({id});
  console.log(blog);

  if (isLoading) {
    return <p>Loading..........</p>;
  }

  if (isError || !blog) {
    return <div>Error loading blog post.</div>;
  }

  const buttonStyle = {
    background: "#ddd",
    color: "black",
    borderRadius: "5px",
  };
  const commentData = [
    {
      id: 1,
      name: "Riva Collins",
      date: "Jun 9, 2024 - 2:07 am",
      description:
        "It’s no secret that the digital industry is booming. From exciting startups to need ghor global and brands, companies are reaching out.",
    },
    {
      id: 2,
      name: "Riva Collins",
      date: "Jun 9, 2024 - 2:07 am",
      description:
        "It’s no secret that the digital industry is booming. From exciting startups to need ghor global and brands, companies are reaching out.",
    },
  ];

  const handleSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="shadow-lg">
        <NavBar />
      </div>

      <Container>
        <div className="gap-10">
          <div className="newsDetailsRightSideWrap text-[15px]">
            <img
              src={blog.image}
              className="rightSideImg w-full h-[400px] object-cover"
              alt="news"
            />

            <div className="my-5 px-5">
              <h2 className="text-3xl font-semibold mb-5 text-center">
                {blog.title}
              </h2>
              <div className="flex items-center space-x-3">
                <FaCalendarAlt />
                <span>{blog.date}</span>
                <FaUser />
                <span>{blog.name}</span>
              </div>
              <Divider sx={{ marginTop: "2px" }} />
            </div>

            <div className="space-y-8 px-5 py-5 rounded-md">
              {renderContent(blog?.content)}
            </div>
          </div>

          <div className="socialMedia flex-col md:flex-row gap-5 lg:gap-0 flex justify-between mt-10">
            <div className="flex flex-wrap gap-2 space-x-2 items-center">
              <b>Tags:</b>
              <Button sx={buttonStyle}>Builder</Button>
              <Button sx={buttonStyle}>Cloud</Button>
              <Button sx={buttonStyle}>Map</Button>
            </div>
            <div className="flex items-center space-x-3">
              <span>Share: </span>
              <img className="w-10" src={facebook} alt="facebook" />
              <img className="w-10" src={instagram} alt="instagram" />
              <img className="w-10" src={twitter} alt="twitter" />
              <img className="w-10" src={linkedIn} alt="linkedIn" />
            </div>
          </div>
          <Divider sx={{ marginTop: "20px" }} />
          <div className="comment sectionMargin">
            <div className="mt-5">
              <h4 className="mb-8 text-[#40C6F4]">5 Comments</h4>
            </div>
            <div className="grid grid-rows-1 gap-10">
              {commentData.map((data) => (
                <div
                  key={data.id}
                  className="flex flex-col justify-between gap-10"
                >
                  <img
                    className="w-20 h-20 rounded-full"
                    src={user}
                    alt="user"
                  />
                  <div className="commentCard">
                    <div className="absolute top-3 right-3">
                      <Button
                        sx={{ width: "70px", height: "35px", color: "#fff" }}
                      >
                        Reply <HiChevronRight className="text-[#fff]" />
                      </Button>
                    </div>
                    <div>
                      <h4>{data.name}</h4>
                      <small>{data.date}</small>
                    </div>
                    <p className="mt-5">{data.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <h4 className="mb-8 text-[#1591A3]">Give Your Feedback</h4>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={1}>
                  <Grid item xs={12} lg={12} sx={{ marginRight: "0px" }}>
                    <textarea className="w-full border p-2 h-32 rounded-md resize-none"></textarea>
                  </Grid>
                  <Grid item lg={12} sx={{ marginRight: "0px" }}>
                    <Button sx={{ color: "#fff" }}>Submit</Button>
                  </Grid>
                </Grid>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default BlogDetails;

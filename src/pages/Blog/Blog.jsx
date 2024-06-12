import { useState } from "react";
import { Link } from "react-router-dom";
import { Tabs, Tab, Box, Typography, CircularProgress } from "@mui/material";
import Container from "../../ui/Container";
import NavBar from "../Shared/NavBar/NavBar";
import { Divider } from "@mui/material";
import { useGetAllBlogQuery } from "../../redux/features/Blog/blogApi";
import "./Blog.css";

const Blog = () => {
  const { data: blogData, isLoading, isError } = useGetAllBlogQuery({
    allData: true,
  });
  console.log(blogData);
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newIndex) => {
    setTabIndex(newIndex);
  };

  if (isLoading) {
    return <CircularProgress />;
  }

  if (isError || !blogData) {
    return <Typography>Error fetching data.</Typography>;
  }

  const categories = [
    { label: "All", projects: blogData.blog },
    {
      label: "E-Commerce",
      projects: blogData.blog.filter((item) => item.category === "E-commerce"),
    },
    {
      label: "Travel Agency",
      projects: blogData.blog.filter(
        (item) => item.category === "Travel Agency"
      ),
    },
    {
      label: "News Portal",
      projects: blogData.blog.filter((item) => item.category === "News Portal"),
    },
  ];

  const tabStyles = {
    width: 130,
    height: "35px",
    margin: 1,
    backgroundColor: "#40C7F4",
    color: "white",
    borderRadius: 10,
    padding: "0px",
    fontSize: "12px",
    lineHeight: "20px",
    minHeight: "unset",
    BorderBottom: "none",
    "&.Mui-selected": {
      backgroundColor: "#4168AB",
      color: "#fff",
    },
  };

  return (
    <div>
      <NavBar />
      <div className="careerContainerWraps">
        <div className="careerText">
          <h3 className="leading-30 md:text-4xl xl:text-4xl font-bold">
            Feature Blogs
          </h3>
        </div>
      </div>

      <div className="py-16">
        <Container>
          <div className="blogWraps">
            <h1 className="my-3 text-2xl font-semibold">Recent Blogs</h1>
            <Box sx={{ width: "100%", typography: "body1" }}>
              <Tabs
                value={tabIndex}
                onChange={handleTabChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="blog categories"
                indicatorColor="primary"
                textColor="primary"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#fff",
                  borderBottom: "none",
                }}
              >
                {categories.map((category, index) => (
                  <Tab key={index} label={category.label} sx={tabStyles} />
                ))}
              </Tabs>

              {categories.map((category, index) => (
                <TabPanel key={index} value={tabIndex} index={index}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {category.projects.map((data) => (
                      <div key={data.id}>
                        <Link to={`/blog/${data._id}`}>
                          <div className="blogCard">
                            <div className="blogCardImgWrap">
                              <img src={data.image} alt="blog" />
                            </div>
                            <div className="blogContent">
                              <h2 className="text-xl font-bold">
                                {data.title}
                              </h2>
                              <p className="text- my-5">
                                {data.description.slice(0, 250)}
                              </p>
                              <Divider
                                component="div"
                                sx={{ background: "white", margin: "5px" }}
                              />
                              <div className="flex justify-between">
                                <span>{data.name}</span>
                                <span className="text-[#645e5e]">
                                  {data.date}
                                </span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </TabPanel>
              ))}
            </Box>
          </div>
        </Container>
      </div>
    </div>
  );
};

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

export default Blog;

import NavBar from "../Shared/NavBar/NavBar";
import blog from "../../../public/assets/blog.png";
import "./Blog.css";
import Container from "../../ui/Container";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useState } from "react";
import { Divider } from "@mui/material";
import { useGetAllBlogQuery } from "../../redux/features/Blog/blogApi";

const Blog = () => {
  const {} = useGetAllBlogQuery()
  const blogData = [
    {
      id: 1,
      title: "ব্যবসা প্রতিষ্টানের জন্য ইকমার্স  ওয়েভ  সাইট কেন প্রয়োজন?",
      text:
        "বিস্তৃত গ্রাহক পৌঁছানো: ই-কমার্স ওয়েবসাইটের মাধ্যমে ব্যবসায়ীরা সারা বিশ্বের গ্রাহকদের কাছে পৌঁছাতে পারেন, যা স্থানীয় দোকানদারির সীমাবদ্ধতাকে অতিক্রম করে।",
    },
    {
      id: 1,
      title: "ব্যবসা প্রতিষ্টানের জন্য ইকমার্স  ওয়েভ  সাইট কেন প্রয়োজন?",
      text:
        "বিস্তৃত গ্রাহক পৌঁছানো: ই-কমার্স ওয়েবসাইটের মাধ্যমে ব্যবসায়ীরা সারা বিশ্বের গ্রাহকদের কাছে পৌঁছাতে পারেন, যা স্থানীয় দোকানদারির সীমাবদ্ধতাকে অতিক্রম করে।",
    },
    {
      id: 1,
      title: "ব্যবসা প্রতিষ্টানের জন্য ইকমার্স  ওয়েভ  সাইট কেন প্রয়োজন?",
      text:
        "বিস্তৃত গ্রাহক পৌঁছানো: ই-কমার্স ওয়েবসাইটের মাধ্যমে ব্যবসায়ীরা সারা বিশ্বের গ্রাহকদের কাছে পৌঁছাতে পারেন, যা স্থানীয় দোকানদারির সীমাবদ্ধতাকে অতিক্রম করে।",
    },
  ];

  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
   const tabStyles = {
    width: 130,
    height: "35px",
    margin: 1,
    backgroundColor: "#4168AB",
    color: "white",
    borderRadius: 10,
    padding: "0px",
    fontSize: "12px",
    lineHeight: "20px", 
    minHeight: "unset",
    "&.Mui-selected": {
      backgroundColor: "#4168AB",
      color: "#fff",
    },
  };

  return (
    <div>
      <div className="">
        <NavBar />
      </div>
      <div className="aboutContainers blogFeatureContainer">
        <div className="aboutContent">
          <h2 className="text-xl md:text-2xl font-bold uppercase lg:text-5xl md:text-center">
            Feature Blogs
          </h2>
        </div>
      </div>
      <div className="bg-[#2D57A2] text-[#fff] py-16">
        <Container>
          <div className="blogWraps">
            <h1 className="my-3 text-2xl font-semibold">Recent Blogs</h1>
            <Box sx={{ width: "100%", typography: "body1" }}>
              <TabContext value={value}>
                <Box>
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                    sx={{
                      ".MuiTabs-indicator": {
                        display: "none",
                      },
                    }}
                  >
                    <Tab
                      label="E-commerce"
                      value="1"
                      sx={tabStyles}
                    />
                    <Tab
                      label="Item Two"
                      value="2"
                      sx={tabStyles}
                    />
                    <Tab
                      label="Item Three"
                      value="3"
                      sx={tabStyles}
                    />
                  </TabList>
                </Box>
                <TabPanel value="1">
                  <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-10 ">
                    {blogData.map((data) => (
                      <div key={data.id} className="blogCard">
                        <div className="blogCardImgWrap">
                          <img src={blog} alt="blog" />
                        </div>
                        <div className="blogContent">
                          <h2 className="text-xl font-bold">{data.title}</h2>
                          <p className="text- my-5">
                            বিস্তৃত গ্রাহক পৌঁছানো: ই-কমার্স ওয়েবসাইটের মাধ্যমে
                            ব্যবসায়ীরা সারা বিশ্বের গ্রাহকদের কাছে পৌঁছাতে
                            পারেন, যা স্থানীয় দোকানদারির সীমাবদ্ধতাকে অতিক্রম
                            করে।
                          </p>
                          <Divider component="div" sx={{background:'white', margin: '5px'}} />
                          <div className="flex justify-between">
                            <span>MD Shahin Mia</span>
                            <span className="text-[#cdc8e9]">25-05-2025</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabPanel>
                <TabPanel value="2">Item Two</TabPanel>
                <TabPanel value="3">Item Three</TabPanel>
              </TabContext>
            </Box>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Blog;

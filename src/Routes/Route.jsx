import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import About from "../pages/About/About";
import Admin from "../pages/Admin/Admin";
import AppDevelopment from "../pages/AppDevelopment/AppDevelopment";
import Careers from "../pages/Careers/Careers";
import CareersApply from "../pages/Careers/CareersApply";
import CareersDetails from "../pages/Careers/CareersDetails";
import Client from "../pages/Client/Client";
import Contact from "../pages/Contact/Contact";
import Application from "../pages/Dashboard/Application/Application";
import CustomerOrderList from "../pages/Dashboard/CustomerOrder/CustomerOrderList";
import AddAbout from "../pages/Dashboard/Dashboard/AddAbout/AddAbout";
import UpdateAbout from "../pages/Dashboard/Dashboard/AddAbout/UpdateAbout";
import ViewAbout from "../pages/Dashboard/Dashboard/AddAbout/ViewAbout";
import AddContact from "../pages/Dashboard/Dashboard/ContactUs/AddContact";
import UpdateContact from "../pages/Dashboard/Dashboard/ContactUs/UpdateContact";
import ViewContact from "../pages/Dashboard/Dashboard/ContactUs/ViewContact";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";
import AddPortFolio from "../pages/Dashboard/Dashboard/PortFolio/AddPortFolio";
import UpdatePortFolio from "../pages/Dashboard/Dashboard/PortFolio/UpdatePortFolio";
import ViewPortFolio from "../pages/Dashboard/Dashboard/PortFolio/ViewPortFolio";
import MessageList from "../pages/Dashboard/Message/MessageList";
import AddPortfolio from "../pages/Dashboard/Portfolio/AddPortfolio";
import PortfolioList from "../pages/Dashboard/Portfolio/PortfolioList";
import AddReviews from "../pages/Dashboard/Reviews/AddReviews";
import ReviewList from "../pages/Dashboard/Reviews/ReviewList";
import AddServices from "../pages/Dashboard/Services/AddServices";
import ServiceData from "../pages/Dashboard/Services/ServiceData";
import UpdateServices from "../pages/Dashboard/Services/UpdateServices";
import AddSingleServices from "../pages/Dashboard/SingleServices/AddSingleServices";
import SingleServices from "../pages/Dashboard/SingleServices/SingleServices";
import UpdateSingleServices from "../pages/Dashboard/SingleServices/UpdateSingleServices";
import Users from "../pages/Dashboard/Users/User";
import ERP from "../pages/ERP/ERP";
import ERPDetails from "../pages/ERPDetails/ERPDetails";
import Faq from "../pages/FAQ/Faq";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Packages from "../pages/Packages/Packages";
import Portfolio from "../pages/Portfolio/Portfolio";
import Services from "../pages/Services/Services";
import Signup from "../pages/Signup/Signup";
import SingleService from "../pages/SingleService/SingleService";
import Website from "../pages/Website";
import WebsiteDetails from "../pages/WebsiteDetails/WebsiteDetails";
import { API_URL } from "../utils/util";
import WebDevelopment from "../pages/WebDevelopment/WebDevelopment";
import Wordpress from "../pages/Wordpress/Wordpress";
import UpdateReview from "../pages/Dashboard/Reviews/UpdateReview";
import UpdatePortfolio from "../pages/Dashboard/Portfolio/UpdatePortfolio";
import Blog from "../pages/Blog/Blog";
import BlogDetails from "../pages/Blog/BlogDetails";
import AddBlog from "../pages/Dashboard/Blog/AddBlog";
import BlogList from "../pages/Dashboard/Blog/BlogList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/singleServices/:id",
        element: <SingleService />,
        loader: ({ params }) => fetch(`${API_URL}/singleServices/${params.id}`),
      },
      {
        path: "/blog",
        element: <Blog />,
      },

      {
        path: "/blog/:id",
        element: <BlogDetails />,
        loader: ({ params }) => fetch(`${API_URL}/blog/${params.id}`),
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/client",
        element: <Client />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/packages",
        element: <Packages />,
      },
      {
        path: "/mern",
        element: <WebDevelopment />,
      },
      {
        path: "/wordpress",
        element: <Wordpress />,
      },
      {
        path: "/website",
        element: <Website />,
      },
      {
        path: "/website-details",
        element: <WebsiteDetails />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/app-development",
        element: <AppDevelopment />,
      },
      {
        path: "/erp",
        element: <ERP />,
      },
      {
        path: "/erp-details",
        element: <ERPDetails />,
      },
      {
        path: "/careers",
        element: <Careers />,
      },
      {
        path: "/careers-details",
        element: <CareersDetails />,
      },
      {
        path: "/careers-apply",
        element: <CareersApply />,
      },
     
      {
        path: "/admin",
        element: <Admin />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "serviceData",
        element: <ServiceData />,
      },
      {
        path: "addservice",
        element: <AddServices />,
      },
      {
        path: "updatedservice/:id",
        element: <UpdateServices />,
        loader: ({ params }) => fetch(`${API_URL}/services/${params.id}`),
      },
      {
        path: "about",
        element: <ViewAbout />,
      },
      {
        path: "addabout",
        element: <AddAbout />,
      },
      {
        path: "updateAbout/:id",
        element: <UpdateAbout />,
        loader: ({ params }) => fetch(`${API_URL}/about/${params.id}`),
      },
      {
        path: "contact",
        element: <ViewContact />,
      },
      {
        path: "addcontact",
        element: <AddContact />,
      },
      {
        path: "updateContact",
        element: <UpdateContact />,
      },
      {
        path: "portfolio",
        element: <ViewPortFolio />,
      },
      {
        path: "addPortfolio",
        element: <AddPortFolio />,
      },
      {
        path: "updatePortfolio",
        element: <UpdatePortFolio />,
      },
      {
        path: "singleServices",
        element: <SingleServices />,
      },
      {
        path: "add-singleService",
        element: <AddSingleServices />,
      },
      {
        path: "updatedSingleServices/:id",
        element: <UpdateSingleServices />,
        loader: ({ params }) => fetch(`${API_URL}/singleServices/${params.id}`),
      },
      {
        path: "orders",
        element: <CustomerOrderList />,
      },
      {
        path: "application",
        element: <Application />,
      },
      {
        path: "add-reviews",
        element: <AddReviews />,
      },
      {
        path: "reviews",
        element: <ReviewList />,
      },
      {
        path: "update-reviews",
        element: <UpdateReview />,
      },
      {
        path: "update-reviews/:id",
        element: <UpdateReview />,
        loader: ({ params }) => fetch(`${API_URL}/review/${params.id}`),
      },

      {
        path: "add-portfolio",
        element: <AddPortfolio />,
      },
      {
        path: "portfolio-list",
        element: <PortfolioList />,
      },
      {
        path: "update-portfolio",
        element: <UpdatePortfolio />,
      },
      {
        path: "update-portfolio/:id",
        element: <UpdatePortfolio />,
        loader: ({ params }) => fetch(`${API_URL}/portfolio/${params.id}`),
      },
      {
        path: "message-list",
        element: <MessageList />,
      },
      {
        path: "users-list",
        element: <Users />,
      },
      {
        path: "create-blog",
        element: <AddBlog />,
      },
      {
        path: "blog-list",
        element: <BlogList />,
      },
    ],
  },
]);

import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Services from "../pages/Services/Services";
import Portfolio from "../pages/Portfolio/Portfolio";
import About from "../pages/About/About";
import Client from "../pages/Client/Client";
import Contact from "../pages/Contact/Contact";
import SingleService from "../pages/SingleService/SingleService";
import DashboardLayout from "../Layout/DashboardLayout";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";
import ServiceData from "../pages/Dashboard/Services/ServiceData";
import AddServices from "../pages/Dashboard/Services/AddServices";
import UpdateServices from "../pages/Dashboard/Services/UpdateServices";
import AddAbout from "../pages/Dashboard/Dashboard/AddAbout/AddAbout";
import ViewAbout from "../pages/Dashboard/Dashboard/AddAbout/ViewAbout";
import UpdateAbout from "../pages/Dashboard/Dashboard/AddAbout/UpdateAbout";
import ViewContact from "../pages/Dashboard/Dashboard/ContactUs/ViewContact";
import AddContact from "../pages/Dashboard/Dashboard/ContactUs/AddContact";
import UpdateContact from "../pages/Dashboard/Dashboard/ContactUs/UpdateContact";
import ViewPortFolio from "../pages/Dashboard/Dashboard/PortFolio/ViewPortFolio";
import AddPortFolio from "../pages/Dashboard/Dashboard/PortFolio/AddPortFolio";
import UpdatePortFolio from "../pages/Dashboard/Dashboard/PortFolio/UpdatePortFolio";
import Profile from "../pages/Dashboard/Profile/Profile";
import Signup from "../pages/Signup/Signup";
import Login from "../pages/Login/Login";
import SingleServices from "../pages/Dashboard/SingleServices/SingleServices";
import AddSingleServices from "../pages/Dashboard/SingleServices/AddSingleServices";
import UpdateSingleServices from "../pages/Dashboard/SingleServices/UpdateSingleServices";
import CustomerOrderList from "../pages/Dashboard/CustomerOrder/CustomerOrderList";
import Faq from "../pages/FAQ/Faq";
import Packages from "../pages/Packages/Packages";
import AddReviews from "../pages/Dashboard/Reviews/AddReviews";
import ReviewList from "../pages/Dashboard/Reviews/ReviewList";

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
      // {
      //   path: '/singleService',
      //   element: <SingleService />
      // },
      {
        path: "/singleServices/:id",
        element: <SingleService />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/singleServices/${params.id}`),
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
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
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
        loader: ({ params }) =>
          fetch(`http://localhost:5000/about/${params.id}`),
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
        path: "profile",
        element: <Profile />,
      },
      {
        path: "singleServices",
        element: <SingleServices />,
      },
      {
        path: "addSingleServices",
        element: <AddSingleServices />,
      },
      {
        path: "updatedSingleServices/:id",
        element: <UpdateSingleServices />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/singleServices/${params.id}`),
      },
      {
        path: "orders",
        element: <CustomerOrderList />,
      },
      {
        path: "add-reviews",
        element: <AddReviews />,
      },
      {
        path: "reviews",
        element: <ReviewList />,
      },
    ],
  },
]);

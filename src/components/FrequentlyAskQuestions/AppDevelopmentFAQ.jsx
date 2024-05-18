import { useState } from "react";
import Container from "../../ui/Container";
import SectionTitle from "../../pages/Shared/SectionTitle/SectionTitle";
import { HiOutlineArrowNarrowRight, HiOutlineShoppingCart, HiOutlineUserGroup } from "react-icons/hi";
import { FaCarSide, FaCommentDots, FaGraduationCap, FaVideo, FaVideoSlash } from "react-icons/fa";
import { FaCircleDollarToSlot, FaHeartCircleBolt, FaOilWell } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function AppDevelopmentFAQ() {
  const [isOpen, setIsOpen] = useState(null);
  const accordionsData = [
    {
      title: "Enterprise",
      description:
        "Improve resource planning, track employee productivity, monitor equipment performance and address other business challenges with future-proof Android apps that integrate easily into the enterprise IT ecosystem.",
      icon: <FaVideo className="text-[#40C7F4] hidden md:block" size={35} />,
    },
    {
      title: "E-commerce",
      description:
        "Streamline operations and offer next-level shopping experience with apps that make it super easy to find products, complete orders, and handle in-app purchases, or even bring AR, VR or IoT-powered in-store experience.",
      icon: <HiOutlineShoppingCart className="text-[#40C7F4] hidden md:block" size={35} />,
    },
    {
      title: "Social Media",
      description:
        "Whether it is a social networking and media sharing, blogging and publishing or interest-based and sharing economy network, we’ve made them all, integrating AI, AR/VR or other emerging tech, too.",
      icon: <HiOutlineUserGroup className="text-[#40C7F4] hidden md:block" size={35} />,
    },
    {
      title: "Real-Time Communication",
      description:
        "Enjoy flawless remote collaboration and data sharing with real-time video, voice, and text messaging apps that allow group chats, group calls, broadcasting, screen sharing and more.",
      icon: <FaCommentDots className="text-[#40C7F4] hidden md:block" size={35} />,
    },
    {
      title: "Finance",
      description:
        "Get your enterprise or personal finance app with on-point security and thought-out user experience for budget planning, mobile wallet payments, customer loyalty programs, money transfer or cryptocurrency portfolio management.",
      icon: <FaCircleDollarToSlot className="text-[#40C7F4] hidden md:block" size={35} />,
    },
    {
      title: "Entertainment",
      description:
        "Engage and entertain users with games, sports, music, and other entertainment content via feature-rich, customizable, and pleasant-to-use Android applications.",
      icon: <FaVideoSlash className="text-[#40C7F4] hidden md:block" size={35} />,
    },
    {
      title: "Healthcare",
      description:
        "Transform the way healthcare is provided with diagnostic assistance, remote patient monitoring, appointment management, clinical assistance, telehealth, medical education and other healthcare apps for medical staff and patients.",
      icon: <FaHeartCircleBolt className="text-[#40C7F4] hidden md:block" size={35} />,
    },
    {
      title: "Education",
      description:
        "Redefine education with m-learning apps that provide comprehensive and personalized learning experience, enhance student interaction, allow convenient access to learning materials (including via AR/VR) and simplify student progress tracking.",
      icon: <FaGraduationCap className="text-[#40C7F4] hidden md:block" size={35} />,
    },
    {
      title: "Logistics & Transportation",
      description:
        "Improve supply chain management with scalable and customizable Android solutions that reduce paperwork, allow real-time order tracking, ensure timely deliveries, and lower inventory and fleet maintenance costs.",
      icon: <FaCarSide className="text-[#40C7F4] hidden md:block" size={35} />,
    },
    {
      title: "Wellness",
      description:
        "Promote health and fitness with activity tracking, nutrition planning, weight loss coaching, sleep cycle analysis and stress management via a wellness app. The apps we build leverage AI, AR/VR and other new tech, and connect with wearables.",
      icon: <FaOilWell className="text-[#40C7F4] hidden md:block" size={35} />,
    },
  ];
  const toggle = (idx) =>
    setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));

  return (
    <Container>
      <div className="mt-20">
        <SectionTitle
          title="Enterprise and consumer-oriented Android apps for any industry"
          text="We develop Android apps tailored to your specific needs. Whether you want better business processes, insights into customer data or millions of downloads on Google Play, we cover it all, making sure your app performs seamlessly across the Android ecosystem and delivers outstanding user experience."
        />
      </div>
      <div className="mx-4 rounded-lg border font-sans my-10">
        {accordionsData.map((accordion, idx) => (
          <div key={idx} className="border-b p-4">
            <button
              onClick={() => toggle(idx)}
              className="flex h-full w-full items-center justify-between py-4 text-black font-medium"
            >
              <div className="flex items-center">
                {accordion.icon}
                <span className=" text-sm md:text-xl ml-3">{accordion.title}</span>
              </div>
              <span className="rounded-full bg-blue-100 p-2">
                <svg
                  className={`ml-2 md:ml-8 mr-2 md:mr-7 shrink-0 fill-[#00A2FF] transition-transform duration-200 ${
                    isOpen === idx ? "rotate-180" : ""
                  } w-4  h-3 md:w-4 md:h-4`}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect y="5" width="16" height="2" rx="1" />
                  <rect
                    y="7"
                    width="13"
                    height="2"
                    rx="1"
                    className="origin-center rotate-90"
                  />
                </svg>
              </span>
            </button>
            <div
              className={`grid overflow-hidden text-gray-900 transition-all duration-300 ease-in-out ${
                isOpen === idx
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">{accordion.description}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <Link to="/contact">
          <button className="bg-[#40C7F4] text-white w-[200px] h-[45px] flex items-center justify-center">
            <span>Contact Us</span>{" "}
            <HiOutlineArrowNarrowRight className="ml-2" />
          </button>
        </Link>
      </div>
    </Container>
  );
}

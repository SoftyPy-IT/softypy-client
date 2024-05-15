import { useState } from "react";
import Container from "../../ui/Container";
import SectionTitle from "../../pages/Shared/SectionTitle/SectionTitle";

export default function AskAndQuestion() {
  const [isOpen, setIsOpen] = useState(null);
  const accordionsData = [
    {
      title: "Why is SoftyPy IT the best company for Software Development?",
      description:
        "SoftyPY IT is the best software development company in BD because of its commitment to delivering you the best possible outcome of your needs. Besides, action speaks louder than words. Because of its efficiency, SoftyPy IT is the best.",
    },
    {
        title: "What Is Software Development? ",
        description:
          " Software development is the sum total of various essential computer science activities done by the software developers and experts. Their activities may include researching, developing, designing, implementing and testing any specific software that you need.",
      },
      {
        title: "How Does Software Development Work? ",
        description:
          " Software developers build, test, and deploy the specific software that a client has asked them to develop using their programming and design-based knowledge.",
      },
    {
      title: " Can I patent my idea of a software?",
      description:
        "Yes, you can, only if the idea is completely new and unique. Otherwise, you will not be able to patent your idea.",
    },
    {
        title: "Can the software be upgraded in the future?",
        description:
          " Obviously, you will always be able to upgrade it according to your needs.",
      },
      {
        title: " How to Start Software Development?",
        description:
          "There are some fixed steps to achieve this purpose: Planning Obtaining Education Gaining Experience Getting a Certificate Building a Portfolio Applying for Jobs Start Your Software Development Journey",
      },
    {
      title: "How much time and budget is required to complete a project?",
      description:
        " Well, it entirely depends on the volume of the project you desire to build. SoftyPy IT tells you the closest estimated time after discussing every aspect of the project.",
    },
    {
      title: "Is my idea safe with the company I choose?",
      description:
        "The client's privacy and the company falls under the non-disclosure agreement that is not bound to be broken. SoftyPy IT promises you complete privacy of your idea.",
    },
  
    {
      title: "What is the biggest software company in Bangladesh?",
      description:
        " With a huge number of dedicated team players and IT specialists, SoftyPy IT is undoubtedly, the biggest software company in Bangladesh.",
    },
    {
      title: "Which One Is the Best IT Company in Bangladesh?",
      description:
        "Our team members have the best degrees in the IT section and they are very well-equipped with basic to advanced software development skills and knowledge. That is why it is safe to say that SoftyPy IT is the best IT company in Bangladesh.",
    },
    {
      title: "How Many IT Companies Are There in Bangladesh?",
      description:
        " At present, there are more than 500+ registered IT companies out there in Bangladesh.",
    },
    {
      title: " Which Is the Best Software Company? ",
      description:
        "Having skilled and highly trained IT specialists in the team, SoftyPy IT provides the best software development services at the best possible prices in the fastest amount of time. This makes SoftyPy IT the best software development company in Bangladesh.",
    },

    
    {
      title: "Which Programming Language Is Best for Software Development?",
      description:
        "Python and C++ are two of the best programming languages for software development.",
    },

    {
      title: "What Is Software Development Framework?",
      description:
        "A software development framework is basically an application that provides a set of components that can be used for different applications to reduce the cost and time it takes to develop the entire application..",
    },
    {
      title: "How Many Registered Software Companies Are in Bangladesh?",
      description:
        "At present, there are more than 800+ registered software companies out there in Bangladesh.",
    },
    {
      title: " How Many Tech Companies Are There in Bangladesh?",
      description:
        "At present, there are around 1200 startup tech companies out there in Bangladesh.All that has been discussed thus far makes it quite clear that SoftyPy IT has the best and most highly skilled team members who work tirelessly to develop the best software for your services. We offer a number of the best software development services with the best pricing range at the fastest possible time frame. That is how we are the best software development company in Bangladesh right now.",
    },
  ];
  const toggle = (idx) =>
    setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));

  return (
    <Container>
      <div className="mt-20">
        <SectionTitle
          title="Frequently Asked Questions"
          text=" Most Common Questions asked by our Clients"
        />
      </div>
      <div className="mx-4 rounded-lg border font-sans my-10">
        {accordionsData.map((PerAccordion, idx) => (
          <div key={idx} className="border-b p-4">
            <button
              onClick={() => toggle(idx)}
              className="flex h-full w-full items-center justify-between py text-black font-medium"
            >
              <span className="text-xl">{PerAccordion.title}</span>
              <span  className="rounded-full bg-blue-100 p-2">
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
              <div className="overflow-hidden">{PerAccordion.description}</div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

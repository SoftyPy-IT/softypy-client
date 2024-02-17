import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SectionTitle from "../../pages/Shared/SectionTitle/SectionTitle";
import implementation from "../../../public/assets/implementation.avif";
import plan from "../../../public/assets/plan.jpg";
import plan2 from "../../../public/assets/plane.avif";
import { FaStreetView,FaEnvelopeOpenText,FaPhoneVolume ,FaRecycle,FaSpellCheck,FaCheckDouble} from "react-icons/fa";


const Work = () => {
  return (
    <div>
      <div className="my-8">
        <SectionTitle
          title="How SoftyPy Work"
          text="As a full-stack digital marketing agency, Nextstair helps businesses across various industries get found online by their targeted customers. Take a look and see what’s how we work with every clients."
        ></SectionTitle>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#F81600", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #F81600" }}
          date="2011 - present"
          iconStyle={{ background: "#F81600", color: "#fff" }}
          icon={<FaEnvelopeOpenText />}
        >
          <h3 className="vertical-timeline-element-title text-xl font-bold ">
            {" "}
            Get In Touch
          </h3>
          <p>
            The first thing for you to do is contact us right away. You can
            contact us directly by calling us or mailing us. Once you do, we’ll
            get back to you shortly and then we can start to know more about
            each other and that will create a strong bond between you and us.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2010 - 2011"
          iconStyle={{ background: "#F81600", color: "#fff" }}
          icon={<FaPhoneVolume />}
        >
          <img src={plan} alt="result" />
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2008 - 2010"
          iconStyle={{ background: "#F81600", color: "#fff" }}
          icon={<FaRecycle />}
        >
          <h3 className="vertical-timeline-element-title text-2xl font-bold">
            {" "}
            Finding The Problems
          </h3>

          <p>
            Next up, We find out all the problems in your website and note it
            down. We dig deep in order to find out the problem from its core.
            Our specialty is that we fix the problem from its core so that
            you’re not bugged by it in the future.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2006 - 2008"
          iconStyle={{ background: "#F81600", color: "#fff" }}
          icon={<FaRecycle />}
        >
          <img src={plan} alt="result" />
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="April 2013"
          iconStyle={{ background: "#F81600", color: "#fff" }}
          icon={<FaCheckDouble />}
        >
          <h3 className="vertical-timeline-element-title text-2xl font-bold">
            Set Up Action Plan
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
          <p>
            Once we deduce the problems, we come up with the solution. Based on
            the solution we set up an effective action plan for your website. We
            will walk you through the process which will make it easier for you
            to understand what we will do.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="November 2012"
          iconStyle={{ background: "#F81600", color: "#fff" }}
          icon={<FaCheckDouble />}
        >
          <img src={plan2} alt="result" />
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2002 - 2006"
          iconStyle={{ background: "#F81600", color: "#fff" }}
          icon={<FaSpellCheck/>}
        >
          <h3 className="vertical-timeline-element-title text-2xl font-bold">
            Implementation
          </h3>

          <p>
            Once the action plan is set, and the terms and conditions are agreed
            upon, we will go for implementation. We’d work for a certain time
            period and keep executing the strategies according to our discussed
            plan of action.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2002 - 2006"
          iconStyle={{ background: "#F81600", color: "#fff" }}
          icon={<FaSpellCheck />}
        >
          <img src={implementation} alt="result" />
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2002 - 2006"
          iconStyle={{ background: "#F81600", color: "#fff" }}
          icon={<FaStreetView />}
        >
          <h3 className="vertical-timeline-element-title text-2xl font-bold">
            Results Of Success
          </h3>

          <p>
            And after implementing for the mentioned time frame, you finally get
            to see the results of our work. When you see your website on the
            first page of Google, you’ll know why we are the best Digital
            Marketing Agency in Bangladesh.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2002 - 2006"
          iconStyle={{ background: "#F81600", color: "#fff" }}
          icon={<FaStreetView />}
        >
          <img src={result} alt="result" />
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Work;

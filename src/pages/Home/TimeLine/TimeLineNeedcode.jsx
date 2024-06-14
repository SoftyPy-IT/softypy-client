// /* eslint-disable react/no-unescaped-entities */
// import "./TimeLine.css";
// import {
//   FaStreetView,
//   FaEnvelopeOpenText,
//   FaRecycle,
//   FaSpellCheck,
//   FaCheckDouble,
//   FaProjectDiagram,
// } from "react-icons/fa";
// import production from "../../../../public/assets/production.png";
// import planing from "../../../../public/assets/planing.png";
// import task from "../../../../public/assets/task.avif";
// import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
// import plan2 from "../../../../public/assets/working.png";
// import testing from "../../../../public/assets/testing.png";
// import review from "../../../../public/assets/review.png";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import Container from "../../../ui/Container";
// import border from "../../../../public/assets/roundBorder.png";
// import { HiOutlineLightBulb } from "react-icons/hi";

// AOS.init();

// const TimeLine = () => {
//   return (
//     <div className="sectionMargin">
//       <Container>
//         <div className="timeLinesWraps ">
//           <SectionTitle
//             title="How We Work"
//             text="Our team craft to seamlessly blend innovation, collaboration, and excellence. We are dedicated to delivering tailored software solutions that not only meet but exceed our clients' expectations. Here's a glimpse into our unique workflow:
//     "
//           ></SectionTitle>

//           <div className="relative">
           
//             <div className="borderRound"></div>
//             <div className="">
//               <div className="workFlowBox">
//                 <div className="workFlowIcon">
//                   <HiOutlineLightBulb size={70} />
//                 </div>
//                 <div>
//                   <b className="text-[#1586FD]">Requirement Analysis</b>
//                 </div>
//               </div>
//               <div className="workFlowBox workFlowBox2">
//                 <div className="workFlowIcon">
//                   <HiOutlineLightBulb size={70} />
//                 </div>
//                 <div>
//                   <b className="text-[#1586FD]">Requirement Analysis</b>
//                 </div>
//               </div>
//               <div className="workFlowBox workFlowBox3">
//               <div className="workFlowIcon">
//                 <HiOutlineLightBulb size={70} />
//               </div>
//               <div>
//                 <b className="text-[#1586FD]">Requirement Analysis</b>
//               </div>
//             </div>
//             <div className="workFlowBox workFlowBox4">
//             <div className="workFlowIcon">
//               <HiOutlineLightBulb size={70} />
//             </div>
//             <div>
//               <b className="text-[#1586FD]">Requirement Analysis</b>
//             </div>
//           </div>
//           <div className="workFlowBox workFlowBox5">
//           <div className="workFlowIcon">
//             <HiOutlineLightBulb size={70} />
//           </div>
//           <div>
//             <b className="text-[#1586FD]">Requirement Analysis</b>
//           </div>
//         </div>
//         <div className="workFlowBox workFlowBox6">
//         <div className="workFlowIcon">
//           <HiOutlineLightBulb size={70} />
//         </div>
//         <div>
//           <b className="text-[#1586FD]">Requirement Analysis</b>
//         </div>
//       </div>
//             </div>
//           </div>

//           <div className="timeline">
//             <div data-aos="fade-right" className="leftContainer container">
//               <span>
//                 <FaStreetView />
//               </span>
//               <div className="textBox">
//                 <div className="textBoxImg">
//                   <img src={production} alt="" />
//                 </div>
//                 <h2 className="text-xl font-bold my-3">Requirement Analysis</h2>
//                 <p>
//                   Our team engage in detailed consultations with clients to
//                   understand their needs. Conduct thorough requirement analysis
//                   to define project goals and scope. And then Establish a clear
//                   understanding of the software's purpose and functionality.
//                 </p>
//                 <small className="leftContentArrow"></small>
//               </div>
//             </div>
//             <div className="rightContainer container">
//               <span>
//                 <FaEnvelopeOpenText />
//               </span>
//               <div className="textBox">
//                 <div className="textBoxImg">
//                   <img src={planing} alt="" />
//                 </div>
//                 <h2 className="text-xl font-bold my-3">Design and Planning</h2>
//                 <p>
//                   In the dynamic realm of software development, our Design and
//                   Planning team stands as the creative and strategic backbone of
//                   our operations. Comprising seasoned architects and innovative
//                   designers, this team is dedicated to transforming conceptual
//                   ideas into concrete plans. From crafting comprehensive design
//                   blueprints to meticulous planning, they ensure that every
//                   project aligns seamlessly with our clients' goals.
//                 </p>
//                 <small className="rightContentArrow"></small>
//               </div>
//             </div>
//             <div className="leftContainer container">
//               <span>
//                 <FaRecycle />
//               </span>
//               <div className="textBox">
//                 <div className="textBoxImg">
//                   <img src={task} alt="" />
//                 </div>
//                 <h2 className="text-xl font-bold my-3">
//                   Development Iterations
//                 </h2>
//                 <p>
//                   We understand that adaptability and responsiveness are
//                   essential in the ever-evolving tech landscape. By breaking
//                   down projects into iterative sprints, we prioritize
//                   flexibility and client involvement, ensuring that each
//                   development phase delivers tangible progress. This iterative
//                   methodology not only accelerates the development process but
//                   also allows us to incorporate client feedback seamlessly.
//                 </p>
//                 <small className="leftContentArrow"></small>
//               </div>
//             </div>
//             <div className="rightContainer container">
//               <span>
//                 <FaProjectDiagram />
//               </span>
//               <div className="textBox">
//                 <div className="textBoxImg">
//                   <img src={plan2} alt="" />
//                 </div>
//                 <h2 className="text-xl font-bold my-3">
//                   Quality Assurance and Testing
//                 </h2>
//                 <p>
//                   Comprising highly skilled and detail-oriented professionals,
//                   our QA team meticulously tests each aspect of the software,
//                   employing rigorous testing methodologies such as unit testing,
//                   integration testing, and system testing. With a commitment to
//                   identifying and addressing potential issues, our QA experts
//                   collaborate closely with the development team throughout the
//                   software development lifecycle.
//                 </p>
//                 <small className="rightContentArrow"></small>
//               </div>
//             </div>
//             <div className="leftContainer container">
//               <span>
//                 <FaCheckDouble />
//               </span>
//               <div className="textBox">
//                 <div className="textBoxImg">
//                   <img src={testing} alt="" />
//                 </div>
//                 <h2 className="text-xl font-bold my-3">
//                   {" "}
//                   Deployment and Client Approval{" "}
//                 </h2>
//                 <p>
//                   we orchestrate the transition from development to deployment,
//                   ensuring a flawless integration of the software in a
//                   controlled environment. During this pivotal stage, our
//                   client-centric approach takes center stage. We conduct a
//                   comprehensive client review, inviting their valuable insights
//                   and feedback.
//                 </p>
//                 <small className="leftContentArrow"></small>
//               </div>
//             </div>
//             <div className="rightContainer container">
//               <span>
//                 <FaSpellCheck />
//               </span>
//               <div className="textBox">
//                 <div className="textBoxImg">
//                   <img src={review} alt="" />
//                 </div>
//                 <h2 className="text-xl font-bold my-3">
//                   Post-Launch Support and Maintenance
//                 </h2>
//                 <p>
//                   With a proactive approach, we promptly address any post-launch
//                   issues, implement updates, and fine-tune the system to
//                   guarantee optimal functionality. Our team is not just about
//                   troubleshooting; we're your partners in continuous
//                   improvement. By providing regular maintenance services, we
//                   ensure that your software stays ahead of the curve, adapting
//                   to evolving needs and emerging technologies. Trust our
//                   Post-Launch Support team to keep your digital solutions
//                   running seamlessly, allowing you to focus on what matters most
//                   – the success of your business.
//                 </p>
//                 <small className="rightContentArrow"></small>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default TimeLine;

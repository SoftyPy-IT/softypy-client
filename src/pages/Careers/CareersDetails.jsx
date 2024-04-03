import { Link } from "react-router-dom";
import Container from "../../ui/Container";
import NavBar from "../Shared/NavBar/NavBar";

const CareersDetails = () => {
  return (
    <div>
      <div className="shadow-lg">
        <NavBar />
      </div>
      <div className="careerContainerWraps">
        <div className="careerText">
          <h3 className="text-xl md:text-4xl xl:text-7xl font-bold">Build things you’re proud of</h3>
          <span className="block mt-4 text-sm md:text-xl">
            Join a crew as motivated as you. Make cool stuff for global brands.
            Level up, learn and grow.
          </span>
        </div>
      </div>

      <Container>
        <div className="pl-3 md:pl-0 md:px-5 xl:px-0 ">
          <div className="mt-20 text-black">
            <h3 className="text-2xl md:text-4xl font-bold text-black mb-5">
              Our Expectations{" "}
            </h3>
            <span className="text-2xl font-semibold ">🎯 Required</span>
            <ul className="space-y-2 mt-2 experienceList">

              <li> 💠 Strong proficiency in JavaScript, including DOM manipulation and the JavaScript object model.</li>
              <li>
              💠Through understanding of React JS, Next JS, rest API, Figma, Tailwind CSS, typescripts and its core principles.
              </li>
              <li>
              💠Experience with popular React JS workflows (such as Redux).
              </li>
              <li>💠A knack for benchmarking and optimization.</li>
              <li>
              💠Familiarity with newer specifications of EcmaScript.
              </li>
              <li>💠Familiarity with code versioning tools (such as Git).</li>
              <li>💠Experience with standard front-end development tools such as Babel, Webpack, NPM, etc., is a plus. Knowledge of Node Js is a plus.</li>
              <li>💠Responsive Design, Strong on Front-end </li>
            </ul>

            <span className="text-2xl font-semibold mt-10 block">
            🎯 Nice to have{" "}
            </span>
            <ul className="space-y-2 mt-2 experienceList">
              <li> 💠 Understanding of CI/CD(Travis, Jenkins) processes</li>
              <li> 💠 React Native </li>
              <li> 💠 Lead experience </li>
            </ul>



          </div>

          <div className="mt-20 text-black">
            <h3 className="text-2xl md:text-4xl font-bold text-black mb-5">
            🎯 QUALIFICATIONS
            </h3>
            <ul className="space-y-2 mt-2 experienceList">
              <li>
               💠 -Diligent, innovative, and conscientious
              </li>
              <li> 💠 -Mastering design software</li>
              <li>
               💠 -Likes challenges
              </li>
              <li>💠 -Have a sense of art</li>
              <li>
               💠 -Have high creativity, communication, and action.
              </li>
            </ul>
          </div>
          <div className="mt-20 text-black">
            <h3 className="text-2xl md:text-4xl font-bold text-black mb-5">
            🎯 What we offer
            </h3>
            <ul className="space-y-2 mt-2 experienceList">
              <li>
                💠  A sense of community and friendship, diversity, and inclusivity
              </li>
              <li>
              💠 Informal working environment with short decision-making chains
              </li>
              <li> 💠 Established personal development processes</li>
              <li> 💠 Support of professional training and certification</li>
              <li> 💠 Social benefits project bonus</li>
            </ul>
          </div>
          <div className="block md:flex justify-end">
            {" "}
           <Link to='/careers-apply'> <button className="applyBtn mt-5 ">Apply Now</button></Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CareersDetails;

import { Link } from "react-router-dom";
import Container from "../../ui/Container";
import NavBar from "../Shared/NavBar/NavBar";

const CareersDetails = () => {
  return (
    <div>
      <div className="text-white bg-[#40C7F4]">
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
            <span className="text-2xl font-semibold ">Required</span>
            <ul className="space-y-2 mt-2 experienceList">
              <li>2+ years in software development</li>
              <li>
                3+ years of production experience in backend development
                (Python)
              </li>
              <li>
                {" "}
                2+ years of production experience in front-end development (JS,
                React.js/ HTML/CSS){" "}
              </li>
              <li>Knowledge of SQL and experience with MongoDB, PostgreSQL</li>
              <li>
                Experience with TypeScript, Mongoose, Redux-Toolkit, Rest API{" "}
              </li>
              <li>Testing React with React Testing Library & Vitest</li>
              <li>Experience with Docker</li>
              <li>Upper-Intermediate English</li>
            </ul>

            <span className="text-2xl font-semibold mt-10 block">
              Nice to have{" "}
            </span>
            <ul className="space-y-2 mt-2 experienceList">
              <li>Understanding of CI/CD(Travis, Jenkins) processes</li>
              <li>React Native </li>
              <li>Lead experience </li>
            </ul>
          </div>
          <div className="mt-20 text-black">
            <h3 className="text-2xl md:text-4xl font-bold text-black mb-5">
              Your responsibilities{" "}
            </h3>
            <ul className="space-y-2 mt-2 experienceList">
              <li>
                Implement new and enhance existing features of the project.
              </li>
              <li>Implement scalable back-end and front-end solutions.</li>
              <li>
                Collaborate with and Designers to deliver appropriate data that
                meets the product and technical needs of the various platforms.
              </li>
              <li>Write and test code in local and staging environments.</li>
              <li>
                Extract the interface into reusable components for use in
                additional websites in the future.
              </li>
            </ul>
          </div>
          <div className="mt-20 text-black">
            <h3 className="text-2xl md:text-4xl font-bold text-black mb-5">
              What we offer
            </h3>
            <ul className="space-y-2 mt-2 experienceList">
              <li>
                A sense of community and friendship, diversity, and inclusivity
              </li>
              <li>
                Informal working environment with short decision-making chains
              </li>
              <li>Established personal development processes</li>
              <li>Support of professional training and certification</li>
              <li>Social benefits project bonus</li>
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

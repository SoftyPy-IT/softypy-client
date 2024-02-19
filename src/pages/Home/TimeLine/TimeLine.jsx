import "./TimeLine.css";
import {
  FaStreetView,
  FaEnvelopeOpenText,
  FaRecycle,
  FaSpellCheck,
  FaCheckDouble,
  FaProjectDiagram,
} from "react-icons/fa";
import production from "../../../../public/assets/production.png";
import planing from "../../../../public/assets/planing.png";
import task from "../../../../public/assets/task.avif";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import plan2 from "../../../../public/assets/working.png";
import testing from "../../../../public/assets/testing.png";
import review from "../../../../public/assets/review.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Container from "../../../ui/Container";
AOS.init();

const TimeLine = () => {
  return (
  <div className="sectionMargin">
  <Container>
  <div className="timeLinesWraps ">
  <SectionTitle
    title="How SoftyPy Work"
    text="As a full-stack digital marketing agency, Nextstair helps businesses across various industries get found online by their targeted customers. Take a look and see what’s how we work with every clients."
  ></SectionTitle>
  <div className="timeline">
    <div data-aos="fade-right" className="leftContainer container">
      <span>
        <FaStreetView />
      </span>
      <div className="textBox">
        <div className="textBoxImg">
          <img src={production} alt="" />
        </div>
        <h2 className="text-xl font-bold my-3">
          PRODUCT BACKLOG CREATION{" "}
        </h2>
        <p>
          Before any project work begins. we need to create a product
          backlog. It replaces the traditional requirements specification
          artifacts. This is essentially a list of the goals that need to be
          achieved in order to create a finished product. These are the list
          of epics or stories listed in order of priority. We conduct
          backlog refinement sessions to ensure that it contains the
          appropriate items, are prioritized and that the items at the top
          are ready for delivery.
        </p>
        <small className="leftContentArrow"></small>
      </div>
    </div>
    <div className="rightContainer container">
      <span>
        <FaEnvelopeOpenText />
      </span>
      <div className="textBox">
        <div className="textBoxImg">
          <img src={planing} alt="" />
        </div>
        <h2 className="text-xl font-bold my-3">
          SPRINT PLANNING -SPRINT BACKLOG CREATION
        </h2>
        <p>
          Sprint is an iteration, a time-boxed effort in which we produce a
          specified working software. During a sprint planning session, we
          set a sprint goal and create a sprint backlog from the product
          backlog. Sprint planning is a a collaborative effort involving the
          Development Team, Scrum Master and the Product Owner to clarify
          the details of the user stories and their respective acceptance
          criteria.
        </p>
        <small className="rightContentArrow"></small>
      </div>
    </div>
    <div className="leftContainer container">
      <span>
        <FaRecycle />
      </span>
      <div className="textBox">
        <div className="textBoxImg">
          <img src={task} alt="" />
        </div>
        <h2 className="text-xl font-bold my-3">
          SPRINT PLANNING - TASKS DENOMINATION
        </h2>
        <p>
          In the second part of the Sprint planning session, we break down
          the stories in sprint backlog into tasks which can be tracked
          easily. The tasks are then checked for dependencies and the
          required time is estimated. We may also update the sprint backlog
          as more details are visible at this point. After that, we update
          the scrum board with stories in story to do section and tasks in
          the task to do section. The scrum board is used and updated during
          the whole sprint.
        </p>
        <small className="leftContentArrow"></small>
      </div>
    </div>
    <div className="rightContainer container">
      <span>
        <FaProjectDiagram />
      </span>
      <div className="textBox">
        <div className="textBoxImg">
          <img src={plan2} alt="" />
        </div>
        <h2 className="text-xl font-bold my-3">WORKING ON THE SPRINT</h2>
        <p>
          This is the time where the actual coding, testing, UI designing,
          technical writeups etc. are performed. We stand for 5-minutes
          daily scrum meetings to sync everyone with the latest development,
          improve communications, eliminate other meetings and identify
          impediments to development for removal, highlight, and promote
          quick decision-making. We track our development work in the sprint
          board, remaining hours are plotted in a burndown chart.
        </p>
        <small className="rightContentArrow"></small>
      </div>
    </div>
    <div className="leftContainer container">
      <span>
        <FaCheckDouble />
      </span>
      <div className="textBox">
        <div className="textBoxImg">
          <img src={testing} alt="" />
        </div>
        <h2 className="text-xl font-bold my-3"> TESTING AND DEBUGGING </h2>
        <p>
          This is not a separate phase at the end of coding as done
          typically, rather it is done inside the sprint. When the stories
          are ready for review, they are tested according to the acceptance
          criteria of the stories. The bug is fixed and retested if
          required. We perform the Integration and regression testing when
          all stories in the sprint are done. It ensures that the
          deliverable or increment is in working condition and ready.
        </p>
        <small className="leftContentArrow"></small>
      </div>
    </div>
    <div className="rightContainer container">
      <span>
        <FaSpellCheck />
      </span>
      <div className="textBox">
        <div className="textBoxImg">
          <img src={review} alt="" />
        </div>
        <h2 className="text-xl font-bold my-3">
          SPRINT REVIEW, RETROSPECTIVE
        </h2>
        <p>
          At the end of the sprint, we hold a sprint review session where
          everyone is involved. In the session, the work is demonstrated. We
          also plan for any changes that need to be done according to
          feedback. We hold a sprint retrospective session after the sprint
          is concluded to see what went well, what went wrong and what can
          be improved in the process. It enables us to continuously evolve
          and improve.
        </p>
        <small className="rightContentArrow"></small>
      </div>
    </div>
  </div>
</div>
  </Container>
  </div>
  );
};

export default TimeLine;

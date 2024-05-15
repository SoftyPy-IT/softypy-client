import NavBar from "../Shared/NavBar/NavBar";
import "./Faq.css";

import Container from "../../ui/Container";
import AskAndQuestion from "../../components/FrequentlyAskQuestions/AskAndQuestion";
export default function Faq() {
  return (
    <>
      <div className="shadow-lg">
        <NavBar />
      </div>
      <div className="careerContainerWraps">
        <div className="careerText">
          <h3 className=" md:text-4xl xl:text-7xl font-bold">
            Do you have any questions for us ?
          </h3>
        </div>
      </div>

      <Container>
        <AskAndQuestion />
      </Container>
    </>
  );
}

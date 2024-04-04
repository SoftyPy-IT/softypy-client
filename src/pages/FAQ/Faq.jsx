
import NavBar from "../Shared/NavBar/NavBar";
import "./Faq.css";


import Container from "../../ui/Container";
import AskAndQuestion from "../../components/FrequentlyAskQuestions/AskAndQuestion";
export default function Faq() {

  return (
    <>
      <div className="servicessWraps">
        <div className="navsBarWrap text-white ">
          <NavBar />
          <div className="faqContent">
            <div>
              <h2 className="text-2xl md:text-5xl font-bold">
                Do you have any questions for us ?{" "}
              </h2>
            </div>
          </div>
        </div>
      </div>
      <Container>
      <AskAndQuestion />
      {/** 
      <div className="faqWrap">
        <Accordion>
          <AccordionSummary
            onClick={handleToggle}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              <h3
                className={`${
                  toggle ? "activeFaqQuestion" : "hideFaqQuestions"
                }`}
              >
                Do You Make Website?
              </h3>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <h3 className={`${toggle ? "" : "activeFaqQuestion"}`}>
                Do You Make Website?
              </h3>
              <div className="faqCard">
                <div className="faqCardContent">
                  Yeah, We (SoftyPy) have a practical solution for best Custom
                  WordPress Website Design and Development services in the
                  world.
                </div>
                <div className="faqCardImage">
                  <img src={img} alt="working" />
                </div>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            onClick={handleToggle}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              <h3
                className={`${
                  toggle ? "activeFaqQuestion" : "hideFaqQuestions"
                }`}
              >
                Do You Provide IT Training And Consultancy?
              </h3>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <h3 className={`${toggle ? "" : "activeFaqQuestion"}`}>
                Do You Provide IT Training And Consultancy?
              </h3>
              <div className="faqCard">
                <div className="faqCardContent">
                  One of the biggest challenges of the 21st century is getting
                  skilled manpower who will lead the nation and keeping this in
                  mind, we are committed to ensuring the best suitable training
                  programs for our youths.
                </div>
                <div className="faqCardImage">
                  <img src={img} alt="working" />
                </div>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            onClick={handleToggle}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              <h3
                className={`${
                  toggle ? "activeFaqQuestion" : "hideFaqQuestions"
                }`}
              >
                Do You Provide Complete Digital Marketing Service?
              </h3>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <h3 className={`${toggle ? "" : "activeFaqQuestion"}`}>
                Do You Provide Complete Digital Marketing Service?
              </h3>
              <div className="faqCard">
                <div className="faqCardContent">
                  We give complete digital marketing solution for growing your
                  business. Amazing results start with amazing strategies. We’ve
                  worked with the top companies in the world.
                </div>
                <div className="faqCardImage">
                  <img src={img} alt="working" />
                </div>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      */}
      </Container>
    </>
  );
}

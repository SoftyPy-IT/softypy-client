import Brand from "../../components/Brand/Brand";
import Review from "../../components/Review/Review";
import NavBar from "../Shared/NavBar/NavBar";
import './Client.css'
const Client = () => {
  return (
    <section>
      <div className=" ">
      <div className="shadow-lg">
      <NavBar />
    </div>
      </div>
      <div className="my-24">
        <Review />
      </div>
      <Brand/>
    </section>
  );
};

export default Client;

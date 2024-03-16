/* eslint-disable react/no-unescaped-entities */

import Container from "../../ui/Container";
import NavBar from "../Shared/NavBar/NavBar";
import "./Website.css";
import { HiOutlineShoppingCart } from "react-icons/hi";
const Website = () => {
  return (
    <div className="pb-10 bg-[#E5E5E5]">
      <div className="bg-[#40C7F4] text-white">
        <NavBar />
      </div>

      <div className="w-full bg-[#00578A] h-[250px] ">
        <h3 className="text-center font-bold text-white text-5xl pt-10">
          {" "}
          "Webverse: Gateway to Digital World"{" "}
        </h3>
      </div>
      <div className="-mt-[80px] z-[99999]">
        <Container>
          <div className="grid grid-cols-4 gap-5 ">
            <div className="servicesCard">
              <div>
                <HiOutlineShoppingCart
                  className="text-center mx-auto"
                  size={70}
                />
                <h3 className="text-xl font-semibold "> E-commerce Website </h3>
                <p>
                  {" "}
                  E-commerce websites provide global accessibility, convenience,
                  and data insights
                </p>
              </div>
            </div>
            <div className="servicesCard">
              <div>
                <HiOutlineShoppingCart
                  className="text-center mx-auto"
                  size={70}
                />
                <h3 className="text-xl font-semibold ">
                  {" "}
                  News Portal Website{" "}
                </h3>
                <p>
                  {" "}
                  E-commerce websites provide global accessibility, convenience,
                  and data insights
                </p>
              </div>
            </div>
            <div className="servicesCard">
              <div>
                <HiOutlineShoppingCart
                  className="text-center mx-auto"
                  size={70}
                />
                <h3 className="text-xl font-semibold ">
                  Online Travel Agency (OTA) Website.{" "}
                </h3>
                <p>
                  {" "}
                  E-commerce websites provide global accessibility, convenience,
                  and data insights
                </p>
              </div>
            </div>
            <div className="servicesCard">
              <div>
                <HiOutlineShoppingCart
                  className="text-center mx-auto"
                  size={70}
                />
                <h3 className="text-xl font-semibold ">
                  {" "}
                  Corporate Business Website{" "}
                </h3>
                <p>
                  {" "}
                  E-commerce websites provide global accessibility, convenience,
                  and data insights
                </p>
              </div>
            </div>
            <div className="servicesCard">
              <div>
                <HiOutlineShoppingCart
                  className="text-center mx-auto"
                  size={70}
                />
                <h3 className="text-xl font-semibold ">
                  {" "}
                  Nonprofit / Donation Websites{" "}
                </h3>
                <p>
                  {" "}
                  E-commerce websites provide global accessibility, convenience,
                  and data insights
                </p>
              </div>
            </div>
            <div className="servicesCard">
              <div>
                <HiOutlineShoppingCart
                  className="text-center mx-auto"
                  size={70}
                />
                <h3 className="text-xl font-semibold ">
                  {" "}
                  Educational Websites{" "}
                </h3>
                <p>
                  {" "}
                  E-commerce websites provide global accessibility, convenience,
                  and data insights
                </p>
              </div>
            </div>
            <div className="servicesCard">
              <div>
                <HiOutlineShoppingCart
                  className="text-center mx-auto"
                  size={70}
                />
                <h3 className="text-xl font-semibold ">Agency Website </h3>
                <p>
                  {" "}
                  E-commerce websites provide global accessibility, convenience,
                  and data insights
                </p>
              </div>
            </div>
            <div className="servicesCard">
              <div>
                <HiOutlineShoppingCart
                  className="text-center mx-auto"
                  size={70}
                />
                <h3 className="text-xl font-semibold ">
                  {" "}
                  Real Estate Websites{" "}
                </h3>
                <p>
                  {" "}
                  E-commerce websites provide global accessibility, convenience,
                  and data insights
                </p>
              </div>
            </div>
            <div className="servicesCard">
              <div>
                <HiOutlineShoppingCart
                  className="text-center mx-auto"
                  size={70}
                />
                <h3 className="text-xl font-semibold ">
                  {" "}
                  Health and Fitness Websites{" "}
                </h3>
                <p>
                  {" "}
                  E-commerce websites provide global accessibility, convenience,
                  and data insights
                </p>
              </div>
            </div>
            <div className="servicesCard">
              <div>
                <HiOutlineShoppingCart
                  className="text-center mx-auto"
                  size={70}
                />
                <h3 className="text-xl font-semibold ">
                  {" "}
                  Educational Websites{" "}
                </h3>
                <p>
                  {" "}
                  E-commerce websites provide global accessibility, convenience,
                  and data insights
                </p>
              </div>
            </div>

            <div className="servicesCard">
              <div>
                <HiOutlineShoppingCart
                  className="text-center mx-auto"
                  size={70}
                />
                <h3 className="text-xl font-semibold "> Portfolio Website </h3>
                <p>
                  {" "}
                  E-commerce websites provide global accessibility, convenience,
                  and data insights
                </p>
              </div>
            </div>
            <div className="servicesCard">
              <div>
                <HiOutlineShoppingCart
                  className="text-center mx-auto"
                  size={70}
                />
                <h3 className="text-xl font-semibold "> Blog Website </h3>
                <p>
                  {" "}
                  E-commerce websites provide global accessibility, convenience,
                  and data insights
                </p>
              </div>
            </div>
            <div className="servicesCard">
              <div>
                <HiOutlineShoppingCart
                  className="text-center mx-auto"
                  size={70}
                />
                <h3 className="text-xl font-semibold ">
                  Social Media Website{" "}
                </h3>
                <p>
                  {" "}
                  E-commerce websites provide global accessibility, convenience,
                  and data insights
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Website;

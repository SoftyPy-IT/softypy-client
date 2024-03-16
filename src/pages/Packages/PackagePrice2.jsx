import Container from "../../ui/Container";
import { FaWordpressSimple } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import "./Package.css";
import { HiOutlineCheck } from "react-icons/hi";
import CommonButton from "../Shared/CommonButton/CommonButton";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";
const PackagePrice2 = () => {
  return (
    <div className="bg-[#e5e5e560] py-10 md:py-20 ">
      <Container>
        <SectionTitle
          title="Web Development Packages and Prices"
          text="SoftyPy is a technical agency based in Dhaka, Bangladesh. We had started website design & development in mind but with the time the canvas is widened as a full-service software development company."
        />
        <div className="grid grid-cols-1 gap-10 mt-16 lg:grid-cols-3 xl:grid-cols-3 place-content-center ">
          <div className="wordPressPackageWrap">
            <div className="wordPressPackage">
              <IoLogoNodejs size={100} />
              <hr className="my-5" />
              <div className="flex items-center justify-between py-3 ">
                <div className="flex">
                  <span className="mr-3 text-2xl md:text-4xl">৳</span>
                  <h2 className="text-3xl font-bold md:text-5xl xl:text-6xl">
                    25000
                  </h2>
                </div>
                <div>
                  <h4 className="font-bold lg:text-xl xl:text-2xl">Basic</h4>
                  <h4 className="font-bold lg:text-xl xl:text-2xl">Package </h4>
                </div>
              </div>
              <hr />
              <div>
                <div className="flex items-center mt-3">
                  <HiOutlineCheck className="mr-2" size={25} />
                  <span>Quality website (WordPress, Joomla, Drupal)</span>
                </div>
                <div className="flex items-center mt-3">
                  <HiOutlineCheck className="mr-2" size={25} />
                  <span> 100% Responsive</span>
                </div>

                <div className="flex items-center mt-3">
                  <HiOutlineCheck className="mr-2" size={25} />
                  <span> Mobile-Friendly Design</span>
                </div>

                <div className="flex items-center mt-3">
                  <HiOutlineCheck className="mr-2" size={25} />
                  <span>Custom Design</span>
                </div>
                <div className="flex items-center mt-3">
                  <HiOutlineCheck className="mr-2" size={25} />
                  <span> Photo Gallery</span>
                </div>
                <div className="flex items-center mt-3">
                  <HiOutlineCheck className="mr-2" size={25} />
                  <span> Video Gallery</span>
                </div>
                <div className="flex items-center mt-3">
                  <HiOutlineCheck className="mr-2" size={25} />
                  <span>Google Map</span>
                </div>

                <div className="flex items-center mt-3">
                  <HiOutlineCheck className="mr-2" size={25} />
                  <span>Contact( Phone+Email+Support)</span>
                </div>

                <div className="flex items-center mt-3">
                  <HiOutlineCheck className="mr-2" size={25} />
                  <span>Social Media Integration</span>
                </div>
                <div className="flex items-center mt-3">
                  <HiOutlineCheck className="mr-2" size={25} />
                  <span>Photography Support</span>
                </div>
                <div className="flex items-center mt-3">
                  <HiOutlineCheck className="mr-2" size={25} />
                  <span> Delivery Date 7 Days.</span>
                </div>
              </div>
            </div>
            <div className="mt-3 md:ml-8 lg:ml-0 ">
              <Link to="/contact">
                {" "}
                <CommonButton text="Contact Us" />
              </Link>
            </div>
          </div>

          <div className="wordPressPackageWrap">
            <div className="wordPressPackage">
              <IoLogoNodejs size={90} />
              <hr className="my-5" />
              <div className="flex items-center justify-between py-3 ">
                <div className="flex">
                  <span className="mr-3 text-2xl md:text-4xl">৳</span>
                  <h2 className="text-3xl font-bold md:text-5xl xl:text-6xl">
                    45000
                  </h2>
                </div>
                <div>
                  <h4 className="font-bold lg:text-xl xl:text-2xl">Advance</h4>
                  <h4 className="font-bold lg:text-xl xl:text-2xl">Package </h4>
                </div>
              </div>
              <hr />
              <div>
                <div className="flex items-center mt-3">
                  <HiOutlineCheck className="mr-2" size={25} />
                  <span>Fully Functional Website </span>
                </div>
                <div className="flex items-center mt-3">
                  <HiOutlineCheck className="mr-2" size={25} />
                  <span> Online Store(Ecommerce) </span>
                </div>

                <div className="flex items-center mt-3">
                  <HiOutlineCheck className="mr-2" size={25} />
                  <span> Mobile-Friendly Design</span>
                </div>

                <div className="flex items-center mt-3">
                  <HiOutlineCheck className="mr-2" size={25} />
                  <span>Full functional Website</span>
                </div>
                <div className="flex items-center mt-3">
                  <HiOutlineCheck className="mr-2" size={25} />
                  <span> PHP, Javascript, WordPress,</span>
                </div>

                <div className="flex items-center mt-3">
                  <HiOutlineCheck className="mr-2" size={25} />
                  <span>100% Responsive</span>
                </div>
                <div className="flex items-center mt-3">
                  <HiOutlineCheck className="mr-2" size={25} />
                  <span>Custom Design</span>
                </div>

                <div className="flex items-center mt-3">
                  <HiOutlineCheck className="mr-2" size={25} />
                  <span>Contact( Phone+Email+Support)</span>
                </div>

                <div className="flex items-center mt-3">
                  <HiOutlineCheck className="mr-2" size={25} />
                  <span>Google Map </span>
                </div>
                <div className="flex items-center mt-3">
                  <HiOutlineCheck className="mr-2" size={25} />
                  <span> Woocommerce Integration</span>
                </div>

                <div className="flex items-center mt-3">
                  <HiOutlineCheck className="mr-2" size={25} />
                  <span>Social Media Integration</span>
                </div>
                <div className="flex items-center mt-3">
                  <HiOutlineCheck className="mr-2" size={25} />
                  <span>Photography Support</span>
                </div>
                <div className="flex items-center mt-3">
                  <HiOutlineCheck className="mr-2" size={25} />
                  <span> Payment Gateway Integration</span>
                </div>
                <div className="flex items-center mt-3">
                  <HiOutlineCheck className="mr-2" size={25} />
                  <span> Delivery Date 7 Days.</span>
                </div>
              </div>
            </div>
            <div className="mt-3 md:ml-8 lg:ml-0 ">
              <Link to="/contact">
                {" "}
                <CommonButton text="Contact Us" />
              </Link>
            </div>
          </div>

          <div className="wordPressPackageWrap">
            <div className="wordPressPackage">
              <IoLogoNodejs size={90} />
              <hr className="my-5" />
              <div className="flex items-center justify-between py-3 ">
                <div className="flex">
                  <span className="mr-3 text-2xl md:text-4xl">৳</span>
                  <h2 className="text-3xl font-bold md:text-5xl xl:text-6xl">
                    45000
                  </h2>
                </div>
                <div>
                  <h4 className="font-bold lg:text-xl xl:text-2xl">Premium</h4>
                  <h4 className="font-bold lg:text-xl xl:text-2xl">Package </h4>
                </div>
              </div>
              <hr />
              <div>
                <div className="flex items-center mt-3">
                  <HiOutlineCheck className="mr-2" size={25} />
                  <span>Fully Functional Website </span>
                </div>
                <div className="flex items-center mt-3">
                  <HiOutlineCheck className="mr-2" size={25} />
                  <span> Online Store(E-Commerce) </span>
                </div>

                <div className="flex items-center mt-3">
                  <HiOutlineCheck className="mr-2" size={25} />
                  <span> Mobile-Friendly Design</span>
                </div>

                <div className="flex items-center mt-3">
                  <HiOutlineCheck className="mr-2" size={25} />
                  <span>Full functional Website</span>
                </div>
                <div className="flex items-center mt-3">
                  <HiOutlineCheck className="mr-2" size={25} />
                  <span> PHP, Javascript, WordPress,</span>
                </div>

                <div className="flex items-center mt-3">
                  <HiOutlineCheck className="mr-2" size={25} />
                  <span>100% Responsive</span>
                </div>
                <div className="flex items-center mt-3">
                  <HiOutlineCheck className="mr-2" size={25} />
                  <span>Custom Design</span>
                </div>
                <div className="flex items-center mt-3">
                  <HiOutlineCheck className="mr-2" size={25} />
                  <span>Photo Gallery</span>
                </div>
                <div className="flex items-center mt-3">
                  <HiOutlineCheck className="mr-2" size={25} />
                  <span>Video Gallery </span>
                </div>
                <div className="flex items-center mt-3">
                  <HiOutlineCheck className="mr-2" size={25} />
                  <span>Contact( Phone+Email+Support)</span>
                </div>

                <div className="flex items-center mt-3">
                  <HiOutlineCheck className="mr-2" size={25} />
                  <span>Google Map </span>
                </div>
                <div className="flex items-center mt-3">
                  <HiOutlineCheck className="mr-2" size={25} />
                  <span> Woocommerce Integration</span>
                </div>

                <div className="flex items-center mt-3">
                  <HiOutlineCheck className="mr-2" size={25} />
                  <span>Social Media Integration</span>
                </div>
                <div className="flex items-center mt-3">
                  <HiOutlineCheck className="mr-2" size={25} />
                  <span>Photography Support</span>
                </div>
                <div className="flex items-center mt-3">
                  <HiOutlineCheck className="mr-2" size={25} />
                  <span> Payment Gateway Integration</span>
                </div>
                <div className="flex items-center mt-3">
                  <HiOutlineCheck className="mr-2" size={25} />
                  <span> Delivery Date 7 Days.</span>
                </div>
              </div>
            </div>
            <div className="mt-3 md:ml-8 lg:ml-0 ">
              <Link to="/contact">
                {" "}
                <CommonButton text="Contact Us" />
              </Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-10 mt-16 lg:grid-cols-3 xl:grid-cols-3 place-content-center ">
          <div className="wordPressPackageWrap">
            <div className="wordPressPackage">
              <FaWordpressSimple size={100} />
              <hr className="my-5" />
              <div className="flex items-center justify-between py-3 ">
                <div className="flex">
                  <span className="mr-3 text-2xl md:text-4xl">৳</span>
                  <h2 className="text-3xl font-bold md:text-5xl xl:text-6xl">
                    60000
                  </h2>
                </div>
                <div>
                  <h4 className="font-bold lg:text-xl xl:text-2xl">Basic</h4>
                  <h4 className="font-bold lg:text-xl xl:text-2xl">Package </h4>
                </div>
              </div>
              <hr />
              <div>
                <div className="flex items-center mt-3">
                  <HiOutlineCheck className="mr-2" size={25} />
                  <span>Quality website (WordPress, Joomla, Drupal)</span>
                </div>
                <div className="flex items-center mt-3">
                  <HiOutlineCheck className="mr-2" size={25} />
                  <span> 100% Responsive</span>
                </div>

                <div className="flex items-center mt-3">
                  <HiOutlineCheck className="mr-2" size={25} />
                  <span> Mobile-Friendly Design</span>
                </div>

                <div className="flex items-center mt-3">
                  <HiOutlineCheck className="mr-2" size={25} />
                  <span>Custom Design</span>
                </div>
                <div className="flex items-center mt-3">
                  <HiOutlineCheck className="mr-2" size={25} />
                  <span> Photo Gallery</span>
                </div>
                <div className="flex items-center mt-3">
                  <HiOutlineCheck className="mr-2" size={25} />
                  <span> Video Gallery</span>
                </div>
                <div className="flex items-center mt-3">
                  <HiOutlineCheck className="mr-2" size={25} />
                  <span>Google Map</span>
                </div>

                <div className="flex items-center mt-3">
                  <HiOutlineCheck className="mr-2" size={25} />
                  <span>Contact( Phone+Email+Support)</span>
                </div>

                <div className="flex items-center mt-3">
                  <HiOutlineCheck className="mr-2" size={25} />
                  <span>Social Media Integration</span>
                </div>
                <div className="flex items-center mt-3">
                  <HiOutlineCheck className="mr-2" size={25} />
                  <span>Photography Support</span>
                </div>
                <div className="flex items-center mt-3">
                  <HiOutlineCheck className="mr-2" size={25} />
                  <span> Delivery Date 7 Days.</span>
                </div>
              </div>
            </div>
            <div className="mt-3 md:ml-8 lg:ml-0 ">
              <Link to="/contact">
                {" "}
                <CommonButton text="Contact Us" />
              </Link>
            </div>
          </div>

          <div className="wordPressPackageWrap">
            <div className="wordPressPackage">
              <FaWordpressSimple size={90} />
              <hr className="my-5" />
              <div className="flex items-center justify-between py-3 ">
                <div className="flex">
                  <span className="mr-3 text-2xl md:text-4xl">৳</span>
                  <h2 className="text-3xl font-bold md:text-5xl xl:text-6xl">
                    45000
                  </h2>
                </div>
                <div>
                  <h4 className="font-bold lg:text-xl xl:text-2xl">Advance</h4>
                  <h4 className="font-bold lg:text-xl xl:text-2xl">Package </h4>
                </div>
              </div>
              <hr />
              <div>
                <div className="flex items-center mt-3">
                  <HiOutlineCheck className="mr-2" size={25} />
                  <span>Fully Functional Website </span>
                </div>
                <div className="flex items-center mt-3">
                  <HiOutlineCheck className="mr-2" size={25} />
                  <span> Online Store(Ecommerce) </span>
                </div>

                <div className="flex items-center mt-3">
                  <HiOutlineCheck className="mr-2" size={25} />
                  <span> Mobile-Friendly Design</span>
                </div>

                <div className="flex items-center mt-3">
                  <HiOutlineCheck className="mr-2" size={25} />
                  <span>Full functional Website</span>
                </div>
                <div className="flex items-center mt-3">
                  <HiOutlineCheck className="mr-2" size={25} />
                  <span> PHP, Javascript, WordPress,</span>
                </div>

                <div className="flex items-center mt-3">
                  <HiOutlineCheck className="mr-2" size={25} />
                  <span>100% Responsive</span>
                </div>
                <div className="flex items-center mt-3">
                  <HiOutlineCheck className="mr-2" size={25} />
                  <span>Custom Design</span>
                </div>

                <div className="flex items-center mt-3">
                  <HiOutlineCheck className="mr-2" size={25} />
                  <span>Contact( Phone+Email+Support)</span>
                </div>

                <div className="flex items-center mt-3">
                  <HiOutlineCheck className="mr-2" size={25} />
                  <span>Google Map </span>
                </div>
                <div className="flex items-center mt-3">
                  <HiOutlineCheck className="mr-2" size={25} />
                  <span> Woocommerce Integration</span>
                </div>

                <div className="flex items-center mt-3">
                  <HiOutlineCheck className="mr-2" size={25} />
                  <span>Social Media Integration</span>
                </div>
                <div className="flex items-center mt-3">
                  <HiOutlineCheck className="mr-2" size={25} />
                  <span>Photography Support</span>
                </div>
                <div className="flex items-center mt-3">
                  <HiOutlineCheck className="mr-2" size={25} />
                  <span> Payment Gateway Integration</span>
                </div>
                <div className="flex items-center mt-3">
                  <HiOutlineCheck className="mr-2" size={25} />
                  <span> Delivery Date 7 Days.</span>
                </div>
              </div>
            </div>
            <div className="mt-3 md:ml-8 lg:ml-0 ">
              <Link to="/contact">
                {" "}
                <CommonButton text="Contact Us" />
              </Link>
            </div>
          </div>

          <div className="wordPressPackageWrap">
            <div className="wordPressPackage">
              <FaWordpressSimple size={90} />
              <hr className="my-5" />
              <div className="flex items-center justify-between py-3 ">
                <div className="flex">
                  <span className="mr-3 text-2xl md:text-4xl">৳</span>
                  <h2 className="text-3xl font-bold md:text-5xl xl:text-6xl">
                    45000
                  </h2>
                </div>
                <div>
                  <h4 className="font-bold lg:text-xl xl:text-2xl">Premium</h4>
                  <h4 className="font-bold lg:text-xl xl:text-2xl">Package </h4>
                </div>
              </div>
              <hr />
              <div>
                <div className="flex items-center mt-3">
                  <HiOutlineCheck className="mr-2" size={25} />
                  <span>Fully Functional Website </span>
                </div>
                <div className="flex items-center mt-3">
                  <HiOutlineCheck className="mr-2" size={25} />
                  <span> Online Store(Ecommerce) </span>
                </div>

                <div className="flex items-center mt-3">
                  <HiOutlineCheck className="mr-2" size={25} />
                  <span> Mobile-Friendly Design</span>
                </div>

                <div className="flex items-center mt-3">
                  <HiOutlineCheck className="mr-2" size={25} />
                  <span>Full functional Website</span>
                </div>
                <div className="flex items-center mt-3">
                  <HiOutlineCheck className="mr-2" size={25} />
                  <span> PHP, Javascript, WordPress,</span>
                </div>

                <div className="flex items-center mt-3">
                  <HiOutlineCheck className="mr-2" size={25} />
                  <span>100% Responsive</span>
                </div>
                <div className="flex items-center mt-3">
                  <HiOutlineCheck className="mr-2" size={25} />
                  <span>Custom Design</span>
                </div>
                <div className="flex items-center mt-3">
                  <HiOutlineCheck className="mr-2" size={25} />
                  <span>Photo Gallery</span>
                </div>
                <div className="flex items-center mt-3">
                  <HiOutlineCheck className="mr-2" size={25} />
                  <span>Video Gallery </span>
                </div>
                <div className="flex items-center mt-3">
                  <HiOutlineCheck className="mr-2" size={25} />
                  <span>Contact( Phone+Email+Support)</span>
                </div>

                <div className="flex items-center mt-3">
                  <HiOutlineCheck className="mr-2" size={25} />
                  <span>Google Map </span>
                </div>
                <div className="flex items-center mt-3">
                  <HiOutlineCheck className="mr-2" size={25} />
                  <span> Woocommerce Integration</span>
                </div>

                <div className="flex items-center mt-3">
                  <HiOutlineCheck className="mr-2" size={25} />
                  <span>Social Media Integration</span>
                </div>
                <div className="flex items-center mt-3">
                  <HiOutlineCheck className="mr-2" size={25} />
                  <span>Photography Support</span>
                </div>
                <div className="flex items-center mt-3">
                  <HiOutlineCheck className="mr-2" size={25} />
                  <span> Payment Gateway Integration</span>
                </div>
                <div className="flex items-center mt-3">
                  <HiOutlineCheck className="mr-2" size={25} />
                  <span> Delivery Date 7 Days.</span>
                </div>
              </div>
            </div>
            <div className="mt-3 md:ml-8 lg:ml-0 ">
              <Link to="/contact">
                {" "}
                <CommonButton text="Contact Us" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PackagePrice2;

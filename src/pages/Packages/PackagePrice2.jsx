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
              <div className="flex items-center justify-between bg-[#40C7F4] text-white p-3  ">
                <IoLogoNodejs size={100} />
                <div>
                  <h4 className="font-bold lg:text-xl xl:text-2xl">Basic</h4>
                  <h4 className="font-bold lg:text-xl xl:text-2xl">Package </h4>
                </div>
              </div>
              <div className="packagesContentWrap">
                <hr className="my-5" />
                <div className="flex items-center justify-center py-3 ">
                  <div className="flex ">
                    <span className="mr-3 text-2xl md:text-4xl">৳</span>
                    <h2 className="text-3xl font-bold md:text-5xl xl:text-6xl">
                      25000
                    </h2>
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

                <div className="mt-3 md:ml-8 lg:ml-0 ">
                  <Link to="/contact">
                    {" "}
                    <CommonButton text="Contact Us" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="wordPressPackageWrap">
            <div className="wordPressPackage">
              <div className="flex items-center justify-between bg-[#40C7F4] text-white p-3  ">
                <IoLogoNodejs size={100} />
                <div>
                  <h4 className="font-bold lg:text-xl xl:text-2xl">Advance</h4>
                  <h4 className="font-bold lg:text-xl xl:text-2xl">Package </h4>
                </div>
              </div>
              <hr className="my-5" />
              <div className="flex items-center justify-center py-3 ">
                <div className="flex">
                  <span className="mr-3 text-2xl md:text-4xl">৳</span>
                  <h2 className="text-3xl font-bold md:text-5xl xl:text-6xl">
                    45000
                  </h2>
                </div>
              </div>
              <div className="packagesContentWrap">
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

                <div className="mt-3 md:ml-8 lg:ml-0 ">
                  <Link to="/contact">
                    {" "}
                    <CommonButton text="Contact Us" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="wordPressPackageWrap">
            <div className="wordPressPackage">
              <div className="flex items-center justify-between bg-[#40C7F4] text-white p-3  ">
                <IoLogoNodejs size={100} />
                <div>
                  <h4 className="font-bold lg:text-xl xl:text-2xl">Premium</h4>
                  <h4 className="font-bold lg:text-xl xl:text-2xl">Package </h4>
                </div>
              </div>
              <hr className="my-5" />
              <div className="flex items-center justify-center py-3 ">
                <div className="flex">
                  <span className="mr-3 text-2xl md:text-4xl">৳</span>
                  <h2 className="text-3xl font-bold md:text-5xl xl:text-6xl">
                    45000
                  </h2>
                </div>
              </div>
              <div className="packagesContentWrap">
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

                <div className="mt-3 md:ml-8 lg:ml-0 ">
                  <Link to="/contact">
                    {" "}
                    <CommonButton text="Contact Us" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 mt-16 lg:grid-cols-3 xl:grid-cols-3 place-content-center ">
          <div className="wordPressPackageWrap">
            <div className="wordPressPackage">
              <div className="flex items-center justify-between bg-[#40C7F4] text-white p-3  ">
                <FaWordpressSimple size={100} />
                <div>
                  <h4 className="font-bold lg:text-xl xl:text-2xl">Basic</h4>
                  <h4 className="font-bold lg:text-xl xl:text-2xl">Package </h4>
                </div>
              </div>
              <div className="packagesContentWrap">
                <hr className="my-5" />
                <div className="flex items-center justify-center py-3 ">
                  <div className="flex">
                    <span className="mr-3 text-2xl md:text-4xl">৳</span>
                    <h2 className="text-3xl font-bold md:text-5xl xl:text-6xl">
                      25,000
                    </h2>
                  </div>
                </div>
                <hr />
                <div>
                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span>Upto 5 Pages</span>
                  </div>
                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span> Logo </span>
                  </div>
                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span> Slider </span>
                  </div>
                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span> Dynamic Website </span>
                  </div>
                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span> Domain-1st Year Free (.com or .in )</span>
                  </div>
                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span> Hosting Free For 1st Year </span>
                  </div>
                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span> 1 Email – 500 MB Quota</span>
                  </div>
                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span> 1 Contact Form</span>
                  </div>
                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span> Free SSL</span>
                  </div>
                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span> Testimonials</span>
                  </div>
                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span> Gallery Section</span>
                  </div>

                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span>Chat Feature</span>
                  </div>
                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span>Chat Feature</span>
                  </div>
                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span>Content - 1 BD per word</span>
                  </div>
                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span>Social Profile Link</span>
                  </div>

                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span>Click to Call/Email</span>
                  </div>
                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span>Mobile Responsive</span>
                  </div>
                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span>Login Details Will Be Given</span>
                  </div>
                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span>Delivery in 3 Days </span>
                  </div>

                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span>Renewal – 2000 Rs + Domain Price Plus GST</span>
                  </div>
                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span>Support – 500 BD/Hr </span>
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
          </div>

          <div className="wordPressPackageWrap">
            <div className="wordPressPackage">
              <div className="flex items-center justify-between bg-[#40C7F4] text-white p-3  ">
                <FaWordpressSimple size={100} />
                <div>
                  <h4 className="font-bold lg:text-xl xl:text-2xl">Basic</h4>
                  <h4 className="font-bold lg:text-xl xl:text-2xl">Package </h4>
                </div>
              </div>
              <div className="packagesContentWrap">
                <hr className="my-5" />
                <div className="flex items-center justify-center py-3 ">
                  <div className="flex">
                    <span className="mr-3 text-2xl md:text-4xl">৳</span>
                    <h2 className="text-3xl font-bold md:text-5xl xl:text-6xl">
                      30,000
                    </h2>
                  </div>
                </div>
                <hr />
                <div>
                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span>Upto 10 Pages</span>
                  </div>
                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span> Logo </span>
                  </div>
                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span> Slider </span>
                  </div>
                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span> Dynamic Website </span>
                  </div>
                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span> Domain-1st Year Free (.com or .in )</span>
                  </div>
                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span> Hosting Free For 1st Year </span>
                  </div>
                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span> 2 Email – 500 MB Quota</span>
                  </div>
                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span> 1 Contact Form</span>
                  </div>
                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span> Free SSL</span>
                  </div>
                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span> Testimonials</span>
                  </div>
                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span> Gallery Section</span>
                  </div>

                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span>Chat Feature</span>
                  </div>
                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span>Chat Feature</span>
                  </div>
                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span>Content - 1 BD per word</span>
                  </div>
                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span>Social Profile Link</span>
                  </div>

                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span>Click to Call/Email</span>
                  </div>

                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span>500 BD/Extra Page</span>
                  </div>
                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span>Mobile Responsive</span>
                  </div>
                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span>Login Details Will Be Given</span>
                  </div>
                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span>Delivery in 7 Days </span>
                  </div>

                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span>Renewal – 2200 BD + Domain Price Plus GST</span>
                  </div>

                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span>Free 4 Hours Support </span>
                  </div>
                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span>Support – 500 BD/Hr </span>
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
          </div>
          <div className="wordPressPackageWrap">
            <div className="wordPressPackage">
              <div className="flex items-center justify-between bg-[#40C7F4] text-white p-3">
                <FaWordpressSimple size={100} />
                <div>
                  <h4 className="font-bold lg:text-xl xl:text-2xl">Premium</h4>
                  <h4 className="font-bold lg:text-xl xl:text-2xl">
                    E-commerce{" "}
                  </h4>
                </div>
              </div>

              <div className="packagesContentWrap">
                <hr className="my-5" />
                <div className="flex items-center justify-center py-3 ">
                  <div className="flex">
                    <span className="mr-3 text-2xl md:text-4xl">৳</span>
                    <h2 className="text-3xl font-bold md:text-5xl xl:text-6xl">
                      40,000
                    </h2>
                  </div>
                </div>
                <hr />
                <div>
                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span>Up to 50 Products </span>
                  </div>
                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span>Logo </span>
                  </div>
                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span>Contact Form – 3 </span>
                  </div>
                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span>Content - 1 BD per word </span>
                  </div>
                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span>500 BD/Extra Page </span>
                  </div>
                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span>WhatsApp Chat Integration </span>
                  </div>
                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span>Social Media Profiles Integration </span>
                  </div>
                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span>Social Profile Link </span>
                  </div>
                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span>WordPress Login Details Will be Given </span>
                  </div>
                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span>Payment Gateway </span>
                  </div>
                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span>Extra Support – 500 Rs/Hour </span>
                  </div>
                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span>Revisions – 2 </span>
                  </div>
                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span>Call/Email/Chat Support </span>
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
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PackagePrice2;

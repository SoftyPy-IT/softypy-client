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
              <div className="flex items-center justify-between bg-[#40C7F4] text-white p-3">
                <IoLogoNodejs size={100} />
                <div>
                  <h4 className="font-bold lg:text-xl xl:text-2xl">Basic</h4>
                  <h4 className="font-bold lg:text-xl xl:text-2xl">Package </h4>
                </div>
              </div>
              <div className="packagesContentWrap">
                <hr className="my-5" />
                <div className="flex items-center justify-center py-3">
                  <div className="text-center">
                    <div className="flex items-center">
                      <span className="mr-3 text-2xl md:text-4xl">৳</span>
                      <h2 className=" font-bold md:text-xl xl:text-2xl">
                        99,990 Taka / $909 USD
                      </h2>
                    </div>
                    <del className="text-red-600">
                      1,50,000 Taka / $1,819 USD
                    </del>
                  </div>
                </div>
                <hr />
                <div>
                  {/* List of features */}
                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span>Free Domain+Hosting</span>
                  </div>
                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span>Domain Name Email Address</span>
                  </div>
                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span>Junior UI/UX Designer</span>
                  </div>
                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span>Technology: MERN </span>
                  </div>
                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span>Cash on Delivery</span>
                  </div>
                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span>Online Payment</span>
                  </div>
                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span>User Management</span>
                  </div>
                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span>Sales Management</span>
                  </div>
                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span>Order Management</span>
                  </div>
                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span>Hot Deal/Flash Sale Management</span>
                  </div>
                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span>Free https ssl certificte (First Year)</span>
                  </div>
                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span>Free Training with video tutorial</span>
                  </div>
                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span>Development Time: 75 Days</span>
                  </div>
                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span>Renew Charge: 10,000 Taka (Per Year)</span>
                  </div>
                </div>

                {/* Contact button */}
                <div className="mt-3 md:ml-8 lg:ml-0 ">
                  <Link to="/contact">
                    <CommonButton text="Contact Us" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="wordPressPackageWrap">
            <div className="wordPressPackage">
              <div className="flex items-center justify-between bg-[#40C7F4] text-white p-3">
                <IoLogoNodejs size={100} />
                <div>
                  <h4 className="font-bold lg:text-xl xl:text-2xl">Advance</h4>
                  <h4 className="font-bold lg:text-xl xl:text-2xl">Package </h4>
                </div>
              </div>
              <div className="packagesContentWrap">
                <hr className="my-5" />
                <div className="flex items-center justify-center py-3 ">
                  <div className="text-center">
                    <div className="flex items-center">
                      <span className="mr-3 text-2xl md:text-4xl">৳</span>
                      <h2 className=" font-bold md:text-xl xl:text-2xl">
                        2,49,990 Taka / $2,273 USD
                      </h2>
                    </div>
                    <del className="text-red-600">
                      3,00,000 Taka / $3,519 USD
                    </del>
                  </div>
                </div>
                <hr />
                <div>
                  {/* List of features */}
                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span>Free Domain+Hosting</span>
                  </div>
                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span>Domain Name Email Address</span>
                  </div>
                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span> Senior UI/UX Designer</span>
                  </div>
                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span>Technology: MERN </span>
                  </div>
                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span>Cash on Delivery</span>
                  </div>
                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span>Online Payment</span>
                  </div>
                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span>User Management</span>
                  </div>
                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span>Sales Management</span>
                  </div>
                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span>Order Management</span>
                  </div>
                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span>Hot Deal/Flash Sale Management</span>
                  </div>
                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span>Free https ssl certificte (First Year)</span>
                  </div>
                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span>Free Training with video tutorial</span>
                  </div>
                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span>Development Time: 120Day </span>
                  </div>
                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span> Renew Charge: 30,000Taka (Per Year)</span>
                    
                   
                  </div>
                </div>

                <div className="mt-3 md:ml-8 lg:ml-0 ">
                  <Link to="/contact">
                    <CommonButton text="Contact Us" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="wordPressPackageWrap">
            <div className="wordPressPackage">
              <div className="flex items-center justify-between bg-[#40C7F4] text-white p-3">
                <IoLogoNodejs size={100} />
                <div>
                  <h4 className="font-bold lg:text-xl xl:text-2xl">Premium</h4>
                  <h4 className="font-bold lg:text-xl xl:text-2xl">Package </h4>
                </div>
              </div>
              <div className="packagesContentWrap">
                <hr className="my-5" />
                <div className="flex items-center justify-center py-3 ">
                  <div className="text-center">
                    <h2 className=" font-bold xl:text-3xl">Negotiable</h2>
                  </div>
                </div>
                <hr />
                <div>
                  {/* List of features */}
                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span>Free Domain+Hosting</span>
                  </div>
                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span>Domain Name Email Address</span>
                  </div>
                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span> Design - Custom</span>
                  </div>
                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span>Technology: Negotiable </span>
                  </div>
                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span>Cash on Delivery</span>
                  </div>
                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span>Online Payment</span>
                  </div>
                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span>User Management</span>
                  </div>
                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span>Sales Management</span>
                  </div>
                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span>Order Management</span>
                  </div>
                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span>Hot Deal/Flash Sale Management</span>
                  </div>
                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span>Free https ssl certificte (First Year)</span>
                  </div>
                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span>Free Training with video tutorial</span>
                  </div>
                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span>Development Time: Negotiable </span>
                  </div>
                  <div className="flex items-center mt-3">
                    <HiOutlineCheck className="mr-2" size={25} />
                    <span>Renew Charge: Negotiable </span>
                  </div>
                </div>

                <div className="mt-3 md:ml-8 lg:ml-0 ">
                  <Link to="/contact">
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

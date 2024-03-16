import "./Product.css";
import Container from "../../ui/Container";
import SectionTitle from "../../pages/Shared/SectionTitle/SectionTitle";
import {
  HiOutlineArrowNarrowRight,
  HiOutlineCheckCircle,
} from "react-icons/hi";
import "./PackagePrice.css";
import price from "../../../public/assets/price3.png";
import price2 from "../../../public/assets/price4.png";

const PackagePrice = () => {
  return (
    <div className="">
      <Container>
        <div id="price">
          <div className="mb-5 md:mb-36">
            <SectionTitle
              title=" Web Design Packages "
              text='"Discover our transparent pricing for bespoke website designs tailored to your needs. From sleek layouts to e-commerce solutions, we offer packages to suit businesses of all sizes. Explore our pricing section for a range of options crafted to elevate your online presence and drive success."'
            />
          </div>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3  place-items-center place-content-center gap-5">
              <div className="priceCard">
                <div>
                  <img src={price} alt="" />
                  <h3 className="text-xl mb-3  font-semibold text-white absolute top-4 left-3">
                    The Golden Package
                  </h3>
                  <div className="absolute top-14 right-[120px]">
                    <div className="w-20 h-20 text-sm overflow-hidden  flex items-center justify-center rounded-full priceDetails  bg-[#5B1782] text-white ">
                      <div>
                        <div>
                          <del>৳30250</del>
                        </div>
                        <small>
                          <p>৳20250</p>
                        </small>
                      </div>
                    </div>
                  </div>

                  <div className=" pl-5">
                    <div className="space-y-3 packageInclude">
                      <div className="flex items-center">
                        <HiOutlineCheckCircle
                          size={23}
                          className="mr-1 text-[#FB6E06]"
                        />
                        <p>10+ Pages </p>
                      </div>
                      <div className="flex items-center">
                        <HiOutlineCheckCircle
                          size={23}
                          className="mr-1 text-[#FB6E06]"
                        />
                        <p> Logo</p>
                      </div>
                      <div className="flex items-center">
                        <HiOutlineCheckCircle
                          size={23}
                          className="mr-1 text-[#FB6E06]"
                        />
                        <p>100% Mobile Responsive </p>
                      </div>
                      <div className="flex items-center">
                        <HiOutlineCheckCircle
                          size={23}
                          className="mr-1 text-[#FB6E06]"
                        />
                        <p>SEO Friendly </p>
                      </div>
                      <div className="flex items-center">
                        <HiOutlineCheckCircle
                          size={23}
                          className="mr-1 text-[#FB6E06]"
                        />
                        <p> Fast Loading </p>
                      </div>
                      <div className="flex items-center">
                        <HiOutlineCheckCircle
                          size={23}
                          className="mr-1 text-[#FB6E06]"
                        />
                        <p>SSL Add </p>
                      </div>
                      <div className="flex items-center">
                        <HiOutlineCheckCircle
                          size={23}
                          className="mr-1 text-[#FB6E06]"
                        />
                        <p>Category </p>
                      </div>
                      <div className="flex items-center">
                        <HiOutlineCheckCircle
                          size={23}
                          className="mr-1 text-[#FB6E06]"
                        />
                        <p> Dynamic Website </p>
                      </div>
                      <div className="flex items-center">
                        <HiOutlineCheckCircle
                          size={23}
                          className="mr-1 text-[#FB6E06]"
                        />
                        <p>Multiple Image Upload Option </p>
                      </div>
                      <div className="flex items-center">
                        <HiOutlineCheckCircle
                          size={23}
                          className="mr-1 text-[#FB6E06]"
                        />
                        <p>Login with Facebook and Gmail</p>
                      </div>
                      <div className="flex items-center">
                        <HiOutlineCheckCircle
                          size={23}
                          className="mr-1 text-[#FB6E06]"
                        />
                        <p>Related Products Section </p>
                      </div>
                      <div className="flex items-center">
                        <HiOutlineCheckCircle
                          size={23}
                          className="mr-1 text-[#FB6E06]"
                        />
                        <p>Product Image Zoom-in Capability </p>
                      </div>
                      <div className="flex items-center">
                        <HiOutlineCheckCircle
                          size={23}
                          className="mr-1 text-[#FB6E06]"
                        />
                        <p>Social Profile Link </p>
                      </div>
                      <div className="flex items-center">
                        <HiOutlineCheckCircle
                          size={23}
                          className="mr-1 text-[#FB6E06]"
                        />
                        <p> 1 Email – 500 MB Quota </p>
                      </div>
                      <div className="flex items-center">
                        <HiOutlineCheckCircle
                          size={23}
                          className="mr-1 text-[#FB6E06]"
                        />
                        <p> Hosting Free For 1st Year</p>
                      </div>
                      <div className="flex items-center">
                        <HiOutlineCheckCircle
                          size={23}
                          className="mr-1 text-[#FB6E06]"
                        />
                        <p> 00 Extra Page </p>
                      </div>
                      <div className="flex items-center">
                        <HiOutlineCheckCircle
                          size={23}
                          className="mr-1 text-[#FB6E06]"
                        />
                        <p> Support – 24/7 </p>
                      </div>

                      <div className="flex items-center">
                        <HiOutlineCheckCircle
                          size={23}
                          className="mr-1 text-[#FB6E06]"
                        />
                        <p> Free 4 Hours Support</p>
                      </div>
                      <div className="flex items-center">
                        <HiOutlineCheckCircle
                          size={23}
                          className="mr-1 text-[#FB6E06]"
                        />
                        <p>On time delivery </p>
                      </div>
                      <div className="flex items-center">
                        <HiOutlineCheckCircle
                          size={23}
                          className="mr-1 text-[#FB6E06]"
                        />
                        <p> Renewal – 2000 TK + Domain Price Plus GST</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between my-5 text-center px-3">
                      <div>
                        <small className="text-[#2D57A2] block">
                          Speak with us{" "}
                        </small>
                        <b>+88-01762-380594</b>
                        <br />
                        <b>+88-01303042561</b>
                      </div>
                      <div className="w-[2px] h-[40px] bg-[#5B1782]"></div>
                      <small className="text-[#2D57A2]">Want to discuss?</small>
                    </div>
                    <div className="priceBtn">
                      <small>Get Start Now </small>
                      <HiOutlineArrowNarrowRight className="ml-1" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="priceCard">
                <div>
                  <img src={price2} alt="" />
                  <h3 className="text-xl mb-3  font-semibold text-white absolute top-4 left-3">
                    The Premium Package
                  </h3>
                  <div className="absolute top-14 right-[120px]">
                    <div className="w-20 h-20 text-sm overflow-hidden  flex items-center justify-center rounded-full priceDetails2  bg-[#2D57A2] text-white ">
                      <div>
                        <div>
                          <p>৳200250</p>
                        </div>
                        <small>
                          <del>৳300250</del>
                        </small>
                      </div>
                    </div>
                  </div>

                  <div className=" pl-5">
                    <div className="space-y-3 packageInclude">
                      <div className="flex items-center">
                        <HiOutlineCheckCircle
                          size={23}
                          className="mr-1 text-[#FB6E06]"
                        />
                        <p>60+ Pages </p>
                      </div>
                      <div className="flex items-center">
                        <HiOutlineCheckCircle
                          size={23}
                          className="mr-1 text-[#FB6E06]"
                        />
                        <p> Live Chat</p>
                      </div>
                      <div className="flex items-center">
                        <HiOutlineCheckCircle
                          size={23}
                          className="mr-1 text-[#FB6E06]"
                        />
                        <p> WhatsApp Chat Integration</p>
                      </div>
                      <div className="flex items-center">
                        <HiOutlineCheckCircle
                          size={23}
                          className="mr-1 text-[#FB6E06]"
                        />
                        <p> Messenger Chat Integration</p>
                      </div>
                      <div className="flex items-center">
                        <HiOutlineCheckCircle
                          size={23}
                          className="mr-1 text-[#FB6E06]"
                        />
                        <p> Payment Gateway Integration</p>
                      </div>
                      <div className="flex items-center">
                        <HiOutlineCheckCircle
                          size={23}
                          className="mr-1 text-[#FB6E06]"
                        />
                        <p>Prevention of SQL injection</p>
                      </div>
                      <div className="flex items-center">
                        <HiOutlineCheckCircle
                          size={23}
                          className="mr-1 text-[#FB6E06]"
                        />
                        <p>Prevention of script injection </p>
                      </div>
                      <div className="flex items-center">
                        <HiOutlineCheckCircle
                          size={23}
                          className="mr-1 text-[#FB6E06]"
                        />
                        <p>Prevention of Data Hijacking</p>
                      </div>
                      <div className="flex items-center">
                        <HiOutlineCheckCircle
                          size={23}
                          className="mr-1 text-[#FB6E06]"
                        />
                        <p>4 Layer Authentication For API</p>
                      </div>
                      <div className="flex items-center">
                        <HiOutlineCheckCircle
                          size={23}
                          className="mr-1 text-[#FB6E06]"
                        />
                        <p>Content Security Policy (CSP)</p>
                      </div>
                      <div className="flex items-center">
                        <HiOutlineCheckCircle
                          size={23}
                          className="mr-1 text-[#FB6E06]"
                        />
                        <p>Google Site Map Setup</p>
                      </div>
                      <div className="flex items-center">
                        <HiOutlineCheckCircle
                          size={23}
                          className="mr-1 text-[#FB6E06]"
                        />
                        <p>Custom Admin Panel </p>
                      </div>
                      <div className="flex items-center">
                        <HiOutlineCheckCircle
                          size={23}
                          className="mr-1 text-[#FB6E06]"
                        />
                        <p>Database System (MongoDB)</p>
                      </div>
                      <div className="flex items-center">
                        <HiOutlineCheckCircle
                          size={23}
                          className="mr-1 text-[#FB6E06]"
                        />
                        <p>Facebook Pixel Setup </p>
                      </div>
                      <div className="flex items-center">
                        <HiOutlineCheckCircle
                          size={23}
                          className="mr-1 text-[#FB6E06]"
                        />
                        <p>CND System</p>
                      </div>
                      <div className="flex items-center">
                        <HiOutlineCheckCircle
                          size={23}
                          className="mr-1 text-[#FB6E06]"
                        />
                        <p>Docker & Kubernetes </p>
                      </div>
                      <div className="flex items-center">
                        <HiOutlineCheckCircle
                          size={23}
                          className="mr-1 text-[#FB6E06]"
                        />
                        <p>Cloudflare integration with DDOS</p>
                      </div>
                      <div className="flex items-center">
                        <HiOutlineCheckCircle
                          size={23}
                          className="mr-1 text-[#FB6E06]"
                        />
                        <p>Protections</p>
                      </div>
                      <div className="flex items-center">
                        <HiOutlineCheckCircle
                          size={23}
                          className="mr-1 text-[#FB6E06]"
                        />
                        <p>3 Layer Data Validation</p>
                      </div>
                      <div className="flex items-center">
                        <HiOutlineCheckCircle
                          size={23}
                          className="mr-1 text-[#FB6E06]"
                        />
                        <p>HTTP/2 Protocol System</p>
                      </div>
                      <div className="flex items-center">
                        <HiOutlineCheckCircle
                          size={23}
                          className="mr-1 text-[#FB6E06]"
                        />
                        <p>Email and Mobile Marketing</p>
                      </div>
                      <div className="flex items-center">
                        <HiOutlineCheckCircle
                          size={23}
                          className="mr-1 text-[#FB6E06]"
                        />
                        <p>Flash Sale</p>
                      </div>
                      <div className="flex items-center">
                        <HiOutlineCheckCircle
                          size={23}
                          className="mr-1 text-[#FB6E06]"
                        />
                        <p>Vouchers</p>
                      </div>
                      <div className="flex items-center">
                        <HiOutlineCheckCircle
                          size={23}
                          className="mr-1 text-[#FB6E06]"
                        />
                        <p>Highly Secure</p>
                      </div>
                      <div className="flex items-center">
                        <HiOutlineCheckCircle
                          size={23}
                          className="mr-1 text-[#FB6E06]"
                        />
                        <p>My Wishlist</p>
                      </div>
                      <div className="flex items-center">
                        <HiOutlineCheckCircle
                          size={23}
                          className="mr-1 text-[#FB6E06]"
                        />
                        <p>Highly Secure</p>
                      </div>
                      <div className="flex items-center">
                        <HiOutlineCheckCircle
                          size={23}
                          className="mr-1 text-[#FB6E06]"
                        />
                        <p>100% Mobile Responsive </p>
                      </div>
                      <div className="flex items-center">
                        <HiOutlineCheckCircle
                          size={23}
                          className="mr-1 text-[#FB6E06]"
                        />
                        <p>SEO Friendly </p>
                      </div>
                      <div className="flex items-center">
                        <HiOutlineCheckCircle
                          size={23}
                          className="mr-1 text-[#FB6E06]"
                        />
                        <p> Fast Loading </p>
                      </div>
                      <div className="flex items-center">
                        <HiOutlineCheckCircle
                          size={23}
                          className="mr-1 text-[#FB6E06]"
                        />
                        <p>SSL Add </p>
                      </div>
                      <div className="flex items-center">
                        <HiOutlineCheckCircle
                          size={23}
                          className="mr-1 text-[#FB6E06]"
                        />
                        <p> Domain-1st Year Free (.com or .in ) </p>
                      </div>
                      <div className="flex items-center">
                        <HiOutlineCheckCircle
                          size={23}
                          className="mr-1 text-[#FB6E06]"
                        />
                        <p> Dynamic Website </p>
                      </div>
                      <div className="flex items-center">
                        <HiOutlineCheckCircle
                          size={23}
                          className="mr-1 text-[#FB6E06]"
                        />
                        <p> Gallery Section </p>
                      </div>
                      <div className="flex items-center">
                        <HiOutlineCheckCircle
                          size={23}
                          className="mr-1 text-[#FB6E06]"
                        />
                        <p> Testimonials </p>
                      </div>
                      <div className="flex items-center">
                        <HiOutlineCheckCircle
                          size={23}
                          className="mr-1 text-[#FB6E06]"
                        />
                        <p> Contact Form</p>
                      </div>
                      <div className="flex items-center">
                        <HiOutlineCheckCircle
                          size={23}
                          className="mr-1 text-[#FB6E06]"
                        />
                        <p> Content - 1 Rs per word</p>
                      </div>
                      <div className="flex items-center">
                        <HiOutlineCheckCircle
                          size={23}
                          className="mr-1 text-[#FB6E06]"
                        />
                        <p>Multiple Image Upload Option </p>
                      </div>
                      <div className="flex items-center">
                        <HiOutlineCheckCircle
                          size={23}
                          className="mr-1 text-[#FB6E06]"
                        />
                        <p>Click to Call/Email</p>
                      </div>
                      <div className="flex items-center">
                        <HiOutlineCheckCircle
                          size={23}
                          className="mr-1 text-[#FB6E06]"
                        />
                        <p>Login with Facebook and Gmail</p>
                      </div>
                      <div className="flex items-center">
                        <HiOutlineCheckCircle
                          size={23}
                          className="mr-1 text-[#FB6E06]"
                        />
                        <p>Social Profile Link </p>
                      </div>
                      <div className="flex items-center">
                        <HiOutlineCheckCircle
                          size={23}
                          className="mr-1 text-[#FB6E06]"
                        />
                        <p> 1 Email – 500 MB Quota </p>
                      </div>
                      <div className="flex items-center">
                        <HiOutlineCheckCircle
                          size={23}
                          className="mr-1 text-[#FB6E06]"
                        />
                        <p> Hosting Free For 1st Year</p>
                      </div>
                      <div className="flex items-center">
                        <HiOutlineCheckCircle
                          size={23}
                          className="mr-1 text-[#FB6E06]"
                        />
                        <p> 00 Extra Page </p>
                      </div>
                      <div className="flex items-center">
                        <HiOutlineCheckCircle
                          size={23}
                          className="mr-1 text-[#FB6E06]"
                        />
                        <p> Support – 24/7 </p>
                      </div>
                      <div className="flex items-center">
                        <HiOutlineCheckCircle
                          size={23}
                          className="mr-1 text-[#FB6E06]"
                        />
                        <p> Free 6 Hours Support</p>
                      </div>
                      <div className="flex items-center">
                        <HiOutlineCheckCircle
                          size={23}
                          className="mr-1 text-[#FB6E06]"
                        />
                        <p>On time delivery </p>
                      </div>
                      <div className="flex items-center">
                        <HiOutlineCheckCircle
                          size={23}
                          className="mr-1 text-[#FB6E06]"
                        />
                        <p> Renewal – 3000 TK + Domain Price Plus GST</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between my-5 text-center px-3">
                      <div>
                        <small className="text-[#2D57A2] block">
                          Speak with us{" "}
                        </small>
                        <b>+88-01762-380594</b>
                        <br />
                        <b>+88-01303042561</b>
                      </div>
                      <div className="w-[2px] h-[40px] bg-[#5B1782]"></div>
                      <small className="text-[#2D57A2]">Want to discuss?</small>
                    </div>
                    <div className="priceBtn">
                      <small>Get Start Now </small>
                      <HiOutlineArrowNarrowRight className="ml-1" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="priceCard">
                <div>
                  <img src={price} alt="" />
                  <h3 className="text-xl mb-3  font-semibold text-white absolute top-4 left-3">
                    The Platinum Package
                  </h3>
                  <div className="absolute top-14 right-[130px]">
                    <div className="w-20 h-20 text-sm overflow-hidden  flex items-center justify-center rounded-full priceDetails bg-[#40C7F4] text-white ">
                      <div>
                        <div>
                          <del>৳1350250</del>
                        </div>
                        <small>
                          <p>৳1550250</p>
                        </small>
                      </div>
                    </div>
                  </div>

                  <div className=" pl-5">
                    <div className="space-y-3 packageInclude">
                      <div className="flex items-center">
                        <HiOutlineCheckCircle
                          size={23}
                          className="mr-1 text-[#FB6E06]"
                        />
                        <p>30+ Pages </p>
                      </div>
                      <div className="flex items-center">
                        <HiOutlineCheckCircle
                          size={23}
                          className="mr-1 text-[#FB6E06]"
                        />
                        <p>Highly Secure</p>
                      </div>
                      <div className="flex items-center">
                        <HiOutlineCheckCircle
                          size={23}
                          className="mr-1 text-[#FB6E06]"
                        />
                        <p> Live Chat</p>
                      </div>
                      <div className="flex items-center">
                        <HiOutlineCheckCircle
                          size={23}
                          className="mr-1 text-[#FB6E06]"
                        />
                        <p> WhatsApp Chat Integration</p>
                      </div>
                      <div className="flex items-center">
                        <HiOutlineCheckCircle
                          size={23}
                          className="mr-1 text-[#FB6E06]"
                        />
                        <p> Messenger Chat Integration</p>
                      </div>
                      <div className="flex items-center">
                        <HiOutlineCheckCircle
                          size={23}
                          className="mr-1 text-[#FB6E06]"
                        />
                        <p> Payment Gateway Integration</p>
                      </div>
                      <div className="flex items-center">
                        <HiOutlineCheckCircle
                          size={23}
                          className="mr-1 text-[#FB6E06]"
                        />
                        <p>100% Mobile Responsive </p>
                      </div>
                      <div className="flex items-center">
                        <HiOutlineCheckCircle
                          size={23}
                          className="mr-1 text-[#FB6E06]"
                        />
                        <p>SEO Friendly </p>
                      </div>
                      <div className="flex items-center">
                        <HiOutlineCheckCircle
                          size={23}
                          className="mr-1 text-[#FB6E06]"
                        />
                        <p> Fast Loading </p>
                      </div>
                      <div className="flex items-center">
                        <HiOutlineCheckCircle
                          size={23}
                          className="mr-1 text-[#FB6E06]"
                        />
                        <p>SSL Add </p>
                      </div>
                      <div className="flex items-center">
                        <HiOutlineCheckCircle
                          size={23}
                          className="mr-1 text-[#FB6E06]"
                        />
                        <p> Domain-1st Year Free (.com or .in ) </p>
                      </div>
                      <div className="flex items-center">
                        <HiOutlineCheckCircle
                          size={23}
                          className="mr-1 text-[#FB6E06]"
                        />
                        <p> Dynamic Website </p>
                      </div>

                      <div className="flex items-center">
                        <HiOutlineCheckCircle
                          size={23}
                          className="mr-1 text-[#FB6E06]"
                        />
                        <p> Gallery Section </p>
                      </div>
                      <div className="flex items-center">
                        <HiOutlineCheckCircle
                          size={23}
                          className="mr-1 text-[#FB6E06]"
                        />
                        <p> Testimonials </p>
                      </div>
                      <div className="flex items-center">
                        <HiOutlineCheckCircle
                          size={23}
                          className="mr-1 text-[#FB6E06]"
                        />
                        <p> Contact Form</p>
                      </div>

                      <div className="flex items-center">
                        <HiOutlineCheckCircle
                          size={23}
                          className="mr-1 text-[#FB6E06]"
                        />
                        <p> Content - 1 Rs per word</p>
                      </div>

                      <div className="flex items-center">
                        <HiOutlineCheckCircle
                          size={23}
                          className="mr-1 text-[#FB6E06]"
                        />
                        <p>Multiple Image Upload Option </p>
                      </div>

                      <div className="flex items-center">
                        <HiOutlineCheckCircle
                          size={23}
                          className="mr-1 text-[#FB6E06]"
                        />
                        <p>Click to Call/Email</p>
                      </div>
                      <div className="flex items-center">
                        <HiOutlineCheckCircle
                          size={23}
                          className="mr-1 text-[#FB6E06]"
                        />
                        <p>Login with Facebook and Gmail</p>
                      </div>
                      <div className="flex items-center">
                        <HiOutlineCheckCircle
                          size={23}
                          className="mr-1 text-[#FB6E06]"
                        />
                        <p>Social Profile Link </p>
                      </div>
                      <div className="flex items-center">
                        <HiOutlineCheckCircle
                          size={23}
                          className="mr-1 text-[#FB6E06]"
                        />
                        <p> 1 Email – 500 MB Quota </p>
                      </div>
                      <div className="flex items-center">
                        <HiOutlineCheckCircle
                          size={23}
                          className="mr-1 text-[#FB6E06]"
                        />
                        <p> Hosting Free For 1st Year</p>
                      </div>
                      <div className="flex items-center">
                        <HiOutlineCheckCircle
                          size={23}
                          className="mr-1 text-[#FB6E06]"
                        />
                        <p> 10 Extra Page </p>
                      </div>
                      <div className="flex items-center">
                        <HiOutlineCheckCircle
                          size={23}
                          className="mr-1 text-[#FB6E06]"
                        />
                        <p> Support – 24/7 </p>
                      </div>

                      <div className="flex items-center">
                        <HiOutlineCheckCircle
                          size={23}
                          className="mr-1 text-[#FB6E06]"
                        />
                        <p> Free 5 Hours Support</p>
                      </div>
                      <div className="flex items-center">
                        <HiOutlineCheckCircle
                          size={23}
                          className="mr-1 text-[#FB6E06]"
                        />
                        <p>On time delivery </p>
                      </div>
                      <div className="flex items-center">
                        <HiOutlineCheckCircle
                          size={23}
                          className="mr-1 text-[#FB6E06]"
                        />
                        <p> Renewal – 2500 TK + Domain Price Plus GST</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between my-5 text-center px-3">
                      <div>
                        <small className="text-[#2D57A2] block">
                          Speak with us{" "}
                        </small>
                        <b>+88-01762-380594</b>
                        <br />
                        <b>+88-01303042561</b>
                      </div>
                      <div className="w-[2px] h-[40px] bg-[#5B1782]"></div>
                      <small className="text-[#2D57A2]">Want to discuss?</small>
                    </div>
                    <div className="priceBtn">
                      <small>Get Start Now </small>
                      <HiOutlineArrowNarrowRight className="ml-1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PackagePrice;

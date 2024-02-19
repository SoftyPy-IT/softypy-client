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
    <div id='price'>
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
                  <p>৳50250</p>
                </div>
                <small>
                  <del>৳50250</del>BDT
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
            </div>
            <div className="flex items-center justify-between my-5 text-center px-3">
           <div>
           <small className="text-[#FC7706] block">Speak with us </small>
           <b>+74889489494</b>
            </div>
            <div className="w-[2px] h-[40px] bg-[#5B1782]"></div>
            <small className="text-[#FC7706]">Want to discuss?</small>
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
            The Golden Package
          </h3>
          <div className="absolute top-14 right-[120px]">
            <div className="w-20 h-20 text-sm overflow-hidden  flex items-center justify-center rounded-full priceDetails2  bg-[#F81600] text-white ">
              <div>
                <div>
                  <p>৳50250</p>
                </div>
                <small>
                  <del>৳50250</del>BDT
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
            </div>
            <div className="flex items-center justify-between my-5 text-center px-3">
           <div>
           <small className="text-[#FC7706] block">Speak with us </small>
           <b>+74889489494</b>
            </div>
            <div className="w-[2px] h-[40px] bg-[#5B1782]"></div>
            <small className="text-[#FC7706]">Want to discuss?</small>
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
            The Golden Package
          </h3>
          <div className="absolute top-14 right-[130px]">
            <div className="w-20 h-20 text-sm overflow-hidden  flex items-center justify-center rounded-full priceDetails bg-[#680C70] text-white ">
              <div>
                <div>
                  <p>৳50250</p>
                </div>
                <small>
                  <del>৳50250</del>BDT
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
            </div>
            <div className="flex items-center justify-between my-5 text-center px-3">
           <div>
           <small className="text-[#FC7706] block">Speak with us </small>
           <b>+74889489494</b>
            </div>
            <div className="w-[2px] h-[40px] bg-[#5B1782]"></div>
            <small className="text-[#FC7706]">Want to discuss?</small>
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

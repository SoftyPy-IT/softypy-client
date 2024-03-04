
import Container from "../../ui/Container";
import NavBar from "../Shared/NavBar/NavBar";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import { HiOutlineShoppingCart } from "react-icons/hi";
import gallery from '../../../public/assets/preview.png'
import Ready from "../Packages/Ready";
const WebsiteDetails = () => {


  return (
    <div>
      <div className="bg-[#680C70] text-white">
        <NavBar />
      </div>
      <div className="pt-20">
        <SectionTitle title="Feature Items List " text="" />
      </div>
      <Container>
        <div className="grid grid-cols-12 mt-10  ">
          <div className="col-span-7">
         <div className="w-[90%]">
         <img src={gallery} alt="" />
         </div>
          </div>
          <div className="col-span-5">
            <h3>Feature Items List </h3>

            <div className="mt-5 space-y-3">
              <div className="flex ">
                <div>
                  <div className="flex items-center">
                    <input type="checkbox" className="w-[15px] h-[15px]" />
                    <p className="ml-2">Product Catalog</p>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" className="w-[15px] h-[15px]" />
                    <p className="ml-2">Shopping Cart </p>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" className="w-[15px] h-[15px]" />
                    <p className="ml-2">Product Search </p>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" className="w-[15px] h-[15px]" />
                    <p className="ml-2">Secure Checkout</p>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" className="w-[15px] h-[15px]" />
                    <p className="ml-2">Order Management</p>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" className="w-[15px] h-[15px]" />
                    <p className="ml-2">Discount Codes</p>
                  </div>
                </div>

                <div className=" ml-10 ">
                  <div className="flex items-center">
                    <input type="checkbox" className="w-[15px] h-[15px]" />
                    <p className="ml-2">Customer Reviews</p>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" className="w-[15px] h-[15px]" />
                    <p className="ml-2">Wishlist</p>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" className="w-[15px] h-[15px]" />
                    <p className="ml-2">Responsive Design</p>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" className="w-[15px] h-[15px]" />
                    <p className="ml-2">Analytics and Reporting </p>
                  </div>

                  <div className="flex items-center">
                    <input type="checkbox" className="w-[15px] h-[15px]" />
                    <p className="ml-2">Inventory Management</p>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" className="w-[15px] h-[15px]" />
                    <p className="ml-2">Order Notifications</p>
                  </div>

                  <div className="flex items-center">
                    <input type="checkbox" className="w-[15px] h-[15px]" />
                    <p className="ml-2">Order Notifications</p>
                  </div>

                  <div className="flex items-center">
                    <input type="checkbox" className="w-[15px] h-[15px]" />
                    <p className="ml-2">Cross-Selling and Upselling </p>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" className="w-[15px] h-[15px]" />
                    <p className="ml-2">Social Sharing</p>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" className="w-[15px] h-[15px]" />
                    <p className="ml-2">Live Chat Support</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2>Source code </h2>
              <div className="mt-3">
                <div className="flex items-center">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="w-[15px] h-[15px] rounded-[100%] "
                    />
                    <p className="ml-2">Yes ($500)</p>
                  </div>
                  <div className="flex items-center ml-5 ">
                    <input
                      type="checkbox"
                      className="w-[15px] h-[15px] rounded-[100%] "
                    />
                    <p className="ml-2">No</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-36 bg-[#00578A] mt-5 text-white grid place-content-center ">
                <div className="flex items-center">
                    <del className="text-xl">$646664</del>
                    <b className="ml-3 text-3xl">$7757575</b>
                </div>
                <button className="flex items-center bg-white text-black justify-center py-2 px-8 mt-2">  <HiOutlineShoppingCart className="mr-2" size={22}/> <span>Add To Cart</span></button>
               
            </div>
          </div>
        </div>
      </Container>
      <Ready/>
    </div>
  );
};

export default WebsiteDetails;

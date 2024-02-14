import { FaArrowRight } from "react-icons/fa";
import "./Product.css";
import { FaLaptopCode } from "react-icons/fa";
import Container from "../../ui/Container";
import SectionTitle from "../../pages/Shared/SectionTitle/SectionTitle";
import { HiOutlineHome, HiOutlineShoppingCart } from "react-icons/hi";
const MorePackages = () => {
  return (
   <Container>
   <div className="my-16">
      <SectionTitle title='Choose Your Website Development Packages' />
   </div>
   <div className="my-28">
   <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-6">
 
       <div  className="productCard packageCard">
         <div className="moreServiceIconWrap">
        <HiOutlineHome className="moreServiceIcon" />
         </div>
         <div className="productCardContent">
           <h3 className="text-xl font-bold uppercase">Startup Website </h3>
           <span> $2000 BDT only</span>
           <small>Best small Business </small>
           <div className="flex items-center cursor-pointer mt-2">
             <span>Request Now </span>
             <FaArrowRight className="ml-2  text-white" />
           </div>
         </div>
       </div>
       <div  className="productCard packageCard">
       <div className="moreServiceIconWrap">
      <FaLaptopCode className="moreServiceIcon" />
       </div>
       <div className="productCardContent">
       <h3 className="text-xl font-bold uppercase">Mid level Website </h3>
       <span> $2000 BDT only</span>
         <small>Best small Business </small>
         <div className="flex items-center cursor-pointer mt-2">
           <span>Request Now </span>
           <FaArrowRight className="ml-2  text-white" />
         </div>
       </div>
     </div>
     <div  className="productCard packageCard">
     <div className="moreServiceIconWrap">
    <HiOutlineShoppingCart className="moreServiceIcon" />
     </div>
     <div className="productCardContent">
     <h3 className="text-xl font-bold uppercase">Ecommerce Website </h3>
     <span> $2000 BDT only</span>
       <small>Best small Business </small>
       <div className="flex items-center cursor-pointer mt-2">
         <span>Request Now </span>
         <FaArrowRight className="ml-2  text-white" />
       </div>
     </div>
   </div>
   <div  className="productCard packageCard">
   <div className="moreServiceIconWrap">
  <FaLaptopCode className="moreServiceIcon" />
   </div>
   <div className="productCardContent">
   <h3 className="text-xl font-bold uppercase">Premium Best Website </h3>
   <span> $2000 BDT only</span>
     <small>Best small Business </small>
     <div className="flex items-center cursor-pointer mt-2">
       <span>Request Now </span>
       <FaArrowRight className="ml-2  text-white" />
     </div>
   </div>
 </div>
   </div>
 </div>
   </Container>
  );
};

export default MorePackages;

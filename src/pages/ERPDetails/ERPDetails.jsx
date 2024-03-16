import NavBar from "../Shared/NavBar/NavBar";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import "../ERP/ERP.style.css";
import { HiCheck, HiX } from "react-icons/hi";
import Container from "../../ui/Container";
import FrequentlyAskQuestions from "../../components/FrequentlyAskQuestions/FrequentlyAskQuestions";
const ERPDetails = () => {
  const erpPriceData = [
    {
      id: 1,
      name: "",
      price: 1100,
      title: "Basic"
    },
    {
      id: 1,
      name: "",
      price: 1190,
      title: "Standard"
    },
    {
      id: 1,
      name: "",
      price: 1200,
      title: "Professional"
    },
    {
      id: 1,
      name: "",
      price: 1400,
      title: "Professional Plus"
    },
    {
      id: 1,
      name: "",
      price: 1500,
      title: "Ultimate "
    },
    {
      id: 1,
      name: "",
      price: 5666,
      title: "Basic"
    },
  ];
  return (
    <div>
      <div className="text-white bg-[#40C7F4]">
        <NavBar />
      </div>
      <div className="py-10 md:px-0 px-3 ">
        <SectionTitle
          title="LOGIC ERP Cloud"
          text="Introducing self serviced cloud based ERP applications for SMEs"
        />
      </div>

     <div className="px-3 md:px-0">
     <Container>
     <h3 className="text-2xl uppercase text-[#6D146C] mb-3 font-semibold ">
       Key features{" "}
     </h3>
     <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
       <div className="keyFeatureCard">
         <ul>
           <li className="flex items-center">
             {" "}
             <HiCheck size={20} className="mr-2" /> SaaS based ERP for
             SMEs(Retail and Distribution)
           </li>
           <li className="flex items-center">
             <HiCheck size={20} className="mr-2" /> Easy to setup with
             pre-configured templates
           </li>
           <li className="flex items-center">
             <HiCheck size={20} className="mr-2" /> Add/Remove licenses
             anytime
           </li>
           <li className="flex items-center">
             <HiCheck size={20} className="mr-2" /> Upgrade/Downgrade
             application anytime
           </li>
         </ul>
       </div>
       <div className="keyFeatureCard">
         <ul>
           <li className="flex items-center">
             {" "}
             <HiCheck size={20} className="mr-2" /> SaaS based ERP for
             SMEs(Retail and Distribution)
           </li>
           <li className="flex items-center">
             <HiCheck size={20} className="mr-2" /> Easy to setup with
             pre-configured templates
           </li>
           <li className="flex items-center">
             <HiCheck size={20} className="mr-2" /> Add/Remove licenses
             anytime
           </li>
           <li className="flex items-center">
             <HiCheck size={20} className="mr-2" /> Upgrade/Downgrade
             application anytime
           </li>
         </ul>
       </div>
       <div className="keyFeatureCard">
         <ul>
           <li className="flex items-center">
             {" "}
             <HiCheck size={20} className="mr-2" /> SaaS based ERP for
             SMEs(Retail and Distribution)
           </li>
           <li className="flex items-center">
             <HiCheck size={20} className="mr-2" /> Easy to setup with
             pre-configured templates
           </li>
           <li className="flex items-center">
             <HiCheck size={20} className="mr-2" /> Add/Remove licenses
             anytime
           </li>
           <li className="flex items-center">
             <HiCheck size={20} className="mr-2" /> Upgrade/Downgrade
             application anytime
           </li>
         </ul>
       </div>
     </div>


     <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8 place-items-center place-content-center">
     
       <div className="userCard">
         <h3 className="text-5xl ">1000 <sup>+</sup></h3>
         <b>Businesses</b>
       </div>
       <div className="userCard text-center">
       <h3 className="text-5xl ">3000 <sup>+</sup></h3>
       <b>Client</b>
     </div>
     <div className="userCard text-center">
     <h3 className="text-5xl ">8000 <sup>+</sup></h3>
     <b>Projects</b>
   </div>
     </div>
   </Container>
     </div>

      <div className="sectionMargin px-3 md:px-0">
        <SectionTitle
          title="PRODUCTS FEATURES & PRICING"
          text="Whatever your requirements, there's a brilliant solution"
        />
      </div>

      <div className="flex justify-center lg:justify-end mt-14 px-3 md:px-0 ">
        <div className="grid grid-cols-1 md:grid-cols-3  lg:grid-cols-6   place-content-right ">
          {erpPriceData.map((data) => (
            <div key={data.id} className="erpPriceCard">
              <h3 className="text-[#4F8233]">LOGIC BUSINESS</h3>
              <span className="block mb-5 mt-2">{data.title} </span>
              Starting
              <h3 className="text-xl">
                ₹ <span className="text-red-600">{data.price}</span> <del>1375</del>
              </h3>
              <small className="block ">+Taxes</small>
              <small>Per Month</small>
              <h3 className="my-5">Billed Yearly </h3>
              <button className="bg-[#6D146C] text-white rounded-full text-[13px]  w-[100px] h-[30px]">
                View Pricing{" "}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="pricingTable ">
        <table border={2} className="priceTable" width='auto'>
          <tbody>
            <tr>
              <td rowSpan={3}>Item Master</td>
              <td>Item Matrix-Shade/Size</td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                <HiX size={25} className="text-red-700 mx-auto" />{" "}
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
            </tr>
            <tr>
              <td> Item Category-30X5 Grouping </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                <HiX size={25} className="text-red-700 mx-auto" />{" "}
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
            </tr>
            <tr>
              <td>Conversion Factor-Carton/Box/Dozen </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                <HiX size={25} className="text-red-700 mx-auto" />{" "}
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
            </tr>

            <tr>
              <td rowSpan={4}>Item Master Advanced Features</td>
              <td> Item Image- Batch wise </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                <HiX size={25} className="text-red-700 mx-auto" />{" "}
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
            </tr>
            <tr>
              <td> Item Image- Item wise </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                <HiX size={25} className="text-red-700 mx-auto" />{" "}
              </td>
            </tr>
            <tr>
              <td>Multiple Barcodes/EAN Codes against single item</td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                <HiX size={25} className="text-red-700 mx-auto" />{" "}
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
            </tr>
            <tr>
              <td>Item Set Management</td>
              <td>
                {" "}
                <HiX size={25} className="text-red-700 mx-auto" />{" "}
              </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                <HiX size={25} className="text-red-700 mx-auto" />{" "}
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
            </tr>

            <tr>
              <td rowSpan={3}>Accounts Master</td>
              <td> General Ledger & GL Grouping </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                <HiX size={25} className="text-red-700 mx-auto" />{" "}
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                {" "}
                <HiX size={25} className="text-red-700 mx-auto" />{" "}
              </td>
            </tr>
            <tr>
              <td> TDS & TDS Reports </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                <HiX size={25} className="text-red-700 mx-auto" />{" "}
              </td>
              <td>
                {" "}
                <HiX size={25} className="text-red-700 mx-auto" />{" "}
              </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
            </tr>
            <tr>
              <td>Account Wise Budget & Limit </td>
              <td>
                {" "}
                <HiX size={25} className="text-red-700 mx-auto" />{" "}
              </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                <HiX size={25} className="text-red-700 mx-auto" />{" "}
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
            </tr>

            <tr>
              <td rowSpan={2}>Cost Centre</td>
              <td> Cost Centre & Cost Elements </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                {" "}
                <HiX size={25} className="text-red-700 mx-auto" />{" "}
              </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
            </tr>
            <tr>
              <td> Cost Element wise Budgeting </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
            </tr>

            <tr>
              <td rowSpan={4}>Loyalty & Coupon </td>
              <td> Loyalty Points Earning & Burning With OTP Authorization </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                <HiX size={25} className="text-red-700 mx-auto" />{" "}
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
            </tr>
            <tr>
              <td> Gift Voucher & Discount Coupon </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                <HiX size={25} className="text-red-700 mx-auto" />{" "}
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
            </tr>
            <tr>
              <td>Third Party Loyalty Program </td>
              <td>
                {" "}
                <HiX size={25} className="text-red-700 mx-auto" />{" "}
              </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
            </tr>
            <tr>
              <td>Issue Gift Vouchers against Sale Bills</td>
              <td>
                {" "}
                <HiX size={25} className="text-red-700 mx-auto" />{" "}
              </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                {" "}
                <HiX size={25} className="text-red-700 mx-auto" />{" "}
              </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
            </tr>

            <tr>
              <td rowSpan={3}>Price List</td>
              <td> Multiple Price Lists </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                {" "}
                <HiX size={25} className="text-red-700 mx-auto" />{" "}
              </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
            </tr>
            <tr>
              <td> Item Wise Multiple Price Lists </td>
              <td>
                {" "}
                <HiX size={25} className="text-red-700 mx-auto" />{" "}
              </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                <HiX size={25} className="text-red-700 mx-auto" />{" "}
              </td>
            </tr>
            <tr>
              <td>Party and Item Group Wise Markdowns </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                <HiX size={25} className="text-red-700 mx-auto" />{" "}
              </td>
            </tr>

            <tr>
              <td rowSpan={3}>Target & Commission</td>
              <td> Salesman/MR Wise Targets and Commission </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                <HiX size={25} className="text-red-700 mx-auto" />{" "}
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                {" "}
                <HiX size={25} className="text-red-700 mx-auto" />{" "}
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
            </tr>
            <tr>
              <td> Party + Item wise Commission/Targets </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
            </tr>
            <tr>
              <td>Commission Slabs on Sale of Ageing Stock </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
            </tr>

            <tr>
              <td rowSpan={2}>JC Period</td>
              <td> Configurable 52 Weeks Journey Cycle for Sales Target </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                <HiX size={25} className="text-red-700 mx-auto" />{" "}
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                {" "}
                <HiX size={25} className="text-red-700 mx-auto" />{" "}
              </td>
            </tr>
            <tr>
              <td> Journey cycle wise Sales Man Incentive </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                <HiX size={25} className="text-red-700 mx-auto" />{" "}
              </td>
            </tr>

            <tr>
              <td rowSpan={2}>Gst Taxation</td>
              <td>GST as per Rate and HSC/SSC Code </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                <HiX size={25} className="text-red-700 mx-auto" />{" "}
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
            </tr>
            <tr>
              <td> Gst Return-JSON and Intergration to GSP </td>
              <td>
                {" "}
                <HiX size={25} className="text-red-700 mx-auto" />{" "}
              </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                <HiX size={25} className="text-red-700 mx-auto" />{" "}
              </td>
            </tr>

            <tr>
              <td rowSpan={4}>Purchase </td>
              <td>Purchase Challan & Purchase Challan Return </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
            </tr>
            <tr>
              <td> Purchase Voucher and Purchase Return </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                {" "}
                <HiX size={25} className="text-red-700 mx-auto" />{" "}
              </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                <HiX size={25} className="text-red-700 mx-auto" />{" "}
              </td>
            </tr>
            <tr>
              <td>Supplier + Item Wise Defaults </td>
              <td>
                {" "}
                <HiX size={25} className="text-red-700 mx-auto" />{" "}
              </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                <HiX size={25} className="text-red-700 mx-auto" />{" "}
              </td>
              <td>
                {" "}
                <HiX size={25} className="text-red-700 mx-auto" />{" "}
              </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                <HiX size={25} className="text-red-700 mx-auto" />{" "}
              </td>
            </tr>
            <tr>
              <td>Supplier + Item Group Wise Defaults</td>
              <td>
                {" "}
                <HiX size={25} className="text-red-700 mx-auto" />{" "}
              </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                <HiX size={25} className="text-red-700 mx-auto" />{" "}
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
            </tr>

            <tr>
              <td rowSpan={2}>Stock Audit</td>
              <td> Physical Stock Audit by Scanning </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                {" "}
                <HiX size={25} className="text-red-700 mx-auto" />{" "}
              </td>
            </tr>
            <tr>
              <td> Settlement of stock Discripancy </td>
              <td>
                {" "}
                <HiX size={25} className="text-red-700 mx-auto" />{" "}
              </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
            </tr>

            <tr>
              <td rowSpan={2}>MEI</td>
              <td> Serial Number/IMEI number wise stock </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                <HiX size={25} className="text-red-700 mx-auto" />{" "}
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                {" "}
                <HiX size={25} className="text-red-700 mx-auto" />{" "}
              </td>
            </tr>
            <tr>
              <td> Assigning IMEI through Excel Upload </td>
              <td>
                {" "}
                <HiX size={25} className="text-red-700 mx-auto" />{" "}
              </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
            </tr>

            <tr>
              <td rowSpan={4}>Billing </td>
              <td>Whole sale & Sale Return </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                <HiX size={25} className="text-red-700 mx-auto" />{" "}
              </td>
              <td>
                {" "}
                <HiX size={25} className="text-red-700 mx-auto" />{" "}
              </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
            </tr>
            <tr>
              <td> Touch Enabled POS Bill & Credit Note & Refund </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                {" "}
                <HiX size={25} className="text-red-700 mx-auto" />{" "}
              </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
            </tr>
            <tr>
              <td>Party Wise Billing and Discount Locks </td>
              <td>
                {" "}
                <HiX size={25} className="text-red-700 mx-auto" />{" "}
              </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
            </tr>
            <tr>
              <td>Invoice Designer</td>
              <td>
                {" "}
                <HiX size={25} className="text-red-700 mx-auto" />{" "}
              </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                <HiX size={25} className="text-red-700 mx-auto" />{" "}
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
            </tr>

            <tr>
              <td rowSpan={1}>Purchase Order </td>
              <td>Purchase Order-Reorder Level Basis </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
            </tr>

            <tr>
              <td rowSpan={2}>Sale Order</td>
              <td> Pre Set Item Wise Order </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
            </tr>
            <tr>
              <td> Sale Order and Order size wise entry </td>
              <td>
                {" "}
                <HiX size={25} className="text-red-700 mx-auto" />{" "}
              </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                <HiX size={25} className="text-red-700 mx-auto" />{" "}
              </td>
            </tr>

            <tr>
              <td rowSpan={2}>Wallet & Scheme</td>
              <td>Card/Wallet & Scheme </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                <HiX size={25} className="text-red-700 mx-auto" />{" "}
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
            </tr>
            <tr>
              <td> Barcode </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                <HiX size={25} className="text-red-700 mx-auto" />{" "}
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
            </tr>

            <tr>
              <td rowSpan={3}>Accounts</td>
              <td> Cashier and Shift Management </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                <HiX size={25} className="text-red-700 mx-auto" />{" "}
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                 <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                {" "}
                <HiX size={25} className="text-red-700 mx-auto" />{" "}
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
            </tr>
            <tr>
              <td> Shift Manager Management </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                <HiX size={25} className="text-red-700 mx-auto" />{" "}
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
            </tr>
            <tr>
              <td>Multiple Currency Management </td>
              <td>
                {" "}
                <HiX size={25} className="text-red-700 mx-auto" />{" "}
              </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
            </tr>

            <tr>
              <td rowSpan={1}>Cartons</td>
              <td>Carton Wise Stock Management</td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                {" "}
                <HiX size={25} className="text-red-700 mx-auto" />{" "}
              </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
            </tr>

            <tr>
              <td rowSpan={1}>Size Assortment</td>
              <td> Size Assortment Management</td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                <HiX size={25} className="text-red-700 mx-auto" />{" "}
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
            </tr>

            <tr>
              <td rowSpan={2}>Replenishment</td>
              <td>Define Base Stock </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                <HiX size={25} className="text-red-700 mx-auto" />{" "}
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
            </tr>
            <tr>
              <td> Replenishment report from base stock </td>
              <td>
                {" "}
                <HiX size={25} className="text-red-700 mx-auto" />{" "}
              </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                <HiX size={25} className="text-red-700 mx-auto" />{" "}
              </td>
              <td>
                {" "}
                <HiX size={25} className="text-red-700 mx-auto" />{" "}
              </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
            </tr>

            <tr>
              <td rowSpan={2}>Reports</td>
              <td>Standard Item Sale/Purchase/Stock Reports </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                {" "}
                <HiX size={25} className="text-red-700 mx-auto" />{" "}
              </td>
            </tr>
            <tr>
              <td>Size wise Sale/Purchase/Stock Reports </td>
              <td>
                {" "}
                <HiX size={25} className="text-red-700 mx-auto" />{" "}
              </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                <HiX size={25} className="text-red-700 mx-auto" />{" "}
              </td>
            </tr>

            <tr>
              <td rowSpan={1}>Multiple Location/Branch Handling</td>
              <td> Multiple Location/Branch Handling</td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                <HiX size={25} className="text-red-700 mx-auto" />{" "}
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                <HiCheck size={25} className="text-[#198759] mx-auto" />{" "}
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
              <td>
                {" "}
                   <HiCheck size={25} className="text-[#198759] mx-auto" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <FrequentlyAskQuestions/>
    </div>
  );
};

export default ERPDetails;

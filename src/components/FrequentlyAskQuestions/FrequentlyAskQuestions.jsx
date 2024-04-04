import { useState } from "react";
import Container from "../../ui/Container";
import SectionTitle from "../../pages/Shared/SectionTitle/SectionTitle";

export default function FrequentlyAskQuestions() {
  const [isOpen, setIsOpen] = useState(null);
  const accordionsData = [
    {
      title: "What is an ERP Software?",
      description:
        'The full form of ERP is Enterprise Resource Planning. As the name suggests ERP is a suite of software tools which helps businesses manage its various processes seamlessly. These set of software tools integrates the functions of various departments, branches, business units etc. and makes the business works as a single functional unit. It helps in better analysis and gives a bird eye view of the business. ERP Software can help reduce costs and overheads, ensure better communication, remove duplication, bring efficiency in a business..',
    },
    {
      title: "How can an ERsP Software help my business ?",
      description:
        "ERP Software can help businesses to have greater insight and visibility which helps in better decision-making process. ERP Software can streamline your business processes by removing manual work and integrating all your departments or business units enabling information flow seamlessly. One small example can be an invoice, or a bill generated at retail or branch level will instantly update the inventory of the branch, GST is posted in accounts, CRM is updated, and Head Office is notified of the sale for generation of stock replenishment at the branch etc..",
    },
    {
      title: "What are the supported platforms for your Software ?",
      description:
        "Yes, you can change your shipping address before your order is shipped. Go to your account settings and update the shipping information accordingly.",
    },
    {
      title: "Are there any discounts for loyal customers?",
      description:
        "We appreciate our loyal customers! Stay tuned for exclusive discounts, promotions, and special offers available to members of our loyalty program.",
    },
  ];
  const toggle = (idx) =>
    setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));

  return (
   <Container>
  <div className="mt-20">
  <SectionTitle title='Frequently Asked Questions'  text=' Most Common Questions asked by our Clients'  /> 
  </div>
   <div className="mx-4 rounded-lg border font-sans my-10">
   {accordionsData.map((PerAccordion, idx) => (
     <div key={idx} className="border-b p-4">
       <button
         onClick={() => toggle(idx)}
         className="flex h-full w-full items-center justify-between py-4 text-black font-medium"
       >
         <span className="text-xl">{PerAccordion.title}</span>
         <span className="rounded-full bg-blue-100 p-2">
           <svg
             className="ml-8 mr-7 shrink-0 fill-[#00A2FF]"
             width="16"
             height="16"
             xmlns="http://www.w3.org/2000/svg"
           >

             <rect
               y="7"
               width="16"
               height="2"
               rx="1"
               className={`origin-center transform transition duration-200 ease-out ${
                 isOpen === idx && "!rotate-180"
               }`}
             />{" "}
             <rect
               y="7"
               width="16"
               height="2"
               rx="1"
               className={`origin-center rotate-90 transform transition duration-200 ease-out ${
                 isOpen === idx && "!rotate-180"
               }`}
             />
           </svg>
         </span>
       </button>
       <div
         className={`grid overflow-hidden text-gray-900 transition-all duration-300 ease-in-out ${
           isOpen === idx
             ? "grid-rows-[1fr] opacity-100"
             : "grid-rows-[0fr] opacity-0"
         }`}
       >
         <div className="overflow-hidden">{PerAccordion.description}</div>
       </div>
     </div>
   ))}
 </div>
   
   </Container>
  );
}

import ContactForm from "./ContactForm";
import { IoCloseSharp } from "react-icons/io5";
const ContactModal = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-sm">
      <div className="relative left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[984px] p-4 max-h-[90vh] overflow-auto">
        <div className="bg-white shadow-md dark:bg-[#12141D] rounded-2xl  overflow-hidden">
          <IoCloseSharp
            size={30}
            onClick={onClose}
            width={24}
            height={24}
            className="text-red-600 absolute md:top-10 md:right-10 right-8 cursor-pointer"
          />
          <ContactForm onClose={onClose}/>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;

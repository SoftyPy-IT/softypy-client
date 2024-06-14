import  './SectionTitle.css'
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const SectionTitle = ({title, text}) => {
    return (
        <div className='titleWrap'>
            <h2 className="text-xl md:text-2xl lg:text-4xl text-[#1586FD] font-bold"> {title}</h2>
            <p className='mt-3 text-xl '> {text} </p>
        </div>
    );
};

export default SectionTitle;
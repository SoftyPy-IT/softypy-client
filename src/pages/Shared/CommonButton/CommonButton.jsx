import './CommonButton.css'
import {FaArrowRight } from "react-icons/fa";
const CommonButton = ({ text }) => {
    return (
        <div className="bannerBtn">
        <button> {text}</button>
        <FaArrowRight className='ml-2'/>
        </div>
    );
};

export default CommonButton;
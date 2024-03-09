import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import './CommonButton.css'
const CommonButton = ({ text }) => {
    return (
        <div className="bannerBtn">
        <button> {text}</button>
        <HiOutlineArrowNarrowRight className='ml-2'/>
        </div>
    );
};

export default CommonButton;
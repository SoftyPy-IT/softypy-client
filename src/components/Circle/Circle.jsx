import './Circle.css';
import circle from '../../../public/assets/circleIcon.jpeg'
import circle2 from '../../../public/assets/circleIcon2.jpeg'
import circle3 from '../../../public/assets/circleIcon3.jpeg'
import circle4 from '../../../public/assets/circleIcon4.jpeg'
import circle5 from '../../../public/assets/circleIcon5.jpeg'
import circle6 from '../../../public/assets/circleIcon6.jpeg'
import circle7 from '../../../public/assets/circleIcon7.jpeg'
import circle8 from '../../../public/assets/circleIcon8.jpeg'
const Circle = () => {
    return (
        <div className='bg-[#0088FE] p-32 h-screen flex items-center justify-center'>
          <div>
          <div className="parentDiv">
          <div className="childDiv">
          <div className="circleIcon">
           <img src={circle} alt="circle" />
          </div>
          <div className="iconWraps">
          
          <div className="circleIcon2">
          <img src={circle2} alt="circle" />
         </div>
         <div className="circleIcon2">
           <img src={circle3} alt="circle" />
          </div>
        
          </div>
          <div className="iconWraps2">
          
          <div className="circleIcon2">
          <img src={circle4} alt="circle" />
         </div>
         <div className="circleIcon2">
           <img src={circle5} alt="circle" />
          </div>
        
          </div>
          <div className="iconWraps2">
          
          <div className="circleIcon2">
          <img src={circle6} alt="circle" />
         </div>
         <div className="circleIcon2">
           <img src={circle7} alt="circle" />
          </div>
        
          </div>
          <div className="iconWraps3">
          
          <div className="circleIcon2">
          <img src={circle8} alt="circle" />
         </div>
         <div className="circleIcon2">
           <img src={circle} alt="circle" />
          </div>
        
          </div>
          <div className="iconWraps4">
          
          <div className="circleIcon2">
          <img src={circle} alt="circle" />
         </div>
         <div className="circleIcon2">
           <img src={circle} alt="circle" />
          </div>
        
          </div>
          <div className="circleIcon2 circleIcon3">
          <img src={circle} alt="circle" />
         </div>
         <div className="circleIcon2 circleIcon4">
         <img src={circle} alt="circle" />
        </div>
        <div className="circleIcon2 circleIcon5">
        <img src={circle} alt="circle" />
       </div>
       <div className="circleIcon2 circleIcon7">
       <img src={circle} alt="circle" />
      </div>
          </div>
          </div>
          </div>
        </div>
    );
};

export default Circle;
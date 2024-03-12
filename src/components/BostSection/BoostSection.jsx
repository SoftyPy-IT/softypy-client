import CommonButton from '../../pages/Shared/CommonButton/CommonButton';
import './Boost.css'
import boost from '../../../public/assets/boost2.png'
import Container from '../../ui/Container';
const BoostSection = () => {
    return (
        <div className='boostSectionWrap'>
        
           <Container>
           <div className="boostSection">
           <div className="boostSectionLeft pt-44  text-white ">
               <h3 className="text-2xl md:text-4xl font-bold my-5 ">Do You Want To Boost Your Business?</h3>
               <p className="text-xl">Boost Your Business For Increase Sales By Technical Strategies. If You Want To Boost Your Business , You Just Drop A Message In Contact.</p>
               <div className="mt-5">
               <CommonButton text='Contact Us'></CommonButton>
               </div>
           </div>
           <div className="boostRightSide">
               <img src={boost} alt="" />
           </div>
       </div>
           </Container>
        </div>
    );
};

export default BoostSection;
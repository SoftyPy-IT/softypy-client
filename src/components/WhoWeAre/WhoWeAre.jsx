import './WhoWeare.css'
import img from '../../../public/assets/feature.png'
import CommonButton from '../../pages/Shared/CommonButton/CommonButton';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Container from '../../ui/Container';
AOS.init();
const WhoWeAre = () => {
    return (
        <Container>
        <div className='whoWeareWrap '>
        <div className="ourGoal">
         <div className='leftSide order-3' data-aos="fade-left">
         <img src={img} alt="who we are " />
         </div>
         <div className="rightside"  data-aos="fade-right">
             <h2 className="text-4xl mb-3 text-[#F87015] font-bold">Who We Are?</h2>
             <p>At SOFTYPY, we are a team of innovative and results-driven digital marketing experts. We believe that a strong online presence is essential for businesses of all sizes to succeed in today’s fast-paced digital world.</p>
             <p>Founded in 2016, our agency has helped countless clients achieve their marketing goals and drive growth through customized, data-driven strategies. From website design and development to SEO, PPC, and social media marketing, we offer a comprehensive suite of services to help our clients reach their target audience and succeed online.

             </p>
             <p>We pride ourselves on our commitment to delivering exceptional results for our clients. Our team is comprised of experienced professionals who bring a diverse range of skills and perspectives to the table. We work closely with our clients to understand their unique needs and develop customized solutions that deliver real results.</p>
            <div className="text-left">
            <CommonButton text='Learn More '/>
            </div>
         </div>
        </div>
     </div>
        </Container>
    );
};

export default WhoWeAre;
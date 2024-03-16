/* eslint-disable react/no-unescaped-entities */
import "./WhoWeare.css";
import Container from "../../ui/Container";
// import img from '../../../public/assets/sortware.png'
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
const WhatWeDo = () => {
  const ref = useRef(null);
  useEffect(() => {
    import("@lottiefiles/lottie-player");
  });



  const containerAnimation = {
    hidden: {
      opacity:1,
      y: '200px'
    },
    visible:{
      opacity:1,
      y:'0px',
      transition:{
        

        type: 'spring',
        stiffness:120,
      }
    }
  }

  const animationRef = useRef()
const inView = useInView(animationRef)
const sectionControl = useAnimation();
useEffect(()=>{
  if(inView){
    sectionControl.start('visible')
  }
  else{
    sectionControl.start('hidden')
  }

},[inView])



  return (
    <div className="sectionMargin h-[420px] overflow-hidden">
      <Container>
        <div className="flex flex-col gap-10 md:flex-row items-center justify-center" >
          <div className="w-[48%] ">
          <lottie-player
          id="firstLottie"
          ref={ref}
          autoplay
          loop
          mode="normal"
          src="/package.json"
          className="animation"
        ></lottie-player>
          </div>
          <motion.div 
          // initial='hidden'
          // variants={containerAnimation}
          // animate={sectionControl}
          className="w-[100%] md:w-[50%]">
            <h2 className=" mb-3 text-[#40C7F4] font-bold text-4xl">
              Who We Are ?
            </h2>
            <p>
            Our team craft to seamlessly blend innovation, collaboration, and excellence. We are dedicated to delivering tailored software solutions that not only meet but exceed our clients' expectations. Here's a glimpse into our unique workflow:
            </p>
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default WhatWeDo;

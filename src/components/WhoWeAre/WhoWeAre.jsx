import "./WhoWeare.css";
import Container from "../../ui/Container";
// import img from '../../../public/assets/sortware.png'
import { useEffect, useRef } from "react";
import { useScroll, useTransform, motion, useInView, useAnimation } from "framer-motion";
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
            <h2 className=" mb-3 text-[#680C70] font-bold text-4xl">
              Who We Are ?
            </h2>
            <p>
              {" "}
              At <b className="text-[#680C70]">SoftyPy</b>, we are dedicated to
              providing rapid and effective disaster relief and humanitarian
              assistance to communities in crisis around the world. Our mission
              is to alleviate suffering, restore dignity, and promote resilience
              among those affected by emergencies, natural disasters, conflicts,
              and other humanitarian crises.
            </p>
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default WhatWeDo;

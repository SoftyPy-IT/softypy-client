/* eslint-disable react/no-unescaped-entities */

import Container from '../../ui/Container';

const WhyChoseOurPackage = () => {
    return (
        <Container>
        <div className="flex flex-col justify-between pt-10 lg:flex-row">
          <h2 className="text-3xl md:text-[60px] leading-[60px] max-w-[100%] lg:w-[50%] font-semibold">
            Why Choose Our Web Design Packages ?{" "}
          </h2>
          <div className="mt-5 lg:mt-44 lg:w-[50%]">
            <p className="font-semibold">
              At SoftyPy we redefine web design. Our packages blend creativity
              and functionality to craft immersive digital experiences. Led by
              passionate storytellers, our team ensures your website stands out,
              resonates, and converts. From sleek interfaces to responsive
              designs, we prioritize aesthetics and usability. But we're not
              just about looks; we're about results. Our packages are engineered
              to meet your business goals, enhancing conversions, brand
              visibility, and user satisfaction. Don't settle for ordinary.
              Choose [Your Company Name] and elevate your online presence to
              extraordinary heights.
            </p>
          </div>
        </div>
      </Container>
    );
};

export default WhyChoseOurPackage;
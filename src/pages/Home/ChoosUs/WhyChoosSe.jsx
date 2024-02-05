import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import './WhyChooce.css'
export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList  className="portfolioTabs" onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Web Performance Optimization" value="1" />
            <Tab label="Dedicated Suppor" value="2" />
            <Tab label="Reliability and Scalability" value="3" />
            <Tab label="Proactive Monitoring" value="4" />
            <Tab label="Cost-Efficiency" value="5" />
          </TabList>

         

        </Box>
        <TabPanel value='1'>
          <div className="whyChooces">
            <div className='chooseLeftSide'>
              <h3 className="text-3xl font-bold mb-5">Web Performance Optimization</h3>
              <p>Softypy has a proven track record of enhancing website performance. They employ cutting-edge technologies to optimize your e-commerce site, ensuring fast loading times, smooth navigation, and a seamless shopping experience for your customers. With their expertise, you can significantly reduce bounce rates and cart abandonment.</p>
            </div>
            <div className="technologyRightSide">
              <lottie-player
                id="firstLottie"
                autoplay
                loop
                mode="normal"
                src="/performance.json"
                className="animation"
              ></lottie-player>
            </div>
          </div>
        </TabPanel>
        <TabPanel value='2'>
          <div className="whyChooces">
            <div className='chooseLeftSide'>
              <h3 className="text-3xl font-bold mb-5">Dedicated Support</h3>
              <p>Softypy provides 24/7 technical support to address any IT issues promptly. In the example scenario, if a problem arises during a major sale, you can rely on Softypy to resolve it swiftly, minimizing potential revenue loss.</p>
            </div>
            <div className="technologyRightSide">
              <lottie-player
                id="firstLottie"
                autoplay
                loop
                mode="normal"
                src="/help.json"
                className="animation"
              ></lottie-player>
            </div>
          </div>
        </TabPanel>
        <TabPanel value='3'>
          <div className="whyChooces">
            <div className='chooseLeftSide'>
              <h3 className="text-3xl font-bold mb-5">Reliability and Scalability</h3>
             <p>SofyPy understands the importance of consistent website uptime, especially during peak shopping seasons. They provide scalable hosting solutions that can handle increased traffic loads without a hitch. This means your e-commerce site will remain operational, even during high-traffic events like Black Friday or holiday sales.</p>
            </div>
            <div className="technologyRightSide">
              <lottie-player
                id="firstLottie"
                autoplay
                loop
                mode="normal"
                src="/reporting.json"
                className="animation"
              ></lottie-player>
            </div>
          </div>
        </TabPanel>
        <TabPanel value='4'>
          <div className="whyChooces">
            <div className='chooseLeftSide'>
              <h3 className="text-3xl font-bold mb-5">Proactive Monitoring </h3>
             <p>Softypy implements proactive monitoring and maintenance to identify and address potential issues before they impact your business. This preventive approach helps maintain the reliability and integrity of your e-commerce operations.</p>
            </div>
            <div className="technologyRightSide">
              <lottie-player
                id="firstLottie"
                autoplay
                loop
                mode="normal"
                src="/programming.json"
                className="animation"
              ></lottie-player>
            </div>
          </div>
        </TabPanel>
        <TabPanel value='5'>
          <div className="whyChooces">
            <div className='chooseLeftSide'>
              <h3 className="text-3xl font-bold mb-5">Cost-Efficiency</h3>
             <p>Softypy offers cost-effective IT services, ensuring you get the most value for your investment. By optimizing your site is performance, preventing downtime, and enhancing security, they help you save money in the long run.</p>
            </div>
            <div className="technologyRightSide">
              <lottie-player
                id="firstLottie"
                autoplay
                loop
                mode="normal"
                src="/coast.json"
                className="animation"
              ></lottie-player>
            </div>
          </div>
        </TabPanel>
      </TabContext>
    </Box>
  );
}

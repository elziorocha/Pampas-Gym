import React, { useState } from "react";
import { testimonialsData } from '../../data/testimonialsData';
import leftArrow from '../../assets/leftArrow.png';
import rightArrow from '../../assets/rightArrow.png';
import { motion } from "framer-motion";
import './Testimonials.css';

const Testimonials = () => {
    const [selected, setSelected] = useState(0);
    const tLength = testimonialsData.length;

    const transition = {type: 'spring', duration: 3};

    return (
        <div className="Testimonials" id="testimonials">
            <div className="left-t">
                <span>Testimonials</span>
                <span className="stroke-text">What they</span>
                <span>say about us</span>
                <span>
                    {testimonialsData[selected].review}
                </span>
                <span>
                    <span style={{ color: 'var(--orange)' }}>
                        {testimonialsData[selected].name}
                    </span>
                    {" "}- {testimonialsData[selected].status}
                </span>
            </div>

            <div className="right-t">
                <motion.div
                
                    initial={{opacity: 0, x: -100}}
                    transition={{...transition, duration: 2}}
                    whileInView={{opacity: 1, x: 0}}

                ></motion.div>
                <motion.div
                
                    initial={{opacity: 0, x: 100}}
                    transition={{...transition, duration: 2}}
                    whileInView={{opacity: 1, x: 0}}
                
                ></motion.div>
                <img src={testimonialsData[selected].image} alt="testimonial images" />

                <div className="arrows">
                    <img src={leftArrow} alt="left arrow"
                        onClick={() => {
                        setSelected(prev => (prev === 0 
                        ? tLength - 1 
                        : prev - 1));
                        }} />

                    <img src={rightArrow} alt="right arrow"
                        onClick={() => {
                        setSelected(prev => (prev === tLength - 1 
                        ? 0 
                        : prev + 1));
                        }} />
                </div>
            </div>
        </div>
    );
};

export default Testimonials;

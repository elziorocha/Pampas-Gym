import React, { useState } from "react";
import { testimonialsData } from '../../data/testimonialsData';
import leftArrow from '../../assets/leftArrow.png';
import rightArrow from '../../assets/rightArrow.png';
import './Testimonials.css';

const Testimonials = () => {
    const [selected, setSelected] = useState(0);
    const tLength = testimonialsData.length;

    return (
        <div className="Testimonials">
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
                    {" "} - {testimonialsData[selected].status}
                </span>
            </div>

            <div className="right-t">
                <div></div>
                <div></div>
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

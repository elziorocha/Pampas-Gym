import React from 'react';
import Header from '../Header/Header';
import Hero_Image from '../../assets/hero_image2.png';
import Hero_Image_Back from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {

    const transition = {type: 'spring', duration: 3}

    return (
        <div className='hero'>

            <div className="blur blur-h"></div>
            <div className="left-h">
                <Header/>

                <div className="the-best-ad">
                    <motion.div
                        initial={{left: '238px'}}
                        whileInView={{left: '9px'}}
                        transition={{...transition, type: 'tween'}}
                    ></motion.div>
                    <span>The best fitness club in the town</span>
                </div>

                <div className="hero-text">
                    <div>
                        <span className='stroke-text-header'>Shape </span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>Ideal Body</span>
                    </div>
                    <div className='hero-subtext'>
                        <span>In here, we'll help you to shape and build your ideal body and
                            live up your life to fullest
                        </span>
                    </div>
                </div>

                <div className="figures">
                    <div>
                        <span>+140</span>
                        <span>Expert Coachs</span>
                    </div>
                    <div>
                        <span>+958</span>
                        <span>Members Joined</span>
                    </div>
                    <div>
                        <span>+50</span>
                        <span>Fitness Programs</span>
                    </div>
                </div>

                <div className="hero-buttons">
                    <button className="btn">Get Started</button>
                    <button className="btn">Learn More</button>
                </div>

            </div>
            <div className="right-h">
                <button className='btn'>Join Now</button>

                <motion.div
                    initial={{right: '-1rem'}}
                    whileInView={{right: '4rem'}}
                    transition={transition}

                className="heart-rate">
                    <img src={Heart} alt="Heart"/>
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </motion.div>

                <img src={Hero_Image} alt="hero_img" className='hero-image'/>
                <motion.img
                
                    initial={{right: '11rem'}}
                    whileInView={{right: '20rem'}}
                    transition={transition}

                src={Hero_Image_Back} alt="hero_img_back" className='hero-image-back'/>

                <motion.div 
                
                    initial={{right: '34rem'}}
                    whileInView={{right: '31rem'}}
                    transition={transition}
                
                className="calories">
                    <img src={Calories} alt="calories"/>
                    <div>
                        <span>Calories Burned</span>
                        <span>220 kcal</span>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Hero
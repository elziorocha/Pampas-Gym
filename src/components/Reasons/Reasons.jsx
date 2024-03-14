import React from 'react';
import './Reasons.css';
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import nb from '../../assets/nb.png'
import adidas from '../../assets/adidas.png'
import nike from '../../assets/nike.png'
import tick from '../../assets/tick.png'

const Reasons = () => {
    return (
        <div>
            <div className="Reasons" id="reasons">
                <div className="left-r">
                    <img src={image1} alt="images-1" />
                    <img src={image2} alt="images-2" />
                    <img src={image3} alt="images-3" />
                    <img src={image4} alt="images-4" />
                </div>

                <div className="right-r">
                    <span>some reasons</span>
                    <div>
                        <span className='stroke-text'>why </span>
                        <span>choose us?</span>
                    </div>

                    <div className='details-r'>
                        <div>
                            <img src={tick} alt="relógio" />
                            <span>OVER 140+ EXPERTS COACHS</span>
                        </div>
                        <div>
                            <img src={tick} alt="relógio" />
                            <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
                        </div>
                        <div>
                            <img src={tick} alt="relógio" />
                            <span>1 FREE PROGRAM FOW NEW MEMBER</span>
                        </div>
                        <div>
                            <img src={tick} alt="" />
                            <span>RELIABLE PARTNERS</span>
                        </div>
                    </div>

                    <span id='partners'>our partners:</span>
                    <div className="partners">
                        <img src={nb} alt="nb" />
                        <img src={adidas} alt="adidas" />
                        <img src={nike} alt="nike" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Reasons
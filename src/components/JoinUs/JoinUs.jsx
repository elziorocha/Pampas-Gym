import React, { useRef } from "react";
import emailjs from '@emailjs/browser'
import './JoinUs.css';

const JoinUs = () => {

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs
        .sendForm('service_en9jtcs', 'template_kk2pt0o', form.current, 'GqMJOu1oIPoadHNTR')
        .then(() => {
                console.log('SUCCESS!');
                form.current.reset();
            },
            (error) => {
                console.log('FAILED...', error.text);
            },
        );
    };

    return (
        <div className="Join" id="join-us">
            <div className="left-j">
                <hr />
                <div>
                    <span className="stroke-text">READY TO</span>
                    <span> LEVEL UP</span>
                </div>
                <div>
                    <span>YOUR BODY</span>
                    <span className="stroke-text"> WITH US?</span>
                </div>
            </div>

            <div className="right-j">
                <form ref={form} className="email-container" onSubmit={sendEmail}>
                    <input type="email" name="user_email" placeholder="Enter your Email address" />
                    <button className="btn btn-j" >Join Now</button>
                </form>
            </div>
        </div>
    )
}

export default JoinUs;

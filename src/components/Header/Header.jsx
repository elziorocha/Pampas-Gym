import React, { useState } from 'react';
import Logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'
import { Link } from 'react-scroll';
import './Header.css';

const Header = () => {

    const mobile = window.innerWidth <= 768 ? true : false;

    const [menuOpened, setMenuOpened] = useState(false);

    const closeMenu = () => {
        if (mobile) {
            setMenuOpened(false);
        }
    };

    return (
        <div className="header">
            <img src={Logo} alt="logo" className='logo' />

            {mobile && !menuOpened ? (
                <div
                    style={{
                        backgroundColor: 'var(--appColor)',
                        padding: '0.5rem',
                        borderRadius: '5px',
                    }}
                    onClick={() => setMenuOpened(true)}
                >
                    <img src={Bars} alt="Menu Bar" style={{ width: '1.5rem', height: '1.5rem' }}/>
                </div>
            ) : (
                <ul className='header-menu'>
                    <li>
                        <Link
                            onClick={() => { setMenuOpened(false); closeMenu(); }}
                            to='home'
                            span={true}
                            smooth={true}
                        >Home</Link>
                    </li>

                    <li>
                        <Link
                            onClick={() => { setMenuOpened(false); closeMenu(); }}
                            to='programs'
                            span={true}
                            smooth={true}
                        >Programs</Link>
                    </li>

                    <li>
                        <Link
                            onClick={() => { setMenuOpened(false); closeMenu(); }}
                            to='reasons'
                            span={true}
                            smooth={true}
                        >Why Us?</Link>
                    </li>

                    <li>
                        <Link
                            onClick={() => { setMenuOpened(false); closeMenu(); }}
                            to='plans'
                            span={true}
                            smooth={true}
                        >Plans</Link>
                    </li>

                    <li>
                        <Link
                            onClick={() => { setMenuOpened(false); closeMenu(); }}
                            to='testimonials'
                            span={true}
                            smooth={true}
                        >Testimonials</Link>
                    </li>
                </ul>
            )}
        </div>
    );
}

export default Header;

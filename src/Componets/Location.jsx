
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/headerLogo.png';

const ulList = [
    { navName: 'Home' },
    { navName: 'Our Food' },
    { navName: 'Pages', NavUlList: ['About Us', ' Menu', 'FAQ'] },
    { navName: 'Gallery' },
    { navName: 'OrderNow' },
    { navName: 'Location' },
]


function Location() {
    return (
        <div>
            <header className="main-Header" id='MapLocation' >
                <div className="Header-Section">
                    <div className="flex-content">
                        <img src={logo} alt="Header Logo" />
                        <input type="checkbox" id="CheckBox" />
                        <label htmlFor="CheckBox" id="CheckIcon">
                            <FontAwesomeIcon icon={faBars} />
                        </label>
                        <ul className="ulList">
                            {ulList.map((li, idx) => (
                                <li key={idx}>
                                    {li.navName === 'Home' && <Link to="/ ">{li.navName}</Link>}
                                    {li.navName === 'Our Food' && <Link to="/OurMenu">{li.navName}</Link>}
                                    {li.navName === 'Pages' && <Link to="/Pages">{li.navName}</Link>}
                                    {li.navName === 'Gallery' && <Link to="/Gallary">{li.navName}</Link>}
                                    {li.navName === 'Blogs' && <Link to="/Blogs">{li.navName}</Link>}
                                    {li.navName === 'OrderNow' && <Link to="/OrderNow">{li.navName}</Link>}
                                    {li.navName === 'Location' && <Link to="/Location">{li.navName}</Link>}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="Contents">
                    <h1>Taste the Extraordinary: A Symphony of Flavors</h1>
                    <p>Embark on a culinary journey with our diverse menu, where every dish is a celebration of flavor and creativity. From succulent fish steaks to mouth-watering entrees and delightful appetizers, we take pride in using the freshest ingredients available.....</p>
                    <button onClick={function (e) {
                        nevigation('Gallary')
                    }}>Order Now</button>
                </div>
            </header>
            <section id='mapsection'>
                <iframe className='map'
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43068.474652785306!2d77.15516578975226!3d28.750993955063652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d01d4f896099f%3A0xd856071fa2f0c441!2sBurari%2C%20Delhi%2C%20110084!5e1!3m2!1sen!2sin!4v1730192183270!5m2!1sen!2sin"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map"
                ></iframe>
            </section>
            <footer className='Footer'>
                    <div className="footerContent">
                        <div className="FooterSection">
                            <div className="FooterText">
                                <h1>Why Bistro?</h1>
                                <h5>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore dolor in hendrerit in vulputate.
                                    Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl.</h5>
                            </div>
                        </div>
                        <div className="FooterSection">
                            <div className="FooterText">
                                <h1>Quick Links</h1>
                                <ul>
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">About us</a></li>
                                    <li><a href="#">Menu</a></li>
                                    <li><a href="#">Order now</a></li>
                                    <li><a href="#">Food</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="FooterSection">
                            <div className="FooterText">
                                <h1>Newsletter</h1>
                                <p>Sign up with your name and email to get updates fresh updates.</p>
                                <div className="inputsection">
                                    <input type="text" placeholder='Email Address' />
                                    <button>Subscribe</button>
                                </div>
                            </div>
                        </div>
                        <div className="FooterSection">
                            <div className="FooterText">
                                <h1>Get in Touch</h1>
                                <p>Restaurant, to consequat ipsum nec sagittis sem...</p>
                                <h4>Restaurant, Manhattan 1258,New York, USA Lahore</h4>
                                <p>(+1) 234 567 8901</p>
                                <p>hello@website.com</p>
                            </div>
                        </div>
                    </div>
                </footer>
        </div>
    )
}

export default Location

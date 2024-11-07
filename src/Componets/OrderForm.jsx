import React, { useState } from 'react'
import logo from '../assets/headerLogo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import fromUser from '../assets/From/3.png'
import formLogo from '../assets/From/2.png'

const ulList = [
    { navName: 'Home' },
    { navName: 'Our Food' },
    { navName: 'Pages', NavUlList: ['About Us', ' Menu', 'FAQ'] },
    { navName: 'Gallery' },
    { navName: 'OrderNow' },
    { navName: 'Location' },
]



function OrderForm() {

    const [input, setInput] = useState()
    return (
        <div>
            <header className="main-Header ourorder">
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
                    <h1>YES WE HAVE THE BEST FISH STEAK</h1>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,</p>
                    <button>Order Now</button>
                </div>
            </header>
            <section id='form'>
                <form action="" id='flexFrom'>
                    <div className="forms">
                        <div className="flexFormSection">
                            <div className="UserForFrom">
                                <div className="input-group">
                                    <input type="text" placeholder='Enter First Name' />
                                    <input type="text" placeholder='Enter Last Name' />
                                </div>
                                <div className="input-group">
                                    <input type="email" placeholder='Enter Email Address' />
                                    <input type="number" placeholder='Enter Phone Number' />
                                </div>
                                <div className="Order">
                                    <h4>Do You Want To Pick Up Your Order</h4>
                                </div>
                                <div className="input-group">
                                    <div className="radio">
                                        <input type="radio" name="deliveryOption" id="radio1" />
                                        <label htmlFor="radio1">Yes</label>
                                    </div>
                                    <div className="radio">
                                        <input type="radio" name="deliveryOption" id="radio2" />
                                        <label htmlFor="radio2"><h4>No, I Request For A Delivery</h4></label>
                                    </div>
                                </div>
                                <div className="input-group">
                                    <input type="email" placeholder='Delivery Street Address1' />
                                </div>
                                <div className="input-group">
                                    <input type="email" placeholder='Delivery Street Address2' />
                                </div>
                                <div className="input-group">
                                    <input type="text" placeholder='City' />
                                    <input type="number" placeholder='State/Province' />
                                </div>
                                <div className="input-group">
                                    <input type="number" placeholder='Pin Code' />
                                    <button id='btn'>Submit</button>
                                </div>
                            </div>
                            <div className="fromLogo">
                                <img src={formLogo} alt="" />
                            </div>
                        </div>
                    </div>
                </form>
            </section>
            <footer className='Footer' id='footer'>
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

export default OrderForm

import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/headerLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSquare } from '@fortawesome/free-solid-svg-icons';

import KichanStaf1 from '../assets/KichanStaf/1.png';

import Chefs1 from '../assets/Chefs/1.png'
import Chefs2 from '../assets/Chefs/2.png'
import Chefs3 from '../assets/Chefs/15.png'
import Chefs4 from '../assets/Chefs/4.png'
import Chefs5 from '../assets/Chefs/5.png'
import Chefs6 from '../assets/Chefs/6.png'
import Chefs7 from '../assets/Chefs/10.png'
import Chefs8 from '../assets/Chefs/7.png'
import Chefs9 from '../assets/Chefs/8.png'
import Chefs10 from '../assets/Chefs/9.png'
import Chefs11 from '../assets/Chefs/11.png'
import Chefs12 from '../assets/Chefs/12.png'
import Chefs13 from '../assets/Chefs/13.png'
import Chefs14 from '../assets/Chefs/14.png'
import { useState } from 'react';


const ulList = [
    { navName: 'Home' },
    { navName: 'Our Food' },
    { navName: 'Pages', NavUlList: ['About Us', ' Menu', 'FAQ'] },
    { navName: 'Gallery' },
    { navName: 'OrderNow' },
    { navName: 'Location' },
]

let ChefsDetails = [
    {
        title: 'Head Chef',
        img: Chefs1,
        ChefName: 'Vikash Khanana',
        Department: 'Executive Chef ',
        Details: 'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat'
    },
    {
        title: 'Food Supervisor',
        img: Chefs2,
        ChefName: 'Marguerite Bise',
        Department: 'Sous Chef',
        Details: 'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat'
    },
    {
        title: 'Head Chef',
        img: Chefs3,
        ChefName: 'Jamie Oliver',
        Department: 'Line Cook . ',
        Details: 'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat'
    },
    {
        title: 'Head Of Kichan',
        img: Chefs4,
        ChefName: 'Sanjeev Kapoor',
        Department: 'Line Cook  ',
        Details: 'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat'
    },
    {
        title: 'Food Supervisor',
        img: Chefs6,
        ChefName: 'Nihal Singh',
        Department: 'Fish Chef  ',
        Details: 'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat'
    },
    {
        title: 'Food Supervisor',
        img: Chefs7,
        ChefName: 'Nita Mehta',
        Department: 'food Specialist ',
        Details: 'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat'
    },
    {
        title: 'Head Of Kichan',
        img: Chefs5,
        ChefName: 'Kunal Kapur',
        Department: 'Assistant Chef ',
        Details: 'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat'
    },
    {
        title: 'Head Chef',
        img: Chefs14,
        ChefName: 'Vijita Soni',
        Department: 'Vijita Soni ',
        Details: 'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat'
    },
    {
        title: 'Food Supervisor',
        img: Chefs9,
        ChefName: 'Rohini Dey',
        Department: 'kitchen Specialist',
        Details: 'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat'
    },
    {
        title: 'Head Of Kichan',
        img: Chefs10,
        ChefName: 'Anjali Pathak',
        Department: 'Assistant Chef',
        Details: 'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat'
    },
    {
        title: 'Head Chef',
        img: Chefs8,
        ChefName: 'Ajay Chopra',
        Department: 'Assistant Chef ',
        Details: 'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat'
    },
    {
        title: 'Food Supervisor',
        img: Chefs11,
        ChefName: 'Chef Shazia',
        Department: 'Breakfast Chef  ',
        Details: 'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat'
    },
]

let ChefCategory = ['All', 'Head Chef', 'Food Supervisor', 'Head Of Kichan']

function Pages() {

    const [checkChefs, setcheckChefs] = useState('All');
    const [ChefTeam, setChefTeam] = useState(ChefsDetails);

    const handleChef = (chefs, e) => {
        e.preventDefault();
        setcheckChefs(chefs);

        const filteredChefs = chefs === 'All' ? ChefsDetails : ChefsDetails.filter((cards) =>
            cards.title === chefs);

        setChefTeam(filteredChefs)
    };

    return (
        <div>
            <header className='main-Header ourpage'>
                <div className="Header-Section">
                    <div className="flex-content">
                        <img src={logo} alt="Header Logo" />
                        <input type="checkbox" id='CheckBox' />
                        <label htmlFor="CheckBox" id='CheckIcon'>
                            <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
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
                    <h1>Meet Our Culinary Masters  The Chefs Behind the Flavor....</h1>
                    <p>Our talented chefs bring years of expertise and a true passion for flavor to every dish. With careful attention to detail, they select the finest ingredients and elevate each fish steak to perfection.,</p>
                    <button>Order Now</button>
                </div>
            </header>
            <section>
                <div className="titleItems">
                    <div className="about-Title">
                        <h1>Restaurant   Overview</h1>
                    </div>
                    <div className="peragraphPage">
                        <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. quam nunc putamus parum claram, Mirum est notare quam littera gothica Mirum est notare quam littera gothica Mirum est notare quam littera gothicaMirum est notare quam littera gothica. Mirum est notare quam littera gothica Mirum est notare quam littera gothica Mirum est notare quam littera gothicaMirum est notare quam littera gothica......</p>
                    </div>
                </div>
                <div className="ChefulList">
                    {ChefCategory.map((category, idx) => (
                        <li key={idx} onClick={(e) => handleChef(category, e)}>
                            <a href="#">{category}</a>
                        </li>
                    ))}
                </div>

                <div className="AllChefs">
                    {ChefTeam.map((item, idx) => (
                        <div className="TypeOfChefs" key={idx}>
                            <div className="kitchanChefs">
                                <div className="imgContainer">
                                    <img src={item.img} alt={item.ChefName} />
                                </div>
                                <h1>{item.ChefName}</h1>
                                <span>{item.Department}</span>
                                <p>{item.Details}</p>
                            </div>
                        </div>
                    ))}
                </div>


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

export default Pages

import React from 'react'
import { useState } from 'react';
import logo from '../assets/headerLogo.png';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faWineGlass, faMugHot, faTrashCan, faMartiniGlass, faBowlRice, faUtensils , faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import menu1 from '../assets/OurMenu/7.png'
import menu2 from '../assets/OurMenu/8.png'
import menu3 from '../assets/OurMenu/9.png'
import menu4 from '../assets/OurMenu/10.png'


import sweet1 from '../assets/OurMenu/sweet.png'
import sweet2 from '../assets/OurMenu/sweet1.png'
import sweet3 from '../assets/OurMenu/sweet2.png'
import sweet4 from '../assets/OurMenu/sweet3.png'


const ulList = [
    { navName: 'Home' },
    { navName: 'Our Food' },
    { navName: 'Pages', NavUlList: ['About Us', ' Menu', 'FAQ'] },
    { navName: 'Gallery' },
    { navName: 'OrderNow' },
    { navName: 'Location' },
]

const MenuList = [
    {
        DiesName: ' Classic Nachos',
        Rates: '$499.00'
    },
    {
        DiesName: ' Nachos Grande',
        Rates: '$499.00'
    },
    {
        DiesName: ' Spaghetti',
        Rates: '$59.00'
    },
    {
        DiesName: ' Nachos Grande',
        Rates: '$249.00'
    },
    {
        DiesName: ' Avocado Shell Stuffed',
        Rates: '$150.00'
    },
    {
        DiesName: ' Stuffed Mushroom',
        Rates: '$199.00'
    },
    {
        DiesName: ' Baked Potato Jackets',
        Rates: '$99.00'
    },
    {
        DiesName: ' Mexican Taco',
        Rates: '$899.00'
    },
    {
        DiesName: ' Tex-Mex Chicken',
        Rates: '$1250.00'
    },
    {
        DiesName: ' Quesadillas Acapulco',
        Rates: '$399.00'
    },
    {
        DiesName: ' Quesadillas Acapulco',
        Rates: '$399.00'
    },
    {
        DiesName: ' Quesadillas Acapulco',
        Rates: '$399.00'
    },
    {
        DiesName: ' Barbecue Beef',
        Rates: '$39.00'
    },
    {
        DiesName: ' Buck Wheat',
        Rates: '$30.00'
    },
]

let quotesObj = [
    {
        icon: faQuoteLeft
    },
    {
        Review: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. quam nunc putamus parum claram, Mirum est notare quam littera gothica.',
        ReviewName: 'Alex hales'
    },
    {
        Review: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
        ReviewName: 'Chris Martin'
    },
    {
        Review: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse.',
        ReviewName: 'Shane Robertson'
    },
]

const foodCards = [
    {
        foodImage:  sweet1 ,
        foodName: 'Chicken Mojamo',
        foodRate: '$56.99',
        foodDetails: 'Lorem ipsum dolor sit amet conse ctetur hendrerit'
    },
    {
        foodImage: sweet2 ,
        foodName: 'Chicken Mojamo',
        foodRate: '$56.99',
        foodDetails: 'Lorem ipsum dolor sit amet conse ctetur hendrerit'
    },
    {
        foodImage:  sweet3 ,
        foodName: 'Chicken Mojamo',
        foodRate: '$56.99',
        foodDetails: 'Lorem ipsum dolor sit amet conse ctetur hendrerit'
    },
    {
        foodImage:  sweet4 ,
        foodName: 'Chicken Mojamo',
        foodRate: '$56.99',
        foodDetails: 'Lorem ipsum dolor sit amet conse ctetur hendrerit'
    },
]

const dinnerBox = [
    {
        Icon: faWineGlass ,
        FoodTime: ' Dinner & Dessert',
        FoodtimeDetails: 'you need a doctor for to consectetuer Lorem ipsum dolor, consectetur adipiscing onsectetur Graphic Power Ut eros.',
    },
    {
        Icon:  faMugHot ,
        FoodTime: ' Breakfast',
        FoodtimeDetails: 'you need a doctor for to consectetuer Lorem ipsum dolor, consectetur adipiscing onsectetur Graphic Power Ut eros.',
    },
    {
        Icon:  faTrashCan ,
        FoodTime: ' Ice Shakes',
        FoodtimeDetails: 'you need a doctor for to consectetuer Lorem ipsum dolor, consectetur adipiscing onsectetur Graphic Power Ut eros.',
    },
    {
        Icon:  faMartiniGlass ,
        FoodTime: ' Beverages',
        FoodtimeDetails: 'you need a doctor for to consectetuer Lorem ipsum dolor, consectetur adipiscing onsectetur Graphic Power Ut eros.',
    },
    {
        Icon: faUtensils ,
        FoodTime: ' Delicious Food',
        FoodtimeDetails: 'you need a doctor for to consectetuer Lorem ipsum dolor, consectetur adipiscing onsectetur Graphic Power Ut eros.',
    },
    {
        Icon:  faBowlRice ,
        FoodTime: ' Desserts',
        FoodtimeDetails: 'you need a doctor for to consectetuer Lorem ipsum dolor, consectetur adipiscing onsectetur Graphic Power Ut eros.',
    },
]

function OurMenu() {


    return (
        <div>
            <header className='main-Header ourFood' >
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
                    <h1>From Our Kitchen to Your Table: Exceptional Dishes.... </h1>
                    <p>Our menu is a celebration of flavor, featuring dishes crafted with the freshest ingredients and bold, authentic seasonings. Each plate is thoughtfully prepared by our skilled chefs, combining culinary expertise with a passion for taste....</p>
                    <button >Order Now</button>
                </div>
            </header>
            <section id='AutoCenter'>
                <div className="WelcomeToBesto">
                    <h1>Welcome To Bistro</h1>
                </div>
                <div className="DummeyText">
                    <div className="AboutFood">
                        <div className="Party">
                            <div className="peragraph">
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                                </p>
                                <p>That also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including of Lorem Ipsum.</p>
                            </div>
                            <div className="ulIcon">
                                <li><a href="">Business Events</a></li>
                                <li><a href="">Business</a></li>
                                <li><a href="">Cardiovascular Diseases</a></li>
                                <li><a href="">Weddings</a></li>
                                <li><a href="">Party & Others</a></li>
                            </div>
                        </div>
                        <div className="Party">
                            <img src="https://www.themesindustry.com/html/bistro/images/welcome.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <div className="menu">
                    <h1>Our Menu</h1>

                    <div className="menuimage">
                        <div className="menuCards1">
                            <div className="ComponentsGap">
                                {
                                    MenuList.map((item, idx) => (
                                        <div className="DiesName" key={idx}>
                                            <h2>{item.DiesName}</h2>
                                            <p>{item.Rates}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="menuCards1">
                            <div className="ComponentsGap" id='gridimage'>
                                <img src={menu1} alt="" />
                                <img src={menu2} alt="" />
                                <img src={menu3} alt="" />
                                <img src={menu4} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="FeatureFood">
                    <h1>Featured Food</h1>

                    <div className="FeatureFoods">
                       {
                            foodCards.map((cards, idx) => (
                                <div className="Imagesf" key={idx}>
                                    <img src={cards.foodImage} alt="" />
                                    <div className="imageDetails">
                                        <h2>{cards.foodName}</h2>
                                        <span>{cards.foodRate}</span>
                                        <p>{cards.foodDetails}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className="dinner">
                    <div className="multipleDinnerBox">
                        {
                            dinnerBox.map((cards, idx) => (

                                <div className="dinner-fast" key={idx}>
                                    <FontAwesomeIcon className='DinnerIcon' icon={cards.Icon}></FontAwesomeIcon>
                                    <h1>{cards.FoodTime}</h1>
                                    <p>{cards.FoodtimeDetails}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="Happy" id='happyfoodCostomer'>
                <div className="HappyCostomer">
                    <FontAwesomeIcon id='Quots' icon={faQuoteLeft}></FontAwesomeIcon>
                    {
                        quotesObj.map((quest, idx) => (
                            <div className="CostomerAbout" key={idx}>
                                <h3>{quest.Review}</h3>,
                                <p>{quest.ReviewName}</p>
                            </div>
                        ))
                    }
                </div>
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

export default OurMenu

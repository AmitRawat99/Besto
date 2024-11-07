import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from 'react-router-dom'
import { faBars, faWineGlass, faMugHot, faFaceSmile, faBowlRice, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/headerLogo.png';
import { useState } from 'react';

import FormImage from '../assets/Form.Image/2.png';
import food1 from '../assets/food2.png';
import food2 from '../assets/food1.png';
import food3 from '../assets/food3.png';
import food5 from '../assets/food5.png';
import img1 from '../assets/AllFood/1.png';
import img2 from '../assets/AllFood/2.png';
import img3 from '../assets/AllFood/3.png';
import img4 from '../assets/AllFood/4.png';
import img5 from '../assets/AllFood/5.png';
import img6 from '../assets/AllFood/6.png';
import img7 from '../assets/AllFood/7.png';
import img8 from '../assets/AllFood/8.png';
import KichanStaf1 from '../assets/KichanStaf/1.png';
import OrderForm from './OrderForm';



const images = [
    {
        title: 'Drinks & Beverages',
        img: img1
    },
    {
        title: 'Starters',
        img: img2
    },
    {
        title: 'Breakfast & Lunch',
        img: img3
    },
    {
        title: 'Dinner',
        img: img4
    },
    {
        title: 'Dinner',
        img: img5
    },
    {
        title: 'Starters',
        img: img6
    },
    {
        title: 'Starters',
        img: img7
    },
    {
        title: 'Dinner',
        img: img8
    },
];
const foodName = [
    { FoodImage: food1, FoodName: 'Truffle Risotto', AboutFood: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et dolorem voluptatibus atque officia porro eius..' },
    { FoodImage: food2, FoodName: 'Lobster Thermidor', AboutFood: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et dolorem voluptatibus atque officia porro eius..' },
    { FoodImage: food3, FoodName: 'Saffron Paella', AboutFood: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et dolorem voluptatibus atque officia porro eius..' },
    { FoodImage: food5, FoodName: 'Oysters Rockefeller', AboutFood: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et dolorem voluptatibus atque officia porro eius..' },
];
const Dises = [
    { Title: 'Dinner & Dessert', Peragraph: 'Lorem ipsum dolor, consectetur adipiscing onsectetur...', IconName: faWineGlass },
    { Title: 'Breakfast', Peragraph: 'Lorem ipsum dolor, consectetur adipiscing onsectetur...', IconName: faMugHot },
    { Title: 'Ice Shakes', Peragraph: 'Lorem ipsum dolor, consectetur adipiscing onsectetur...', IconName: faWineGlass },
    { Title: 'Beverages', Peragraph: 'Lorem ipsum dolor, consectetur adipiscing onsectetur...', IconName: faMugHot },
];
let MenuDetails = [
    {
        titleName: 'Classic Nachos',
        Rate: '$499.00'
    },
    {
        titleName: 'Classic Nachos',
        Rate: '$499.00'
    },
    {
        titleName: 'Classic Nachos',
        Rate: '$499.00'
    },
    {
        titleName: 'Classic Nachos',
        Rate: '$499.00'
    },
    {
        titleName: 'Classic Nachos',
        Rate: '$499.00'
    },
    {
        titleName: 'Classic Nachos',
        Rate: '$499.00'
    },
    {
        titleName: 'Classic Nachos',
        Rate: '$499.00'
    },
    // {
    //     SpecialMenu: 'Other Special Menu',
    //     Peragph: 'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore nulla facilisis'
    // },
]
let Chef = [
    {
        img: KichanStaf1,
        ChefName: 'Michael Reubens',
        Department: 'Beverage Purchasing',
        Details: 'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat'
    },
    {
        img: KichanStaf1,
        ChefName: 'Michael Reubens',
        Department: 'Beverage Purchasing',
        Details: 'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat'
    },
    {
        img: KichanStaf1,
        ChefName: 'Michael Reubens',
        Department: 'Beverage Purchasing',
        Details: 'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat'
    },
    {
        img: KichanStaf1,
        ChefName: 'Michael Reubens',
        Department: 'Beverage Purchasing',
        Details: 'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat'
    },
    {
        img: KichanStaf1,
        ChefName: 'Michael Reubens',
        Department: 'Beverage Purchasing',
        Details: 'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat'
    },
    {
        img: KichanStaf1,
        ChefName: 'Michael Reubens',
        Department: 'Beverage Purchasing',
        Details: 'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat'
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
const FoodList = ['All Food', 'Starters', 'Drinks & Beverages', 'Dinner', 'Breakfast & Lunch'];
const ulList = [
    { navName: 'Home' },
    { navName: 'Our Food' },
    { navName: 'Pages', NavUlList: ['About Us', ' Menu', 'FAQ'] },
    { navName: 'Gallery' },
    { navName: 'OrderNow' },
    { navName: 'Location' },
]


function Home() {

    const [selectCatogary, setselectCatogary] = useState('All Food');

    const nevigation  = useNavigate()

    const handleCategoryClick = (category, e) => {
        e.preventDefault()
        setselectCatogary(category)
    }

    const filterImage = selectCatogary === 'All Food' ? images
        : images.filter((img) => img.title === selectCatogary)

    return (
        <>
            <header className="main-Header">
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
                    <button onClick={function(e){
                        nevigation('Gallary')
                    }}>Order Now</button>
                </div>
            </header>

            <section id="SectionCenter">
                <div className="title">
                    <span>Our Specialities</span>
                </div>
                <div className="glassIconContent">
                    <div className="glash-content">
                        {Dises.map((item, idx) => (
                            <div className="icons" key={idx}>
                                <div className="foodIcons">
                                    <div className="FontAwesome">
                                        <div className="borderIcon">
                                            <FontAwesomeIcon className="Icon" icon={item.IconName} />
                                        </div>
                                        <h1>{item.Title}</h1>
                                        <p>{item.Peragraph}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="Feature-Food">
                    <h2>Featured Food</h2>
                    <div className="foods">
                        <div className="hiddenContent">
                            {foodName.map((food, idx) => (
                                <div className="foodDetails" key={idx}>
                                    <div className="image">
                                        <img src={food.FoodImage} alt={food.FoodName} />
                                    </div>
                                    <h1>{food.FoodName}</h1>
                                    <p>{food.AboutFood}</p>
                                </div>
                            ))}
                        </div>
                        <div className="Our-Menu">
                            <h5>Our Menu</h5>
                            <div className="choise">
                                {MenuDetails.map((menu, idx) => (
                                    <div className="MenuCard" key={idx}>
                                        <p>{menu.titleName}</p>
                                        <h3>{menu.Rate}</h3>
                                    </div>
                                ))}
                                <div className="MenuAbout">
                                    <h1>Other Special Menu</h1>
                                    <p>Duis autem vel eum iriure dolor in hendrerit...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="banner">
                    <div className="bannercontent">
                        <h1>Hot Deal Of The Day</h1>
                        <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore nulla facilisis. velit esse molestie consequat, vel illum dolore nulla facilisis.</p>
                        <div className="btn">
                            <button>ORDER NOW</button>
                        </div>
                    </div>
                </div>


                <div className="Delicious-Food">
                    <h1>Delicious   Food </h1>
                    <div className="foodList">
                        <ul id='ulList'>
                            {
                                FoodList.map((liItem, idx) => (
                                    <li key={idx} onClick={(e) => { handleCategoryClick(liItem, e) }} ><a href="#" >{liItem}</a></li>
                                ))
                            }
                        </ul>
                    </div>
                </div>

                <div className="imageCollection">
                    <div className="foodImageAll">
                        {filterImage.map((img, idx) => (
                            <div className="images" key={idx}>
                                <img src={img.img} alt={`Food ${idx}`} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="counter">
                    <div className="countersection">
                        <div className="counternumber">
                            <FontAwesomeIcon id='i' icon={faFaceSmile}></FontAwesomeIcon>
                            <h3>4680</h3>
                            <p>Happy Customers</p>
                        </div>
                    </div>
                    <div className="countersection">
                        <div className="counternumber">
                            <FontAwesomeIcon id='i' icon={faBowlRice}></FontAwesomeIcon>
                            <h3>4680</h3>
                            <p>Happy Customers</p>
                        </div>
                    </div>
                    <div className="countersection">
                        <div className="counternumber">
                            <FontAwesomeIcon id='i' icon={faWineGlass}></FontAwesomeIcon>
                            <h3>4680</h3>
                            <p>Happy Customers</p>
                        </div>
                    </div>
                    <div className="countersection">
                        <div className="counternumber">
                            <FontAwesomeIcon id='i' icon={faMugHot}></FontAwesomeIcon>
                            <h3>4680</h3>
                            <p>Happy Customers</p>
                        </div>
                    </div>
                </div>

                <div className="chefs">
                    {Chef.map((item, idx) => (
                        <div className="specialChefs" key={idx}>
                            <div className="KitcheStaff">
                                <img src={item.img} alt={item.ChefName} />
                                <h1>{item.ChefName}</h1>
                                <span>{item.Department}</span>
                                <p>{item.Details}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>


            <div className="form">
                <div className="formContainer">
                    <h1>Online Order</h1>
                    <div className="flexFormContent">
                        <div className="OlineOrder">
                            <form action="">
                                <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.</p>
                                <div className="input">
                                    <input type="text" placeholder='Name' />
                                    <input type="text" placeholder='Email Address' />
                                </div>
                                <div className="input">
                                    <input type="text" placeholder='Phone Number' />
                                    <select name="Deals" id="Deal">
                                        <option value="Deals">Deal One ($200)</option>
                                        <option value="Deals">Deal Two ($400)</option>
                                        <option value="Deals">Deal Three ($500)</option>
                                        <option value="Deals">Deal Four ($600)</option>
                                    </select>
                                </div>
                                <div className="input">
                                    <textarea name="" id="textarea" placeholder='Order Details'></textarea>
                                </div>
                                <div className="buttons">
                                    <button onClick={(e)=>{
                                        e.preventDefault()
                                    }}>Order Now</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="formImage">
                    <img src={FormImage} alt="" />
                </div>
            </div>



            <div className="happTitle">
                <h1>Our   happy   Customers</h1>
            </div>
            <div className="Happy">
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



            <div>
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
        </>
    );
}

export default Home;

import React, { useState } from 'react'
import logo from '../assets/headerLogo.png';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBucket } from '@fortawesome/free-solid-svg-icons';
import Details from './Details';



// fast Food

import Break1 from '../assets/FoodGallary/BreakFast/1.png'
import Break2 from '../assets/FoodGallary/BreakFast/2.png'
import Break3 from '../assets/FoodGallary/BreakFast/3.png'
import Break4 from '../assets/FoodGallary/BreakFast/4.png'
import Break5 from '../assets/FoodGallary/BreakFast/5.png'
import Break6 from '../assets/FoodGallary/BreakFast/6.png'
import Break7 from '../assets/FoodGallary/BreakFast/7.png'
import Break8 from '../assets/FoodGallary/BreakFast/8.png'
import Break9 from '../assets/FoodGallary/BreakFast/9.png'
import Break10 from '../assets/FoodGallary/BreakFast/10.png'
import Break11 from '../assets/FoodGallary/BreakFast/11.png'
import Break12 from '../assets/FoodGallary/BreakFast/12.png'
import Break13 from '../assets/FoodGallary/BreakFast/13.png'
import Break14 from '../assets/FoodGallary/BreakFast/14.png'
import Break15 from '../assets/FoodGallary/BreakFast/15.png'
import Break16 from '../assets/FoodGallary/BreakFast/16.png'

// LunchFood

import lunch1 from '../assets/FoodGallary/LunchFood/1.png'
import lunch2 from '../assets/FoodGallary/LunchFood/2.png'
import lunch3 from '../assets/FoodGallary/LunchFood/3.png'
import lunch4 from '../assets/FoodGallary/LunchFood/4.png'
import lunch5 from '../assets/FoodGallary/LunchFood/5.png'
import lunch6 from '../assets/FoodGallary/LunchFood/6.png'
import lunch7 from '../assets/FoodGallary/LunchFood/7.png'
import lunch8 from '../assets/FoodGallary/LunchFood/8.png'
import lunch9 from '../assets/FoodGallary/LunchFood/9.png'
import lunch10 from '../assets/FoodGallary/LunchFood/10.png'
import lunch11 from '../assets/FoodGallary/LunchFood/11.png'
import lunch12 from '../assets/FoodGallary/LunchFood/12.png'
import lunch13 from '../assets/FoodGallary/LunchFood/13.png'
import lunch14 from '../assets/FoodGallary/LunchFood/14.png'
import lunch15 from '../assets/FoodGallary/LunchFood/15.png'
import lunch16 from '../assets/FoodGallary/LunchFood/16.png'

// FastFood

import fast1 from '../assets/FoodGallary/FastFood/1.png'
import fast2 from '../assets/FoodGallary/FastFood/2.png'
import fast3 from '../assets/FoodGallary/FastFood/3.png'
import fast4 from '../assets/FoodGallary/FastFood/4.png'
import fast5 from '../assets/FoodGallary/FastFood/5.png'
import fast6 from '../assets/FoodGallary/FastFood/6.png'
import fast7 from '../assets/FoodGallary/FastFood/7.png'
import fast8 from '../assets/FoodGallary/FastFood/8.png'
import fast9 from '../assets/FoodGallary/FastFood/9.png'
import fast10 from '../assets/FoodGallary/FastFood/10.png'
import fast11 from '../assets/FoodGallary/FastFood/11.png'
import fast12 from '../assets/FoodGallary/FastFood/12.png'
import fast13 from '../assets/FoodGallary/FastFood/13.png'
import fast14 from '../assets/FoodGallary/FastFood/14.png'
import fast15 from '../assets/FoodGallary/FastFood/15.png'
import fast16 from '../assets/FoodGallary/FastFood/16.png'


// dinner


import dinner2 from '../assets/FoodGallary/dinnerfood/2.png'
import dinner1 from '../assets/FoodGallary/dinnerfood/1.png'
import dinner3 from '../assets/FoodGallary/dinnerfood/3.png'
import dinner4 from '../assets/FoodGallary/dinnerfood/4.png'
import dinner5 from '../assets/FoodGallary/dinnerfood/5.png'
import dinner6 from '../assets/FoodGallary/dinnerfood/6.png'
import dinner7 from '../assets/FoodGallary/dinnerfood/7.png'
import dinner8 from '../assets/FoodGallary/dinnerfood/8.png'
import dinner9 from '../assets/FoodGallary/dinnerfood/9.png'
import dinner10 from '../assets/FoodGallary/dinnerfood/10.png'
import dinner11 from '../assets/FoodGallary/dinnerfood/11.png'
import dinner12 from '../assets/FoodGallary/dinnerfood/12.png'
import dinner13 from '../assets/FoodGallary/dinnerfood/13.png'
import dinner14 from '../assets/FoodGallary/dinnerfood/14.png'
import dinner16 from '../assets/FoodGallary/dinnerfood/15.png'
import dinner15 from '../assets/FoodGallary/dinnerfood/16.png'



// ChefsTeam



import  ChefsTeam1 from '../assets/FoodGallary/chefs/1.png'
import  ChefsTeam2 from '../assets/FoodGallary/chefs/2.png'
import  ChefsTeam3 from '../assets/FoodGallary/chefs/3.png'
import  ChefsTeam4 from '../assets/FoodGallary/chefs/18.png'
import  ChefsTeam5 from '../assets/FoodGallary/chefs/5.png'
import  ChefsTeam6 from '../assets/FoodGallary/chefs/6.png'
import  ChefsTeam7 from '../assets/FoodGallary/chefs/7.png'
import  ChefsTeam8 from '../assets/FoodGallary/chefs/8.png'
import  ChefsTeam9 from '../assets/FoodGallary/chefs/9.png'
import  ChefsTeam10 from '../assets/FoodGallary/chefs/17.png'
import  ChefsTeam11 from '../assets/FoodGallary/chefs/11.png'
import  ChefsTeam12 from '../assets/FoodGallary/chefs/12.png'
import  ChefsTeam13 from '../assets/FoodGallary/chefs/13.png'
import  ChefsTeam14 from '../assets/FoodGallary/chefs/14.png'
import  ChefsTeam15 from '../assets/FoodGallary/chefs/15.png'
import  ChefsTeam16 from '../assets/FoodGallary/chefs/16.png'


const ulList = [
    { navName: 'Home' },
    { navName: 'Our Food' },
    { navName: 'Pages', NavUlList: ['About Us', ' Menu', 'FAQ'] },
    { navName: 'Gallery' },
    { navName: 'OrderNow' },
    { navName: 'Location' },
]


const imageGllary = {
    BreakFast: [
        {
            img: Break1,
            FastFoodName: 'CB Diner',
            foodDetails: 'A mosquito-borne viral infection that causes severe flu-like symptoms. Dengue outbreaks are common during the monsoon season.'
        },
        {
            img: Break2,
            FastFoodName: 'Amour Bistro',
            foodDetails: 'Duis autem vel eum iriure. Another mosquito-borne disease that remains a challenge, particularly in rural areas.'
        },
        {
            img: Break3,
            FastFoodName: 'Big Yellow Door',
            foodDetails: 'India has a significant number of people living with HIV, particularly in certain high-prevalence regions.'
        },
        {
            img: Break4,
            FastFoodName: 'Amici Cafe - Gourmet Pizza',
            foodDetails: 'Heart disease and stroke are among the leading causes of death in India, often linked to lifestyle factors such as diet and physical inactivity.'
        },
        {
            img: Break5,
            FastFoodName: 'East Delhi Diner',
            foodDetails: 'Various types of cancer (e.g., breast, cervical, and oral cancer) are on the rise, influenced by lifestyle factors and environmental exposures.'
        },
        {
            img: Break6,
            FastFoodName: 'Pind Balluchi',
            foodDetails: 'Conditions like chronic obstructive pulmonary disease (COPD) are prevalent due to pollution, smoking, and occupational hazards.'
        },
        {
            img: Break7,
            FastFoodName: ' Radisson Blu Plaza',
            foodDetails: 'Both undernutrition and overnutrition are issues, with high rates of stunting and wasting in children, as well as rising obesity rates in adults.'
        },
        {
            img: Break8,
            FastFoodName: 'Barbeque Nation',
            foodDetails: 'India has one of the highest burdens of TB globally, with significant morbidity and mortality.'
        },
        {
            img: Break9,
            FastFoodName: 'Baby Dragon',
            foodDetails: 'Cauliflower with potatoes sautéed with garam masala, turmeric, sometimes kalonji and curry leaves.'
        },
        {
            img: Break10,
            FastFoodName: 'Talli Station',
            foodDetails: 'Green capsicum with potatoes sautéed with cumin seeds, onions, tomatoes, ginger-garlic paste, turmeric, red chilli powder, and garam masala.'
        },
        {
            img: Break11,
            FastFoodName: 'Aggrafe',
            foodDetails: 'Hard, unleavened bread cooked in most of the areas of Rajasthan, and in some parts of Madhya Pradesh and Gujarat states of India.'
        },
        {
            img: Break12,
            FastFoodName: 'Madhushala',
            foodDetails: 'Mixed rice dish, optional spices, optional vegetables, meats or seafood. Can be served with plain yogurt.'
        },
        {
            img: Break13,
            FastFoodName: '4S Chinese Restaurant',
            foodDetails: 'Mixed rice dish, optional spices, optional vegetables, meats or seafood. Can be served with plain yogurt.'
        },
        {
            img: Break14,
            FastFoodName: 'Moti Mahal DX',
            foodDetails: 'Mixed rice dish, optional spices, optional vegetables, meats or seafood. Can be served with plain yogurt.'
        },
        {
            img: Break15,
            FastFoodName: 'Aromas Of Pind',
            foodDetails: 'Mixed rice dish, optional spices, optional vegetables, meats or seafood. Can be served with plain yogurt.'
        },
        {
            img: Break16,
            FastFoodName: 'Untamed Cafe & Bar',
            foodDetails: 'Mixed rice dish, optional spices, optional vegetables, meats or seafood. Can be served with plain yogurt.'
        },
    ],
    LunchFood: [
        {
            title: 'LunchFood',
            img: lunch1,
            FastFoodName: 'Apni Rasoi',
            foodDetails: 'A mosquito-borne viral infection that causes severe flu-like symptoms. Dengue outbreaks are common during the monsoon season.'
        },
        {
            title: 'LunchFood',
            img: lunch2,
            FastFoodName: "Nathu's Sweets",
            foodDetails: 'Duis autem vel eum iriure. Another mosquito-borne disease that remains a challenge, particularly in rural areas.'
        },
        {
            title: 'LunchFood',
            img: Break3,
            FastFoodName: "Haldiram's",
            foodDetails: 'India has a significant number of people living with HIV, particularly in certain high-prevalence regions.'
        },
        {
            title: 'LunchFood',
            img: lunch3,
            FastFoodName: 'Pind Balluchi',
            foodDetails: 'Heart disease and stroke are among the leading causes of death in India, often linked to lifestyle factors such as diet and physical inactivity.'
        },
        {
            title: 'LunchFood',
            img: lunch4,
            FastFoodName: 'Bengali Sweet Centre',
            foodDetails: 'Various types of cancer (e.g., breast, cervical, and oral cancer) are on the rise, influenced by lifestyle factors and environmental exposures.'
        },
        {
            title: 'LunchFood',
            img: lunch5,
            FastFoodName: 'Prem Dhaba',
            foodDetails: 'Conditions like chronic obstructive pulmonary disease (COPD) are prevalent due to pollution, smoking, and occupational hazards.'
        },
        {
            title: 'LunchFood',
            img: lunch6,
            FastFoodName: 'Kaleva',
            foodDetails: 'Both undernutrition and overnutrition are issues, with high rates of stunting and wasting in children, as well as rising obesity rates in adults.'
        },
        {
            title: 'LunchFood',
            img: lunch7,
            FastFoodName: 'Hira Sweets',
            foodDetails: 'India has one of the highest burdens of TB globally, with significant morbidity and mortality.'
        },
        {
            title: 'LunchFood',
            img: lunch8,
            FastFoodName: 'Handi Chhadeyan Di',
            foodDetails: 'Cauliflower with potatoes sautéed with garam masala, turmeric, sometimes kalonji and curry leaves.'
        },
        {
            title: 'LunchFood',
            img: lunch9,
            FastFoodName: 'Bangla Foods',
            foodDetails: 'Green capsicum with potatoes sautéed with cumin seeds, onions, tomatoes, ginger-garlic paste, turmeric, red chilli powder, and garam masala.'
        },
        {
            title: 'LunchFood',
            img: lunch10,
            FastFoodName: 'Dasaprakash',
            foodDetails: 'Hard, unleavened bread cooked in most of the areas of Rajasthan, and in some parts of Madhya Pradesh and Gujarat states of India.'
        },
        {
            title: 'LunchFood',
            img: lunch11,
            FastFoodName: 'Andhra Canteen',
            foodDetails: 'Mixed rice dish, optional spices, optional vegetables, meats or seafood. Can be served with plain yogurt.'
        },
        {
            title: 'LunchFood',
            img: lunch12,
            FastFoodName: 'Bikanervala',
            foodDetails: 'Mixed rice dish, optional spices, optional vegetables, meats or seafood. Can be served with plain yogurt.'
        },
        {
            title: 'LunchFood',
            img: lunch13,
            FastFoodName: 'Bijoli Grill',
            foodDetails: 'Mixed rice dish, optional spices, optional vegetables, meats or seafood. Can be served with plain yogurt.'
        },
        {
            title: 'LunchFood',
            img: lunch14,
            FastFoodName: 'Naivedyam',
            foodDetails: 'Mixed rice dish, optional spices, optional vegetables, meats or seafood. Can be served with plain yogurt.'
        },
        {
            title: 'LunchFood',
            img: lunch15,
            FastFoodName: "Chili's Grill & Bar",
            foodDetails: 'Mixed rice dish, optional spices, optional vegetables, meats or seafood. Can be served with plain yogurt.'
        },
    ],
    FastFood: [
        {
            title: 'LunchFood',
            img: fast1,
            FastFoodName: 'Billu Hut',
            foodDetails: 'A mosquito-borne viral infection that causes severe flu-like symptoms. Dengue outbreaks are common during the monsoon season.'
        },
        {
            title: 'LunchFood',
            img: fast2,
            FastFoodName: 'Teco Bell',
            foodDetails: 'Duis autem vel eum iriure. Another mosquito-borne disease that remains a challenge, particularly in rural areas.'
        },
        {
            title: 'LunchFood',
            img: fast3,
            FastFoodName: 'V Cafe- Meals By PVR',
            foodDetails: 'India has a significant number of people living with HIV, particularly in certain high-prevalence regions.'
        },
        {
            title: 'LunchFood',
            img: fast4,
            FastFoodName: 'California Burrito',
            foodDetails: 'Heart disease and stroke are among the leading causes of death in India, often linked to lifestyle factors such as diet and physical inactivity.'
        },
        {
            title: 'LunchFood',
            img: fast5,
            FastFoodName: 'Good Flippin  Burgers',
            foodDetails: 'Various types of cancer (e.g., breast, cervical, and oral cancer) are on the rise, influenced by lifestyle factors and environmental exposures.'
        },
        {
            title: 'LunchFood',
            img: fast6,
            FastFoodName: 'Xero Degrees',
            foodDetails: 'Conditions like chronic obstructive pulmonary disease (COPD) are prevalent due to pollution, smoking, and occupational hazards.'
        },
        {
            title: 'LunchFood',
            img: fast7,
            FastFoodName: 'Burgrill - The Win Win Burger',
            foodDetails: 'Both undernutrition and overnutrition are issues, with high rates of stunting and wasting in children, as well as rising obesity rates in adults.'
        },
        {
            title: 'LunchFood',
            img: fast8,
            FastFoodName: 'Pizza Hut',
            foodDetails: 'India has one of the highest burdens of TB globally, with significant morbidity and mortality.'
        },
        {
            title: 'LunchFood',
            img: fast9,
            FastFoodName: 'AKUS  The Burger Co.',
            foodDetails: 'Cauliflower with potatoes sautéed with garam masala, turmeric, sometimes kalonji and curry leaves.'
        },
        {
            title: 'LunchFood',
            img: fast10,
            FastFoodName: 'Pret A Manger',
            foodDetails: 'Green capsicum with potatoes sautéed with cumin seeds, onions, tomatoes, ginger-garlic paste, turmeric, red chilli powder, and garam masala.'
        },
        {
            title: 'LunchFood',
            img: fast11,
            FastFoodName: 'Burger King',
            foodDetails: 'Hard, unleavened bread cooked in most of the areas of Rajasthan, and in some parts of Madhya Pradesh and Gujarat states of India.'
        },
        {
            title: 'LunchFood',
            img: fast12,
            FastFoodName: 'Louis Burger',
            foodDetails: 'Mixed rice dish, optional spices, optional vegetables, meats or seafood. Can be served with plain yogurt.'
        },
        {
            title: 'LunchFood',
            img: fast13,
            FastFoodName: 'PVR Café',
            foodDetails: 'Mixed rice dish, optional spices, optional vegetables, meats or seafood. Can be served with plain yogurt.'
        },
        {
            title: 'LunchFood',
            img: fast16,
            FastFoodName: 'Camdin Patisserie & Boulangerie',
            foodDetails: 'Mixed rice dish, optional spices, optional vegetables, meats or seafood. Can be served with plain yogurt.'
        },
        {
            title: 'LunchFood',
            img: fast14,
            FastFoodName: "McDonald's",
            foodDetails: 'Mixed rice dish, optional spices, optional vegetables, meats or seafood. Can be served with plain yogurt.'
        },
        {
            title: 'LunchFood',
            img: fast15,
            FastFoodName: "Hulk's Burger",
            foodDetails: 'Mixed rice dish, optional spices, optional vegetables, meats or seafood. Can be served with plain yogurt.'
        },
    ],
    DinnerFood: [
        {
            title: 'LunchFood',
            img: dinner1,
            FastFoodName: 'Salad Days',
            foodDetails: 'A mosquito-borne viral infection that causes severe flu-like symptoms. Dengue outbreaks are common during the monsoon season.'
        },
        {
            title: 'LunchFood',
            img: dinner2,
            FastFoodName: 'Eat Fit',
            foodDetails: 'Duis autem vel eum iriure. Another mosquito-borne disease that remains a challenge, particularly in rural areas.'
        },
        {
            title: 'LunchFood',
            img: dinner3,
            FastFoodName: 'Kwality',
            foodDetails: 'India has a significant number of people living with HIV, particularly in certain high-prevalence regions.'
        },
        {
            title: 'LunchFood',
            img: dinner4,
            FastFoodName: 'Chelvies Coffee',
            foodDetails: 'Heart disease and stroke are among the leading causes of death in India, often linked to lifestyle factors such as diet and physical inactivity.'
        },
        {
            title: 'LunchFood',
            img: dinner5,
            FastFoodName: 'Ichiban',
            foodDetails: 'Various types of cancer (e.g., breast, cervical, and oral cancer) are on the rise, influenced by lifestyle factors and environmental exposures.'
        },
        {
            title: 'LunchFood',
            img: dinner6,
            FastFoodName: "Wok Coulds",
            foodDetails: 'Conditions like chronic obstructive pulmonary disease (COPD) are prevalent due to pollution, smoking, and occupational hazards.'
        },
        {
            title: 'LunchFood',
            img: dinner7,
            FastFoodName: "Berco's Chinese",
            foodDetails: 'Both undernutrition and overnutrition are issues, with high rates of stunting and wasting in children, as well as rising obesity rates in adults.'
        },
        {
            title: 'LunchFood',
            img: dinner8,
            FastFoodName: 'Karachi Bekary',
            foodDetails: 'India has one of the highest burdens of TB globally, with significant morbidity and mortality.'
        },
        {
            title: 'LunchFood',
            img: dinner9,
            FastFoodName: 'Digin',
            foodDetails: 'Cauliflower with potatoes sautéed with garam masala, turmeric, sometimes kalonji and curry leaves.'
        },
        {
            title: 'LunchFood',
            img: dinner10,
            FastFoodName: 'Caterspoint',
            foodDetails: 'Green capsicum with potatoes sautéed with cumin seeds, onions, tomatoes, ginger-garlic paste, turmeric, red chilli powder, and garam masala.'
        },
        {
            title: 'LunchFood',
            img: dinner11,
            FastFoodName: 'Subway',
            foodDetails: 'Hard, unleavened bread cooked in most of the areas of Rajasthan, and in some parts of Madhya Pradesh and Gujarat states of India.'
        },
        {
            title: 'LunchFood',
            img: dinner12,
            FastFoodName: 'CalorieCo',
            foodDetails: 'Mixed rice dish, optional spices, optional vegetables, meats or seafood. Can be served with plain yogurt.'
        },
        {
            title: 'LunchFood',
            img: dinner13,
            FastFoodName: 'Sagar Ratna',
            foodDetails: 'Mixed rice dish, optional spices, optional vegetables, meats or seafood. Can be served with plain yogurt.'
        },
        {
            title: 'LunchFood',
            img: dinner14,
            FastFoodName: "Nik Baker's",
            foodDetails: 'Mixed rice dish, optional spices, optional vegetables, meats or seafood. Can be served with plain yogurt.'
        },
        {
            title: 'LunchFood',
            img: dinner15,
            FastFoodName: 'Veg Gulati',
            foodDetails: 'Mixed rice dish, optional spices, optional vegetables, meats or seafood. Can be served with plain yogurt.'
        },
        {
            title: 'LunchFood',
            img: dinner16,
            FastFoodName: 'Chiken',
            foodDetails: 'Mixed rice dish, optional spices, optional vegetables, meats or seafood. Can be served with plain yogurt.'
        },
    ],
    ChefsTeam: [
        {
            title: 'LunchFood',
            img: ChefsTeam15,
            FastFoodName: 'Sanjeev Kapoor',
            foodDetails: 'A mosquito-borne viral infection that causes severe flu-like symptoms. Dengue outbreaks are common during the monsoon season.'
        },
        {
            title: 'LunchFood',
            img: ChefsTeam1,
            FastFoodName: 'Vikas Khanna',
            foodDetails: 'Duis autem vel eum iriure. Another mosquito-borne disease that remains a challenge, particularly in rural areas.'
        },
        {
            title: 'LunchFood',
            img: ChefsTeam7,
            FastFoodName: 'Tarla Dalal',
            foodDetails: 'India has a significant number of people living with HIV, particularly in certain high-prevalence regions.'
        },
        {
            title: 'LunchFood',
            img: ChefsTeam3,
            FastFoodName: 'Rohit Khanna',
            foodDetails: 'Heart disease and stroke are among the leading causes of death in India, often linked to lifestyle factors such as diet and physical inactivity.'
        },
        {
            title: 'LunchFood',
            img: ChefsTeam5,
            FastFoodName: 'Puneet Mehta',
            foodDetails: 'Various types of cancer (e.g., breast, cervical, and oral cancer) are on the rise, influenced by lifestyle factors and environmental exposures.'
        },
        {
            title: 'LunchFood',
            img: ChefsTeam6,
            FastFoodName: 'Richa Hingle',
            foodDetails: 'Conditions like chronic obstructive pulmonary disease (COPD) are prevalent due to pollution, smoking, and occupational hazards.'
        },
        {
            title: 'LunchFood',
            img: ChefsTeam2,
            FastFoodName: 'Jolly Sethi',
            foodDetails: 'Both undernutrition and overnutrition are issues, with high rates of stunting and wasting in children, as well as rising obesity rates in adults.'
        },
        {
            title: 'LunchFood',
            img: ChefsTeam8,
            FastFoodName: 'Shalini Singh',
            foodDetails: 'India has one of the highest burdens of TB globally, with significant morbidity and mortality.'
        },
        {
            title: 'LunchFood',
            img: ChefsTeam7,
            FastFoodName: 'Sheetal Khatri',
            foodDetails: 'Cauliflower with potatoes sautéed with garam masala, turmeric, sometimes kalonji and curry leaves.'
        },
        {
            title: 'LunchFood',
            img: ChefsTeam14,
            FastFoodName: 'Zorawar Kalra',
            foodDetails: 'Green capsicum with potatoes sautéed with cumin seeds, onions, tomatoes, ginger-garlic paste, turmeric, red chilli powder, and garam masala.'
        },
        {
            title: 'LunchFood',
            img: ChefsTeam4,
            FastFoodName: 'Rakesh Sethi',
            foodDetails: 'Hard, unleavened bread cooked in most of the areas of Rajasthan, and in some parts of Madhya Pradesh and Gujarat states of India.'
        },
        {
            title: 'LunchFood',
            img: ChefsTeam9,
            FastFoodName: 'Divya Shetty',
            foodDetails: 'Mixed rice dish, optional spices, optional vegetables, meats or seafood. Can be served with plain yogurt.'
        },
        {
            title: 'LunchFood',
            img: ChefsTeam10,
            FastFoodName: 'Rajesh K. Nair',
            foodDetails: 'Mixed rice dish, optional spices, optional vegetables, meats or seafood. Can be served with plain yogurt.'
        },
        {
            title: 'LunchFood',
            img: ChefsTeam13,
            FastFoodName: 'Nisha Madhulika',
            foodDetails: 'Mixed rice dish, optional spices, optional vegetables, meats or seafood. Can be served with plain yogurt.'
        },
        {
            title: 'LunchFood',
            img: ChefsTeam11,
            FastFoodName: 'Rukmini Srinivas',
            foodDetails: 'Mixed rice dish, optional spices, optional vegetables, meats or seafood. Can be served with plain yogurt.'
        },
        {
            title: 'LunchFood',
            img: ChefsTeam16,
            FastFoodName: 'Zorawar Kalra',
            foodDetails: 'Mixed rice dish, optional spices, optional vegetables, meats or seafood. Can be served with plain yogurt.'
        },
    ],
};


let foodList = ['BreakFast', 'LunchFood', 'FastFood', 'DinnerFood', 'ChefsTeam']





function Gallary() {

    const [Foodcategory, setFoodcategory] = useState('BreakFast')


    const nevigate = useNavigate()


    function ChangeFoodCategory(food, e) {
        e.preventDefault()
        setFoodcategory(food)
    }

    return (
        <div>
            <header className="main-Header" id='mainHeader'>
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
                    <h1>Discover Our Premium Fish Steak Collection.....</h1>
                    <p>Dive into a sensational culinary experience with our premium fish steaks! Each filet is hand-selected from the finest catches, ensuring freshness and quality in every bite..</p>
                    <button>Order Now</button>
                </div>
            </header>
            <section id='listitem'>
                <div className="DiffrentGalary">
                    <ul className="imagesGlary">
                        {
                            foodList.map((liList, idx) => {
                                return (
                                    <li key={idx}><a href="#" onClick={(e) =>ChangeFoodCategory(liList , e)}>{liList}</a></li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="allFoods">
                    {imageGllary[Foodcategory] && imageGllary[Foodcategory].map((item, idx) => (
                        <div className="foodCategorys" key={idx}>
                            <div className="MultipleTypeFood">
                                <img src={item.img} alt="Food item"/>
                                <h1>{item.FastFoodName}</h1>
                                <p>{item.foodDetails}</p>
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

export default Gallary

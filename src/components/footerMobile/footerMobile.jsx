import React from 'react';
import { FaHome, FaChartPie, FaMap} from "react-icons/fa";
import "./footerMobile.css";
import { Link } from 'react-router-dom';


export default function FooterMobile() {
  
  
  
  
    return (
        <div className='footer-mobile-container'>
            <div className='home-container'>
                <a href="#nav-container">
                    <FaHome/>
                </a>
                
                <p>Home</p>
            </div>
            <div className='track-container'>
                <a href="#graph-section-container">
                    <FaChartPie/>
                </a>
                <p>Track</p>
            </div>
            <div className='plans-container'>
                <a href="#mealPlan-container">
                    <FaMap/>
                </a>
                <p>Planes</p>
            </div>

        </div>
    )
}

import React from 'react';
import './landing.css';
import './title.css';
import Title from "./title";
import { Link } from 'react-router-dom' 

const Landing = () => {
    return (
        <div class = "wrapper">
            
           
            <div class = "section parallax">
                <Title />
                <div class = "button">
                <Link to ="/signin" class="btn waves-effect amber waves-orange"><i class="material-icons left">people</i>
                    Join the Crowd</Link>
                </div>
            </div>
            
       
            <div class ="section parallax-2"></div>
            <div class = "section parallax-3"></div>
        </div>
        
    );
}
  
  export default Landing;
import React from 'react';
import './Hero.scss';
import heroImg from '../../Img/heroNew.png';


const Hero = () => {
    return (
        <div>
            <img id="hero" className="w-100" src={heroImg} alt="Hero"/>
        </div>
     
    )
}

export default Hero;
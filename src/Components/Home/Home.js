import React from 'react';
import pill from '../../Img/pill.svg';
import './Home.scss';


const Home = () => {

    return (
       <div className="d-flex justify-content-center align-items-center home-pill">
           <img src={pill} alt="pill" />
       </div>
    )
}

export default Home;
import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';

const Hero = ({ merchant }) => {
    // console.log(merchant.data[0].images)
    return (
        <div className="hero">
            {/* <img src="../../../../public/img/logo.png" alt="Logo" /> */}
            <div className="hero__text">
                <h1>
                    {merchant.data[0].name}
                </h1>
                <a href="#products" className="btn">Shop</a>
            </div>
        </div>
    )
}

export default Hero;


Hero.propTypes = {
    merchant: PropTypes.object,
};
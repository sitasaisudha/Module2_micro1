import React from 'react';

import './Footer.css';
import Link from './Link';
import Lint from './Lint'

const Footer = () => {
    return (
        <div className='container'>
            <div className='item'>
            <Link cont="Prompt Generator" />
            <Link cont="Dweep Daily" />
            <Link cont="All Contributors" />
            <Link cont="Your data on Dweep.io" />
            <Link cont="Contribute to Dweep" />
          
        

            </div>
            <div className='item'  align="right">
                <Link cont=" Dweep.io" />
                <Link cont="Made with love in India" />
                <Lint/>   
                <Link cont="" />
                <Link cont="hello@dweep.io" />
            </div>
            
        </div>
    );
};

export default Footer;
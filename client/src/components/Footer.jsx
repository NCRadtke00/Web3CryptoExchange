import React from 'react';
import logo from '../../src/cexblklogo.png';
const Footer = () => {
    return (
        <div>
            <div>
                <div>
                    <img src={logo} alt="logo" className="w-32" />
                </div>
                <div>
                    <p>Market</p>
                    <p>Market</p>
                    <p>Market</p>
                    <p>Market</p>
                </div>
            </div>
            <div>
                <p>questions comments concerns?</p>
                <p>customerservice@cex.com</p>
            </div>
            <div>
                <p>
                    all rights reserved.
                </p>
            </div>
        </div>
    )
}

export default Footer

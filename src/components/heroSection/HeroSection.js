// components/HeroSection.js
import React from 'react';

const HeroSection = () => {
    const heroContainerStyle = {
        backgroundImage: "url('../../../public/hero-back.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '100px', // Adjust as needed
    };

    const heroContentStyle = {

        padding: '20px',
        borderRadius: '8px',
        textAlign: 'center',
        maxWidth: '300px', // Adjust as needed
    };
    return (
        <div style={heroContainerStyle}>
            <div style={heroContentStyle}>
                <h1 className="text-4xl font-bold">Item 1</h1>
                <p>Description for Item 1</p>
            </div>
            <div style={heroContentStyle}>
                <h1 className="text-4xl font-bold">Item 2</h1>
                <p>Description for Item 2</p>
            </div>
        </div>
    );
};

export default HeroSection;


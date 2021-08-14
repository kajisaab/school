import React from 'react'
import ParticleBackground from './ParticleBackground'
import "./HeroSection.css"

function HeroSection() {
    return (
        <div className = "hero-container">
            <ParticleBackground />
            <div className = "Title-name">Gyansudha English School</div>
            <div className = "Text-animation"><span> </span></div>
         
        </div>
    )
}

export default HeroSection; 

import React from 'react'
import { Button } from '../Button/Button'
import "./heroSection.css"
// import"../App.css"



function HeroSection() {
    return (
        <div>
            <div className="hero-container">
                <img src="/images/image-1.jpg" alt="" />
                <h1>Adventure Awaits</h1>
                <p>What are you waiting for?</p>
                <div className="hero-btns">
                    <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
                        Get Started
                    </Button>
                    <Button className="btns" buttonSize="btn--large">
                        Watch Trailer <i className="fas fa-video"></i>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection

import React from 'react'
import './aboutMe.css'
import silly from '../../images/silly2.png'


function AboutMe() {
    return (
        <div className='about__container' id='about-me'>
            <div>
                <img src={silly} alt='silly me' />
            </div>
            <div class="about__text">
                <h1>
                    About Me
                </h1>
                <p>
                    Add text here that explains why you are more awesome than walter -- not really tho. 
                </p>
            </div>
        </div>
    )
}

export default AboutMe

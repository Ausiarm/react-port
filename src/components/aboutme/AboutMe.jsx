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
                    A full stack developer in the making! 
                </p>
                <p>
                    What a long, strange trip it's been! And to think it has only just started. I began my journey into tech after graduating The George Mason University with and honors degree in Biology. Quickly after realizing that being a doctor was, in fact, not at all what I wanted from life I bounced around constantly being drawn to the freedom and possibilities that come with a career in Software Development. After trying on my own I realized the best way to bring this dream into reality would be to sign up for a proper course to -- learn how to code -- as they say. I'm eager to continue this journey and hope to collaborate with any and all who feel I can be an asset to their team!
                </p>
                <p>
                    Outside of technology I have a deep love for health and well-being, having gone through some rather serious surgical procedures in my life I know the value of vitality. In addition to this I can cook and bake pretty much any recipe that comes my way and am always down for pretty much any physical activity or sport under the sun! 
                </p>
            </div>
        </div>
    )
}

export default AboutMe

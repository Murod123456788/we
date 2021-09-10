import React, {useEffect, useState} from 'react'
import Reveal from 'react-reveal/Reveal'
import {Link} from 'react-router-dom'
import TelegramIcon from '@material-ui/icons/Telegram';
import GitHubIcon from '@material-ui/icons/GitHub';

 const AboutInfo = () => {

    return (

        <div className="aboutInfo1">
            <>
                    <div className="side2">
                        <img className="images" src="./image/own.jpg" alt="my image"/>
                    </div>
                    <div className="side1">
                      <Reveal effect="fadeInUp" duration="1250">
                        <h1 className="title">Hi, I'm Murodjon</h1>
                        <p className="description"> I'm 22 y.o I live in Tashkent. Welcome to my website.I study NNU.. </p>
                      </Reveal>
                        <div className="buttons">
                            <Link className="linkBtn" to="/about-me">
                                About me
                            </Link>
                            <Link className="linkBtn" to="/portfolio">
                                Portfolio
                            </Link>
                        </div>
                        <div className="socialNet">
                            <a className="links" href="#" target="_blank">
                                <TelegramIcon className="nets"/>
                            </a>
                            <a className="links" href="https://github.com/Murod123456788" target="_blank">
                                <GitHubIcon className="nets"/>
                            </a>
                        </div>
                    </div>
               </>
            </div>        
    )
}

export default AboutInfo
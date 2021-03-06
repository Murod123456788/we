import React from 'react';
import NavSec  from '../home/NavSec';
import Pageinfo from './Pageinfo';
import Main from './Main'
import Reveal from 'react-reveal/Reveal'
import Footer from '../footer/Footer'

const About = () => {
    return (
        <>
            <Reveal effect="animNav" duration="750">
                <NavSec/>
            </Reveal>
            <Reveal effect="fadeInUp" duration="1250"> 
                <Pageinfo/>
            </Reveal>
            <Main/>
            <Footer/>
        </>
    )
}

export default About;
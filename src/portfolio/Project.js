import React, {useState, useEffect} from 'react';
import {Col, Container, Row} from 'reactstrap'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkIcon from '@material-ui/icons/Link';



const Project = () => {



    





    return (

        <>
            <Container>
                <Row>
                        <Col md="12">
                            <div className="projectCard">
                                <img className="projectImage" src="./image/online shop.png" alt="portfolio image"/>
                                <div className="projectInfo">
                                    <div className="projectAbout">
                                        <h3 className="projectName">Online Shop</h3>
                                        <p className="projectPara">I used from HTML , CSS and JS</p>
                                    </div>
                                    <div className="projectButtons">
                                        <a href="" target="_blank" className="nuttons">
                                            Sourse <GitHubIcon/>
                                        </a>
                                        <a href="" target="_blank" className="nuttons">
                                            Netlify  <LinkIcon/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                 
                </Row>
                <Row>
                    
                        <Col md="12">
                            <div className="projectCard">
                                <img className="projectImage" src="./image/screen.png" alt="portfolio image"/>
                                <div className="projectInfo">
                                    <div className="projectAbout">
                                        <h3 className="projectName">My first portfolio</h3>
                                        <p className="projectPara">I used from js, HTML & CSS.</p>
                                    </div>
                                    <div className="projectButtons">
                                        <a href="" target="_blank" className="nuttons">
                                            Sourse <GitHubIcon/>
                                        </a>
                                        <a href="" target="_blank" className="nuttons">
                                            Netlify  <LinkIcon/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                 
                </Row>
            </Container>
        </>
    )
}

export default Project;
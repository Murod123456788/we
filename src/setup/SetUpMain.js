import React, {useEffect, useState}  from 'react';

import { Container, Row, Col } from 'reactstrap';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';



const SetUpMain = () => {


    




    return (
        <div className="setupMain">
            
                <div className="setupImage">
                    <img src="./image/comp.jpg" alt="Setup"/>
                </div>
           
            <Container>
                <Row>
                    <Col md="8">
                        <div className="mySetup">
                            <span className="laptopSpecs">
                                <ul>
                                    <a href="https://www.dns-shop.ru/product/c3c7a53e56fd3120/156-noutbuk-lenovo-b590/characteristics/" alt="Lenovo B950">
                                        <h2>Lenovo B590</h2><ArrowUpwardIcon/>
                                    </a>
                                    <li>
                                        Intel(R), Pentenium(R)
                                    </li>
                                    <li>
                                       6GB RAM
                                    </li>
                                    <li>
                                        System Type 64-bit
                                    </li>
                                    <li>
                                        Display resolution (1366 x 768)
                                    </li>
                                </ul>
                            </span>
                            <span className="keyboardSpecs">
                                <ul>
                                    <h2>Keyboard & Mouse</h2>
                                    <li>
                                        Laptop's keyboard
                                    </li>
                                    <li>
                                        JeDEL - Optical Mouse
                                    </li>
                                </ul>
                            </span>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}


export default SetUpMain;
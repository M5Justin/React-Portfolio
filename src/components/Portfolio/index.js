import React, { useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";


const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o']}
                        idx={15}
                    />
                </h1>
                <p className='projects'>
                    <a href='https://drive.google.com/file/d/1bYoZviT01I9gfUlwOdz8LybGyYXEVzf-/view'>E-Commerce Backend</a>
                    <a href='https://salty-lake-85504.herokuapp.com/'>Credit Card Processing</a>
                    <a href='https://stormy-tundra-00611.herokuapp.com/'>Pet Social App</a>
                    <a href='https://radiant-beyond-07014.herokuapp.com/'>Notetaker</a>
                    <a href='https://drive.google.com/file/d/16K-d_YVVokVLZkVBqR9gDg9t6at3JXfF/view'>Team Profile Generator</a>
                    <a href='https://github.com/M5Justin/React-Portfolio'>React Portfolio</a>
                </p>

            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Portfolio;
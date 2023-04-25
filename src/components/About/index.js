import { useEffect, useState } from 'react'
import {
    faCss3Alt,
    faGithub,
    faHtml5,
    faJsSquare,
    faNodeJs,
    faReact,
  } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
            <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        Highly motivated and detail-oriented web developer with a strong foundation in JavaScript and a passion for creating engaging and dynamic web applications.
                    </p>
                    <p>
                        Skilled in front-end development, including HTML5, CSS3, and jQuery, as well as back-end development using Node.js, MySQL, and MongoDB.
                    </p>
                    <p>
                        Proficient in using popular web development framework React.js.
                    </p>
                    <p>
                        Committed to staying up-to-date with the latest technologies and best practices in the industry.
                    </p>


                </div>

                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faNodeJs} color="#DD0031" />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faCss3Alt} color="#28A4D9" />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faGithub} color="#EC4D28" />
                        </div>
                    </div>
                </div>
            </div>
                <Loader type="pacman" />
            </>

            )
    }


            export default About
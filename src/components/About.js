import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faCode, faMobileAlt } from '@fortawesome/free-solid-svg-icons'


export default class About extends Component {
    render() {
        return (
            <div className='about'>
                <div className='about-header'>
                    <h1>&lt;/&gt;</h1>
                </div>
                <div className='about-background'>
                    <div className="about-text">
                        <h1>Hi, I'm Tanner. Nice to meet you.</h1>
                        <p>I am a husband and father of three wonderful boys. My time not coding is spent with them. Last year I wanted to better my life and the life for my family, so I decided to pursue a career in Web Development. With hard work, determination, and self motivation, I am working to make that dream come true. I love coding, coming up with new ideas, and new websites to make. </p>
                    </div>
                    <div className="about-container">
                        <div className="about-column">
                            <div className="about-icon">
                                <FontAwesomeIcon icon={faPencilAlt} size='2x' />
                            </div>
                            <div>
                                <h1>Designer</h1>
                            </div>
                            <div>
                                <p>I value simple content structure, clean desgin patterns, and thoughtful interactions.</p>
                            </div>
                            <div>
                                <div className="about-blue-text"><p>Things I enjoy designing:</p></div>
                                <div><p>UX, UI, Mobile, Apps</p></div>
                            </div>
                        </div>
                        <div className="about-column">
                            <div className="about-icon">
                                <FontAwesomeIcon icon={faCode} size='2x' />
                            </div>
                            <div>
                                <h1>Front-End Developer</h1>
                            </div>
                            <div>
                                <p>I like to code things from scratch, and enjoy bring ideas to life in the browser.</p>
                            </div>
                            <div>
                                <div className="about-blue-text"><p>Languages I speak:</p></div>
                                <div><p>HTML, CSS, Javascript, Sass, React </p></div>
                            </div>
                        </div>
                        <div className="about-column">
                            <div className="about-icon">
                                <FontAwesomeIcon icon={faMobileAlt} size='2x' />
                            </div>
                            <div>
                                <h1>App Developer</h1>
                            </div>
                            <div>
                                <p>Recently published my first App on the Play Store, I love taking on new challenges</p>
                            </div>
                            <div>
                                <div className="about-blue-text"><p>Language I speak:</p></div>
                                <div><p>React Native</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

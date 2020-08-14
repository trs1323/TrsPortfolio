import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faGithub, } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import TrsBW from '../img/logoBW.png'

export default class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <img src={TrsBW} alt='TRS' />
                <p>"Strength before weakness. Journey before destination."<br />- Brandon Sanderson  </p>
                <div className="footer-links-container">
                    <div className="footer-links">
                        <a href="https://twitter.com/trs1323" target='_blank' rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTwitter} size='2x' />
                        </a>
                    </div>
                    <div className="footer-links">
                        <a href="https://www.linkedin.com/in/tanner-shilson-290357141/" target='_blank' rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} size='2x' />
                        </a>
                    </div>
                    <div className="footer-links">
                        <a href="https://github.com/trs1323" target='_blank' rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} size='2x' />
                        </a>
                    </div>
                    <div className="footer-links">
                        <a href="mailto:tanner.shilson@gmail.com" target='_blank' rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faEnvelope} size='2x' />
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

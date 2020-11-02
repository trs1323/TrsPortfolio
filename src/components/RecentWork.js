import React, { Component } from 'react'

import Project1 from '../img/projects/project1.png';
import Project2 from '../img/projects/project2.png';
import Project3 from '../img/projects/project3.png';
import Project4 from '../img/projects/project4.png';
import Project5 from '../img/projects/project5.png';
import Project8 from '../img/projects/project8.png';

export default class RecentWork extends Component {
    render() {
        return (
            <div className='recent-work'>
                <div className='recent-work-title'>
                    <h1>My Recent work</h1>
                    <p>Here are a few projects I've worked on recently. Want to see more? <a href='mailto:tanner.shilson@gmail.com'>Email me.</a></p>
                </div>
                <div className='recent-work-project-container'>
                    <div className='recent-work-project'>
                        <img src={Project8} alt='project8' />
                        <div className='recent-work-project-info'>
                            <p>Made with Official API of Smite, look up you or your friends match history, information about the game, and more.</p>
                            <a href="https://trs1323.github.io/smite_react/" target="_blank" rel="noopener noreferrer">Visit Website </a>
                        </div>
                    </div>
                    <div className='recent-work-project'>
                        <img src={Project1} alt='project1' />
                        <div className='recent-work-project-info'>
                            <p>Pong clone, made from scratch with Javascript.</p>
                            <a href="https://trs1323.github.io/pong/" target="_blank" rel="noopener noreferrer">Visit Website </a>
                        </div>
                    </div>
                    <div className='recent-work-project'>
                        <img src={Project2} alt='project2' />
                        <div className='recent-work-project-info'>
                            <p>Tetris clone, made from scratch with Javascript. Set your high score and try to beat it.</p>
                            <a href="https://trs1323.github.io/tetris/" target="_blank" rel="noopener noreferrer">Visit Website </a>
                        </div>
                    </div>
                    <div className='recent-work-project'>
                        <img src={Project3} alt='project3' />
                        <div className='recent-work-project-info'>
                            <p>Mock up Photography site, made with CSS.</p>
                            <a href="https://trs1323.github.io/mockphoto/" target="_blank" rel="noopener noreferrer">Visit Website </a>
                        </div>
                    </div>
                    <div className='recent-work-project'>
                        <img src={Project4} alt='project4' />
                        <div className='recent-work-project-info'>
                            <p>Mock up merchandise site. Build with React.</p>
                            <a href="https://trs1323.github.io/merch-site/" target="_blank" rel="noopener noreferrer">Visit Website </a>
                        </div>
                    </div>
                    <div className='recent-work-project'>
                        <img src={Project5} alt='project5' />
                        <div className='recent-work-project-info'>
                            <p>Mock up home page of a Saving app. Build with React.</p>
                            <a href="https://trs1323.github.io/saving-app" target="_blank" rel="noopener noreferrer">Visit Website </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

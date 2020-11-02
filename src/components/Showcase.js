import React, { Component } from 'react';

import Avatar from '../img/ava.png'

export default class Showcase extends Component {
    render() {
        return (
            <div className="showcase">
                <div className='showcase-head-text'>
                    <p>Designer, Front-end Developer, &amp; Team player</p>
                </div>
                <div className='showcase-sub-text'>
                    <p>I design and code simple, clean things, and I love it.</p>
                </div>
                <div className="showcase-img-container">
                    <img src={Avatar} className="showcase-img" alt='avatar' />
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react'

import Trs from '../img/logo512.png'

export default class Header extends Component {
    render() {
        return (
            <div className='header'>
                <div className='header-img'>
                    <img src={Trs} alt='Trs' />
                </div>
                <div >
                    <p className="header-button">Contact Me</p>
                </div>
            </div>
        )
    }
}

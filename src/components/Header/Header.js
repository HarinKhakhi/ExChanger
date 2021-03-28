import React from 'react'

import './Header.css'

class Header extends React.Component{
    constructor(){
        super()
        this.handleClick=this.handleClick.bind(this)
    }
    handleClick(){
        document.documentElement.style.setProperty('--header-height', '40%');
        document.documentElement.style.setProperty('--footer-height', '60%');
    }
    render(){
        return(
            <div
            className="header"
            onClick={this.handleClick}
            >
                <a>ExChanger</a>
            </div>
        )
    }
}

export default Header
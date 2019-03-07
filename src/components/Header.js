import React from 'react';
import { logo } from '../static/images';

class Header extends React.Component {
    render() {
        return(
            <div> 
                <img src={logo}></img>
            </div>
        )
    }
}

export default Header;
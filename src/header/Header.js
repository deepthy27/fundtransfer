import React,{Component} from 'react';
import header from './header.css';
import {Link} from 'react-router-dom';
class Header extends Component{
    render(){
        return(
            <div>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
             <img className="im" src='https://1000logos.net/wp-content/uploads/2017/02/ING-Logo-Meaning-and-history.jpg'/>
            <Link to="/login"><img className="out" src='http://clipart-library.com/image_gallery/247473.png'/></Link>
             <select className="drp">
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
                <option value="French">French</option>
                <option value="German">German</option>
             </select>
            </div>
           
        )
    }
}
export default Header;
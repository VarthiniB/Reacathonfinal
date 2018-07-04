import React, {Component} from 'react';
import axios from 'axios'

export default class Header extends Component {


    handleClick () {
      }

    render(){
        return (
            <header className="main-header">
                <a href="#" className="logo">
                   
                    <span className="logo-lg"><b> Job Portal</b></span>
                </a>
                <nav className="navbar navbar-static-top">
                    <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
                        <span className="sr-only">Toggle navigation</span>
                    </a>

                {/*  <a href="#" className="logo">
                   
                     <span className="logo-lg"> Welcome {this.props.name}</span>
                    
        </a> */}
                   
                    <div className="navbar-custom-menu">
                    
                        <ul className="nav navbar-nav">
                            <li className="dropdown messages-menu">
                            
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                    <i className="" onClick={this.handleClick}>LOG OUT</i>
                                   
                                </a>
                               
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}
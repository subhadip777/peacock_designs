import React from 'react';
import 'reactstrap';
import { Nav, NavbarBrand, Navbar, NavItem, Collapse, NavbarToggler } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isnavopen:false
        }
        this.togglenav=this.togglenav.bind(this);
    }

    togglenav(){
        this.setState({
            isnavopen:!this.state.isnavopen
        })
    }

    render(){
    return(
        <Navbar expand="lg" className=" sticky-top bg-navbar">
            <div className="container-fluid">
                <Link to="/home" className="nav-link text-decoration-none text-white">
                     <NavbarBrand>
                    <img src='assets/logo/logo.svg' height='80px' width='80px' alt='peacock '/>
                    <span>
                        <strong>
                            Peacock Design
                        </strong>
                    </span>
                </NavbarBrand>
                </Link>
               
                <NavbarToggler onClick={this.togglenav}/>
               <Collapse navbar isOpen={this.state.isnavopen} className="justify-content-auto">
               <Nav navbar >
                   
                        <NavItem><NavLink className="nav-link" to="/designs"><kaka id="navtext">Designs</kaka></NavLink></NavItem>
                        <NavItem><NavLink className="nav-link" to="/designs"><kaka id="navtext">Get Connected</kaka></NavLink></NavItem>
                        <NavItem><NavLink className="nav-link" to="/designs"><kaka id="navtext">Contact Us</kaka></NavLink></NavItem>                               
                         <NavItem><NavLink className="nav-link" to="/designs"><kaka id="navtext">About Us</kaka></NavLink></NavItem>            
                         <NavItem><NavLink className="nav-link ml-2% " to="/login"><pol className="text-white">Sign up</pol></NavLink></NavItem>

                   
                   
                  

               
                   
                </Nav>
               </Collapse>
               
               
               

            </div>
            
                

        

        </Navbar>
    )
    }

}
export default Header;

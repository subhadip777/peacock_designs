import React from 'react';
import Header from './Headercomponent';
import Home from './Homecomponent';
import '../Componentstyles/Main.css';
import Footer from './Footercomponent';
import Menu from './Menucomponent';
import { TEMPLATES }from '../shared/Templates'
import {Switch, Router, Route, Redirect} from 'react-router-dom';

function Main (){
    return(
        <React.Fragment>
            <Header/>
            <Switch>
                <Route path="/home" component={Home}/>
                <Route exact path="/designs" component={()=><Menu templates={TEMPLATES}/>}/>
                <Redirect to="/home"/>
                 
              
                <Menu templates={TEMPLATES}/>
            </Switch>
            <Footer/>
            
               

           
        
        </React.Fragment>
       
        

    )
}
export default Main;
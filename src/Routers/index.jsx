import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '../pages/Home';
import User from '../pages/UserPerson';
import Professional from '../pages/Professional';



export default function Routers() {
    
    return (
        
        <Switch>
            <Route path='/'> 
                <Home />
            </Route>
            <Route path='/user-person'> 
                <User />
            </Route>
            <Route path='/professional'> 
                <Professional />
            </Route>
        </Switch>
        
    );
}
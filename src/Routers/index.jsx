import {
    BrowserRouter as Router,
    Route,
    Routes
  } from "react-router-dom";
import Home from "../pages/Home";
import User from '../pages/UserPerson';
import Professional from "../pages/Professional";

   export default function Routers() {
    return(
        <Router>
            <Routes>
                <Route path="/"  element={<Home/>}/> 

                <Route path="/user-person" element={<User/>}/>

                <Route path="/professional" element={<Professional/>}/> 

            </Routes>
        </Router> 
    );
    
   }
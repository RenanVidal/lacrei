import React, {useState} from 'react';
import Home from '../pages/Home';
import User from '../pages/UserPerson';
import Professional from '../pages/Professional';

const Routers = () => {

    const [currentPage, setCurrentPage] = useState('Home');
    
    const handlePageChange = (pagName) => {
        setCurrentPage(pagName);
    }

    const showComponent = () => {
        switch (currentPage) {
            case 'Home':
                return <Home />;
            case 'User':
                return <User />;
            case 'Professional':
                return <Professional />
        }
    }
}


export default Routers;
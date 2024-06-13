import React from 'react'


function Navbar(props){

    function handleUserClick(e, page){
        // User clicked, stop the auto change
        
        props.current(page); 
        e.preventDefault();
        // e.preventDefault();
        };
    
    
    return(
        <nav>
            <div className="nav__logo">
                <a href="/">Book My Holidays</a>
            </div>
            <ul className="nav__links">
                <li><a className="link " href='/' onClick={(e) => handleUserClick(e ,'home')}>Home</a></li>  
                <li><a className="link " href='/' onClick={(e) => handleUserClick(e ,'flights')}>Flights</a></li>
                <li><a className="link " href='/' onClick={(e) => handleUserClick(e ,'hotels')}>Hotels</a></li>
                <li><a className="link " href='/' onClick={(e) => handleUserClick(e ,'buses')}>Buses</a></li>
                <li><a className="link " href='/' onClick={(e) => handleUserClick(e ,'holiday')}>Holiday Packages</a></li>
                <li><button className="btn btn-primary btn-lg">Sign In</button></li>
            </ul>
        </nav>
    );
}

export default Navbar
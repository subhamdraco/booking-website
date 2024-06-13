import React from 'react'
import BottomTracker from './BottomTracker';

function Home(props) {

    function handleUserClick(e, page){
        // User clicked, stop the auto change
        e.preventDefault();
        props.page(page); 
       
        // e.preventDefault();
        };
    
    return(
        <div className='home'>
            <div className="container_">
                    <div className="content-home">
                        <h1 className='text-white'>Your Gateway To Hassle-Free Travel Bookings</h1>
                        <p className='text-white'>At Book My Holidays, we believe every journey is an opportunity to
                            create unforgettable memories. Whether you're planning a relaxing
                            beach getaway, an adventurous mountain trek, or a cultural city
                            exploration, we've got you covered.
                        </p>
                        <div className="btns">
                            <div className="row">
                                <div className="col-lg-3 col-md-2 col-sm-12"><button className="read__more" onClick={(e) => handleUserClick(e ,'flights')}>
                                    <i class="ri-flight-takeoff-line"></i>  Flight</button></div>
                                <div className="col-lg-3 col-md-2 col-sm-12"><button className="read__more" onClick={(e) => handleUserClick(e ,'hotels')}>
                                    <i class="ri-hotel-line"></i>  Hotels</button></div>
                                <div className="col-lg-3 col-md-2 col-sm-12"><button className="read__more" onClick={(e) => handleUserClick(e ,'buses')}>
                                    <i class="ri-bus-line"></i>  Buses</button></div>
                                <div className="col-lg-3 col-md-2 col-sm-12"><button className="read__more" onClick={(e) => handleUserClick(e ,'holiday')}>
                                    <i class="ri-gift-line"></i>  Holidays</button></div>
                            </div>
                        </div>
                    </div>
                <BottomTracker cls='home'/>
            </div>
        </div>
    );
}

export default Home
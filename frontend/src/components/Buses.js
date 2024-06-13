import React from 'react'
import BottomTracker from './BottomTracker';

function Buses() {

    return(
        <div className='bus'>
            <div className="container_">
                <div className="container__left">
                    <div className="content">
                        <h1>DISCOVERING<br/>THE WORLD</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Ipsam ut dolores a cum eligendi iure quia omnis voluptatum
                            non quasi eum quos quis veniam ipsa, necessitatibus minima 
                            adipisci ea eveniet. Lorem, ipsum dolor sit amet consectetur
                            adipisicing elit.Minima dolores exercitationem 
                        </p>
                    </div>
                </div>

                <div className="container__right">
                    <form action="">
                        <h3>Book Your First Flight</h3>
                            <div className="form__group">
                                <label htmlFor="date">Destination</label>
                                <input 
                                type="text" 
                                name="destination" 
                                id="destination" 
                                placeholder='Enter Destination'
                                />
                            </div>
                            <div className="form__group">
                                <label htmlFor="date">Date</label>
                                <input 
                                type="date" 
                                name="date" 
                                id="date" 
                                placeholder='dd/mm/yy'
                                />
                            </div>
                        <button type='submit'>Book Your First Flight!</button>
                    </form>
                </div>
                <BottomTracker cls='buses'/>
            </div>
        </div>
    );
}

export default Buses
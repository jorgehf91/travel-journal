import React from 'react';
import Navbar from './components/Navbar';
import Destinations from './components/Destinations';
import dataDestinations from './data';

export default function App (){
    let listofDestinations = dataDestinations.map( (data) => {
            return <Destinations 
                key={data.id}
                data={data}
            />
        }

    );

    return (
        <div>
            <Navbar />
            <div className='destinations-list'>
                {listofDestinations}
            </div>
        </div>
        
    );
}
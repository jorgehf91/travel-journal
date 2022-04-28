import React from 'react';
import Navbar from './components/Navbar';
import Destinies from './components/Destinies';
import dataDestinies from './data';

export default function App (){
    let listofDestinies = dataDestinies.map( (data) => {
            return <Destinies 
                key={data.id}
                data={data}
            />
        }

    );

    return (
        <div>
            <Navbar />
            <div className='destinies-list'>
                {listofDestinies}
            </div>
        </div>
        
    );
}
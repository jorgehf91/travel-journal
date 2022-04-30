import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLocationDot} from '@fortawesome/free-solid-svg-icons'

export default function Destinations(props) {
    return (
      <div class='destinations'>
            <div className='destinations--img'>
                <img src={props.data.imageUrl} />
            </div>
            
            <div className='destinations--block'>
                <div className='destinations--location'>
                    <FontAwesomeIcon className='destinations--tag' icon={faLocationDot} />
                    <h2 className='destinations--country'> {props.data.location}</h2>
                    <a href={props.data.googleMapsUrl} target="_blank">View on Google Maps</a>
                </div>

                <div className='destinations--title'>
                    <h1>{props.data.title}</h1>
                </div>

                <div className='destinations--date'>
                    <h3 className='start-date'>{props.data.startDate} - </h3>
                    <h3 className='end-date'>{props.data.endDate}</h3>
                </div>

                <div className='destinations--info'>
                    <p>{props.data.description}</p>
                </div>   
            </div>
           

      </div>
    )
}
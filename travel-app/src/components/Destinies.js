import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLocationDot} from '@fortawesome/free-solid-svg-icons'

export default function Destinies(props) {
    return (
      <div class='destinies'>
            <div className='destinies--img'>
                <img src={props.data.imageUrl} />
            </div>
            
            <div className='destinies--block'>
                <div className='destinies--location'>
                    <FontAwesomeIcon className='destinies--tag' icon={faLocationDot} />
                    <h2 className='destinies--country'> {props.data.location}</h2>
                    <a href={props.data.googleMapsUrl} target="_blank">View on Google Maps</a>
                </div>

                <div className='destinies--title'>
                    <h1>{props.data.title}</h1>
                </div>

                <div className='destinies--date'>
                    <h3 className='start-date'>{props.data.startDate} - </h3>
                    <h3 className='end-date'>{props.data.endDate}</h3>
                </div>

                <div className='destinies--info'>
                    <p>{props.data.description}</p>
                </div>   
            </div>
           

      </div>
    )
}
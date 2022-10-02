import React from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faEarth } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
    return (
        <div class='navbar'>
            <FontAwesomeIcon class='navbar--earth' icon={faEarth}/>
            <h3>my travel journal.</h3>
        </div>
    );
}
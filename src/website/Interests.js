import React from 'react';

import './Interests.css';
import danceexam from './images/cards/danceexam.png';
import travel from './images/cards/travel.png';

const Interests = () => {

    return (
        <>
        <h1>Interests</h1>
        <h4>The Performing Arts</h4>
        <p>Having grown up taking ballet, tap, modern dance, piano, violin and speech & drama lessons, I have
            a passion for the performing arts.
            I spent many an hour honing my piano skills, competing in competitions, performing at concerts, including local 
            Young Musician concerts, ABRSM High Scorers Concerts, as well as those organised by my piano teacher. I also performed
            in various dance shows, musicals and took examinations in all of the aforementioned areas.
            
            <img className="dance" src={danceexam} alt="an early dance exam" />
        </p>
        <h4>Books</h4>
        <h4>Languages and travel</h4>
        <img className="travel" src={travel} alt="germanyregion" />
        <h4>Photography</h4>
        <h4>Mental Health and wellbeing</h4>
        <h4></h4>
        </>
    )
}

export default Interests;
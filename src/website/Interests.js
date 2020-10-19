import React from 'react';
import Carousel from './Carousel';
import CarouselTravel from './CarouselTravel';

import './Interests.css';
import danceexam from './images/cards/danceexam.png';
import travel from './images/cards/travel.png';
import deer from './images/cards/deer.png';
import node from './images/cards/nodegirlslondon.png';
import java from './images/cards/java.png';
import outofafrica from './images/cards/outofafrica.png';
import hideouskinky from './images/cards/hideouskinky.png';
import middleton from './images/cards/atmiddleton.png';
import blackswan from './images/cards/blackswan.png';
import piano from './images/cards/piano.png';
import hollybourne from './images/cards/hollybourne.png';
import physical from './images/cards/physical.png';


const Interests = () => {

    return (
        <>
        <div className="body">
        <h1>Interests</h1>
        <h4>The Performing Arts</h4>
        <p>Having grown up taking ballet, tap, modern dance, piano, violin and speech & drama lessons, I have
            a passion for the performing arts.
            I spent many an hour honing my piano skills, competing in competitions, performing at concerts, including local 
            Young Musician concerts, ABRSM High Scorers Concerts, as well as those organised by my piano teacher. I also performed
            in various dance shows, musicals and took examinations in all of the aforementioned areas.
        </p> 
            <div className="performingarts" >
            <img className="dance" src={danceexam} alt="an early dance exam" />
            <br />
            <img className="piano" src={piano} alt="piano" />
            <br />
            <img className="physical" src={physical} alt="physicaltheatre" />
            </div>
        <h4>Books</h4>
        <img className="hollybourne" src={hollybourne} alt="hollybourne" />
        <h4>Languages and travel</h4>
        <img className="travel" src={travel} alt="germanyregion" />
        <CarouselTravel />
        <h4>Photography</h4>
        <img className="deer" src={deer} alt="deer" />
        <h4>Mental Health and wellbeing</h4>
        <h4>Tech</h4>
        <img className="node" src={node} alt="nodegirlslondon" />
        <br />
        <img className="java" src={java} alt="codebarandroiddevelopment" />
        <h4>Film</h4>
        <Carousel/>
        
        </div>
        </>
    )
}

export default Interests;
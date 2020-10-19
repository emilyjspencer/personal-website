import React from 'react';
import Carousel from './Carousel';
import CarouselTravel from './CarouselTravel';

import './Interests.css';
import danceexam from './images/cards/danceexam.png';
import travel from './images/cards/travel.png';
import deer from './images/cards/deer.png';
import node from './images/cards/nodegirlslondon.png';
import java from './images/cards/java.png';
import piano from './images/cards/piano.png';
import hollybourne from './images/cards/hollybourne.png';
import physical from './images/cards/physical.png';
import flowers7 from './images/cards/flowers7.png';
import flowers7grey from './images/cards/flowers7grey.png';


const Interests = () => {

    return (
        <>
        <div className="pink">
        <div className="divider" >
            <img className="flowers7" src={flowers7grey} ></img>
            <img className="flowers7" src={flowers7grey} ></img>
            <img className="flowers7" src={flowers7grey} ></img>
        </div>
        <h1>Interests</h1>
        <h4>The Performing Arts</h4>
        <p>Having grown up taking ballet, tap, modern dance, piano, violin and speech & drama lessons, I have
            a passion for the performing arts.
            I spent many an hour honing my piano skills, competing in competitions, performing at concerts, including local 
            Young Musician concerts, ABRSM High Scorers Concerts, as well as those organised by my piano teacher. I also performed
            in various dance shows, musicals and took examinations in all of the aforementioned areas.
        </p> 
        </div>
            <div className="performingarts" >
            <img className="dance" src={danceexam} alt="an early dance exam" />
            <br />
            <img className="piano" src={piano} alt="piano" />
            <br />
            <img className="physical" src={physical} alt="physicaltheatre" />
            </div>
        <h4>Books</h4>
        <div className="pink2" >
        <img className="hollybourne" src={hollybourne} alt="hollybourne" />
        </div>
        <h4>Languages and travel</h4>
        <div className="pink3" >
        <img className="travel" src={travel} alt="germanyregion" />
        </div>
        <div className="pink4" >
        <CarouselTravel />
        </div>
        <div className="pink6">
        <h4>Photography</h4>
        </div>
        <img className="deer" src={deer} alt="deer" />
        <h4>Mental Health and wellbeing</h4>
        <div className="pink6">
        <h4>Tech</h4>
        </div>
        <img className="node" src={node} alt="nodegirlslondon" />
        <br />
        <img className="java" src={java} alt="codebarandroiddevelopment" />
        <div className="pink6" >
        <h4>Film</h4>
        </div>
        <div className="pink5">
        <Carousel/>
        </div>
    
        
       
        </>
    )
}

export default Interests;
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
import twitter from './images/cards/twitter.png';
import google from './images/cards/google.png';
import railsgirls from './images/cards/railsgirls.png';
import athena from './images/cards/athena.png';


const Interests = () => {

    return (
        <>
       
       <br />
        <h1>Interests</h1>
        <br />
        <br />
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
            <hr></hr>
            <h4>Books</h4>
            <br />
            <p>My love of reading is what led me to my previous role. While I'll read almost anything, I particularly
enjoy reading autobiographies and personal development books. I also have read an impressive
            number of young adult fiction books</p>
        <div className="bookscontainer">
    
        <img className="hollybourne" src={hollybourne} alt="hollybourne" />
        <div className="books">
        <p><strong>Autobiographies and memoirs</strong></p>
        <ul>
            <li>My Life So Far - Jane Fonda</li>
            <li>When Breath Becomes Air - Paul Kalanithi</li>
                <li>A Lotus Grows In The Mud - Goldie Hawn</li>
                <li>Long Walk To Freedom - Nelson Mandela</li>
                 <li>Home - Julie Andrews</li>   
                 <li>How To Be A Woman - Caitlin Moran</li>
                 <li>Out Of Africa - Karen Blixen</li>
                 <li>Hope In A Ballet Shoe - Michaela DePrince</li>
                 <li>Eat, Pray, Love - Elizabeth Gilbert</li>
                 <li>The Girl From Aleppo - Nujeen Mustafa</li>
                 <li>Lean In - Sheryl Sandberg</li>
      
        </ul>
        <br />
        </div>
        <div className="books2">
        <p><strong>Personal development books</strong></p>
        <ul>
            <li>Presence - Amy Cuddy</li>
            <li>Big Magic - Elizabeth Gilbert</li>
            <li>The Seven Habits Of Highly Effective People - Stephen Covey</li>
            <li>Mindset - Carol Dweck</li>
            <li>A Monk's Guide To Happines - Gelong Thubten</li>  
        </ul>
        <br />
        <p><strong>Young adult fiction</strong></p>
        <ul>
            <li>Turtles All The Way Down - John Green</li>
            <li>Boy 87 - Ele Fountain</li>
            <li>Lies We TelL Ourselves - Robin Talley</li>
            <li>Holding Up The University - Jennifer Jiven</li>
            </ul>
        </div>
        </div>
        <hr></hr>
        <h4>Languages and travel</h4>
        <div className="languages">
            <p>As a Modern Languages graduate, I've lived in both France and Germany, having spent six months in Vitre, Brittany <br />
             and five months in Heidelberg, Germany</p>
             <p>Swipe or click 'next' to see some of the other places I've been</p>
        <div className="pink3" >

        <CarouselTravel />
        </div>
        </div>
        <h4>Photography</h4>
        <img className="deer" src={deer} alt="deer" />
        <h4>Tech</h4>
        <p>I try to attend tech meetups when I can</p>
        <p>Here are a few I've been to</p>
        <div className="tech">
        <img className="node" src={node} alt="nodegirlslondon" />
        <br />
        <img className="java" src={java} alt="codebarandroiddevelopment" />
        <img className="twitter" src={twitter} alt="twitter" />
        </div>
        <div className="tech2">
        <img className="google" src={google} alt="googlecodebar" />
        <img className="athena" src={athena} alt="athenahack" />
        <img className="railsgirls" src={railsgirls} alt="railsgirlslondon" />
        </div>
        <h4>Film</h4>
        <div className="film">
            <p>I'm a huge fan of films. Here are a few of my favourites</p>
        <Carousel/>
        </div>
    
        
       
        </>
    )
}

export default Interests;
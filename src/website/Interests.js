import React from 'react';
import Carousel from './Carousel';
import CarouselTravel from './CarouselTravel';
import Header2 from './Header2';
import { Animated } from "react-animated-css";

import './Header2.css';
import './Interests.css';
import camera from './images/cards/camera.png';
import danceexam from './images/cards/danceexam.png';
import deer from './images/cards/lake.jpg';
import node from './images/cards/nodegirlslondon.png';
import java from './images/cards/java.png';
import piano from './images/cards/piano.png';
import hollybourne from './images/cards/hollybourne.png';
import physical from './images/cards/physical.png';
import twitter from './images/cards/twitter.png';
import google from './images/cards/google.png';
import railsgirls from './images/cards/railsgirls.png';
import athena from './images/cards/athena.png';



const Interests = () => {


    return (

        <>
    <Header2  />
       <br />
        <br />
        <br />
        <h4>The Performing Arts</h4>
       
        <p>Having grown up taking ballet, tap, modern dance, piano, violin and speech & drama lessons, I have
            a passion for the performing arts.
            I spent many an hour honing my piano skills, competing in competitions, performing at concerts, including local 
            Young Musician concerts, ABRSM High Scorers Concerts, as well as those organised by my piano teacher. I also performed
            in various dance shows, musicals and took examinations in all of the aforementioned areas.
        </p> 
        <div className="theatre">
            <div className="performingarts" >
            <img className="dance" src={danceexam} alt="an early dance exam" />
            <br />
            <img className="piano" src={piano} alt="piano" />
            <br />
            <img className="physical" src={physical} alt="physicaltheatre" />
            </div>
            </div>
            <hr></hr>
            <h4>Books</h4>
            <br />
            <p>My love of reading is what led me to my previous role. While I'll read almost anything, I particularly
enjoy autobiographies and personal development books. I have also read a rather large
            number of young adult fiction books and will always have deep appreciation for children's books</p>
        <div className="bookscontainer">
       <br />
       <br />
       <br />
        <img className="hollybourne" src={hollybourne} alt="hollybourne" />
        <div className="books">
            <br />
            <br />
        <p><strong>Autobiographies and memoirs</strong></p>
        <ul>
            <li><strong>My Life So Far</strong> - Jane Fonda</li>
            <li><strong>When Breath Becomes Air</strong>- Paul Kalanithi</li>
                <li><strong>A Lotus Grows In The Mud</strong> - Goldie Hawn</li>
                <li><strong>Long Walk To Freedom </strong>- Nelson Mandela</li>
                 <li><strong>Home</strong>- Julie Andrews</li>   
                 <li><strong>How To Be A Woman</strong> - Caitlin Moran</li>
                 <li><strong>Out Of Africa</strong> - Karen Blixen</li>
                 <li><strong>Hope In A Ballet Shoe</strong> - Michaela DePrince</li>
                 <li><strong>Eat, Pray, Love </strong>- Elizabeth Gilbert</li>
                 <li><strong>The Girl From Aleppo</strong> - Nujeen Mustafa</li>
                 <li><strong>Lean In</strong> - Sheryl Sandberg</li>
      
        </ul>
        <p><strong>Mixed non-fiction</strong></p>
        <ul>
            <li><strong>Year of Wonder</strong> - Clemency Burton Hill</li>
            <li><strong>Art Nouveau </strong>- Camilla de la Bédoyère</li>
            <li><strong>The Art of Acting </strong>- Stella Adler</li>
            <li><strong>Annie Leibovitz At Work</strong> - Annie Leibovitz</li>
            <li><strong>Spark!</strong> - Dr John R Ratey</li>
        </ul>
        <br />
        </div>
        <div className="books2">
            <br />
            <br />
        <p><strong>Personal development books</strong></p>
        <ul>
            <li><strong>Presence </strong>- Amy Cuddy</li>
            <li><strong>#Girlboss</strong> - Sophia Amoruso</li>
            <li><strong>Big Magic </strong>- Elizabeth Gilbert</li>
            <li><strong>The Seven Habits Of Highly Effective People</strong> - Stephen Covey</li>
            <li><strong>Mindset </strong>- Carol Dweck</li>
            <li><strong>A Monk's Guide To Happines</strong> - Gelong Thubten</li>  
        </ul>
        <br />
        <p><strong>Young adult fiction</strong></p>
        <ul>
            <li><strong>Turtles All The Way Down</strong> - John Green</li>
            <li><strong>Boy 87 </strong>- Ele Fountain</li>
            <li><strong>Lies We Tell Ourselves </strong>- Robin Talley</li>
            <li><strong>Holding Up The Universe</strong> - Jennifer Niven</li>
            </ul>
        <p><strong>Children's Books</strong></p>
        <ul>
            <li><strong>The Enchanted Wood & The Magic Faraway Tree</strong> - Enid Blyton</li>
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
        <hr></hr>
        <h4 align="center">Photography</h4>
        <div className="photos" >
        <br />
        <br />
        <img className="snap" src={camera} />
        <br />
        <img className="deer" src={deer} alt="deer" />
        <br />
        <img className="snap" src={camera} />
      
        </div>
        <div>
        <a href="https://www.flickr.com/photos/51541259@N03/">See my very amateur shots on my Flicker account</a>
       <br />
       <br />
       <br />
        </div>
        <br />
        <br />
        <hr/>
        <h4>Tech</h4>
        <p>I try to attend tech meetups when I can</p>
        <p>Below are a few I've attended</p>
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
        <hr></hr>
       
        <h4>Film</h4>
        <div className="film">
            <p>I'm a huge fan of films. Here are a few of my favourites</p>
        <Carousel/>
        </div>
    
        
       
        </>
    )
}

export default Interests;
import React from 'react';
import { Card, CardContent, Avatar, Typography, Button, Grid, CardMedia, CardActions } from '@material-ui/core';
import quiz1 from './quiz1.png';



const Cards = () => {


    return (
        <Grid container spacing={3} justify="center">
            <Grid item component={Card} xs={12} md={3} className="Alohomora2.0">
                 <CardContent className="card" img src={quiz1} >
                 <CardMedia className="images" image src={quiz1} />
                     <Typography color="textSecondary" gutterBottom>Alohomora 2.0</Typography>
                     <Typography variant="h5"></Typography>
                     <Typography color="textSecondary"></Typography>
                     <Typography variant="body2">An application for Harry Potter fans. Complete with chatroom, quiz, characters and spells pages</Typography>
                     <Typography variant="body2">Try it for yourself: <a href="https://5f88db6e46264f4cec7743c1--thirsty-johnson-2e67ef.netlify.app">Alohomora 2.0 on Netlify</a></Typography>
                     <Typography variant="body2">See the code: <a href="https://github.com/emilyjspencer/Alohomora--2.0">Alohomora 2.0 on GitHub</a></Typography>
                     <CardActions>
                     <Button img src={quiz1} href={quiz1} size="small" color="primary">
                     Potter </Button> </CardActions>
                     </CardContent> 
              </Grid>
              <Grid item component={Card} xs={12} md={3} className="Acebook">
                 <CardContent className="card">
                     <Typography color="textSecondary" gutterBottom>AceBook</Typography>
                     <Typography variant="h5"></Typography>
                     <Typography color="textSecondary"></Typography>
                     <Typography variant="body2">A Rails Application</Typography>
                     <Typography variant="body2">See the code: <a href="https://github.com/emilyjspencer/acebook-inSANE">Acebook on GitHub</a></Typography>
                     </CardContent> 
              </Grid>
              <Grid item component={Card} xs={12} md={3} className="FinBot" >
                  <Typography color="textSecondary" gutterBottom>FinBot</Typography>
                  <Typography variant="h5"></Typography>
                  <Typography color="textSecondary"></Typography>
                  <Typography variant="body2">A chatbot</Typography>
                  <Typography variant="body2">See the code: <a href="https://github.com/nikimanoledaki/finbot-api">Finbot on GitHub API</a></Typography>
                  <Typography variant="body2">See the code: <a href="https://github.com/nikimanoledaki/finbot">Finbot on GitHub: Frontend</a></Typography>
              </Grid>
              <Grid item component={Card} xs={12} md={3} className="Global Reads">
                  <Typography color="textSecondary" gutterBottom>Global Reads</Typography>
                  <Typography variant="h5"></Typography>
                  <Typography color="textSecondary"></Typography>
                  <Typography variant="body2">A Rails application to support the Global Reading Project - a reading initiative at UHS Wimbledon</Typography>
                  <Typography variant="body2">See the code:<a href="https://github.com/emilyjspencer/Global-Reads">Global Reads on GitHub</a></Typography>
              </Grid>
              <Grid item component={Card} xs={12} md={3} className="Chitter">
                 <CardContent>
                     <Typography color="textSecondary" gutterBottom>Chitter</Typography>
                     <Typography variant="h5"></Typography>
                     <Typography variant="body2">A Sinatra/postgresql application designed to mimic a simple version of the popular microblogging site - Twitter</Typography>
                     <Typography variant="body2">See the code:<a href="https://github.com/emilyjspencer/chitter-challenge">Chitter on GitHub</a></Typography>
                     </CardContent> 
              </Grid>
              <Grid item component={Card} xs={12} md={3} className="Rock, Paper, Scissors">
                 <CardContent>
                     <Typography color="textSecondary" gutterBottom>Rock Paper Scissors</Typography>
                     <Typography variant="h5"></Typography>
                     <Typography color="textSecondary"></Typography>
                     <Typography variant="body2">A Sinatra-based application. Play Rock, Paper Scissors against the computer in the browser</Typography>
                     <Typography variant="body2">See the code<a href="https://github.com/emilyjspencer/rps-challenge">Rock, Paper, Scissors on GitHub</a></Typography>
                     </CardContent> 
              </Grid>
              <Grid item component={Card} xs={12} md={3} className="Meditate">
                 <CardContent>
                     <Typography color="textSecondary" gutterBottom>Meditate</Typography>
                     <Typography variant="h5"></Typography>
                     <Typography color="textSecondary"></Typography>
                     <Typography variant="body2">A React application for those who want to meditate.</Typography>
                     <Typography variant="body2">Try it for yourself: <a href="http://..........surge.sh">Meditate</a></Typography>
                     <Typography variant="body2">See the code: <a href="https://github.com/emilyjspencer/Meditate"></a></Typography>
                     </CardContent> 
              </Grid>
              <Grid item component={Card} xs={12} md={3} className="Thermostat">
                 <CardContent>
                     <Typography color="textSecondary" gutterBottom>Thermostat</Typography>
                     <Typography variant="h5"></Typography>
                     <Typography color="textSecondary"></Typography>
                     <Typography variant="body2">A Thermostat application built with JavaScript and jQuery. Test-driven with Jasmine</Typography>
                     <Typography variant="body2">See the code:<a href="https://github.com/emilyjspencer/Thermostat4">Thermostat on GitHub</a></Typography>
                     </CardContent> 
              </Grid>
              <Grid item component={Card} xs={12} md={3} className="Pristine Pics">
                 <CardContent>
                     <Typography color="textSecondary" gutterBottom>Pristine Pics</Typography>
                     <Typography variant="h5"></Typography>
                     <Typography color="textSecondary"></Typography>
                     <Typography variant="body2">Pristine Pics - a React application which allows you to upload your favourite pictures</Typography>
                     <Typography variant="body2">Try it for yourself: <a href="http://guiltless-clouds.surge.sh"></a></Typography>
                     <Typography variant="body2">See the code:<a href="https://github.com/emilyjspencer/Pristine-Pics">Pristine Pics on GitHub</a></Typography>
                     </CardContent> 
              </Grid>
              <Grid item component={Card} xs={12} md={3} className="TimesTables">
                 <CardContent>
                     <Typography color="textSecondary" gutterBottom>Times Tables</Typography>
                     <Typography variant="h5"></Typography>
                     <Typography color="textSecondary"></Typography>
                     <Typography variant="body2">A simple application for primary school childre - Learn your Times Tables with Barbie</Typography>
                     <Typography variant="body2">Try it for yourself: <a href="http://useful-cushion.surge.sh">Times Tables</a></Typography>
                     <Typography variant="body2">See the code:<a href="https://github.com/emilyjspencer/Times-Tables">Times Tables on GitHub</a></Typography>
                     </CardContent> 
              </Grid>
              <Grid item component={Card} xs={12} md={3} className="StudentRegister">
                 <CardContent>
                     <Typography color="textSecondary" gutterBottom>Student Register</Typography>
                     <Typography variant="h5"></Typography>
                     <Typography color="textSecondary"></Typography>
                     <Typography variant="body2">A Pern-stack Application which simulates a student register</Typography>
                     <Typography variant="body2">See the code:<a href="https://github.com/emilyjspencer/Student-Register">Student Register on GitHub</a></Typography>
                     </CardContent> 
              </Grid>
              <Grid item component={Card} xs={12} md={3} className="FindPlaces">
                 <CardContent>
                     <Typography color="textSecondary" gutterBottom>Find Places</Typography>
                     <Typography variant="h5"></Typography>
                     <Typography color="textSecondary"></Typography>
                     <Typography variant="body2">A Mern-stack Application to share interesting places with others</Typography>
                     <Typography variant="body2">See the code:<a href="https://github.com/emilyjspencer/Find-Places.git">Find Places on GitHub</a></Typography>
                     </CardContent> 
              </Grid>
              <Grid item component={Card} xs={12} md={3} className="FindAMovie">
                 <CardContent>
                     <Typography color="textSecondary" gutterBottom>Find a Movie</Typography>
                     <Typography variant="h5"></Typography>
                     <Typography color="textSecondary"></Typography>
                     <Typography variant="body2">An Express/Node application</Typography>
                     <Typography variant="body2">See the code<a href="https://github.com/emilyjspencer/Find-A-Movie">Find a Move on GitHub</a></Typography>
                     </CardContent> 
              </Grid>
              <Grid item component={Card} xs={12} md={3} className="Presents Planner">
                 <CardContent>
                     <Typography color="textSecondary" gutterBottom>Presents Planner</Typography>
                     <Typography variant="h5"></Typography>
                     <Typography color="textSecondary"></Typography>
                     <Typography variant="body2">A React application. Test-driven with Jasmine and Enzyme</Typography>
                     <Typography variant="body2">Try it for yourself: <a href="http://pale-plastic.surge.sh">Presents Planner</a></Typography>
                     <Typography variant="body2">See the code:<a href="https://github.com/emilyjspencer/Presents.git">Presents Planner on GitHub</a></Typography>
                     </CardContent> 
              </Grid>
              <Grid item component={Card} xs={12} md={3} className="Bucket List">
                 <CardContent>
                     <Typography color="textSecondary" gutterBottom>Bucket List</Typography>
                     <Typography variant="h5"></Typography>
                     <Typography color="textSecondary"></Typography>
                     <Typography variant="body2">A React application. Test-driven with Jasmine and Enzyme</Typography>
                     <Typography variant="body2">Try it for yourself: <a href="http://wealthy-cover.surge.sh">Bucket List</a></Typography>
                     <Typography variant="body2">See the code:<a href="https://github.com/emilyjspencer/Bucket-List-TDD-React.git">Bucker List on GitHub</a></Typography>
                     </CardContent> 
              </Grid>
              <Grid item component={Card} xs={12} md={3} className="Bookmarks">
                 <CardContent>
                     <Typography color="textSecondary" gutterBottom>Bookmarks</Typography>
                     <Typography variant="h5"></Typography>
                     <Typography color="textSecondary"></Typography>
                     <Typography variant="body2">A Sinatra based application. Built with Ruby, Sinatra and PostgreSQL</Typography>
                     <Typography variant="body2">See the code:<a href="https://github.com/emilyjspencer/Bookmarks">Bookmarks on GitHub</a></Typography>
                     </CardContent> 
              </Grid>
              <Grid item component={Card} xs={12} md={3} className="The Book Lounge">
                 <CardContent>
                     <Typography color="textSecondary" gutterBottom>The Book Lounge</Typography>
                     <Typography variant="h5"></Typography>
                     <Typography color="textSecondary"></Typography>
                     <Typography variant="body2">A Sinatra based application. Built with Ruby, Sinatra and PostgreSQL</Typography>
                     <Typography variant="body2">See the code:<a href="https://github.com/emilyjspencer/The_Book_Lounge">The Book Lounge on GitHub</a></Typography>
                     </CardContent> 
              </Grid>
              <Grid item component={Card} xs={12} md={3} className="Bookify">
                 <CardContent>
                     <Typography color="textSecondary" gutterBottom>Bookify</Typography>
                     <Typography variant="h5"></Typography>
                     <Typography color="textSecondary"></Typography>
                     <Typography variant="body2">A Mern-stack Application</Typography>
                     <Typography variant="body2">See the code:<a href="https://github.com/emilyjspencer/Bookify.git">Bookify on GitHub</a></Typography>
                     </CardContent> 
              </Grid>
              <Grid item component={Card} xs={12} md={3} className="Guess the shade">
                 <CardContent>
                     <Typography color="textSecondary" gutterBottom>Guess the Shade</Typography>
                     <Typography variant="h5"></Typography>
                     <Typography color="textSecondary"></Typography>
                     <Typography variant="body2">A game built with vanilla JavaScript</Typography>
                     <Typography variant="body2">Try it for yourself: <a href="http://profuse-swing.surge.sh/">Guess the Shade</a></Typography>
                     <Typography variant="body2">See the code:<a href="https://github.com/emilyjspencer/Guess-the-shade.git">Guess the shade on GitHub</a></Typography>
                     </CardContent> 
              </Grid>
              <Grid item component={Card} xs={12} md={3} className="Guardian News">
                 <CardContent>
                     <Typography color="textSecondary" gutterBottom>Guardian News</Typography>
                     <Typography variant="h5"></Typography>
                     <Typography color="textSecondary"></Typography>
                     <Typography variant="body2">A React application which calls on the Guardian API</Typography>
                     <Typography variant="body2">Try it for yourself: <a href="http://sable-notebook.surge.sh/">Guardian News</a></Typography>
                     <Typography variant="body2">See the code:<a href="https://github.com/emilyjspencer/Guardian-News-React.git">Guardian News on GitHub</a></Typography>
                     </CardContent> 
              </Grid>
              <Grid item component={Card} xs={12} md={3} className="Guardian News">
                 <CardContent>
                     <Typography color="textSecondary" gutterBottom>Guardian News</Typography>
                     <Typography variant="h5"></Typography>
                     <Typography color="textSecondary"></Typography>
                     <Typography variant="body2">A single page application which calls on the Guardian API. Build using vanilla JavaScript and no testing library</Typography>
                     <Typography variant="body2">Try it for yourself: <a href="http://..........surge.sh">Guardian News</a></Typography>
                     </CardContent> 
              </Grid>
              <Grid item component={Card} xs={12} md={3} className="Alohomora">
                 <CardContent>
                     <Typography color="textSecondary" gutterBottom>Alohomora</Typography>
                     <Typography variant="h5"></Typography>
                     <Typography color="textSecondary"></Typography>
                     <Typography variant="body2">A Rails application that uses websockets. Simulates a real-time chat application. For fans of Harry Potter</Typography>
                     <Typography variant="body2">Try it for yourself: <a href=".......">Alohomora</a></Typography>
                     </CardContent> 
              </Grid>
            </Grid>
    )
}

export default Cards;
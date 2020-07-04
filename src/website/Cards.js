import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';

const Cards = () => {


    return (
        <Grid container spacing={3} justify="center">
              <Grid item component={Card} xs={12} md={3} className="Acebook">
                 <CardContent>
                     <Typography color="textSecondary" gutterBottom>AceBook</Typography>
                     <Typography variant="h5"></Typography>
                     <Typography color="textSecondary"></Typography>
                     <Typography variant="body2">A Rails Application</Typography>
                     </CardContent> 
              </Grid>
              <Grid item component={Card} xs={12} md={3} className="FinBot" >
                  <Typography color="textSecondary" gutterBottom>FinBot</Typography>
                  <Typography variant="h5">
                  </Typography>
                  <Typography color="textSecondary"></Typography>
                  <Typography variant="body2">A chatbot</Typography>
              </Grid>
              <Grid item component={Card} xs={12} md={3} className="Global Reads">
                  <Typography color="textSecondary" gutterBottom>Global Reads</Typography>
                  <Typography variant="h5">
                  </Typography>
                  <Typography color="textSecondary"></Typography>
                  <Typography variant="body2">Number of deaths</Typography>
              </Grid>
              <Grid item component={Card} xs={12} md={3} className="Chitter">
                 <CardContent>
                     <Typography color="textSecondary" gutterBottom>Chitter</Typography>
                     <Typography variant="h5">
                            </Typography>
                     <Typography variant="body2">A sinatra/postgresql application</Typography>
                     </CardContent> 
              </Grid>
              <Grid item component={Card} xs={12} md={3} className="Rock, Paper, Scissors">
                 <CardContent>
                     <Typography color="textSecondary" gutterBottom>Rock Paper Scissors</Typography>
                     <Typography variant="h5">
        
                            </Typography>
                     <Typography color="textSecondary"></Typography>
                     <Typography variant="body2">A sinatra-based application</Typography>
                     </CardContent> 
              </Grid>
              <Grid item component={Card} xs={12} md={3} className="Thermostat">
                 <CardContent>
                     <Typography color="textSecondary" gutterBottom>Thermostat</Typography>
                     <Typography variant="h5">
                            </Typography>
                     <Typography color="textSecondary"></Typography>
                     <Typography variant="body2">An application built with JavaScript and jQuery. Test-driven with Jasmine</Typography>
                     </CardContent> 
              </Grid>
              <Grid item component={Card} xs={12} md={3} className="Pristine Pics">
                 <CardContent>
                     <Typography color="textSecondary" gutterBottom>Pristine Pics</Typography>
                     <Typography variant="h5">
                            </Typography>
                     <Typography color="textSecondary"></Typography>
                     <Typography variant="body2">Pristine Pics</Typography>
                     </CardContent> 
              </Grid>
              <Grid item component={Card} xs={12} md={3} className="TimesTables">
                 <CardContent>
                     <Typography color="textSecondary" gutterBottom>Times Tables</Typography>
                     <Typography variant="h5">
                            </Typography>
                     <Typography color="textSecondary"></Typography>
                     <Typography variant="body2">Times Tables</Typography>
                     </CardContent> 
              </Grid>
              <Grid item component={Card} xs={12} md={3} className="StudentRegister">
                 <CardContent>
                     <Typography color="textSecondary" gutterBottom>Student Register</Typography>
                     <Typography variant="h5">
                            </Typography>
                     <Typography color="textSecondary"></Typography>
                     <Typography variant="body2">A Pern-stack Application</Typography>
                     </CardContent> 
              </Grid>
              <Grid item component={Card} xs={12} md={3} className="FindPlaces">
                 <CardContent>
                     <Typography color="textSecondary" gutterBottom>Find Places</Typography>
                     <Typography variant="h5">
                            </Typography>
                     <Typography color="textSecondary"></Typography>
                     <Typography variant="body2">A Mern-stack Application</Typography>
                     </CardContent> 
              </Grid>
            </Grid>
    )
}

export default Cards;
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { pink } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 805,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', 
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: pink[500],
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="star" className={classes.avatar}>
            *
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Alohomora 2.0"
        subheader="An application for Harry Potter fans"
      />
      <CardMedia
        className={classes.media}
        image= { require ("./images/cards/quiz1.png")}
        title="quiz"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          An application for Harry Potters featuring a chatroom, quiz, characters and spells pages
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">Try it for yourself: <a href="https://5f88db6e46264f4cec7743c1--thirsty-johnson-2e67ef.netlify.app">Alohomora 2.0 on Netlify</a></Typography>
        <Typography variant="body2" color="textSecondary" component="p">See the code: <a href="https://github.com/emilyjspencer/Alohomora--2.0">Alohomora 2.0 on GitHub</a></Typography>

      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Tech Stack</Typography>
          <Typography paragraph>
            React, Node.js, MaterialUI, CSS, WebSockets
          </Typography>
          <Typography paragraph>
            Motivation: I wanted to reinforce what I had learned with React and websockets. I also wanted
            to create an application that made use of the Unofficial Harry Potter API.
          </Typography>
          <CardMedia
        className={classes.media}
        image= { require ("./images/cards/chat.png")}
        title="chat"
      />
        </CardContent>
      </Collapse>
    </Card>
    <br />
    <br />
    <Card className={classes.root}>
    <CardHeader
      avatar={
        <Avatar aria-label="star" className={classes.avatar}>
          *
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
          <MoreVertIcon />
        </IconButton>
      }
      title="Global Reads"
      subheader="An application to support the Global Reading Project initiative at UHS Wimbledon"
    />
    <CardMedia
      className={classes.media}
      image= { require ("./images/cards/about.png")}
      title="about"
    />
    <CardContent>
      <Typography variant="body2" color="textSecondary" component="p">
        An application to support the Global Reading initiative at UHS Wimbledon. Read more about the books. Sign up for an account and write your own reviews
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">Try it for yourself: <a href="">Global Reads</a></Typography>
      <Typography variant="body2" color="textSecondary" component="p">See the code: <a href="https://github.com/emilyjspencer/Global-Reads">Global Reads on GitHub</a></Typography>

    </CardContent>
    <CardActions disableSpacing>
      <IconButton
        className={clsx(classes.expand, {
          [classes.expandOpen]: expanded,
        })}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
      >
        <ExpandMoreIcon />
      </IconButton>
    </CardActions>
    <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent>
        <Typography paragraph>Tech Stack</Typography>
        <Typography paragraph>
          Rails, Ruby, RSpec, Capybara, CSS
        </Typography>
        <Typography paragraph>
          Motivation: I wanted to learn more about Rails having spent weeks eight and nine of the Makers Academy course building
          a Facebook clone in Rails. I also wanted to create a platform that students at UHS Wimbledon could use to learn more about
          the books that have been added to the library since the Global Reading Project was launched.
        </Typography>
        <CardMedia
      className={classes.media}
      image= { require ("./images/cards/caribbeanreads.png")}
      title="carribean"
    />
      </CardContent>
    </Collapse>
  </Card>
  <br />
  <br />
  <br />
  <br />
  <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="star" className={classes.avatar}>
            *
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Find Places"
        subheader="An application to share interesting places with others!"
      />
      <CardMedia
        className={classes.media}
        image= { require ("./images/cards/cat2.jpg")}
        title="placeholder"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          An application that allows users to sign up and share interesting places that they'd visited.
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">Try it for yourself: <a href="">Find Places</a></Typography>
        <Typography variant="body2" color="textSecondary" component="p">See the code: <a href="https://github.com/emilyjspencer/Find-Places">Find Places on GitHub</a></Typography>

      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Tech Stack</Typography>
          <Typography paragraph>
            React, Node.js, MongoDB, CSS, Express
          </Typography>
          <Typography paragraph>
            Motivation: I wanted to reinforce what I had learned with Express and React. I also by this point only had
            experience of using relational databases, so I wanted to use a non-relational database in an application
          </Typography>
          <CardMedia
        className={classes.media}
        image= { require ("./images/cards/cat.jpg")}
        title="cat"
      />
        </CardContent>
      </Collapse>
    </Card>
    <br />
    <br />
    <br />
    <br />
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="star" className={classes.avatar}>
            *
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Pristine Pics"
        subheader="An application to upload and showcase your favourite pics"
      />
      <CardMedia
        className={classes.media}
        image= { require ("./images/cards/beach.png")}
        title="placeholder"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          A React application to show off your favourite photographs.
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">Try it for yourself: <a href="https://guiltless-clouds.surge.sh/">Pristine Pics</a></Typography>
        <Typography variant="body2" color="textSecondary" component="p">See the code: <a href="https://github.com/emilyjspencer/Pristine-Pics">Pristine Pics on GitHub</a></Typography>

      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Tech Stack</Typography>
          <Typography paragraph>
            React, CSS
          </Typography>
          <Typography paragraph>
            Motivation: In the early days of learning React, I wanted to put that learning into practice so I created Pristine Pics.
          </Typography>
          <CardMedia
        className={classes.media}
        image= { require ("./images/cards/pristinepics_uploadphoto.png")}
        title="pristinepics"
      />
        </CardContent>
      </Collapse>
    </Card>
    <br />
    <br />
    <br />
    <br />
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="star" className={classes.avatar}>
            *
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Finbot/Ubb"
        subheader="A chatbot to advise young people on matters of personal finance. Created during the last two weeks of the Makers Academy Course"
      />
      <CardMedia
        className={classes.media}
        image= { require ("./images/cards/ubb.png")}
        title="ubb"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          A chat bot designed with young people in mind to advise them on matters of personal finance.
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">Try it for yourself: <a href="">Ubb</a></Typography>
        <Typography variant="body2" color="textSecondary" component="p">See the code: <a href="https://github.com/nikimanoledaki/finbot">Ubb on GitHub (UI) </a></Typography>
        <Typography variant="body2" color="textSecondary" component="p">See the code: <a href="https://github.com/nikimanoledaki/finbot-api">Ubb on GitHub API </a></Typography>

      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Tech Stack</Typography>
          <Typography paragraph>
            Python, Django, React, NLTK, TensorFlow, TFLearn, UnitTest, Cypress
          </Typography>
          <Typography paragraph>
            Motivation: The idea for Ubb grew out of a conversation that two of my team mates had. One had worked for many years in finance. The other
            was a (relatively) recent university graduate. 
          </Typography>
          <CardMedia
        className={classes.media}
        image= { require ("./images/cards/ubb2.png")}
        title="ubb2"
      />
        </CardContent>
      </Collapse>
    </Card>
    <br />
    <br />
    <br />
    <br />
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="star" className={classes.avatar}>
            *
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="AceBook"
        subheader="A clone of Facebook (Group project)"
      />
      <CardMedia
        className={classes.media}
        image= { require ("./images/cards/cat4.jpg")}
        title="cat4"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          A clone of Facebook. Built in Rails
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">Try it for yourself: <a href="">AceBook</a></Typography>
        <Typography variant="body2" color="textSecondary" component="p">See the code: <a href="https://github.com/emilyjspencer/acebook-inSANE">AceBook on GitHub </a></Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Tech Stack</Typography>
          <Typography paragraph>
            Rails, Ruby, Capybara, RSpec, CSS
          </Typography>
          <Typography paragraph>
            Motivation: During weeks eight and nine of the Makers Academy course, we were tasked with creating a clone of 
            Facebook. This was a group project, created over the course of two weeks. 
          </Typography>
          <CardMedia
        className={classes.media}
        image= { require ("./images/cards/cat4.jpg")}
        title="cat4"
      />
        </CardContent>
      </Collapse>
    </Card>
    <br />
    <br />
    <br />
    <br />
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="star" className={classes.avatar}>
            *
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Chitter"
        subheader="A clone of Twitter (A weekend challenge)"
      />
      <CardMedia
        className={classes.media}
        image= { require ("./images/cards/updated_home.png")}
        title="homepage"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          A clone of the popular microblogging site - Twitter
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">Try it for yourself: <a href="">Chitter</a></Typography>
        <Typography variant="body2" color="textSecondary" component="p">See the code: <a href="https://github.com/emilyjspencer/chitter-challenge">Chitter on GitHub </a></Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Tech Stack</Typography>
          <Typography paragraph>
            Ruby, Sinatra, RSpec, Capybara, CSS, PostgreSQL
          </Typography>
          <Typography paragraph>
            Motivation: During week four of the Makers Academy course, we were introduced to databases. We were then tasked with creating
            a simplified version of Twitter over the weekend using the above tech stack
          </Typography>
          <CardMedia
        className={classes.media}
        image= { require ("./images/cards/messages.png")}
        title="cat4"
      />
        </CardContent>
      </Collapse>
    </Card>
    <br />
    <br />
    <br />
    <br />
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="star" className={classes.avatar}>
            *
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Chitter"
        subheader="Rock Paper Scissors"
      />
      <CardMedia
        className={classes.media}
        image= { require ("./images/cards/home.png")}
        title="homepage"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          My (extremely girly) take on Rock, Paper, Scissors
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">Try it for yourself: <a href="">Rock, Paper Scissors</a></Typography>
        <Typography variant="body2" color="textSecondary" component="p">See the code: <a href="https://github.com/emilyjspencer/rps-challenge">Rock, Paper, Scissors on GitHub </a></Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Tech Stack</Typography>
          <Typography paragraph>
            Ruby, Sinatra, RSpec, Capybara, CSS
          </Typography>
          <Typography paragraph>
            Motivation: During week three of the Makers Academy course, we were introduced to Sinatra. We were then tasked with creating
            a game of Rock, Paper, Scissors over the weekend using the above tech stack.
          </Typography>
          <CardMedia
        className={classes.media}
        image= { require ("./images/cards/options.png" )}
        image={ require ("./images/cards/lose.png")}
        title="cat4"
      />
        </CardContent>
      </Collapse>
    </Card>
    <br />
    <br />
    <br />
    <br />
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="star" className={classes.avatar}>
            *
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Head in the Clouds"
        subheader="Let's Mediate!"
      />
      <CardMedia
        className={classes.media}
        image= { require ("./images/cards/cat4.png")}
        title="homepage"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
         A React application to help you meditate
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">Try it for yourself: <a href="">Head in the Clouds</a></Typography>
        <Typography variant="body2" color="textSecondary" component="p">See the code: <a href="https://github.com/emilyjspencer/Meditate">Head in the Clouds on GitHub</a></Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Tech Stack</Typography>
          <Typography paragraph>
            React, CSS
          </Typography>
          <Typography paragraph>
            Motivation: At Makers Academy, we were encouraged to meditate on a daily basis. I recognise how important a role
            meditation and mindfulness can play in maintaining good mental health, so I wanted to create my own meditation web app.
          </Typography>
          <CardMedia
        className={classes.media}
        image= { require ("./images/cards/cat4.png" )}
        title="cat4"
      />
        </CardContent>
      </Collapse>
    </Card>
  </>
  );
  
}
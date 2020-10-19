import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1000,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', 
    paddingLeft: '30px',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginRight: '30px',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  }
}));

export default function CardProject() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [expanded1, setExpanded1] = React.useState(false);
  const [expanded2, setExpanded2] = React.useState(false);
  const [expanded3, setExpanded3] = React.useState(false);
  const [expanded4, setExpanded4] = React.useState(false);
  const [expanded5, setExpanded5] = React.useState(false);
  const [expanded6, setExpanded6] = React.useState(false);
  const [expanded7, setExpanded7] = React.useState(false);
  const [expanded8, setExpanded8] = React.useState(false);
  const [expanded9, setExpanded9] = React.useState(false);
  const [expanded10, setExpanded10] = React.useState(false);
  const [expanded11, setExpanded11] = React.useState(false);
  const [expanded12, setExpanded12] = React.useState(false);
  const [expanded13, setExpanded13] = React.useState(false);
  const [expanded14, setExpanded14] = React.useState(false);
  const [expanded15, setExpanded15] = React.useState(false);
  const [expanded16, setExpanded16] = React.useState(false);
  const [expanded17, setExpanded17] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleExpandClick1 = () => {
    setExpanded1(!expanded1);
  };
  const handleExpandClick2 = () => {
    setExpanded2(!expanded2);
  };
  const handleExpandClick3 = () => {
    setExpanded3(!expanded3);
  };
  const handleExpandClick4 = () => {
    setExpanded4(!expanded4);
  };

  const handleExpandClick5 = () => {
    setExpanded5(!expanded5);
  };
  const handleExpandClick6 = () => {
    setExpanded6(!expanded6);
  };
  const handleExpandClick7 = () => {
    setExpanded7(!expanded7);
  };
  const handleExpandClick8 = () => {
    setExpanded8(!expanded8);
  };
  const handleExpandClick9 = () => {
    setExpanded9(!expanded9);
  };
  const handleExpandClick10 = () => {
    setExpanded10(!expanded10);
  };
  const handleExpandClick11 = () => {
    setExpanded11(!expanded11);
  };
  const handleExpandClick12 = () => {
    setExpanded12(!expanded12);
  };
  const handleExpandClick13 = () => {
    setExpanded13(!expanded13);
  };
  const handleExpandClick14 = () => {
    setExpanded14(!expanded14);
  };
  const handleExpandClick15 = () => {
    setExpanded15(!expanded15);
  };
  const handleExpandClick16 = () => {
    setExpanded16(!expanded16);
  };
  const handleExpandClick17 = () => {
    setExpanded17(!expanded17);
  };





  return (
    <>
    <Card className={classes.root}>
      <CardHeader
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
          [classes.expandOpen]: expanded1,
        })}
        onClick={handleExpandClick1}
        aria-expanded={expanded1}
        aria-label="show more"
      >
        <ExpandMoreIcon />
      </IconButton>
    </CardActions>
    <Collapse in={expanded1} timeout="auto" unmountOnExit>
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
            [classes.expandOpen]: expanded2,
          })}
          onClick={handleExpandClick2}
          aria-expanded={expanded2}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded2} timeout="auto" unmountOnExit>
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
            [classes.expandOpen]: expanded3,
          })}
          onClick={handleExpandClick3}
          aria-expanded={expanded3}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded3} timeout="auto" unmountOnExit>
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
            [classes.expandOpen]: expanded4,
          })}
          onClick={handleExpandClick4}
          aria-expanded={expanded4}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded4} timeout="auto" unmountOnExit>
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
            [classes.expandOpen]: expanded5,
          })}
          onClick={handleExpandClick5}
          aria-expanded={expanded5}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded5} timeout="auto" unmountOnExit>
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
            [classes.expandOpen]: expanded6,
          })}
          onClick={handleExpandClick6}
          aria-expanded={expanded6}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded6} timeout="auto" unmountOnExit>
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
        title="Rock Paper Scissors"
        subheader="Play against the computer"
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
            [classes.expandOpen]: expanded7,
          })}
          onClick={handleExpandClick7}
          aria-expanded={expanded7}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded7} timeout="auto" unmountOnExit>
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
        title="Head in the Clouds"
        subheader="Let's Mediate!"
      />
      <CardMedia
        className={classes.media}
        image= { require ("./images/cards/cat4.jpg")}
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
            [classes.expandOpen]: expanded8,
          })}
          onClick={handleExpandClick8}
          aria-expanded={expanded8}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded8} timeout="auto" unmountOnExit>
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
        image= { require ("./images/cards/cat4.jpg" )}
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
        title="Times Tables"
        subheader="Learn your Times Tables with Barbie"
      />
      <CardMedia
        className={classes.media}
        image= { require ("./images/cards/barbietwelve3.png")}
        title="seventimestables"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
         A simple React to help you to learn your Times Tables.
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">Try it for yourself: <a href="http://useful-cushion.surge.sh/">Times Tables</a></Typography>
        <Typography variant="body2" color="textSecondary" component="p">See the code: <a href="https://github.com/emilyjspencer/Times-Tables">Times Tables on GitHub</a></Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded9,
          })}
          onClick={handleExpandClick9}
          aria-expanded={expanded9}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded9} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Tech Stack</Typography>
          <Typography paragraph>
            React, CSS, SASS
          </Typography>
          <Typography paragraph>
            Motivation: In the early days of learning React I wanted to cement by understanding of some of React's fundamentals.
            Having worked in both primary and secondary education, and with a deep interest in education and child development, I decided
            to create a very simple application for primary school children.
          </Typography>
          <CardMedia
        className={classes.media}
        image= { require ("./images/cards/barbieseven.png" )}
        title="timestables"
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
        title="Guardian News"
        subheader="Read the latest news stories from the Guardian newspaper"
      />
      <CardMedia
        className={classes.media}
        image= { require ("./images/cards/guardian1.png")}
        title="seventimestables"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
         A simple React application that calls on the Guardian API and allows users to read the latest news stories.
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">Try it for yourself: <a href="http://sable-notebook.surge.sh/">Guardian News</a></Typography>
        <Typography variant="body2" color="textSecondary" component="p">See the code: <a href="https://github.com/emilyjspencer/Guardian-News-React">Guardian News on GitHub</a></Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded10,
          })}
          onClick={handleExpandClick10}
          aria-expanded={expanded10}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded10} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Tech Stack</Typography>
          <Typography paragraph>
            React, CSS
          </Typography>
          <Typography paragraph>
            Motivation: During week seven of the Makers Academy course, the focus was on vanilla JavaScript. The weekend challenge
            for that week was to create an SPA (single-page application) using neither a library/framework or nor a testing framework, that
            called on the Guardian API and returned the latest news stories. I later created the same application using React.
          </Typography>
          <CardMedia
        className={classes.media}
        image= { require ("./images/cards/news.png" )}
        title="news"
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
        title="Guess the Shade"
        subheader="A game created using vanilla JavaScript"
      />
      <CardMedia
        className={classes.media}
        image= { require ("./images/cards/hard.png")}
        title="guesstheshade"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
         A game built with Vanilla Javascript.
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">Try it for yourself: <a href="http://profuse-swing.surge.sh/">Guess the Shade</a></Typography>
        <Typography variant="body2" color="textSecondary" component="p">See the code: <a href="https://github.com/emilyjspencer/Guess-the-shade">Guess the Shade on GitHub</a></Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded11,
          })}
          onClick={handleExpandClick11}
          aria-expanded={expanded11}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded11} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Tech Stack</Typography>
          <Typography paragraph>
            Vanilla JavaScript, CSS
          </Typography>
          <Typography paragraph>
            Motivation: I wanted to use some of what I had learned about Vanilla JavaScript to create a simple game.
          </Typography>
          <CardMedia
        className={classes.media}
        image= { require ("./images/cards/medium.png" )}
        title="guesstheshade"
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
        title="Presents Planner"
        subheader="Plan what gifts you want to give your friends and loved ones with Presents Planner"
      />
      <CardMedia
        className={classes.media}
        image= { require ("./images/cards/presents.png")}
        title="presents"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
         A React application built using TDD (test-driven development) with Jest and Enzyme
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">Try it for yourself: <a href="http://pale-plastic.surge.sh/">Guess the Shade</a></Typography>
        <Typography variant="body2" color="textSecondary" component="p">See the code: <a href="https://github.com/emilyjspencer/Presents">Presents Planner on GitHub</a></Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded12,
          })}
          onClick={handleExpandClick12}
          aria-expanded={expanded12}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded12} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Tech Stack</Typography>
          <Typography paragraph>
            React, CSS, Enzyme, Jest
          </Typography>
          <Typography paragraph>
            Motivation: I wanted to practice creating a React application from scratch, using a test-driven approach.
          </Typography>
          <CardMedia
        className={classes.media}
        image= { require ("./images/cards/presents_planner.png" )}
        title="presents"
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
        title="Bucket List"
        subheader="Visualize your goals with Bucket List"
      />
      <CardMedia
        className={classes.media}
        image= { require ("./images/cards/bucket_list.png")}
        title="bucketlist"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
         A React application built using TDD (test-driven development) with Jest and Enzyme
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">Try it for yourself: <a href="http://wealthy-cover.surge.sh/">Bucket List</a></Typography>
        <Typography variant="body2" color="textSecondary" component="p">See the code: <a href="https://github.com/emilyjspencer/Bucket-List-TDD-React">Bucket List on GitHub</a></Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded13,
          })}
          onClick={handleExpandClick13}
          aria-expanded={expanded13}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded13} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Tech Stack</Typography>
          <Typography paragraph>
            React, CSS, Enzyme, Jest
          </Typography>
          <Typography paragraph>
            Motivation: I wanted to practice creating a React application from scratch, using a test-driven approach.
          </Typography>
          <CardMedia
        className={classes.media}
        image= { require ("./images/cards/add_item.png" )}
        title="bucketlist"
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
        title="Bookmarks"
        subheader="Save your favourite/most-used webpages with this bookmark manager"
      />
      <CardMedia
        className={classes.media}
        image= { require ("./images/cards/homepage.png")}
        title="bucketlist"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
         A React application built using TDD (test-driven development) with Jest and Enzyme
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">Try it for yourself: <a href="">Bookmarks</a></Typography>
        <Typography variant="body2" color="textSecondary" component="p">See the code: <a href="https://github.com/emilyjspencer/Bookmarks">Bookmarks on GitHub</a></Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded14,
          })}
          onClick={handleExpandClick14}
          aria-expanded={expanded14}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded14} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Tech Stack</Typography>
          <Typography paragraph>
            Ruby, Sinatra, RSpec, Capybara, CSS, PostgreSQL
          </Typography>
          <Typography paragraph>
            Motivation: During week four of the Makers Academy course, we were introducted to databases. We were also tasked with creating a 
            bookmark manager using a test-driven approach.
          </Typography>
          <CardMedia
        className={classes.media}
        image= { require ("./images/cards/addbookmark.png" )}
        title="bookmarks"
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
        title="Find A Movie"
        subheader="Find all films with a particular word in its title"
      />
      <CardMedia
        className={classes.media}
        image= { require ("./images/cards/cat4.jpg")}
        title="findamovie"
      />
    <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
         An Express application that lets you search for movies. Calls on the Open Movie Database API.
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">Try it for yourself: <a href="">Find A Movie</a></Typography>
        <Typography variant="body2" color="textSecondary" component="p">See the code: <a href="https://github.com/emilyjspencer/Find-A-Movie">Find A Movie on GitHub</a></Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick15}
          aria-expanded={expanded15}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded15} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Tech Stack</Typography>
          <Typography paragraph>
            Express, CSS
          </Typography>
          <Typography paragraph>
            Motivation: While I was learning the fundamentals of Express, I wanted to put my knowledge into practice, and,
            as a huge fans of films, I thought that I would create a film-related application.
          </Typography>
          <CardMedia
        className={classes.media}
        image= { require ("./images/cards/cat4.jpg" )}
        title="findamovie"
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
        title="Personal Website"
        subheader="About Me"
      />
      <CardMedia
        className={classes.media}
        image= { require ("./images/cards/cat4.jpg")}
        title="portfolio"
      />
    <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
         A React application to showcase my work.
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">Try it for yourself: <a href="">Personal Website</a></Typography>
        <Typography variant="body2" color="textSecondary" component="p">See the code: <a href="https://github.com/emilyjspencer/personal-website">Personal Website on GitHub</a></Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded16,
          })}
          onClick={handleExpandClick16}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded16} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Tech Stack</Typography>
          <Typography paragraph>
            React, MaterialUI, CSS
          </Typography>
          <Typography paragraph>
            Motivation: I wanted a way of showcasing my work in addition to my GitHub profile.
          </Typography>
          <CardMedia
        className={classes.media}
        image= { require ("./images/cards/cat4.jpg" )}
        title="portfolio"
      />
        </CardContent>
      </Collapse>
    </Card>
    <Card className={classes.root}>
      <CardHeader
        title="Vegan Ventures - Coming Soon"
        subheader="A React application to showcase my sister's amazing vegan dishes"
      />
      <CardMedia
        className={classes.media}
        image= { require ("./images/cards/cat4.jpg")}
        title="veganventures"
      />
    <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
         A React application to showcase my sister's vegan recipes.
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">Try it for yourself: <a href="">Vegan Ventures</a></Typography>
        <Typography variant="body2" color="textSecondary" component="p">See the code: <a href="">Vegan Ventures on GitHub</a></Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded17,
          })}
          onClick={handleExpandClick17}
          aria-expanded={expanded17}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded17} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Tech Stack</Typography>
          <Typography paragraph>
            React, MaterialUI, CSS
          </Typography>
          <Typography paragraph>
            Motivation: I wanted to create a website to show off my sister's wonderful vegan dishes
          </Typography>
          <CardMedia
        className={classes.media}
        image= { require ("./images/cards/cat4.jpg" )}
        title="veganventures"
      />
        </CardContent>
      </Collapse>
    </Card>
  </>
  );
  
}
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
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
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
  );
}
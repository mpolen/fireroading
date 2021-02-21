import Link from 'next/link';
import Head from 'next/head';
import React, { useState, useEffect } from "react";
import Collapse from '@material-ui/core/Collapse';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import styles from './app.module.css';


export default function GitHubSelected(props) {

  (props.objectData ? props.objectData : props.objectData = {name: "Null", id : 00000, bio: "Null"})

  const [expanded, setExpanded] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [open, setOpen] = useState(false);


  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleFavorites = (user) => {
    const newFavorites = [...favorites];
    newFavorites.push(user);
    setFavorites(newFavorites);
    setOpen(true);
  };

  const handleFavoritesClose = (reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

return (

  <div>
            <Head>
                <title>GitHub User Info!</title>
            </Head>

      <Card variant="outlined">

          <CardActionArea>
            <CardContent>

              <Typography className = {styles.cardLarge} variant="h3" component="h2" color="blue" gutterBottom>
                  <center>Information! Information! Information!</center>        
              </Typography>

              <Typography className = {styles.cardMain} variant="h5" component="h2" color="blue" gutterBottom>
                  <center>You will find more available information on the GitHub User <i>{props.user}</i> below!</center>        
              </Typography>

            </CardContent>
          </CardActionArea>

          <CardActions style={{justifyContent: 'center'}}>
            <Link href="/">
              <Button color = "primary">Back to Home</Button>
            </Link>
          </CardActions>

      </Card>


      <Card >

        <CardHeader
          className = {styles.cardLight}

          avatar={
            <Avatar aria-label="Name" >
              GH
            </Avatar>
          }

          action={
            <Link href="/">
            <IconButton aria-label="Name">
              <MoreVertIcon />
            </IconButton>
            </Link>
          }
          title= {props.objectData.name}
          subheader = {props.objectData.login}
        />

      <CardMedia
        image = {props.objectData.avatar_url}
        title = {props.objectData.name}
      />

      <CardContent>
        <Typography className = {styles.cardLight} variant="body2" color="textSecondary" component="p">
              {props.objectData.name} has {props.objectData.followers} followers on GitHub. {props.objectData.name} lives in {props.objectData.location}.
        </Typography>
      </CardContent>

      <CardActions disableSpacing>

        <IconButton aria-label="Favorites" onClick = {() => handleFavorites(props.objectData.name)}>
          <FavoriteIcon />
        </IconButton>

        <Snackbar open={open} autoHideDuration={1500} onClose={handleFavoritesClose}>
          <MuiAlert elevation={6} variant="filled">
                  {props.objectData.name} has been added to Favorites!
          </MuiAlert>
        </Snackbar>

        <Link href={props.objectData.html_url}>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>
        </Link>

        <IconButton
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="More"
        >
          <ExpandMoreIcon />
        </IconButton>

      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>

        <CardContent>
          
          <Typography paragraph>
            {props.objectData.bio}
          </Typography>

          <Typography paragraph>
            Company : {props.objectData.company}
          </Typography>

          <Typography paragraph>
            Public Repositories : {props.objectData.public_repos}
          </Typography>

          <Typography paragraph>
            ID : {props.objectData.id}
          </Typography>

        </CardContent>
      </Collapse>
    </Card>
      
  </div>
      )
  }
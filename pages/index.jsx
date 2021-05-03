import Head from 'next/head';
import Link from 'next/link';
import React, { useState, useEffect } from "react";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import styles from './app.module.css';

export default function App() {

  return (
    
    <div>

      <Head>
        <title>Media Phenomenon</title>
      </Head>

      <main>
        
    <Card variant="outlined">

          <CardHeader 
          className = {styles.cardLight}

          avatar={
            <Avatar className = {styles.cardLight} aria-label="">
              MP
            </Avatar>
          } 

          action={
            <IconButton aria-label="Media Infrastructure">
            </IconButton>
          }
          title="Media Phenomenon"
          subheader="2021"
        ></CardHeader>

          <CardContent>

            <Typography className = {styles.cardLarge} variant="h1" component="h2" color="blue" gutterBottom>
                <center>Media Phenomenon: Personal Websites</center>        
            </Typography>

            <Typography className = {styles.cardMain} variant="h4" component="h2" color="blue" gutterBottom>
                <center>Personal websites have been revolutionizing the way that individuals seek to maintain a digital identity, especially for economic purposes.</center>        
            </Typography>

          </CardContent>

          <center><img width="500" height="300" src = "https://cdn.dribbble.com/users/1411165/screenshots/9396004/media/e63670638e6b16643dfd9731e55348d6.png"></img></center>
        <CardActions style={{justifyContent: 'center'}}>

          <Link href={{ pathname: '/Main'}}>
            <Button variant="contained" color="primary">Click To Get Started</Button>
          </Link>

      </CardActions>

    </Card>

   </main>

    </div>
  )

}

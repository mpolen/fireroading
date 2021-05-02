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
        <title> Media Phenomenon</title>
      </Head>

      <main>
        
    <Card variant="outlined">

          <CardHeader 
          className = {styles.cardLight}

          avatar={
            <Avatar className = {styles.cardLight} aria-label="">
              MI
            </Avatar>
          } 

          action={
            <IconButton aria-label="Media Infrastructure">
            </IconButton>
          }
          title="Media Infrastructure"
          subheader="2021"
        ></CardHeader>

          <CardContent>

            <Typography className = {styles.cardLarge} variant="h1" component="h2" color="blue" gutterBottom>
                <center>Media Infrastructure: WBUR-FM</center>        
            </Typography>

            <Typography className = {styles.cardMain} variant="h4" component="h2" color="blue" gutterBottom>
                <center>This is a simple interface for finding observations and content on the media infrastracture of WBUR-FM Radio Station!</center>        
            </Typography>

          </CardContent>

          <center><img width="500" height="300" src = "https://d279m997dpfwgl.cloudfront.net/wp/2018/09/linderpix-1197-1000x666.jpg"></img></center>
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

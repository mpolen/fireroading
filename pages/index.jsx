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
        <title>Numbers Land</title>
      </Head>

      <main>
        
    <Card variant="outlined">

          <CardHeader 
          className = {styles.cardLight}

          avatar={
            <Avatar className = {styles.cardLight} aria-label="">
              NL
            </Avatar>
          } 

          action={
            <IconButton aria-label="Numbers Land">
            </IconButton>
          }
          title="Numbers Land"
          subheader="2021"
        ></CardHeader>

        <CardActionArea>
          <CardContent>

            <Typography className = {styles.cardLarge} variant="h1" component="h2" color="blue" gutterBottom>
                <center>Welcome to Numbers Land</center>        
            </Typography>

            <Typography className = {styles.cardMain} variant="h4" component="h2" color="blue" gutterBottom>
                <center>This is a simple interface for finding more information about random integers via Numbers Land!</center>        
            </Typography>

          </CardContent>
        </CardActionArea>


        <CardActions style={{justifyContent: 'center'}}>

          <Link href={{ pathname: '/numbersMain'}}>
            <Button variant="contained" color="primary">Numbers Land</Button>
          </Link>

      </CardActions>

    </Card>

   </main>

    </div>
  )

}

import Link from 'next/link';
import Head from 'next/head';
import React, { useState, useEffect } from "react";
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import styles from './app.module.css';


export default function NumbersSelected(props) {

    return (
        <div>
            <Head>
                <title>Selected Number Info!</title>
            </Head>

            <Card variant="outlined">
              <CardActionArea>
                <CardContent>
                  <Typography className = {styles.cardLarge} variant="h3" component="h2" color="blue" gutterBottom>
                      <center>Information! Information! Information!</center>        
                  </Typography>

                  <Typography className = {styles.cardMain} variant="h5" component="h2" color="blue" gutterBottom>
                      <center>You will find a random fact about the number <i>{props.number}</i> below!</center>        
                  </Typography>

              </CardContent>
            </CardActionArea>

          <CardActions style={{justifyContent: 'center'}}>

            <Link href="/">
              <Button color = "primary">Back to Home</Button>
            </Link>

          </CardActions>

      </Card>

            <Card variant="outlined">
              <CardContent>

              <Typography className = {styles.facts} variant="h2" component="h2" color="blue" gutterBottom>
                    <center>{props.val}</center>        
              </Typography>

              </CardContent>

            </Card>

        </div>
      )
  }
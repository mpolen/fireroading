import Head from 'next/head';
import Link from 'next/link';
import React, { useState, useEffect } from "react";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from "axios";
import Evolution from './Evolution';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import styles from './app.module.css';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';


export default function Main() {

  const handleClick = (e) => {
    e.preventDefault();
    return;
 }

  return (

    <div>
      <Head>
        <title>Media Phenomenon</title>
      </Head>

      <main>

          <div>

          <Card style={{
        backgroundColor: 'lightgrey',
      }} variant="outlined">

            <CardContent>
              <Typography className = {styles.cardLarge} variant="h1" component="h2" color="blue" gutterBottom>
                  <center>Personal Websites</center>        
              </Typography>

              <Typography variant="h9" component="h4" color="blue" gutterBottom>
With the increasing dependence and usage of online social media networks and tools for schooling, productivity, and especially connecting, the idea of personal websites is growing more relevant by the day. Personal websites are a genre of media studies that have a variety of purposes, such as displaying one’s work for anyone to see and centralizing all relevant pieces of information of a person. These have existed for a while, but have evolved significantly partly due to the changing structure and usage of the world wide web. In addition, they now serve as an ever-growing essential part of one’s digital identity and personal branding. This idea revolves around the need of having a well-organized mechanism for showing who you are in order to not only get more future opportunities, but make important connections with other people for prosperity. Personal websites have formally institutionalized the art of digital personal identity. 
              </Typography>
              <br></br>
                            <Typography variant="h9" component="h4" color="blue" gutterBottom>

One specific area where personal websites are concretely affecting a community is college students and recently graduated college students at the forefront of entering the workforce. A more competitive job market means the opportunity cost of not having a personal website is slowly becoming necessarily high. Modern job applications have normalized an input text field asking for a personal website link. While this field might not be a requirement as of yet, this webpage will point out that de facto, it might as well be. 
              </Typography>
                            <br></br>

<Typography variant="h9" component="h4" color="blue" gutterBottom>
This webpage will argue that the genre of personal websites is here to stay as the widespread usage of the world wide web will make this genre a norm for gaining future connections and opportunities in addition to building a robust online digital identity. There will be information included on the evolution of personal websites in addition to a dissection of the interface/content of many personal websites. This website will also look closer at a case study of college students and recently graduated college students utilizing personal websites in order to enter the workforce successfully.
</Typography>

<br></br>
<br></br>
<center>
<div style = {{color : "red"}}><strong>
We first look at the evolution of personal websites from the 1990s onwards as the changes in personal websites dictate changes in digital identity.
</strong>
</div>
</center>
            </CardContent>

      <center>
            <Link href={{ pathname: '/Evolution'}}>
                    <Button variant="contained" color="primary">Evolution of Personal Websites</Button>
            </Link>
          <p></p>
    <p></p>
     </center>

      </Card>

        <p></p>


      </div>
        
      </main>

    </div>
  )

}
import Head from 'next/head';
import Link from 'next/link';
import React, { useState, useEffect } from "react";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from "axios";
import Phenomenological from './Phenomenological';
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
        <title>Media Infrastructure</title>
      </Head>

      <main>

          <div>

          <Card variant="outlined">

            <CardContent>
              <Typography className = {styles.cardLarge} variant="h1" component="h2" color="blue" gutterBottom>
                  <center>WBUR-FM</center>        
              </Typography>


              <Typography variant="h7" component="h2" color="blue" gutterBottom>
                  <center>The WBUR-FM Radio Station (90.9 MHz Frequency) is also branded as 90.9 WBUR. It is a public radio station located in Boston, MA. It is a large station as compared to other NPR member stations in the City of Boston. It is largely a station based on a news/talk format as many programs revolve around daily highlights, moments, movements, cultural shifts, and general news/topics via many different programs hosted by many individuals. </center>        
              </Typography>

            </CardContent>

      <center>
            <Link href={{ pathname: '/Phenomenological'}}>
                    <Button variant="contained" color="primary">Phenomenological</Button>
            </Link>
          <p></p>
            <Link href={{ pathname: '/PublicRecord'}}>
                    <Button variant="contained" color="primary">Public Record</Button>
            </Link>

            <p></p>

            <Link href={{ pathname: '/Bibliography'}}>
                    <Button variant="contained" color="primary">Bibliography</Button>
            </Link>
    <p></p>
     </center>



      </Card>

        <p></p>

        <center><p>The phenomenological approach to destructing the WBUR-FM Radio Station Channel along with the knowledge of the public record of the station yields a decent picture as to the wide range of programs and services offered. These two approaches come together nicely as the contextualization of the station fits will with some of the information easily accessible to anyone, thus painting a picture of the impact of this station in informing individuals and cultivating a civil discourse and information distribution. The investigation overall has revealed that the impact of the physical radio landscape of the United States is here to stay as people do like the authentic and reliable nature of old media reinvigorated in the modern day. The station also connects many localities while also being connected via a network all over the country, similar to the Internet network. Future upgrades will bring this traditionally seen as more correlated with physical location into more of a media node within a large network of other nodes, thus establishing a really valuable set of connections that will be hard to reform or eliminate.  </p></center>


      </div>
        
      </main>

    </div>
  )

}
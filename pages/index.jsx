import Head from 'next/head';
import Link from 'next/link';
import React, { useState, useEffect } from "react";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from "axios";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import styles from './app.module.css';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';


export default function App() {

  const handleClick = (e) => {
    e.preventDefault();
    return;
 }

  return (

    <div >
      <Head>
        <title>FireRoad053</title>
      </Head>

      <main>

          <div>

          <Card style={{
        backgroundColor: 'rgb(224, 20, 20)'}} variant="outlined">

            <CardContent>
              <Typography className = {styles.cardLarge} variant="h1" component="h2" color="blue" gutterBottom>
                  <center>FireRoad053</center>        
              </Typography>
              <center>
              <img src = "https://fireroad.mit.edu/catalogs/fireroad_logo.png" ></img>
              </center>
            </CardContent>

      </Card>

<center>
         <Typography variant="h3" component="h3" color="textSecondary" gutterBottom>
                  You can light your path through MIT with other course scheduling services. But only FireRoad053 can reasonable <div style={{color:"blue"}}><i><strong>OPTIMIZE</strong></i></div> your journey through this mystical land.
              </Typography>
              <br></br>
                            <Typography variant="h9" component="h4" color="textSecondary" gutterBottom>
FireRoad053 is the new best way to plan your path through MIT. Plan for both the upcoming semester and the years ahead, all in one place. You can view up-to-date course requirements and browse subjects.
              </Typography>
<br></br>
            <Link href={{ pathname: '/Classes'}}>
                    <Button variant="contained" color="textSecondary">Play around with classes information!</Button>
            </Link>
          <br></br>
          <br></br>
          <br></br>

            <Link href={{ pathname: '/Input'}}>
                    <Button variant="contained" color="textSecondary">Enter Information To Plan Your Classes!</Button>
            </Link>


</center>


      </div>
        
      </main>

    </div>
  )

}

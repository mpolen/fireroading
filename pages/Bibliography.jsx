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
import Breadcrumbs from '@material-ui/core/Breadcrumbs';


export default function Bibliography(props) {

  const handleClick = (e) => {
    e.preventDefault();
    return;
 }

    return (
        <div>
            <Head>
                <title>Bibliography</title>
            </Head>

            <Breadcrumbs aria-label="breadcrumb">

            <Link color="inherit" href="/Main" onClick={handleClick}>
              Main Page
            </Link>
            <Link color="inherit" href="/Bibliography" onClick={handleClick}>
            Bibliography
            </Link>

            </Breadcrumbs>

            <Typography className = {styles.cardLarge} variant="h3" component="h2" color="blue" gutterBottom>
                      <center>Bibliography</center>        
            </Typography>  

            <center>

            <Typography className = {styles.cardLarge} variant="h5" component="h2" color="blue" gutterBottom>
            <div class="csl-bib-body">
            <p></p>
            <div class="csl-entry"><i>About</i>. https://www.wbur.org/about. Accessed 9 Mar. 2021.</div>
            <p></p>
            <div class="csl-entry">Bush, Vannevar. <i>Memex Revisited</i>.</div>
            <p></p>
            <div class="csl-entry">“Home Page Top Stories.” <i>NPR.Org</i>, https://www.npr.org/. Accessed 9 Mar. 2021.</div>
            <p></p>
            <div class="csl-entry"><i>OUT OF FILE, OUT OF MIND – A Barthesian Analysis of Vismann</i>. https://blogs.brown.edu/elizabethfalkenberg/. Accessed 9 Mar. 2021.</div>
            <p></p>
            <div class="csl-entry">Parks, Lisa. <i>Earth Observation and Signal Territories</i>.</div>
            <p></p>
            <div class="csl-entry">“Public Radio International.” <i>Wikipedia</i>, 23 Feb. 2021. <i>Wikipedia</i>, https://en.wikipedia.org/w/index.php?title=Public_Radio_International&amp;oldid=1008536991.</div>
            <p></p>
            <div class="csl-entry">Vismann, Cornelia. <i>Out of File, Out of Mind</i>.</div>
            <p></p>
            <div class="csl-entry"><i>WBUR | College of Communication</i>. https://www.bu.edu/com/tag/wbur/. Accessed 9 Mar. 2021.</div>
            <p></p>
            <div class="csl-entry">“WBUR-FM.” <i>Wikipedia</i>, 3 Jan. 2021. <i>Wikipedia</i>, https://en.wikipedia.org/w/index.php?title=WBUR-FM&amp;oldid=998036237.</div>
            <p></p>
            <div class="csl-entry"><i>WBUR-FM - FM Station Profile - FCC Public Inspection Files</i>. https://publicfiles.fcc.gov/fm-profile/wbur-fm. Accessed 9 Mar. 2021.</div>
            <p></p>
            <div class="csl-entry"><i>WBUR-FM 90.9 MHz - Boston, MA</i>. https://radio-locator.com/info/WBUR-FM. Accessed 9 Mar. 2021.</div>
            </div>    
           </Typography>
           </center>

        </div>
      )
  }
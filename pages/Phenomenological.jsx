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


export default function Phenomenological(props) {

  const handleClick = (e) => {
    e.preventDefault();
    return;
 }

    return (
        <div>
            <Head>
                <title>Phenomenological</title>
            </Head>

            <Breadcrumbs aria-label="breadcrumb">

            <Link color="inherit" href="/Main" onClick={handleClick}>
              Main Page
            </Link>
            <Link color="inherit" href="/Phenomenological" onClick={handleClick}>
            Phenomenological
            </Link>

            </Breadcrumbs>

                  <Typography className = {styles.cardLarge} variant="h3" component="h2" color="blue" gutterBottom>
                      <center>Phenomenological</center>        
                  </Typography>


            <Typography className = {styles.cardLarge} variant="h5" component="h2" color="blue" gutterBottom>
                      <center>Sensual Contextualization</center>        
           </Typography>

                      <center>

                        <p>From the scene of the WBUR-FM Radio Station Channel in Boston, there is evidence of chaotic goodness. The railroad tracks and the onslaught of cars and noise along a busy section of an urban city makes the overall atmosphere more layered. This is similar to the idea of information overload as was mentioned in many articles in New Media, Old Media as there is a sense of sensory overload with many stimuli surrounding the physical media of the WBUR-FM Radio Station Channel. There seems to be juxtaposition, however, with the fact that it might not be easily visible in the forest of other distractions and other components of urban life, such as transportation, retail stores, dining, and other features and senses of a city and an urban college campus.</p>
                        
                        <p>In all of this though, there was a sense of enormity as the entire physical building of the radio station was quite clear with a label that clearly identified the “broadcast center.” In addition, the clear and bold publicizing of the brand WBUR made the entire infrastructure more appealing to the human eye than it might have been. While it is easier to notice other physically smaller and societally big media on your phone while walking past the broadcast station, there was a sense that this is something unique and almost traditional as curiosity seemingly peaked. This is often the result of the perception that the old media has real authentic nature that people seem to realize they need since they are not fully consumed by it in their lives. </p>
                        
                        <p>The hustling and bustling of sensory overload was likely lower due to the COVID-19 pandemic and also varies depending on the time, day, and year of the visit. For instance, the atmosphere surrounding the radio station is clearly different when the natural distractions are lower versus when they are not and you get an opportunity to closer see the media and infrastructure around you. </p>
                     

                        <p>The clearest observation about the WBUR-FM Radio is the physicality of the building and the infrastructure. This makes it more real and authentic to an outside observer seeking to observe. The physicality is similar to the physicality of the computer or another device, perhaps a Memex in the future, where the relied usage of these physical tools have made their physicality a back-thought rather than a recurring thought. In other words, people often are more used to the media applications on their phones versus the actual physical phone itself. </p>
                      </center>        

            <Typography className = {styles.cardLarge} variant="h5" component="h2" color="blue" gutterBottom>
                      <center>Accessibility</center>        
           </Typography>

           <center>

<p>While seeing enabled the observer to be able to seek out the atmosphere and physical contextualization of the radio station, the lack of accessibility to the inside of the radio station made it ambiguous for the observer to be able to perceive or understand the operations, purpose, goal, vision, and programming of the radio station. The information about being a general public radio station focusing on items like the news was seemingly deduced well from the senses as the general facade of the infrastructure made it seem like more professionally or systematically organized, as opposed to other facades where the chaotic colors or the publicizing of the brand makes it seem like an entertainment-focused or some other category- focused radio station. This deduction was also personally justified due to some prior natural exposures to the infrastructure and the general location in addition to base knowledge about the station’s essence. </p>

<p>The lack of accessibility into the station’s details is largely intentional as providing all details on location accessible to the general public will further create more information overload and prevent the proper contextualization of the radio station. With so much information, people might choose to block incoming data as the idea of “out of file, out of mind” is clearly in play here. They may also seemingly just miss the location and be uncurious as some people might be too consumed with other media formats, perhaps more familiar ones through names and clearer recognition.</p>

          <Typography className = {styles.cardLarge} variant="h5" component="h2" color="blue" gutterBottom>
                      <center>Larger Space Contextualization</center>        
           </Typography>

        <p>The location of the WBUR-FM Radio Station Channel is 890 Commonwealth Avenue, Boston, MA 02215. The larger space surrounding the media infrastructure includes the campus of Boston University, the streets of Commonwealth Avenue, Boston University Bridge, Massachusetts Turnpike, and St.Paul Street, and the general regions of Back Bay West, Cottage Farm Historic District, and North Brookline. The larger space of Boston University fits in nicely as the owner of the WBUR-FM is Boston University and the City of License is Boston. The surrounding neighborhood is an ideal place for the original point of the station in order to ensure the greatest reach in the most efficient manner for a media infrastructure. This also fits in as the closer to the media infrastructure, the more opportunities there are to be able to modify and sustain the different purposes of the radio station from the home base of Boston University, which itself is a large space within an urban setting. </p>
          
           </center>


        </div>
      )
  }
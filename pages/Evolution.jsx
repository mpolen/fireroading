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


export default function Evolution(props) {

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
            <Link color="inherit" href="/Evolution" onClick={handleClick}>
            Evolution of Personal Web Pages
            </Link>

            </Breadcrumbs>

                  <Typography className = {styles.cardLarge} variant="h3" component="h2" color="blue" gutterBottom>
                      <center>Evolution of Personal Websites</center>        
                  </Typography>

        <p></p>
        <p></p>
            <Typography className = {styles.cardLarge} variant="h5" component="h2" color="blue" gutterBottom>
                      <center>1990s</center>        
           </Typography>

                      <center>
<p>
The internet phenomenon started to pick up speed in the 1990s when many Internet Service Providers provided opportunities for some users to create a simple web page. Some web hosting services played a large role in this effort by providing guided structure and content for these sites. As Lev Manovich mentions in his The Language of Cultural Interfaces, a typical Human-Computer Interface(HCI) around 1997 would resemble a “magazine layout from the same decade (37).” The pages of the web page would be “dominated by text-headlines, hyperlinks, blocks of copy.” In the genre of personal websites, the early content was also in the form of text, such as to-do lists, basic creator information, and numerous links. The reach of this simple page was certainly limited in this time period as compared to the modern day, thus the intent while creating this page was not linked heavily with publicizing a personal brand. Instead, they often were used as home pages for a creator’s personal desktop and browser. 
</p>
                      </center>        

            <Typography className = {styles.cardLarge} variant="h5" component="h2" color="blue" gutterBottom>
                      <center>2000s</center>        
           </Typography>
        <p>
        The turn of the century saw the growth of more intuitive web pages that started to incorporate the ideas of user interface and user experience, nominally known as UI/UX. User experience defines the way that a user interacts with a web page while the user interface is the space itself that allows the interaction to occur between human and computer. These ideas cannot be separated as articulated by J.P. Djajadiningrat, W.W. Gaver, and J.W. Frens in their research paper Interaction Relabelling and Extreme Characters: Methods for Exploring Aesthetic Interactions: “aesthetics and interaction are tightly interwoven, so that the aesthetics of a product must be shaped according to its functions and roles, and its interactions must be judged by their aesthetic qualities—both sensory and conceptual.” The webpage of the early 2000s was built for soft-scale documentation of one’s daily life, especially in the form of blogs. These were made accessible by an interface that allowed anyone to simply collect and publish their thoughts with the ease of several simple clickable actions. At the same time, there were other growing services that allowed creators to manage their content and build more and more layered static web pages in a style known as Web 1.0 style, which resolved around static text and media displayed on web pages. 
</p>
           <center>


          <Typography className = {styles.cardLarge} variant="h5" component="h2" color="blue" gutterBottom>
                      <center>2010s</center>        
           </Typography>

<p>
There was a dramatic rise in interactiveness of personal websites as the idea of them being mechanisms for maintaining a digital presence started to take serious shape. From amateurs to professionals, people were able to utilize growing user-oriented tools to customize their web page, such as by adding a comment section, contact page, and clickable images. Web 2.0 style allowed for dynamic media that is existent in today’s personal websites. Personal websites were slowly starting to be recognized for their role in centralizing all of a job candidate’s information for recruiters and hiring managers. In particular, resumes were starting to be hosted online for easier and more effective visibility. While this purpose was still relatively new, it would be only a matter of time when personal websites would increase in complexity, usage, and influence, especially in an economic sense.  
</p>
       </center>

        </div>
      )
  }
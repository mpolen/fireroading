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


export default function JobMarket(props) {

    const handleClick = (e) => {
        e.preventDefault();
        return;
     }

    return (
        <div>
            <Head>
                <title>Job Market</title>
            </Head>

            <Breadcrumbs aria-label="breadcrumb">

            <Link color="inherit" href="/Main" onClick={handleClick}>
              Main Page
            </Link>
            <Link color="inherit" href="/JobMarket" onClick={handleClick}>
            Job Market
            </Link>

            </Breadcrumbs>

                  <Typography className = {styles.cardLarge} variant="h3" component="h2" color="blue" gutterBottom>
                      <center>Job Market</center>        
                  </Typography>

                      <center>

                      <center>
                      
                      <p>
                      It would be an understatement to state that today’s job market is competitive. The avalanche of a growing digital economy, automation, and accessibility of education on the world wide web, among others, is causing an increase in the number of qualified candidates. Of course, there are dramatic increases in the number of workers for certain rising fields like computer science, data science, and climate science, and decreases in the number of workers for certain less prominent fields like photography and philosophy, among others. 
                        </p>
                    
                      <p>
                      This was true before the advent of the COVID-19 pandemic. However, this is even more true amidst the COVID-19 pandemic as the state of world affairs has uprooted the workforce. With so much losses and destruction, corporations and businesses have had to lay off many people and/or keep only workers who are the most critical in its operations. According to the Current Population Survey of the U.S. Census Bureau and U.S. Bureau of Labor Statistics, the unemployment rates for college graduates and young workers hit the highest peaks of the past several decades last year. In addition, a study completed by the Wall Street Journal based on data from a labor-market analytic firm found that hiring for entry-level college graduate positions has fallen 45% since the start of the pandemic. While the outlooks for these groups are looking better, the economy takes time and the repercussions of the pandemic are going to last significantly long. In short, the job market is unstable and very competitive, especially in modern day due to the pandemic. 
                      </p>

                      <p>
                      The state of affairs for the current job market suggests an even greater need for the genre of personal websites. In order to navigate the competitive job market, one would likely need to utilize the power of networking and connections in order to secure the next opportunity. In order to facilitate this, a personal website is the most effective way of showcasing one’s brand and essence to potential businesses and employers. With the advent of many different social media networks, it can be hard to centralize one’s digital profiles in one singular location. Personal websites make it easier to customize one’s brand and showcase one’s projects, resume, skills, and more. With the power of this genre known to employers, it is now virtually a necessary step for one to have a personal web page that can be publicly accessed by employers and future connections. 
</p>

<p>

As Erin Greenawald mentions in her blog “How My Personal Website Helped Me Land My Dream Job” on The Muse, there are several important reasons why a personal website is becoming more of a normality day by day: 

<p>
“I Could Show—Rather Than Tell—My Skills”
</p>
<p>
“I Stood Out From Other Applicants”
</p>
<p>
“I Could Control My Branding”
</p>
<p>
“I Was Able to Build My Network”
</p>
<p>
“I Was Easily Found”
</p>
</p>
                    </center>

                      </center>        
            <p></p>


        </div>
      )
  }
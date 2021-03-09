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


export default function PublicRecord(props) {

    const handleClick = (e) => {
        e.preventDefault();
        return;
     }

    return (
        <div>
            <Head>
                <title>Public Record</title>
            </Head>

            <Breadcrumbs aria-label="breadcrumb">

            <Link color="inherit" href="/Main" onClick={handleClick}>
              Main Page
            </Link>
            <Link color="inherit" href="/PublicRecord" onClick={handleClick}>
            Public Record
            </Link>

            </Breadcrumbs>

                  <Typography className = {styles.cardLarge} variant="h3" component="h2" color="blue" gutterBottom>
                      <center>Public Record</center>        
                  </Typography>

                      <center>

                        <p>There is a decent amount of information publicly available for WBUR-FM Radio Station since it serves many people in an urban city and is a powerful member station of the National Public Radio(NPR) and is affiliated with Public Radio International(PRI), which is another provider of programming for public radio stations in the United States. Public information about this media includes basic technical details, such as Effective Radiated Power(ERP), programming, general history, and general relationship to overall radio infrastructural landscape. However, there is not much public information about the details and decisions about relevant initiatives, programs, future ambitions, and new methods of outreach in this rapidly changing media landscape. In addition, due to the relatively large scope of the station, finding a public record of smaller stations outside of the NPR network that interact with the station is ambiguous. Clearly, the other member stations and potential minor signals from the urban radio landscape do interact, going and coming from other locations around Boston and the general greater Metro area as the coverage for the station seems to be expanding, thus more interaction occurs. </p>

                      </center>        

            <Typography className = {styles.cardLarge} variant="h5" component="h2" color="blue" gutterBottom>
                      <center>Connectivity</center>        
           </Typography>

           <center>

            <p>WBUR-FM Radio Station Channel is one node in a network of other channels that have different programming and features, along with physical locations. WBUR-FM is a NPR member station, meaning it is already affiliated with the National Public Radio, whose mission is to promote a more informed public that can synthesize and digest information via events, culture, and ideas across physical localities. This is largely done via different member stations as the local stations serve their local communities best as it is directly relatable to the people who listen to it. Of course, the reach of these local member stations can also be optimized. WBUR-FM is part of a network of NPR member stations that is not directly owned by governmental institutions as many member stations are due to Congressional action; Instead, the WBUR-FM station is owned by Boston University. The station is the largest station out of a network of 3 NPR member stations in the City of Boston, including WGBH and WUMB-FM. WBUR in general also has programming via other connections for Cape Cod, etc., namely WBUH for Brester, MA and WBUA in Tisbury, MA. </p>

          <Typography className = {styles.cardLarge} variant="h5" component="h2" color="blue" gutterBottom>
                      <center>Ownership</center>        
           </Typography>

            <p>The WBUR-FM Radio Station Channel is owned by Boston University, located in Boston, MA. It has various initiatives, programs, and connections in order to manage various functions of the public radio station, especially through the Boston University College of Communication and several fellowships. The station also maintains various levels of memberships, such as Sustaining Members, Donors, and Members. The station also has various governmental committees and boards in order to help manage it, such as the Communications Advisory Board, Board of Directors, Sounding Board, and WBUR Staff. As a large public radio station, it fits well to have a sound mechanism for ensuring continued sustainability.</p>          
           </center>


        </div>
      )
  }
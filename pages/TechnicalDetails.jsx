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


export default function TechnicalDetails(props) {

    const handleClick = (e) => {
        e.preventDefault();
        return;
     }

    return (
        <div>
            <Head>
                <title>Technical Details</title>
            </Head>

            <Breadcrumbs aria-label="breadcrumb">

            <Link color="inherit" href="/Main" onClick={handleClick}>
              Main Page
            </Link>
            <Link color="inherit" href="/PublicRecord" onClick={handleClick}>
            Public Record
            </Link>
            <Link color="inherit" href="/TechnicalDetails" onClick={handleClick}>
            Technical Details
            </Link>

            </Breadcrumbs>

                  <Typography className = {styles.cardLarge} variant="h3" component="h2" color="blue" gutterBottom>
                      <center>Technical Details</center>        
                  </Typography>      

            <Typography variant="h8" component="h8" color="blue" gutterBottom>
  
             <center>
             <p> <strong>Station Status:</strong> Licensed Class B Non-Commercial FM Station </p>
             <p> <strong>Digital Status:</strong> Transmits in digital </p>
             <p> <strong>Effective Radiated Power:</strong> 8600 Watts </p>
             <p> <strong>Height above Avg. Terrain:</strong> 357.8 meters (1174 feet) </p>
             <p> <strong>Height above Ground Level:</strong> 353.7 meters (1160 feet) </p>
             <p> <strong>Height above Sea Level:</strong> 400.6 meters (1314 feet)</p>
             <p> <strong>Antenna Pattern:</strong> Directional</p>
             <p> <strong>License Granted: </strong> August 09, 2017 </p>
             <p> <strong>License Expires: </strong> April 01, 2022 </p>
             <p> <strong>Last FCC Update: </strong> February 14, 2018 </p>
             <p> <strong>WBUR-FM Channel: </strong> 215B 90.9 MHz </p>
             <p> <strong>Facility ID: </strong> 68241 </p>
             <p> <strong>Service:  </strong> FS - A full service FM station auxiliary transmitting antenna or application </p>
             <p> <strong>Facility Service: </strong> FM Analog & Digital </p>
             <p> <strong>Application File Number: </strong> BXMLED-20051007ABU</p>
             <p> <strong>Transmitter Output Power: </strong> 13 kW  </p>
             <p> <strong>Facility Type: </strong> Non-Commercial Educ. FM </p>
             <p> <strong>Licensee: </strong> The Trustees Of Boston University </p>
             <p> <strong>Transmitter Location: </strong>  </p>
             <iframe src="https://www.google.com/maps/embed?pb=!4v1615264059569!6m8!1m7!1sHFlZ7kcuyVRGCOOYglv8Rg!2m2!1d42.30696814075178!2d-71.22337553303419!3f107.11518450967918!4f10.970220800697689!5f0.7822174996792572" width="600" height="450"  allowfullscreen="" loading="lazy"></iframe>

             </center>

             </Typography> 






        </div>
      )
  }
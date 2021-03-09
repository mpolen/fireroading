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


export default function Programming(props) {

    const handleClick = (e) => {
        e.preventDefault();
        return;
     }

    return (
        <div>
            <Head>
                <title>Programming</title>
            </Head>

            <Breadcrumbs aria-label="breadcrumb">

            <Link color="inherit" href="/Main" onClick={handleClick}>
              Main Page
            </Link>
            <Link color="inherit" href="/PublicRecord" onClick={handleClick}>
            Public Record
            </Link>
            <Link color="inherit" href="/Programming" onClick={handleClick}>
            Programming
            </Link>

            </Breadcrumbs>

                  <Typography className = {styles.cardLarge} variant="h3" component="h2" color="blue" gutterBottom>
                      <center>Programming</center>        
                  </Typography>      

  
             <center>
             <iframe src="https://s3.amazonaws.com/static.wbur.np/sites/www.wbur.org/schedule.pdf" width="100%" height="899px">

            </iframe> 

             </center>








        </div>
      )
  }
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

            <Typography className = {styles.cardLarge} variant="h5" component="h2" color="blue" gutterBottom>
                    <p>https://radio-locator.com/info/WBUR-FM
                    https://en.wikipedia.org/wiki/WBUR-FM
                    https://www.npr.org
                    https://en.wikipedia.org/wiki/Public_Radio_International
                    https://www.bu.edu/com/tag/wbur/
                    https://www.wbur.org/about
                    https://publicfiles.fcc.gov/fm-profile/wbur-fm
                    </p>      
           </Typography>

        </div>
      )
  }
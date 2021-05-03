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
        <div style={{
        backgroundColor: 'lightgrey',
      }} >
            <Head>
                <title>Bibliography</title>
            </Head>

            <Breadcrumbs aria-label="breadcrumb">

            <Link color="inherit" href="/Main" onClick={handleClick}>
              Main Page
            </Link>
            <Link color="inherit" href="/Evolution" onClick={handleClick}>
            Evolution of Personal Web Pages
            </Link>
            <Link color="inherit" href="/JobMarket" onClick={handleClick}>
            Job Market
            </Link>
            <Link color="inherit" href="/CaseStudy" onClick={handleClick}>
            Case Study
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
  <div class="csl-entry">Djajadiningrat, J. P., et al. “Interaction Relabelling and Extreme Characters: Methods for Exploring Aesthetic Interactions.” <i>Proceedings of the Conference on Designing Interactive Systems Processes, Practices, Methods, and Techniques - DIS ’00</i>, ACM Press, 2000, pp. 66–71. <i>DOI.org (Crossref)</i>, doi:10.1145/347642.347664.</div>
  <br></br>
  <div class="csl-entry">“How My Personal Website Helped Me Land My Dream Job.” <i>The Muse</i>, https://www.themuse.com/advice/how-my-personal-website-helped-me-land-my-dream-job. Accessed 3 May 2021.</div>
    <br></br>
  <div class="csl-entry">Manovich, Lev. “The Language of Cultural Interfaces.” <i>New Media, Old Media</i>.</div>
    <br></br>
  <div class="csl-entry">“Personal Web Page.” <i>Wikipedia</i>, 18 Dec. 2020. <i>Wikipedia</i>, https://en.wikipedia.org/w/index.php?title=Personal_web_page&amp;oldid=995000126.</div>
    <br></br>
  <div class="csl-entry">Sigelman, Jeffrey Selingo and Matt. “The Crisis of Unemployed College Graduates.” <i>Wall Street Journal</i>, 4 Feb. 2021. <i>www.wsj.com</i>, https://www.wsj.com/articles/the-crisis-of-unemployed-college-graduates-11612454124.</div>
    <br></br>
  <div class="csl-entry"><i>The Labor Market for Recent College Graduates - FEDERAL RESERVE BANK of NEW YORK</i>. https://www.newyorkfed.org/research/college-labor-market/index.html. Accessed 3 May 2021.</div>
    <br></br>
  <div class="csl-entry">thomasfrank. “The Essential Components of a Personal Website (Examples Included).” <i>College Info Geek</i>, 27 Mar. 2014, https://collegeinfogeek.com/essential-components-of-personal-websites/.</div>
</div>
           </Typography>
           </center>

        </div>
      )
  }
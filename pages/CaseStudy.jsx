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


export default function CaseStudy(props) {

  const handleClick = (e) => {
    e.preventDefault();
    return;
 }

    return (
        <div>
            <Head>
                <title>Case study</title>
            </Head>

            <Breadcrumbs aria-label="breadcrumb">

            <Link color="inherit" href="/Main" onClick={handleClick}>
              Main Page
            </Link>
            <Link color="inherit" href="/CaseStudy" onClick={handleClick}>
            Case Study
            </Link>

            </Breadcrumbs>

                  <Typography className = {styles.cardLarge} variant="h3" component="h2" color="blue" gutterBottom>
                      <center>Case Study</center>        
                  </Typography>

        <p></p>
        <p></p>
            <Typography variant="h5" component="h2" color="blue" gutterBottom>
                      <center>Imagine you are a graduating college senior looking for an entry-level position. You have a robust LinkedIn account that you try to maintain in order to showcase your experience, skills, certifications, and education. You have not received any job offer yet. You have heard of the sentiment that personal websites can be a game changer to make you stand out and get you noticed for a job. You are trying to replicate and improve your digital presence from LinkedIn to a personal website. </center>        
           </Typography>      


           <center>

          <Typography className = {styles.cardLarge} variant="h5" component="h2" color="blue" gutterBottom>
                      <center>Why LinkedIn or Personal Website?
</center>        
           </Typography>

<table>
<tbody>
<tr >
<td><br /><strong>Personal Website</strong></td>
<td ><strong>LinkedIn</strong></td>
</tr>
<tr >
<td ><br />
<table>
<tbody>
<tr>
<td>
<p><span>A personal website offers a more customizable mechanism for showcasing your digital profile with options for including any content that you want to highlight to connections and employers. You can integrate other tools, such as LinkedIn, via links and other modes of interactivity of the HTML programming language/other content management systems.&nbsp;</span></p>
</td>
</tr>
</tbody>
</table>
</td>
<td><br />
<table>
<tbody>
<tr>
<td>
<p><span>A systematic layout allows anyone to view specific sections, like your skills and experiences, that can be easily managed. You can specifically connect with other individuals in a mutualistic manner and view their updates and happenings in an infinitely long scrolling feed.&nbsp;</span></p>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
       </center>

                 <Typography className = {styles.cardLarge} variant="h5" component="h2" color="blue" gutterBottom>
                      <center>Features
</center>        
           </Typography>
<table>
<tbody>
<tr >
<td ><strong>Feature</strong></td>
<td ><br />
<table>
<tbody>
<tr>
<td>
<p><strong>Personal Website&nbsp;</strong></p>
</td>
</tr>
</tbody>
</table>
</td>
<td ><strong>LinkedIn</strong></td>
</tr>
<tr >
<td ><br />
<table>
<tbody>
<tr>
<td>
<p><strong>Personal Image</strong></p>
</td>
</tr>
</tbody>
</table>
</td>
<td ><br />
<table>
<tbody>
<tr>
<td>
<p><span >You can embed any images, videos, and other media on a personal website, including changing the way it is formatted, from filtered to rounded to front-and-center to dynamically sized. Your creativity and style is showcased through the inclusion or exclusion of certain media elements.</span></p>
</td>
</tr>
</tbody>
</table>
</td>
<td ><br />
<table>
<tbody>
<tr>
<td>
<p><span>You can add any singular size-comptable image as your profile picture that is visibly seen inside a fixed rounded circle. You can also add a larger fixed rectangular background image meant to add an aesthetically pleasing sidekick to your profile picture.&nbsp;&nbsp;&nbsp;</span></p>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
<tr >
<td ><strong>About</strong></td>
<td><br />
<table>
<tbody>
<tr>
<td>
<p><span >You can create an extra page to include an &ldquo;About Me&rdquo; section detailing your biography of any length. This is meant to introduce yourself to visitors of your site. Any font, colors, templates, structure, and pattern can be used to format and showcase your style.</span></p>
</td>
</tr>
</tbody>
</table>
</td>
<td ><br />
<table>
<tbody>
<tr>
<td>
<p><span >You can populate a summary section that appears near the top of your LinkedIn Profile. There is a standard fixed font type and size used in this section, which is also constrained to 2000 characters.</span></p>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
<tr >
<td ><strong>Experience</strong></td>
<td ><br />
<table>
<tbody>
<tr>
<td>
<p><span >You can create an extra page to include your experiences/any other relevant information on the website by either creating a manual list or by using any of the thousands of programming third-party packages that are ready for use for many different purposes in terms of displaying information, such as drag/drop, timeline, etc.&nbsp;</span></p>
</td>
</tr>
</tbody>
</table>
</td>
<td ><br />
<table>
<tbody>
<tr>
<td>
<p><span >You can populate and edit your experiences in that specific section. You have to enter the title, employment type, company, location, start date, and description, in addition to optionally including any media of a supported type, which only includes .pdf, .ppt, .jpg, .png, and .gif.</span></p>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
<tr >
<td ></td>
<td ></td>
<td ></td>
</tr>
<tr >
<td ></td>
<td ></td>
<td></td>
</tr>
<tr >
<td ></td>
<td ></td>
<td >&nbsp;</td>
</tr>
<tr >
<td >&nbsp;</td>
<td >&nbsp;</td>
<td >&nbsp;</td>
</tr>
<tr >
<td >&nbsp;</td>
<td >&nbsp;</td>
<td >&nbsp;</td>
</tr>
<tr >
<td >&nbsp;</td>
<td >&nbsp;</td>
<td>&nbsp;</td>
</tr>
</tbody>
</table>


        </div>
      )
  }
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
        <div style={{
        backgroundColor: 'lightgrey',
      }} >
            <Head>
                <title>Case study</title>
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
          <br></br>
          <br></br>
          <br></br>


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
<img width="500"  src = "https://collegeinfogeek.com/wp-content/uploads/2012/03/How-to-Build-a-Personal-Website-in-2020.jpg"></img>
<br></br>
<br></br>

            </center>

                 <Typography className = {styles.cardLarge} variant="h5" component="h2" color="blue" gutterBottom>
                      <center>Features
            </center>        
           </Typography>
<table >
<tbody>
<tr >
<td ><strong>Feature</strong></td>
<td >
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
<td >
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
<td >
<table>
<tbody>
<tr>
<td>
<p><span >You can add any singular size-comptable image as your profile picture that is visibly seen inside a fixed rounded circle. You can also add a larger fixed rectangular background image meant to add an aesthetically pleasing sidekick to your profile picture.&nbsp;&nbsp;&nbsp;</span></p>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
<tr >
<td ><strong>About</strong></td>
<td >
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
<td >
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
<td >
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
<td >
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
<td >&nbsp;<strong>Education</strong></td>
<td >
<table>
<tbody>
<tr>
<td>
<p><span >You can include pictures, links, and descriptions of your different educational institutions in a nicely formatted timeline or linear progression user interface. This helps exhibit your education, which is a key indicator for future professional success.</span></p>
</td>
</tr>
</tbody>
</table>
</td>
<td >
<table>
<tbody>
<tr>
<td>
<p><span >You can include fixed information of your school, such as the name, field of study, degree, duration, grade, activities, and description in addition to any external link. These parameters are fixed and no extra information can be nicely formatted.</span></p>
</td>
</tr>
</tbody>
</table>
&nbsp;</td>
</tr>
<tr >
<td >
<table>
<tbody>
<tr>
<td>
<p><strong>License and Certifications&nbsp;</strong></p>
</td>
</tr>
</tbody>
</table>
</td>
<td >
<table>
<tbody>
<tr>
<td>
<p><span >You can list specific links, license numbers, and proof in a list where each element can be expanded with a click or other interactive action. These help demonstrate your skills in action as you can even use some of those skills while creating your personal website.</span></p>
</td>
</tr>
</tbody>
</table>
</td>
<td >
<table>
<tbody>
<tr>
<td>
<p><span >There is a specific section for license and certifications that you can fill by providing name, issuing organization, date, credential ID, and credential link. LinkedIn does have the option of including licenses and certifications from its own LinkedIn Learning library, which consists of numerous courses, educational content, and skills assessment. There is a seamless way to add these to the profile.&nbsp;</span></p>
</td>
</tr>
</tbody>
</table>
&nbsp;</td>
</tr>
<tr>
<td >&nbsp;<strong>Skills</strong></td>
<td >
<table>
<tbody>
<tr>
<td>
<p><span>You can showcase your skills by noting it in a list or any other visual component with external links to examples of your work that demonstrates those skills to a future visitor.&nbsp;</span></p>
</td>
</tr>
</tbody>
</table>
</td>
<td >
<table>
<tbody>
<tr>
<td>
<p><span>You can add any specific or general skill that can be automatically filtered by category. In addition, other people in your network can endorse you for skills, further displaying that you are competent in that skill.</span></p>
</td>
</tr>
</tbody>
</table>
&nbsp;</td>
</tr>
<tr >
<td >
<table>
<tbody>
<tr>
<td>
<p><strong>Accomplishments/Press Mentions</strong></p>
</td>
</tr>
</tbody>
</table>
</td>
<td >
<table>
<tbody>
<tr>
<td>
<p><span >You can embed different links and media in order to showcase your accomplishments and press mentions directly from the source that can be accessed with just a click of a mouse.</span></p>
</td>
</tr>
</tbody>
</table>
&nbsp;</td>
<td >
<table>
<tbody>
<tr>
<td>
<p><span >You can add an accomplishment to only several different categories, such as courses, honors, awards, languages, projects, publications, and test scores. As there are no other options, these help demonstrate one&rsquo;s prior successes.</span></p>
</td>
</tr>
</tbody>
</table>
&nbsp;</td>
</tr>
<tr >
<td>
<table>
<tbody>
<tr>
<td>
<p><strong>Projects/Portfolio</strong></p>
</td>
</tr>
</tbody>
</table>
</td>
<td >
<table>
<tbody>
<tr>
<td>
<p><span >You can create an extra page that details and includes examples of your projects/portfolio. This can take any shape or form in an interactive manner where the user can engage with the project and be easily able to access the description, link, and scope. Instead of telling the visitor what you can do, you can easily show what you can do in an aesthetically pleasing manner.&nbsp;</span></p>
</td>
</tr>
</tbody>
</table>
</td>
<td >
<table>
<tbody>
<tr>
<td>
<p><span>Projects are a subcategory of the Accomplishments section as you have to enter name, date, description, and association of the project with an experience of yours. There are no other customizable properties as a user might need to leave your profile in order to engage with the project.</span></p>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
<tr >
<td >
<table>
<tbody>
<tr>
<td>
<p><strong>Personal Interests</strong></p>
</td>
</tr>
</tbody>
</table>
</td>
<td>
<table>
<tbody>
<tr>
<td>
<p><span >You can add any additional information that you want to highlight to your web page, such as interesting books you have been reading or your interests in global affairs, and your opinions.</span></p>
</td>
</tr>
</tbody>
</table>
</td>
<td >
<table>
<tbody>
<tr>
<td>
<p><span >You can follow certain organizations and businesses who have a LinkedIn profile in order to showcase your interest. There are no specific sections for adding any customizable information about your writing or personal interests.&nbsp;</span></p>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
<tr>
<td >
<table>
<tbody>
<tr>
<td>
<p><strong>Web Address</strong></p>
</td>
</tr>
</tbody>
</table>
</td>
<td >
<table>
<tbody>
<tr>
<td>
<p><span >You can use many hosting services to customize your web address for your digital website with potential subdomains in addition to purchasing a clean available address with your name. This can increase your visibility and raise your Search Engine Optimization(SEO) rank when someone googles your name.&nbsp;</span></p>
</td>
</tr>
</tbody>
</table>
</td>
<td >
<table>
<tbody>
<tr>
<td>
<p><span >You can customize the second half of your web address only as LinkedIn will appear on it. As so many people use LinkedIn, especially if you have a common name, it can be hard to get a high rank when you search your name, thus lowering your reach and visibility.&nbsp;</span></p>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>

<center>

<img width="500"  src = "https://www.linkedinsights.com/wp-content/uploads/2019/04/Stunningly-Student-04.png"></img>
</center>
<table >
<tbody>
<tr >
<td ><strong>Networking</strong></td>
<td >
<table>
<tbody>
<tr>
<td>
<p><span >You can share your personal website to any job applications or any other social media in the about/bio sections. This can direct new visitors to your page where they can get oriented to you and your digital brand.&nbsp;</span></p>
</td>
</tr>
</tbody>
</table>
</td>
<td >
<table>
<tbody>
<tr>
<td>
<p><span >LinkedIn is built on the idea of a social network, but for professional use as you can connect with others, who become part of your network. This can dramatically increase your visibility and provide you with more opportunities from your interactions with them, such as via comments, direct messaging, etc.</span></p>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
<tr >
<td >
<table>
<tbody>
<tr>
<td>
<p><strong>Contact/Social Media</strong></p>
</td>
</tr>
</tbody>
</table>
</td>
<td >
<table>
<tbody>
<tr>
<td>
<p><span >You can create an extra page centralizing all of your contact information, social media networks, and even offer a place for visitors to leave questions. In addition, you can customize and automate many of your external communications through third-party programmatic tools. This can make it easier and more efficient for you to be connected with connections.</span></p>
</td>
</tr>
</tbody>
</table>
</td>
<td >
<table>
<tbody>
<tr>
<td>
<p><span >You can direct message individuals in your network in addition to including some basic contact information in parts of your profile. There is no effective user interface for including other social media networks in LinkedIn, as LinkedIn is already a form of social media network.&nbsp;</span></p>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
<tr >
<td ><strong>Experience</strong></td>
<td >
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
<td >
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
<td ><strong>Resume</strong></td>
<td >
<table>
<tbody>
<tr>
<td>
<p><span >You can upload and link your resume to a singular location on the webpage, thus making it more accessible to anyone by simply providing a link. This can also make it easier for anyone to either download the resume onto their own computers or view it scattered through the webpage in a stylistic manner.&nbsp;</span></p>
</td>
</tr>
</tbody>
</table>
</td>
<td >
<table>
<tbody>
<tr>
<td>
<p><span >You can upload a resume that will appear near the top of your LinkedIn profile in a featured location, which only allows certain aspects of your profile to be featured. The LinkedIn profile itself resembles a structured resume itself for future connections to look at.</span></p>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
<tr >
<td ><strong>Blog</strong></td>
<td >
<table>
<tbody>
<tr>
<td>
<p><span >You can use existing content management systems to completely customize your blog and articles, which can be included in an entirely separate section of your website in order to present your writing, thinking, and style to future employers.&nbsp;</span></p>
</td>
</tr>
</tbody>
</table>
</td>
<td >
<table>
<tbody>
<tr>
<td>
<p><span >There is no structured layout for including personal blogs/writing in LinkedIn, especially without comprising the already rigid structure of a LinkedIn profile for different sections.&nbsp;</span></p>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
<tr >
<td ><strong>Recommendations</strong></td>
<td >
<table>
<tbody>
<tr>
<td>
<p><span >You can include recommendation letters and contact information for your recommenders in your webpage. This can elevate your position as validated by someone who has worked with you and endorses you for future professionalism.&nbsp;&nbsp;</span></p>
</td>
</tr>
</tbody>
</table>
</td>
<td >
<table>
<tbody>
<tr>
<td>
<p><span >Using LinkedIn&rsquo;s recommendation section, you can request a recommendation from a connection of yours, which will appear in a separate rigid position near the middle of your LinkedIn profile.</span></p>
</td>
</tr>
</tbody>
</table>
</td>
<td >
</td>
</tr>
<tr >
<td >
<table>
<tbody>
<tr>
<td>
<p><strong>Uniqueness</strong></p>
</td>
</tr>
</tbody>
</table>
</td>
<td >

<table>
<tbody>
<tr>
<td>
<p><span >A personal website is certainly growing in popularity, usage, influence, and visibility. However, many people still are not using it. Therefore, it can be a much more unique feature that can help you stand out from other individuals.</span></p>
</td>
</tr>
</tbody>
</table>
</td>
<td >
<table>
<tbody>
<tr>
<td>
<p><span >LinkedIn is a well-established platform that is used by many more people in a very structured manner as dictated by the layout of the platform. Therefore, LinkedIn is not as unique from a global perspective.</span></p>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
<tr >
<td ><strong>Accessibility</strong></td>
<td >
<table>
<tbody>
<tr>
<td>
<p><span >The personal website is not largely maintained or managed by a specific social media network. With a customized web address, the possibility of creating a robust and extensive personal website with a high search engine rank is possible.</span></p>
</td>
</tr>
</tbody>
</table>
</td>
<td >
<table>
<tbody>
<tr>
<td>
<p><span >Features like needing an account, LinkedIn Premium, and some people not being oriented with the platform can make the service less accessible as compared to a regular webpage that people likely have interacted with on the world wide web.</span></p>
</td>
</tr>
</tbody>
</table>
<p></p>
</td>
</tr>
</tbody>
</table>



                  <Typography style = {{color : "blue"}}variant="h5" component="h7" gutterBottom>
                      <center>Personal Websites</center>        
                  </Typography>
<br></br>
<center>
<iframe width="600" height="400" src="https://kennethfriedman.org/"></iframe>
<iframe width="600" height="400" src="https://www.drizzlerock.com/"></iframe>
<iframe width="600" height="400" src="https://www.willlangford.me/"></iframe>
</center>


<br></br>
<br></br>
<br></br>


<center>
<div style = {{color : "red"}}><strong>
Personal websites are making strides in maintaining a digital identity for individuals, especially those about to enter the workforce. The increasing relevance and influence of personal websites is here to stay.</strong>
</div>
<br></br>
<div style = {{color : "red"}}><strong>
Check out the Bibliography to look at various sources mentioned throughout this webpage.</strong>
</div>

<br></br>
            <Link href={{ pathname: '/Bibliography'}}>
                    <Button variant="contained" color="primary">Biblography</Button>
            </Link>
</center>
        </div>
      )
  }
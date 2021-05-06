import Head from 'next/head';
import Link from 'next/link';
import React, { useState, useEffect } from "react";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from "axios";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import styles from '..//app.module.css';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Course from "./Class";


export default function Classes(props) {

  const handleClick = (e) => {
    e.preventDefault();
    return;
 }

    const [course,setCourse] = useState("6.009")
    const [data,setData] = useState(props.data)

    // axios.get(`https://fireroad.mit.edu/courses/lookup/${course}`).then(res => {
    //     const classData = res.data;
    //     setData(classData);
    //   })

  // // Similar to componentDidMount and componentDidUpdate:
  // useEffect(() => {

  // },[]);

  return (

    <div >
      <Head>
        <title>FireRoad053 Classes</title>
      </Head>

      <main>

          <div>
          <Card style={{
        backgroundColor: 'rgb(224, 20, 20)'}} variant="outlined">

            <Breadcrumbs aria-label="breadcrumb">
              <Link color="primary" href="/" onClick={(event) => event.preventDefault()}>
                Home Page
              </Link>
            </Breadcrumbs>
            <CardContent>
              <Typography className = {styles.cardLarge} variant="h2" component="h2" color="blue" gutterBottom>
                  <center>FireRoad053</center>        
              </Typography>
              <center>
              <img width="100" height="100" src = "https://fireroad.mit.edu/catalogs/fireroad_logo.png" ></img>
              </center>
            </CardContent>

      </Card>

<br></br>
<br></br>


<center>
        <Typography variant="h6" component="h2" color="blue" gutterBottom>
            <center>Choose a class:</center>        
        </Typography>
      
      <Autocomplete
        id="class"
        freeSolo
        style={{
        width: 300,
      }}
        options={relevant_courses.map((option) => option)}
        renderInput={(params) => (
          <TextField {...params} label="Class" margin="normal" variant="outlined" />
        )}
        onChange={(event, value) => setCourse(value)}
      />

      <Course course = {course}> </Course>
</center>



      </div>
        
      </main>

    </div>
  )

}

const relevant_courses = ['18.06',
 '6.0001',
 '6.006',
 '6.042',
 '6.046',
 '6.009',
 '6.0002',
 '14.01',
 '14.32',
 '14.30',
 '6.036',
 '6.UAR',
 '14.05',
 '14.18',
 '6.207',
 '6.215',
 '14.64',
 '14.75',
 '14.41',
 '14.19',
 '14.26',
 '14.54',
 '14.64',
 '14.75',
 '14.41',
 '14.19',
 '14.26',
 '14.54',
 '2.001',
 '2.002',
 '2.003',
 '2.004',
 '2.005',
 '2.006',
 '2.007',
 '2.017',
 '2.008',
 '2.086',
 '2.670',
 '2.671',
 '2.THU',
 '18.03',
 '2.009',
 '2.013',
 '2.014',
 '2.016',
 '2.019',
 '21G.503',
 '21G.504',
 '21G.505',
 '21G.506',
 '17.433',
 '21H.354',
 '21G.591',
 '21G.593',
 '21G.591',
 '21G.593']




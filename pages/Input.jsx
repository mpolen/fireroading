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
import styles from './app.module.css';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CardMedia from '@material-ui/core/CardMedia';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import LinkIcon from '@material-ui/icons/Link';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import VolumeUp from '@material-ui/icons/VolumeUp';
import Input from '@material-ui/core/Input';
import FlatButton from '@material-ui/core/Input';
import Dialog from '@material-ui/core/Dialog';


export default function userInput() {

const [value, setValue] = useState()
const [rating,setRating] = useState()
const [open,setOpen] = useState(false)
const [dialogOpen,setDialogOpen] = useState(false)

    // const actions = [
    //   <FlatButton
    //     type="reset"
    //     label="Reset"
    //     secondary={true}
    //     style={{ float: 'left' }}
    //     />,
    //   <FlatButton
    //     label="Cancel"
    //     primary={true}
    //     onClick={this.handleClose}
    //     />,
    //   <FlatButton
    //     type="submit"
    //     label="Submit"
    //     primary={true}
    //     />,
    // ];

  const handleClick = (e) => {
    e.preventDefault();
    return;
 }

const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

const handleInputChange = (event) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };

  const handleBlurRating = () => {
    if (value < 0) {
      setRating(0);
    } else if (value > 100) {
      setRating(100);
    }
  };
  return (


    <div >
      <Head>
        <title>FireRoad053 Input</title>
      </Head>

      <main>

          <div>

          <Card style={{
        backgroundColor: 'rgb(224, 20, 20)'}} variant="outlined">

            
            <Breadcrumbs aria-label="breadcrumb">
              <Link color="secondary" href="/" onClick={(event) => event.preventDefault()}>
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
              <Typography variant="h5" component="h6" color="blue" gutterBottom>
                  <center>Enter information below in order to input into FireRoad053 for optimized schedule!</center>        
              </Typography>
              <br></br>
          <center>
        <TextField
          required
          id="name"
          label="Name"
          placeholder="e.g. Hesham"
          variant="outlined"
        />
        </center>
      <br></br>

      <br></br>
      <br></br>
      <center>
      <Typography variant = "h5" component = "h1" id="input-slider" gutterBottom>
        Weight for Course Hour (Utility Function)
      </Typography>
      <h9>Choose a value between 0 and 100</h9>

</center>

      <Grid container spacing={2} alignItems="center">
    <Grid item xs = {12}>
      <Slider
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
          />
    </Grid>
    <Grid item xs>
          <center>
          <Input
            value={value}
            margin="dense"
            variant = "outlined"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 10,
              min: 0,
              max: 100,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
          </center>
        </Grid>

<br></br>
<br></br>
<br></br>
<br></br>


      <Grid container spacing={2} alignItems="center">
            {/* <Typography id="input-slider" gutterBottom>
        Weight for Course Ratings 
      </Typography> */}
    <Grid item xs = {12}>
          <center>
                <br></br>

      <br></br>
      <br></br>
      <Typography variant = "h5" component = "h1" id="input-slider" gutterBottom>
        Weight for Course Rating (Utility Function)
      </Typography>
      <h9>Choose a value between 0 and 100</h9>
    </center>
      <Slider
            value={typeof rating === 'number' ? rating : 0}
            onChange={(event,newValue) => setRating(newValue)}
            aria-labelledby="input-slider"
          />
    </Grid>
    <Grid item xs>
              <center>
          <Input
            value={rating}
            margin="dense"
            variant = "outlined"
            onChange={() => setRating(event.target.value === '' ? '' : Number(event.target.value))}
            onBlur={handleBlurRating}
            inputProps={{
              step: 10,
              min: 0,
              max: 100,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
              </center>
        </Grid>
        </Grid>

        
      </Grid> 

      <br></br>
      <br></br>
      <br></br>


      <center>
      <Button variant = "outlined" onClick={() => { alert('Submitted!') }}>Submit</Button>
      </center>

      </div>
        
      </main>

    </div>
  )

}

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

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function Course(props) {

const [course,setCourse] = useState(props.course)
const [dataCourse, setDataCourse] = useState()
const [rating, setRating] = useState()
const [description, setDescription] = useState()
const [instructors, setInstructors] = useState()
const [title, setTitle] = useState()
const [url,setURL] = useState()
const [prereqs,setPreReqs] = useState()
const [related,setRelated] = useState()
const [units,setUnits] = useState()



  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

const getData = () => {
     axios.get(`https://fireroad.mit.edu/courses/lookup/${props.course}`)
      .then(res => {
        const data = res.data;
        setRating(data.rating)
        setDescription(data.description)
        setInstructors(data.instructors)
        setTitle(data.title)
        setURL(data.url)
        setPreReqs(data.prereqs)
        setRelated(data.related_subjects)
        setDataCourse(data)
        setUnits(data.total_units)
      })
}


  useEffect(() => {
    getData()
  },[props.course]);

  const handleClick = (e) => {
    e.preventDefault();
    return;
 }

return (
        <>

<br></br>
<Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="course" className={classes.avatar}>
            {props.course}
          </Avatar>
        }
        title={title}
        subheader={props.course}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
            {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="share">
            <Link href= {`${url}`}>   
          <LinkIcon />
          </Link>
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Rating: {rating} </Typography>
            <Typography paragraph>Instructors: {instructors}</Typography>
            <Typography paragraph>Units: {units}</Typography>
        </CardContent>
      </Collapse>
    </Card>
    <br></br>
    <br></br>
    <br></br>
    </>
)

}
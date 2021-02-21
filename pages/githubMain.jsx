import Head from 'next/head';
import Link from 'next/link';
import React, {useEffect } from "react";
import { useState } from "react";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from "axios";
import GitHubSelected from './githubSelected';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import styles from './app.module.css';


export default function GitHubMain() {

  const [allData, setAllData] = useState({});
  const [dataFillCheck, setDataFillCheck] = useState(false);
  const [githubUser, setGithubUser] = useState("name");
  const [githubURL, setGithubURL] = useState("https://api.github.com/users/afarooq");

  const getGiHubUserWithAxios = async () => {
    const response = await axios.get(githubURL);
    setAllData(response.data);
  };

  useEffect(() => {
    getGiHubUserWithAxios();
  }, [githubURL]);

  function handleInput(){
    const baseGitHubURL = "https://api.github.com/users/";
    const userValue = prompt("Please Enter A GitHub Username!");
    setGithubUser(userValue);
    setGithubURL(baseGitHubURL + userValue);
    console.log("githubURL in handle input", githubURL);
    setDataFillCheck(true);
  }

  if (dataFillCheck == true) {
    return (
      <GitHubSelected user = {githubUser} objectData = {allData}></GitHubSelected>
    )
  }
  return (
    
    <div>
      <Head>
        <title>GitHub Land</title>
      </Head>

      <main>

      <Card variant="outlined">

      <CardActionArea>
          <CardContent>

            <Typography className = {styles.cardLarge} variant="h1" component="h2" color="blue" gutterBottom>
                <center>Welcome to GitHub Land</center>        
            </Typography>

            <Typography className = {styles.cardMain} variant="h4" component="h2" color="blue" gutterBottom>
                <center>This is a simple interface for finding more information about a GitHub User of your choice!</center>        
            </Typography>

          </CardContent>
      </CardActionArea>

          <CardActions style={{justifyContent: 'center'}}>

            <Button color = "primary" onClick={handleInput}>Get Started</Button>

            <Link href="/">
              <Button color = "primary">Back to Home</Button>
            </Link>

          </CardActions>

        </Card>
      
      </main>

    </div>
  )
}
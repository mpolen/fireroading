import Head from 'next/head';
import Link from 'next/link';
import React, { useState, useEffect } from "react";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from "axios";
import NumbersSelected from './NumbersSelected';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import styles from './app.module.css';


export default function NumbersMain() {

  const [allData, setAllData] = useState({});
  const [data, setData] = useState({});
  const [numbersURL, setNumbersURL] = useState("http://numbersapi.com/1..100");
  const [selectedData, setselectedData] = useState([]);
  const [numberSelected, setNumberSelected] = useState(null);


  const numbersWithAxios = async () => {
    const response = await axios.get(numbersURL);
    setData(Object.keys(response.data));
    setAllData(response.data);
  };

  useEffect(() => {
    numbersWithAxios();
  }, [numbersURL]);

function onclick(value){
    setselectedData(allData[value]);
    setNumberSelected(value);
}

    if (selectedData.length != 0) {
        return (
            <Link href="/numbersSelected">
              <NumbersSelected number = {numberSelected} val = {selectedData}></NumbersSelected>
            </Link>
        )
    }

  return (

    <div>
      <Head>
        <title>Numbers Land</title>
      </Head>

      <main>

          <div>

          <Card variant="outlined">

          <CardActionArea>
            <CardContent>
              <Typography className = {styles.cardLarge} variant="h1" component="h2" color="blue" gutterBottom>
                  <center>Welcome to Numbers Land</center>        
              </Typography>

              <Typography className = {styles.cardMain} variant="h4" component="h2" color="blue" gutterBottom>
                  <center>This is a simple interface for finding more information about random numbers!</center>        
              </Typography>

              <Typography className = {styles.cardLight} variant="h7" component="h2" color="blue" gutterBottom>
                  <center>To get started, click on any number below to get a random fact about that number!</center>        
              </Typography>

            </CardContent>
          </CardActionArea>

          <CardActions style={{justifyContent: 'center'}}>

            <Link href="/">
              <Button color = "primary">Back to Home</Button>
            </Link>

          </CardActions>

      </Card>

        <p></p>

        <center>
          
        {Object.keys(allData).map((value,index) => (
            <Card 
            onClick = {() => onclick(value)}
            >
              <Typography className = {styles.numbers} variant="h5" component="h5" color="blue" gutterBottom>
              {value}
              </Typography>
 
            </Card>
        ))
        }
        </center>

      </div>
        
      </main>

    </div>
  )

}
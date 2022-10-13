import axios from 'axios';
import * as fs from 'fs';

var userdata = JSON.stringify({
  "collection": "userdata",
  "database": "portfolio",
  "dataSource": "Cluster0",
  "projection": {
      "_id": 1,
      "firstName": 1,
      "lastName": 1,
      "bio": 1,
      "timelineData": 1,
      "skillsData": 1,
      "projects": 1
  }
});

var statsData = JSON.stringify({
  "collection": "userdata",
  "database": "portfolio",
  "dataSource": "Cluster0",
  "projection": {
      "_id": 1,
      "bio": 1,
      "timelineData": 1
  }
});

var portfolioData = JSON.stringify({
  "collection": "userdata",
  "database": "portfolio",
  "dataSource": "Cluster0",
  "projection": {
      "_id": 1,
      "skillsData": 1,
      "projects": 1
  }
});

const storeUserData = data => {
  let jsondata = JSON.stringify(data)
  fs.writeFile('./public/user.json', jsondata, (err, rslt) => {
    if (err) console.log('err', err)
  })
}

const fetchUserData = () => {
  let rslt = fs.readFileSync('./public/user.json')
  let data = JSON.parse(rslt)
  return data
}

const getConfig = (data) => {
  const apiKey = process.env.API_KEY
  var config = {
    method: 'post',
    url: 'https://data.mongodb-api.com/app/data-fwpjk/endpoint/data/v1/action/find',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': apiKey,
    },
    data: data
  };
  return config
}


export async function getNameData(){
  try{
    let response = await axios(getConfig(userdata));
    let data = await response.data;
    try{
      storeUserData(data);
    } catch(e){
      console.log("Unable to store data", e)
    }
    return data
  } catch (err) {
    // console.log(err)
    try{
      let data = fetchUserData()
      return data
    } catch (err) {
      console.log(`Error during reading data ${err}`)
    }
    return []
  }
}

export async function getStatsData(){
  try{
    let response = await axios(getConfig(statsData));
    let data = await response.data;
    return data
  } catch (err) {
    // console.log(err)
    try{
      let data = fetchUserData()
      return data
    } catch (err) {
      console.log(`Error reading static data ${err}`)
    }
    return []
  }
}

export async function getPortfolioData(){
  try{
    let response = await axios(getConfig(portfolioData));
    let data = await response.data;
    return data
  } catch (err) {
    try{
      let data = fetchUserData()
      return data
    } catch (err) {
      console.log(`Error reading static data ${err}`)
    }
    return []
  }
}
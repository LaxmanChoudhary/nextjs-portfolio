import axios from 'axios';

var namedata = JSON.stringify({
    "collection": "userdata",
    "database": "portfolio",
    "dataSource": "Cluster0",
    "projection": {
        "_id": 1,
        "firstName": 1,
        "lastName": 1
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
    let response = await axios(getConfig(namedata));
    let data = await response.data;
    return data
  } catch (err) {
    console.log(err)
    return []
  }
}

export async function getStatsData(){
  try{
    let response = await axios(getConfig(statsData));
    let data = await response.data;
    return data
  } catch (err) {
    console.log(err)
    return []
  }
}

export async function getPortfolioData(){
  try{
    let response = await axios(getConfig(portfolioData));
    let data = await response.data;
    return data
  } catch (err) {
    console.log(err)
    return []
  }
}
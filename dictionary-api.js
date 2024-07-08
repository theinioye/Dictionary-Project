const axios = require('axios');

// Base URL of the API
const BASE_URL = `https://api.dictionaryapi.dev/api/v2/entries/en`;

// Function to make a GET request
async function finddefinition(word) {
  try {
    const response = await axios.get(`${BASE_URL}/${word}`);
    console.log('GET request successful');
    
    writeToFile(response);
  } catch (error) {
    console.error('Error making GET request', error);
  }
  
}
async function input(){
    const word = process.argv[2]; 
    if (!word) {
      console.error('Please provide a word as a command-line argument');
      return;
    }
    await finddefinition(word);
}
  
  
  
function writeToFile(response) {
    const fs = require(`fs`)

    fs.writeFile(`./test.txt`, JSON.stringify(response.data, null, 2), (err)  => {
        if (err) throw err;
        console.log(`New word logged`)
    })
}

  

console.log(input())

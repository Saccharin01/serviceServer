const http = require(`http`);
const XMLHttpRequest = require(`xhr2`);
const xml = new XMLHttpRequest();
const fs = require(`fs`)

let server = http.createServer((req, res)=>{
  if(req.method ===`GET`){
    if(req.url === `/`){

    };
  };
})
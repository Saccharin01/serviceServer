const http = require(`http`);
const XMLHttpRequest = require(`xhr2`);
const xml = new XMLHttpRequest();
const fs = require(`fs`)
const htmlTemplate = require(`../../module/module.HTMLtemplate`)

console.log(htmlTemplate())
let server = http.createServer((req, res)=>{
  if(req.method ===`GET`){
    if(req.url === `/`){
      try {
        fs.readFile(`html/index.html`, htmlTemplate(), (err)=>{
          if(err){
            console.log(err)
            console.log(`err occur on fs.WriteFile`)
          };
        })
      } catch (error) {
        fs.mkdir(`html`, (err)=>{
          console.log(err)
          console.log(`mkdir error occured`)
        })
        fs.writeFile(`html/index.html`, htmlTemplate(), (err)=>{
          if(err){
            console.log(`error occured`)
          }
        })
        
      }

    };
  };
})
let PORT = 8080
server.listen(`${PORT}`)
console.log(`server running on: http://localhost:${PORT}/`)
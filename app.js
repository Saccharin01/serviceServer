const http = require(`http`);
const XMLHttpRequest = require(`xhr2`);
const xml = new XMLHttpRequest();
const fs = require(`fs`)
const htmlTemplate = require(`../../module/module.HTMLtemplate`)

// console.log(htmlTemplate())
let server = http.createServer((req, res)=>{
  if(req.method ===`GET`){
    console.log(req.url)
    if(req.url === `/`){
      fs.readFile(`html/index.html`, 'utf-8', (err, data)=>{
        if(err){
          fs.mkdir(`html`, (err)=>{
            if(err){
              console.log(`error occur: ${err}`)
            }else{
              fs.writeFile(`html/index.html`, htmlTemplate(`testField`), `utf-8`, (err)=>{
                if(err){
                  return console.log(err)
                }else{
                  console.log(`All Process Success`)
                }
              })
            }
          })
        }
        else{
          res.write(data)
          res.end();
        }
      })
    }
    else if(req.url.startsWith(`/core`)){
      // console.log(`checked`)
    }
  }


});

let PORT = 8080
server.listen(`${PORT}`)
console.log(`server running on: http://localhost:${PORT}/`)
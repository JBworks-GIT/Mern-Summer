const http = require("http");
const fsPromises = require("fs/promises")
const app = http.createServer(async (req, res) => {
  // res.setHeader("Content-Type","text/plain")
//   console.log(Object.keys(req.url));
  res.writeHead(200, { 
    "Content-Type": "text/html",
  });

  console.log(req.url);
  const route = req.url;
  switch(route){
    case "/":{ 
        const stream  = await fsPromises.readFile('./pages/homepage.html');
        res.end(stream);
        break;
  };
  case '/products':{
    const stream  = await fsPromises.readFile('./pages/products.html');
    res.end(stream)
    break;
  };
  default : {
    res.end("Page not found");
  }
  }

});

app.listen(1400,()=>{
    console.log("-----------------Server Started----------------------");
});

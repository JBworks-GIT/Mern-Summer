const http = require("http");
const url = require("url");
const fsPromises = require("fs/promises");
const fs = require("fs");

const dataText = fs.readFileSync(`${__dirname}/data.json`);
console.log(dataText);
// const str = dataText.toString();
// console.log(str);
console.log(typeof(dataText));
const data = JSON.parse(dataText);
console.log(typeof(data));

// console.log(data);

const app = http.createServer(async (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  const { query, pathname } = url.parse(req.url, true);

  switch (pathname) {
    case "/": {
      const readHome = await fsPromises.readFile("./pages/homepage.html");
      res.end(readHome);
      break;
    }
    case "/products": {
      const readProducts = await fsPromises.readFile(
        "./pages/productsPage.html"
      );
      // console.log(readProducts);
      let text = readProducts.toString();
      //  console.log(text);
      let productData = "";
      for (let i = 0; i < data.length; i++) {
        productData += `<div class="card">
                        <h3>${data[i].title}</h3>
                        <img src="${data[i].thumbnail}" alt='product-image' height='200'>
                        <p>${data[i].description}</p>
                        <a href="/view?id=${data[i].id}" target="_blank">More</a>
                    </div>`;
      }
      text = text.replace("$PRODUCTS$", productData);
      res.end(text);
      break;
    }
    case "/view": {
      const product = data.find((elem) => {
        if (elem.id == query.id) return true;
        else return false;
      });
      console.log(product);
      const readView = await fsPromises.readFile(`${__dirname}/pages/view.html`);
      let text = readView.toString();
      text = text.replace(
        "$VIEW$",
        `<div class="card">
                    <h2>${product.title}</h2>
                    <img src="${product.thumbnail}" height='300'>
                    <h4>Price: $${product.price}</h4>
                    <p>${product.description}</p>
                    <h4>Stock-Left: ${product.stock}</h4>
        </div>`
      );
      res.end(text);
      break;
    }
    default: {
      res.end("<h2>Oops! Page not found...</h2>");
    }
  }
});

app.listen(
  2100,
  console.log("<--------------SERVER STARTED AT 2100 PORT---------------->")
);

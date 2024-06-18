// console.log("Start");
// function abc(x){
//     console.log(x*2);
//     temp(x/2);
// }
// abc(8);
// console.log("mid");
// function temp(x){
//     console.log(x/2);
// }
// console.log("end");

// const button = document.getElementsByTagName("button")[0];

// button.addEventListener("click" , cb);

// function cb(){
//     console.log("button clicked");
// }

// const input = document.getElementsByTagName("input")[0];
// input.addEventListener('keyup',cb);

// function cb(e){
//     console.log("INput is " ,e.target.value);
// }

// console.log("start");

// setTimeout

// const pr = fetch("https://api.github.com/users/likbalpande");

// pr.then((res)=>{
//     const pr1 = res.text();
//     console.log(res);

//     pr1.then((data) =>{
//         console.log(data);
//     })

// }).catch((e) =>{
//     console.log("error" , e);
// }

// )

const request = fetch("https://dummyjson.com/products");

request
  .then((result) => {
    const convertData = result.json();
    convertData.then(renderUi);
  })
  .catch((error) => {
    alert(error);
  });

const renderUi = (data) => {
  const products = data.products;
  const root = document.getElementById("root");
  root.innerHTML = " ";
  for (let i = 0; i < products.length; i++) {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `<img src="${products[i].thumbnail}"></img><h1>${products[i].title} </h1><p>${products[i].price}</p>`;
    root.appendChild(card);
  }
};

const searching = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    const searchTerm = e.target[0].value.toLowerCase();
  
    const request = fetch("https://dummyjson.com/products");
  
    request
      .then((result) => {
        const convertData = result.json();
        convertData.then((data) => {
          const products = data.products;
          const root = document.getElementById("root");
          root.innerHTML = "";
  
          const filteredProducts = products.filter((product) =>
            product.title.toLowerCase().includes(searchTerm)
          );
  
          for (let i = 0; i < filteredProducts.length; i++) {
            const card = document.createElement("div");
            card.className = "product-card";
            card.innerHTML = `<img src="${filteredProducts[i].thumbnail}"></img><h1>${filteredProducts[i].title} </h1><p>${filteredProducts[i].price}</p>`;
            root.appendChild(card);
          }
        });
      })
      .catch((error) => {
        alert(error);
      });
  };
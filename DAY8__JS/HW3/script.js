const pr =fetch("https://dummyjson.com/products");

pr.then((res)=>{
   const pr2=  res.json();
    pr2.then((data) =>{
        createUI(data);
    })
}).catch((err) =>{
    console.log("Error Occurred \n",err);
})

const main = document.getElementById('root');

//STEP 1 to get usimg long method
// function createUI(data){
//     console.log(data);
//     const products= data.products;
//     console.log(products);

//     for(let i = 0;i<products.length;i++){
//         const newCard = document.createElement("div");

//         //ek h3 banao
//         const title = document.createElement("h3");
//         // console.log(title);
//         //usme text dalo
//         title.innerText = products[i].title;
//         //h3 ko div me daldo
//         newCard.appendChild(title);

//         const img = document.createElement("img");
//         // console.log(img);
//         //usme img dalo
//         img.setAttribute('src',products[i].thumbnail);
//         //img ko div me daldo
//         newCard.appendChild(img);

//         const price = document.createElement("p");
//         // console.log(price);
//         //usme price dalo
//         price.innerText = products[i].price;
//         // console.dir(price);
//         //h3 ko div me daldo
//         newCard.appendChild(price);        
//         main.appendChild(newCard);
//     }
// }


//step 2 to get using easy method serverside
function createUI(data){
    console.log(data);
    const products= data.products;
    console.log(products);

    main.innerText = "";
    for(let i = 0;i<products.length;i++){
        const newCard = document.createElement("div");
        newCard.innerHTML = `<div>
            <h3>${products[i].title}</h3>
            <img src="${products[i].thumbnail}"></img>
            <p>${products[i].price}</p>
        </div>`
        
        main.appendChild(newCard);
    }
}


function searchProducts(e){
    console.log(e.target.value);
    const searchText = e.target.value;
    //serverside scripting
    const pr =fetch(`https://dummyjson.com/products/search?q=${searchText}`);
    pr.then((res) =>{
        const pr2 = res.json();
        pr2.then((data)=>{
            createUI(data);
        })
    })
}
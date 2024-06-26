const express = require('express');
const app = express();
const fsPromises = require('fs/promises');


app.use(express.json());

const getData = async () =>{
    const text = await fsPromises.readFile("./data.json",{encoding : "utf8" });
        let products ; 
        try{
            products = JSON.parse(text);
        }
        catch{
            products = [];
        }
        return products;
}

app.get("/products",async (req,res)=>{
    // res.send("meewewewewew");
    const read = await fsPromises.readFile("./data.json",{encoding : "utf-8"});
    let products=  await getData();
    res.json({
        status : "success",
        // message: "Server is running...",
        data : { 
            produc : products,
        }
    });
});

app.post("/products",async(req,res)=>{
    // console.log(typeof(req));
    // console.log(req);
    // console.log(Object.keys(req));
    // console.log(body);
        const body = req.body;
        const products = await getData();
        // const prLen = products.length;
        // const lastIndex = prLen -1;
        // const lastItem = products(lastIndex);
        // const lastId  = lastItem.id;
        let lastId = 0;
        if(products.length != 0){
         lastId = products[products.length -1].id;
        }
        body.id = lastId +1; // id is added autmotically
        products.push(body);
        console.log(products);
        await fsPromises.writeFile("./data.json",JSON.stringify(products));
    res.status(201);
    res.json({
        status : "in progress",
        product : body
    })
})
//: tells id is variable
app.put("/products/:id",async(req,res)=>{
    const {id} = req.params;
    console.log(id);
    const body =req.body;
    console.log(body);
    const products = await getData();
    console.log(products);
    let productIndex = products.findIndex((products) =>products.id == id);
    console.log(productIndex);
    console.log(products[productIndex]);    

    if(productIndex != -1){
        products[productIndex] = {...products[productIndex],...body};
        console.log(products);
        await fsPromises.writeFile("./data.json", JSON.stringify(products));
        res.json({
            status: "success",
            product: products[productIndex]
        });
    }   
    else {
        res.status(404).json({
            status: "error",
            message: "Product not found"
        });
    }
});

app.listen(1400);


// const arr=[1,2,3,4,5]

// arr.map((ce)=>{

// })

// arr.filter((ce)=>{
//     if(ce>2){
//         console.log(ce);
//     }
// })

// let sum=arr.reduce((ac,ce)=>{
// return ac+ce;
// })

// console.log(sum);
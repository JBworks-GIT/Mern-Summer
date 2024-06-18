const request = fetch("https://dummyjson.com/recipes");

request
  .then((res) => {
    const pr = res.json();
    pr.then((data) => {
      ui(data);
    });
  })
  .catch((err) => {
    console.log(err);
  });

function ui(data) {
  console.log(data);
  const body = document.getElementsByTagName("body")[0];
  console.log(body);
  let div = document.querySelector(".root");
  if (!div) {
    div = document.createElement("div");
    div.classList.add("root");
    body.appendChild(div);
  }
  div.innerHTML = "";
  const recipes = data.recipes;
  console.log(recipes);
  for (let i = 0; i < recipes.length; i++) {
    const card = document.createElement("div");
    card.innerHTML = `<div>
            <h3>${recipes[i].name}</h3>
            <img src="${recipes[i].image}"></img>
            <p><span>Cuisine : </span>${recipes[i].cuisine}</p>
        </div>`;
    div.appendChild(card);
  }
}


function searching(e){
    e.preventDefault();
    console.log(e);
    const searchText = e.target.value ;
    const pr = fetch(`https://dummyjson.com/recipes/search?q=${searchText}`);
    pr.then((res) =>{
        const pr2 = res.json();
        pr2.then((data)=>{
            ui(data);
        })
    }).catch((err)=>{
        console.log(err);
    })

}
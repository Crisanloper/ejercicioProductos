let divData = document.getElementById("divData");

function getData() {
    const promesa = fetch("https://freetestapi.com/api/v1/products", { method: "GET" });
    promesa.then((response) => {
        response.json().then(
            (data) => {
                console.log(data);
                createCards(data);
            }).catch((error) => console.log("Problema con el json", error));
    }).catch((err) => console.log("Existió un problema con la solicitud", err));
}// getData


function createCards(products) {
    products.forEach(p => {
        divData.insertAdjacentHTML("beforeend",
            `<div class="card" style="width: 18rem;">
  <img src="${p.image}" class="card-img-top" alt="${p.name}">
  <div class="card-body">
    <h5 class="card-title">${p.name}</h5>
    <p class="card-text">${p.description.slice(0,20)}...</p>
    <p class="card-text">${p.price}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

            `

        )
    })
    //crear una Card por cada producto con sus datos esenciales


}//createCards
getData();

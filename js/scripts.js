const productosStg = JSON.parse(localStorage.getItem("productos"))
const creaContenedor = document.getElementById("creatinas-container");
const quemContenedor = document.getElementById("quemadores-container");

for(let i = 0; i <= 3; i++){
  productosStg.forEach(prod => {
    if(prod.categoria === 'Creatinas'){
      creaContenedor.innerHTML += `<div class="custom-card">
          <div class="card-header d-flex">
          <span class="card-discount card-discount-10"
          >Descuento ${prod.descuento}%</span
        >
            <i class="fa-regular fa-heart"></i>
            <img
              src="${prod.imagen}"
              alt="suplemento deportivo"
            />
          </div>
          <div class="card-main">
            <div class="card-main-info">
              <h2>${prod.nombre}</h2>
              <span class="text-center w-100">${prod.fabricante}</span>
              <p class="p-1">${prod.descripcion}</p>
            </div>
            <div class="card-footer w-100 d-flex px-3 mt-3">
              <div class="card-main-btns w-100">
                <div class="btn btn-sm btn-outline-dark">COMPRAR</div>
              </div>
              <span>
                <h1 class="h4">$${prod.precio}</h1>
              </span>
            </div>
          </div>
          </div>`;
      
    }
    if(prod.categoria === 'Quemadores'){
      quemContenedor.innerHTML += `<div class="custom-card">
          <div class="card-header d-flex">
          <span class="card-discount card-discount-10"
          >Descuento ${prod.descuento}%</span
        >
            <i class="fa-regular fa-heart"></i>
            <img
              src="${prod.imagen}"
              alt="suplemento deportivo"
            />
          </div>
          <div class="card-main">
            <div class="card-main-info">
              <h2>${prod.nombre}</h2>
              <span class="text-center w-100">${prod.fabricante}</span>
              <p class="p-1">${prod.descripcion}</p>
            </div>
            <div class="card-footer w-100 d-flex px-3 mt-3">
              <div class="card-main-btns w-100">
                <div class="btn btn-sm btn-outline-dark">COMPRAR</div>
              </div>
              <span>
                <h1 class="h4">$${prod.precio}</h1>
              </span>
            </div>
          </div>
          </div>`;
      
    }
  })

}

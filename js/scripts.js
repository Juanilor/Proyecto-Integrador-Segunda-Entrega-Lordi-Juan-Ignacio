const productos = JSON.parse(localStorage.getItem("productos"))
const creaContenedor = document.getElementById("creatinas-container");
const quemContenedor = document.getElementById("quemadores-container");

console.log(productos);
for(let i = 0; i <= 3; i++){
  productos.forEach(prod => {
    if(prod.categoria === 'Creatinas'){
      console.log(prod)
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
      console.log(prod)
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

const usuariosPrimerInicio = [
  {
    nombreCompleto: 'admin',
    email: 'admin@admin.com',
    password: 'admin',
    edad: 26,
    location: undefined,
    birthdate: undefined,
  }
]


let usuarios =
  JSON.parse(localStorage.getItem("usuarios")) ||usuariosPrimerInicio;

  

if (JSON.parse(localStorage.getItem(usuarios)) === null  ) {
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

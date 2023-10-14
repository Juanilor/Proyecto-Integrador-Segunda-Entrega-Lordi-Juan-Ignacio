const productos = [];
const creaContenedor = document.getElementById("creatinas-container");
const quemContenedor = document.getElementById("quemadores-container");

const creatinas = [
  {
    nombre: "Creatina (Creapure®) - 300g",
    subTitulo: "MM Supplements",
    descripcion:
      "Creatina (Creapure®) de MASmusculo Supplements. Estafórmula avanzada te ofrece el impulso necesario para alcanzar tus metas deportivas. Descubre cómo este complemento alimenticio de creatina monohidrato.",
    precio: 3500,
    descuento: 15,
    categoria: "Creatinas",
    imagen: "/assets/images/Creatinas/creatina-creapure.png",
  },
  {
    nombre: "Creatina monohidrato 200 mesh - 500G",
    subTitulo: "Iron Addict Labs",
    descripcion:
      "100% Creatina Monohidrato 200 Mesh de Iron Addict Labs es un complemento alimenticio elaborado a base de 100% creatina monohidrato sin aditivos ni componentes artificiales.",
    precio: 2900,
    descuento: 45,
    categoria: "Creatinas",
    imagen: "/assets/images/Creatinas/creatina-monohidrato.png",
  },
];
const quemadores = [
    {
      nombre: "L-CARNITINA 3.0 2000 MG",
      subTitulo: "MM Supplements | L-Carnitina",
      descripcion:
        "  L-Carnitina 3.0 de MASmusculo Supplements, es un           complemento alimenticio compuesto por una fórmula a base          de l-carnitina de óptima calidad y rápida absorción.",
      precio: 2800,
      descuento: 30,
      categoria: "quemadores",
      imagen: "/assets/images/Quemadores/l-carnitina.png",
    },
    {
      nombre: "CARNI PUMP INSTANT 3000",
      subTitulo: "Bull Sport Nutrition | L-Carnitina",
      descripcion:
        " Carni Pump Instant 3000 de Bull Sport Nutrition es un  complemento alimenticio que ofrece L-carnitina y          L-arginina, dos aminoácidos indispensables para respaldar         la capacidad física durante el entrenamiento",
      precio: 4900,
      descuento: 10,
      categoria: "quemadore",
      imagen: "/assets/images/Quemadores/carni-pump-instant.png",
    }, 
];

for (let i = 0; i < 4; i++) {
  creatinas.forEach((crea) => {
    creaContenedor.innerHTML += `<div class="custom-card">
        <div class="card-header d-flex">
        <span class="card-discount card-discount-10"
        >Descuento ${crea.descuento}%</span
      >
          <i class="fa-regular fa-heart"></i>
          <img
            src="${crea.imagen}"
            alt="suplemento deportivo"
          />
        </div>
        <div class="card-main">
          <div class="card-main-info">
            <h2>${crea.nombre}</h2>
            <span class="text-center w-100">${crea.subTitulo}</span>
            <p class="p-1">${crea.descripcion}</p>
          </div>
          <div class="card-footer w-100 d-flex px-3 mt-3">
            <div class="card-main-btns w-100">
              <div class="btn btn-sm btn-outline-dark">COMPRAR</div>
            </div>
            <span>
              <h1 class="h4">$${crea.precio}</h1>
            </span>
          </div>
        </div>
        </div>`;
  });
  quemadores.forEach((quem) => {
    quemContenedor.innerHTML += `<div class="custom-card">
        <div class="card-header d-flex">
         <span class="card-discount card-discount"
            >Descuento ${quem.descuento}%</span
          >
          <i class="fa-regular fa-heart"></i>
          <img
            src="${quem.imagen}"
            alt="suplemento deportivo"
          />
        </div>
        <div class="card-main">
          <div class="card-main-info">
            <h2>${quem.nombre}</h2>
            <span class="text-center w-100">${quem.subTitulo}</span>
            <p class="p-1">${quem.descripcion}</p>
          </div>
          <div class="card-footer w-100 d-flex px-3 mt-3">
            <div class="card-main-btns w-100">
              <div class="btn btn-sm btn-outline-dark">COMPRAR</div>
            </div>
            <span>
              <h1 class="h4">$${quem.precio}</h1>
            </span>
          </div>
        </div>
      </div>`;
  });
}

/*
  !Card de productos-
             `<div class="custom-card">
                <div class="card-header d-flex">
                 <span class="card-discount card-discount-10"
                    >Descuento 10%</span
                  >
                  <i class="fa-regular fa-heart"></i>
                  <img
                    src="${creatinas.imagen}"
                    alt="suplemento deportivo"
                  />
                </div>
                <div class="card-main">
                  <div class="card-main-info">
                    <h2>${creatinas.nombre}</h2>
                    <span class="text-center w-100">${creatinas.subTitulo}</span>
                    <p class="p-1">${creatinas.descripcion}</p>
                  </div>
                  <div class="card-footer w-100 d-flex px-3 mt-3">
                    <div class="card-main-btns w-100">
                      <div class="btn btn-sm btn-outline-dark">COMPRAR</div>
                    </div>
                    <span>
                      <h1 class="h4">${creatinas.precio}</h1>
                    </span>
                  </div>
                </div>
              </div>`



*/

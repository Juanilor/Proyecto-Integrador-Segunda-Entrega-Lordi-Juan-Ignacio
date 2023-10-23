const tableBodyHTML = document.getElementById("tableBody");
const formularioProductosHTML = document.getElementById("formularioProductos");
const btn = document.querySelector('button.btn[type="submit"]');
const inputFiltrar = document.getElementById("filtrarProducto");

const productosPrimerInicio = [
  {
    id: crypto.randomUUID(),
    nombre: "Creatina (Creapure®) - 300g",
    fabricante: "MM Supplements",
    descripcion:
      "Creatina (Creapure®) de MASmusculo Supplements. Estafórmula avanzada te ofrece el impulso necesario para alcanzar tus metas deportivas. Descubre cómo este complemento alimenticio de creatina monohidrato.",
    precio: 3500,
    descuento: 15,
    categoria: "Creatinas",
    imagen: "https://www.masmusculo.com/106996-thickbox_default/creatina-creapure.jpg",
  },
  {
    id: crypto.randomUUID(),
    nombre: "Creatina monohidrato 200 mesh - 500G",
    fabricante: "Iron Addict Labs",
    descripcion:
      "100% Creatina Monohidrato 200 Mesh de Iron Addict Labs es un complemento alimenticio elaborado a base de 100% creatina monohidrato sin aditivos ni componentes artificiales.",
    precio: 2900,
    descuento: 45,
    categoria: "Creatinas",
    imagen: "https://www.masmusculo.com/107265-thickbox_default/addict-creatina-300g.jpg",
  },
  {
    id: crypto.randomUUID(),
    nombre: "L-CARNITINA 3.0 2000 MG",
    fabricante: "MM Supplements | L-Carnitina",
    descripcion:
      "  L-Carnitina 3.0 de MASmusculo Supplements, es un complemento alimenticio compuesto por una fórmula a base de l-carnitina de óptima calidad y rápida absorción.",
    precio: 2800,
    descuento: 30,
    categoria: "Quemadores",
    imagen: "https://www.masmusculo.com/51513-thickbox_default/l-carnitina.webp",
  },
  {
    id: crypto.randomUUID(),
    nombre: "CARNI PUMP INSTANT 3000",
    fabricante: "Bull Sport Nutrition | L-Carnitina",
    descripcion:
      " Carni Pump Instant 3000 de Bull Sport Nutrition es un  complemento alimenticio que ofrece L-carnitina y          L-arginina, dos aminoácidos indispensables para respaldar la capacidad física durante el entrenamiento",
    precio: 4900,
    descuento: 10,
    categoria: "Quemadores",
    imagen: "https://www.masmusculo.com/70479-thickbox_default/carni-pump-instant.webp",
  },
];

let productos =
  JSON.parse(localStorage.getItem("productos")) || productosPrimerInicio;


if (JSON.parse(localStorage.getItem(productos)) === null  ) {
  localStorage.setItem("productos", JSON.stringify(productos));
}

pintarProductos(productos);
let idEditar;

formularioProductosHTML.addEventListener("submit", (event) => {
  event.preventDefault();

  const el = formularioProductosHTML.elements;

  let id;

  if (idEditar) {
    id = idEditar;
  } else {
    id = crypto.randomUUID();
  }

  const nuevoProducto = {
    id: id,
    nombre: el.nombreProducto.value,
    descripcion: el.descripcionProducto.value,
    imagen: el.imagenProducto.value,
    precio: el.precioProducto.valueAsNumber,
    fabricante: el.fabricanteProducto.value,
    categoria: el.categoriaProducto.value,
  };

  if (idEditar) {
    const index = productos.findIndex((prod) => {
      return prod.id === idEditar;
    });

    productos[index] = nuevoProducto;

    idEditar = undefined;

    btn.innerText = "Agregar Producto";
    btn.classList.remove("btn-success");
  } else {
    productos.push(nuevoProducto);
  }

  console.log(nuevoProducto);

  pintarProductos(productos);
  localStorage.setItem("productos", JSON.stringify(productos));

  formularioProductosHTML.reset();
  el.nombreProducto.focus();
});

const borrarProducto = (index) => {
  console.log("x");
  productos.splice(index, 1);
  localStorage.setItem("productos", JSON.stringify(productos));
  pintarProductos(productos);
};

const editarProducto = (idRecibido) => {
  const prodEditar = productos.find((prod) => {
    if (prod.id === idRecibido) {
      console.log('s')
      return true;
    }
  });

  if (!prodEditar) return;

  idEditar = prodEditar.id;

  
  const elements = formularioProductosHTML.elements;

  elements.nombreProducto.value = prodEditar.nombre;
  elements.precioProducto.value = prodEditar.precio;
  elements.categoriaProducto.value = prodEditar.categoria;
  elements.imagenProducto.value = prodEditar.imagen;
  elements.descripcionProducto.value = prodEditar.descripcion;
  elements.fabricanteProducto.value = prodEditar.fabricante;
  
  
  
  btn.innerText = "Editar Producto";
  btn.classList.add("btn-success");
};

function pintarProductos(x) {
  tableBodyHTML.innerHTML = " ";

  x.forEach((prod, index) => {
    tableBodyHTML.innerHTML += `
    <tr>
      <td>${prod.nombre}</td>
      <td>$${prod.precio}</td>
      <td>${prod.descripcion}</td>
      <td>${prod.categoria}</td>
      <td><img src="${prod.imagen}" alt="${prod.nombre}" style="width: 70px;"></td>
      <td>
      <div class='d-flex gap-1'>
        <button class='btn btn-sm btn-danger btn-delete' onclick="borrarProducto('${prod.id}')">
            <i class="fa-solid fa-trash"></i>
        </button>
        <button class='btn btn-sm btn-success' onclick="editarProducto('${prod.id}')" data-bs-toggle="modal" data-bs-target="#formModal">
        <i class="fa-solid fa-pen-to-square" ></i>
        </button>
      </div>
      </td>
      </tr>`;
  });
}

inputFiltrar.addEventListener("keyup", (evt) => {
  const busqueda = evt.target.value.toLowerCase();

  const resultado = productos.filter((prod) => {
    const titulo = prod.nombre.toLowerCase();
    const categoria = prod.categoria.toLowerCase();

    if (titulo.includes(busqueda) || categoria.includes(busqueda)) {
      return true;
    }
    return false;
  });
  pintarProductos(resultado);
});

const tableBodyHTML = document.getElementById("tableBody");
const formularioProductosHTML = document.getElementById("formularioProductos");
const btn = document.querySelector('button.btn[type="submit"]')

const productos = [
  {
    nombre: "Creatina (Creapure®) - 300g",
    fabricante: "MM Supplements",
    descripcion:
      "Creatina (Creapure®) de MASmusculo Supplements. Estafórmula avanzada te ofrece el impulso necesario para alcanzar tus metas deportivas. Descubre cómo este complemento alimenticio de creatina monohidrato.",
    precio: 3500,
    descuento: 15,
    categoria: "Creatinas",
    imagen: "/assets/images/Creatinas/creatina-creapure.png",
  },
  {
    nombre: "Creatina monohidrato 200 mesh - 500G",
    fabricante: "Iron Addict Labs",
    descripcion:
      "100% Creatina Monohidrato 200 Mesh de Iron Addict Labs es un complemento alimenticio elaborado a base de 100% creatina monohidrato sin aditivos ni componentes artificiales.",
    precio: 2900,
    descuento: 45,
    categoria: "Creatinas",
    imagen: "/assets/images/Creatinas/creatina-monohidrato.png",
  },
];

pintarProductos(productos);

let idEditar;

formularioProductosHTML.addEventListener("submit", (event) => {
  event.preventDefault();

  const el = formularioProductosHTML.elements;

  let id;

  if (idEditar) {
    id = idEditar
  } else {
    id = crypto.randomUUID()
  }

  const nuevoProducto = {
    id: "some",
    nombre: el.nombreProducto.value,
    descripcion: el.descripcionProducto.value,
    imagen: el.imagenProducto.value,
    precio: el.precioProducto.valueAsNumber,
    fabricante: el.fabricanteProducto.value,
    categoria: el.categoriaProducto.value,
  };

  if (idEditar) {
    const index = productos.findIndex(prod => {
      return prod.id === idEditar
    })

    productos[index] = nuevoProducto;

    idEditar = undefined;

    
    btn.innerText = "Agregar Producto"
    btn.classList.remove("btn-success")
  }else{
    productos.push(nuevoProducto);
  }

  console.log(nuevoProducto);

  pintarProductos(productos);

  formularioProductosHTML.reset()
  el.nombreProducto.focus()
});

const borrarProducto = (index) => {
  console.log('x')
  productos.splice(index, 1)
  pintarProductos(productos)
}

const editarProducto = (idRecibido) => {
  const prodEditar = productos.find(prod => {
    if (prod.id === idRecibido) {
      return true
    }
  })

  if (!prodEditar) return;

  idEditar = prodEditar.id

  const elements = formularioProductosHTML.elements;

  elements.nombreProducto.value = prodEditar.nombre;
  elements.precioProducto.value = prodEditar.precio;
  elements.categoriaProducto.value = prodEditar.categoria;
  elements.imagenProducto.value = prodEditar.imagen;
  elements.descripcionProducto.value = prodEditar.descripcion;
  elements.fabricanteProducto.value = prodEditar.fabricante;

  elements.nombreProducto.focus()

  btn.innerText = "Editar Producto"
  btn.classList.add("btn-success")


}

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
        <button class='btn btn-sm btn-success' onclick="editarProducto('${prod.id}')">
        <i class="fa-solid fa-pen-to-square"></i>
        </button>
      </div>
      </td>
      </tr>`;
  });



}
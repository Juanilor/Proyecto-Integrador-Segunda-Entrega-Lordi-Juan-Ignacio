const tableBodyHTML = document.getElementById("tableBody");
const formularioProductosHTML = document.getElementById("formularioProductos");
const btn = document.querySelector('button.btn[type="submit"]');
const btn2 = document.querySelector('button.btn[type="button"]');
const inputFiltrar = document.getElementById("filtrarProducto");

const productos = JSON.parse(localStorage.getItem("productos"));

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
    descuento: el.descuentoProducto.value,
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

  Swal.fire({
    icon: "success",
    title: "Producto agregado/modificado correctamente",
    text: "El producto se actualizo o modifico correctamente!",
  });

  console.log(nuevoProducto);

  pintarProductos(productos);
  localStorage.setItem("productos", JSON.stringify(productos));

  formularioProductosHTML.reset();
  el.nombreProducto.focus();
});

const borrarProducto = (idProducto) => {
  Swal.fire({
    title: "Desea borrar producto",
    icon: "error",
    text: "Realmente desea elminar el producto?",
    showCloseButton: true,
    showCancelButton: true,
    cancelButtonText: "Cancelar",
    confirmButtonText: "Borrar",
  }).then((result) => {
    if (result.isConfirmed) {
      const indiceEncontrado = productos.findIndex((productoFindIndex) => {
        if (productoFindIndex.id === idProducto) {
          return true;
        }
        return false;
      });
      productos.splice(indiceEncontrado, 1);

      pintarProductos(productos);

      localStorage.setItem("productos", JSON.stringify(productos));

      Swal.fire("Borrado!", "Producto borrado correctamente", "success");
    }
  });
};

const editarProducto = (idRecibido) => {
  const prodEditar = productos.find((prod) => {
    if (prod.id === idRecibido) {
      console.log("s");
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
      <td>${prod.descuento}%</td>
      <td class='tdDesc'>${prod.descripcion}</td>
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

btn2.addEventListener("click", () => {
  formularioProductosHTML.reset();
});

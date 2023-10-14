const tableBodyHTML = document.getElementById("tableBody");
const formularioProductosHTML = document.getElementById("formularioProductos");

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

formularioProductosHTML.addEventListener("submit", (event) => {
  event.preventDefault();

  const el = formularioProductosHTML.elements;

  const nuevoProducto = {
    id: "some",
    nombre: el.nombreProducto.value,
    descripcion: el.descripcionProducto.value,
    precio: el.precioProducto.valueAsNumber,
    fabricante: el.fabricanteProducto.value,
    categoria: el.categoriaProducto.value,
  };

  console.log(nuevoProducto);
  productos.push(nuevoProducto);

  pintarProductos(productos);
});

function pintarProductos(x) {
  tableBodyHTML.innerHTML = " ";

  x.forEach((prod) => {
    tableBodyHTML.innerHTML += `
    <tr>
      <td>${prod.nombre}</td>
      <td>$${prod.precio}</td>
      <td>${prod.descripcion}</td>
      <td>${prod.categoria}</td>
      <td><img src="/assets/images/Creatinas/creatina-creapure.png" alt="" style="width: 70px;"></td>
      </tr>`;
  });
}

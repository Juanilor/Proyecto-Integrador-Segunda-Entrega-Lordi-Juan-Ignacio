const usuariosPrimerInicio = [
  {
    nombreCompleto: "admin",
    email: "admin@admin.com",
    password: "admin",
    localidad: undefined,
    role: "admin",
  },
  {
    nombreCompleto: "Pedro Perez",
    email: "PedroP@correo.com",
    password: "1574adf",
    localidad: "Buenos Aires",
    role: "user",
  },
  {
    nombreCompleto: "Armando Paredes",
    email: "ParArmando@correo.com",
    password: "15daq12",
    localidad: "Salta",
    role: "user",
  },
  {
    nombreCompleto: "Esteban Quitos",
    email: "naberseQuitos@correo.com",
    password: "15ddsaq1",
    localidad: "Jujui",
    role: "user",
  },
];

let usuarios =
  JSON.parse(localStorage.getItem("usuarios")) || usuariosPrimerInicio;

if (JSON.parse(localStorage.getItem(usuarios)) === null) {
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

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
    imagen:
      "https://www.masmusculo.com/106996-thickbox_default/creatina-creapure.jpg",
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
    imagen:
      "https://www.masmusculo.com/107265-thickbox_default/addict-creatina-300g.jpg",
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
    imagen:
      "https://www.masmusculo.com/51513-thickbox_default/l-carnitina.webp",
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
    imagen:
      "https://www.masmusculo.com/70479-thickbox_default/carni-pump-instant.webp",
  },
];

let productos =
  JSON.parse(localStorage.getItem("productos")) || productosPrimerInicio;

if (JSON.parse(localStorage.getItem(productos)) === null) {
  localStorage.setItem("productos", JSON.stringify(productos));
}

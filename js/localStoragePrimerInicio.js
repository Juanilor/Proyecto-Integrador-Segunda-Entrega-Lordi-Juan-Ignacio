const usuariosPrimerInicio = [
  {
    id: crypto.randomUUID(),
    nombreCompleto: "admin",
    email: "admin@admin.com",
    password: "admin",
    localidad: undefined,
    role: "admin",
  },
  {
    id: crypto.randomUUID(),
    nombreCompleto: "Pedro Perez",
    email: "PedroP@correo.com",
    password: "1574adf",
    localidad: "Buenos Aires",
    role: "user",
  },
  {
    id: crypto.randomUUID(),
    nombreCompleto: "Armando Paredes",
    email: "ParArmando@correo.com",
    password: "15daq12",
    localidad: "Salta",
    role: "user",
  },
  {
    id: crypto.randomUUID(),
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
    {
    id: crypto.randomUUID(),
    nombre: "WHEY GOLD STANDARD 2KG",
    fabricante: "Optimum Nutrition",
    descripcion:
      " Whey Gold Standard de Optimum Nutrition es un suplemento de concentrado de suero de proteína de alta calidad. Las proteínas de Optimum Nutrition, contribuyen a que aumente la masa muscular y conservarla.",
    precio: 9800,
    descuento: 10,
    categoria: "Proteinas S",
    imagen:
      "https://www.masmusculo.com/72069-thickbox_default/100-whey-gold-standard-5-lb-23kg.jpg",
  },
  {
    id: crypto.randomUUID(),
    nombre: "WHEY PROTEIN80 - 2KG",
    fabricante: "MM Supplements | Whey Protein",
    descripcion: '  Whey Protein80 de MM Supplements es un producto alimenticio a base de proteína de suero de leche ultrafiltrado, enriquecido además con aislado de suero de leche, de la mejor materia prima Lacprodan® de Arla Foods, que aporta más de 22 gramos de proteína por servicio. Gracias a su procesado a baja temperatura, se asegura que el producto contenga la mayor cantidad de sus cualidades nutritivas, intactas.',
    precio: 6800,
    descuento: 40,
    categoria: "Proteinas S",
    imagen:
      "https://www.masmusculo.com/106219-thickbox_default/whey-protein80-2-kg.jpg",
  },
];

let productos =
  JSON.parse(localStorage.getItem("productos")) || productosPrimerInicio;

if (JSON.parse(localStorage.getItem(productos)) === null) {
  localStorage.setItem("productos", JSON.stringify(productos));
}

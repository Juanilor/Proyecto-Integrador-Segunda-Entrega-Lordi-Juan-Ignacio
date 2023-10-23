const registerForm = document.getElementById("registerForm");

const usuariosPrimerInicio = [
  {
    nombreCompleto: "admin",
    email: "admin@admin.com",
    password: "admin",
    localidad: undefined,
    role: 'admin'
  },  {
    nombreCompleto: "Pedro Perez",
    email: "PedroP@correo.com",
    password: "1574adf",
    localidad: 'Buenos Aires',
    role: 'user'
  },  {
    nombreCompleto: "Armando Paredes",
    email: "ParArmando@correo.com",
    password: "15daq12",
    localidad: 'Salta',
    role: 'user'
  },{
    nombreCompleto: "Esteban Quitos",
    email: "naberseQuitos@correo.com",
    password: "15ddsaq1",
    localidad: 'Jujui',
    role: 'user'
  },
];

let usuarios =
  JSON.parse(localStorage.getItem("usuarios")) || usuariosPrimerInicio;

if (JSON.parse(localStorage.getItem(usuarios)) === null) {
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

console.dir(registerForm);

registerForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const el = registerForm.elements;

  const nuevoUsuario = {
    nombreCompleto: `${el.inputName.value} ${el.inputLastName.value}`,
    email: el.inputEmail.value,
    password: el.inputPassword.value,
    localidad: el.inputLocation.value,
    role: 'user'
  };

  if (nuevoUsuario.password !== el.inputRepeatPassword.value) {
    console.log("Las contraseñas no coinciden");
    return;
  }


  usuarios.push(nuevoUsuario)
  registerForm.reset();

  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  console.log(nuevoUsuario);
});

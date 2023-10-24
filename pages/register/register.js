const registerForm = document.getElementById("registerForm");

const usuarios = JSON.parse(localStorage.getItem("usuarios"))
console.dir(registerForm);

registerForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const el = registerForm.elements;
  const emailInput = evt.target.elements.inputEmail.value;

  const nuevoUsuario = {
    nombreCompleto: `${el.inputName.value} ${el.inputLastName.value}`,
    email: el.inputEmail.value,
    password: el.inputPassword.value,
    localidad: el.inputLocation.value,
    role: "user",
  };

  if (nuevoUsuario.password !== el.inputRepeatPassword.value) {
    console.log("Las contraseñas no coinciden");
    return;
  }

  const emailExiste = usuarios.find((user) => {
    if (user.email === emailInput) {
      console.log("El Email ya existe en la base de datos");
      return true;
    }
    return false;
  });

  if (!emailExiste) {
    usuarios.push(nuevoUsuario);
    registerForm.reset();

    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    console.log(nuevoUsuario);
  }else{
    return
  }
});

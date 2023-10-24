const usuarios = JSON.parse(localStorage.getItem("usuarios"));
const formLogin = document.getElementById("formLogin");

formLogin.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const email = evt.target.elements.inputEmail.value;
  const password = evt.target.elements.inputPassword.value;


  const userExist = usuarios.find((usr) => {
    if (usr.email === email) {
      return true;
    }
    return false;
  });

  if(!userExist || userExist.password !== password){
    
    Swal.fire("Error al introducir los datos", "Es posible que los datos ingresados no coincidan", "error");
    return
  }
  console.log(userExist.password)

  delete userExist.password
    
  localStorage.setItem( "currentUser", JSON.stringify(userExist)   )
 
  Swal.fire("Solicitud Aceptada", "En breve sera redirigido a nuestra pagina", "success");

  setTimeout(function() {
    window.location.href = '/index.html'
}, 2000)
});

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
    return
  }
  console.log(userExist.password)

  delete userExist.password
    
  localStorage.setItem( "currentUser", JSON.stringify(userExist)   )

  setTimeout(function() {
    window.location.href = '/index.html'
}, 2000)
});

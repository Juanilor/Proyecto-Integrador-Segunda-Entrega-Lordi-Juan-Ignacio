const tableBodyHTML = document.getElementById("tableBody");
const inputFiltrar = document.getElementById("filtrarUsuarios");
const usuarios = JSON.parse(localStorage.getItem("usuarios"));

console.log(usuarios);

const pintarUsuarios = (x) => {
  tableBodyHTML.innerHTML = " ";

  x.forEach((usr, index) => {
    tableBodyHTML.innerHTML += `<td>${usr.nombreCompleto}</td>
        <td>${usr.email}</td>
        <td>${usr.role}</td>
        <td>
            <button class='btn btn-sm btn-danger btn-delete' onclick="borrarProducto('${usr.id}','${usr.role}')">
                <i class="fa-solid fa-trash"></i>
        </button>
    </td>`;
  });
};

const borrarProducto = (userId, userRole) => {
  console.log(userId);
  if (userRole !== "admin") {
    Swal.fire({
      title: "Desea borrar un Usuario?",
      icon: "error",
      text: "Realmente desea elminar este usuario?",
      showCloseButton: true,
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      confirmButtonText: "Borrar",
    }).then((result) => {
      if (result.isConfirmed) {
        const indiceEncontrado = usuarios.findIndex((userFindIndex) => {
          if (userFindIndex.id === userId) {
            return true;
          }
          return false;
        });
        usuarios.splice(indiceEncontrado, 1);
  
        pintarUsuarios(usuarios);
  
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
  
        Swal.fire("Borrado!", "Producto borrado correctamente", "success");
      }
    });
  }
  if(userRole === 'admin'){
    Swal.fire("Perfil de Administrador!", "Es imposible borrar este usuario", "warning");
    return;
  }
};
pintarUsuarios(usuarios);

inputFiltrar.addEventListener("keyup", (evt) => {
  const busqueda = evt.target.value.toLowerCase();

  const resultado = usuarios.filter((user) => {
    const titulo = user.nombreCompleto.toLowerCase();
    const email = user.email.toLowerCase();

    if (titulo.includes(busqueda) || email.includes(busqueda)) {
      return true;
    }
    return false;
  });
  pintarUsuarios(resultado);
});

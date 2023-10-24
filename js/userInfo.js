const currentUser = JSON.parse(localStorage.getItem('currentUser'))
const userHeaderName = document.getElementById('userHeaderName')
const userActions = document.getElementById('userActions')

const navbarLink = document.querySelector("ul.navbar-nav#nav-list")


userHeaderName.innerText = currentUser? currentUser.nombreCompleto : ' '


if(currentUser){
    userActions.innerHTML = `<button class="btn btn-danger" onclick='logout()'>Logout</button>`

    if(currentUser.role === 'admin'){
        console.log('admin logeado');
        
        const adminProductsLink = document.createElement('li')
        adminProductsLink.classList.add('nav-item')
        adminProductsLink.id = 'nav-admin-product'
        
        const url = window.location.pathname;
        if(url.includes('admin.html')){
            adminProductsLink.classList.add('active')

        }
        
            const link = document.createElement('a')
            link.classList.add('nav-link')
            link.href = '/pages/Admin/admin.html'
            link.innerText = 'Productos Admin'
        
            adminProductsLink.appendChild(link)
        
            navbarLink.appendChild(adminProductsLink)
    }
}else{
    userActions.innerHTML = `<button class="btn btn-success" onclick='login()'>Login</button>`

    const registerLink = document.createElement('li')
    registerLink.classList.add('nav-item')
    registerLink.id = 'nav-admin-product'
    
    const url = window.location.pathname;
    if(url.includes('register.html')){
        registerLink.classList.add('active')

    }
    
        const link = document.createElement('a')
        link.classList.add('nav-link')
        link.href = '/pages/register/register.html'
        link.innerText = 'Registro'
    
        registerLink.appendChild(link)
    
        navbarLink.appendChild(registerLink)
}

const logout = () => {
    localStorage.removeItem('currentUser')
    setTimeout(() => {
        window.location.href = '/index.html'
    }, 2000)
}
const login = () => {
    setTimeout(() => {
        window.location.href = '/pages/login/login.html'
    }, 2000)
}
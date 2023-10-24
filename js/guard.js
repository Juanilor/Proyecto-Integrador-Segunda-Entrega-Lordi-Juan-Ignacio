const user = JSON.parse(localStorage.getItem("currentUser"))

if(!user || user.role !== 'admin') {

    window.location.href = '/index.html'

}
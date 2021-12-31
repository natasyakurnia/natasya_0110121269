function login(e) {
    e.preventDefault()
    const nama = document.getElementById("nama").value
    const pass = document.getElementById("pass").value
    if (nama == "Masukan Nama" && pass == "Masukan Password") {
        alert("Login Sukses")
    }
    else {
        alert("Login Gagal")
        window.Location.reload()
    }
}
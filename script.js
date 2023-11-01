function mostrarPantallaCompleta(imagen) {
    const divPantallaCompleta = document.getElementById("pantalla-completa")
    const imagenPantallaCompleta = document.getElementById("imagen-pantalla-completa")

    imagenPantallaCompleta.src = imagen.src
    divPantallaCompleta.style.display = "flex"
}

function cerrarPantallaCompleta() {
    const divPantallaCompleta = document.getElementById("pantalla-completa")
    divPantallaCompleta.style.display = "none"  
}
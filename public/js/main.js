const celular = document.getElementById("númeroT")

const formulario = document.getElementById("formulario")

formulario.addEventListener("submit", (event) => {
    event.preventDefault()

    console.log(celular.value)
})
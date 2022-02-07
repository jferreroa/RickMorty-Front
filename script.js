const leerPersonajes = async (link) => {
    const a = await fetch("https://rickandmortyapi.com/api/character/1,183")
    const b = await (a.json())
    console.log(b)
    if(a){
        return b;
    }
}

const crearCuadroPersonaje = () => {
    const container = document.querySelector(".container")
    let personaje = document.createElement("div")
    personaje.className = "personaje"
    let foto = document.createElement("div")
    foto.className ="foto"
    foto.innerHTML = "foto"
    let info = document.createElement("div")
    info.className = "info"
    info.innerHTML ="info"

     container.appendChild(personaje)
     personaje.appendChild(foto)
     personaje.appendChild(info)
}

window.onload = async () => {
    const arrpersonajes = await leerPersonajes()
    arrpersonajes.forEach(person => {
        //crear tantos cuadro personajes como sean necesarios
        crearCuadroPersonaje()
    })
}
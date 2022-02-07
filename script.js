const leerPersonajes = async (link) => {
    const a = await fetch("https://rickandmortyapi.com/api/character/1,183")
    const b = (a.json())
    if(a){
        return b;
    }
}

const crearCuadroPersonaje = async (elem) => {
    const linkFoto = elem.image
    const datosPersonaje = {
        name: elem.name,
        status: elem.status,
        species: elem.species,
        location: elem.location.name
    }
    console.log(datosPersonaje)
    console.log(linkFoto)
    const container = document.querySelector(".container")
    let personaje = document.createElement("div")
    personaje.className = "personaje"
    let foto = document.createElement("img")
    foto.className ="foto"
    foto.src = linkFoto
    //foto.setAttribute('url', 'linkFoto')
    let info = document.createElement("div")
    info.className = "info"
    info.innerHTML ="info"

     container.appendChild(personaje)
     personaje.appendChild(foto)
     personaje.appendChild(info)
}

window.onload = async () => {
    const arrpersonajes = await leerPersonajes()
    console.log(arrpersonajes)
    arrpersonajes.forEach(person => {
        //crear tantos cuadro personajes como sean necesarios
        crearCuadroPersonaje(person)
    })
}
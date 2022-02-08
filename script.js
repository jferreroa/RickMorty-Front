const leerPersonajes = async (link) => {
    const a = await fetch("https://rickandmortyapi.com/api/character/36,6,7,10,20")
    const b = await (a.json())
    console.log(b)
    if(b.results && a){
        return b.results;
    }else if(a){
        return b
    }
}
let x = 0;
const crearInfoPersonaje = async (datosPersonaje) => {
    const info = document.querySelectorAll(".info")
    
    let nombre = document.createElement("div")
    let specie = document.createElement("div")
    let location = document.createElement("div")
    let firstEpisode = document.createElement("div")
    const realEpisode = await fetch(datosPersonaje.episode)
    const b = await realEpisode.json()
    nombre.innerHTML = datosPersonaje.name
    
    if(datosPersonaje.status == "Alive"){
        specie.innerHTML = "&#128154" + datosPersonaje.status + " - " + datosPersonaje.species

    }else if(datosPersonaje.status == "Dead"){
        specie.innerHTML = "&#128148" + datosPersonaje.status + " - " + datosPersonaje.species
        
    }else{
        specie.innerHTML = "&#128161" + datosPersonaje.status + " - " + datosPersonaje.species
    }
    
    
    
    location.innerHTML = "Last known location:\n" + datosPersonaje.location
    firstEpisode.innerHTML = "First seen in:\n" +  b.name
    console.log(b.name)
    info[x].appendChild(nombre)
    info[x].appendChild(specie)
    info[x].appendChild(location)
    info[x].appendChild(firstEpisode)

    x++
}

const crearCuadroPersonaje = async (elem) => {
    const linkFoto = elem.image
    let datosPersonaje = {
        name: elem.name,
        status: elem.status,
        species: elem.species,
        location: elem.location.name,
        episode: elem.episode[0]
    }
    console.log(datosPersonaje.name)
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
    container.appendChild(personaje)
    personaje.appendChild(foto)
    personaje.appendChild(info)

    await crearInfoPersonaje(datosPersonaje)
}

window.onload = async () => {
    const arrpersonajes = await leerPersonajes()
    console.log(arrpersonajes.length)
    if(arrpersonajes.length == undefined) {
        crearCuadroPersonaje(arrpersonajes)
    }else{
        arrpersonajes.forEach(person => {
            crearCuadroPersonaje(person)
        })
    }

}
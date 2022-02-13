let arrpersonajes = [];

const leerPersonajes = async (link) => {
    if (!link) {
        return
    }
    const a = await fetch(link)
    const b = await (a.json())
    console.log(b)
    if (b.results && a) {
        return b.results;
    } else if (a) {
        arrpersonajes = b
        return b
    }
}

let urlA = ""
const getUrl = () => {
    let url = document.querySelector(".input").value;
    urlA = url 
}


const crearCuadroPersonaje = async(elem) => {
    const linkFoto = elem.image
    let a = {
        name: elem.name,
        status: elem.status,
        species: elem.species,
        location: elem.location.name,
        episode: elem.episode[0]
    }

    let datosPersonaje = a
    const container = document.querySelector(".container")
    let personaje = document.createElement("div")
    personaje.className = "personaje"
    let foto = document.createElement("img")
    foto.className = "foto"
    foto.src = linkFoto
    //foto.setAttribute('url', 'linkFoto')
    let info = document.createElement("div")
    info.className = "info"
    container.appendChild(personaje)
    personaje.appendChild(foto)
    personaje.appendChild(info)

    //await crearInfoPersonaje(datosPersonaje)
    //Promise.resolve( crearInfoPersonaje(datosPersonaje))
    //const info = document.querySelectorAll(".info")

    let specie = document.createElement("div")
    let location = document.createElement("div")
    let firstEpisode = document.createElement("div")
    let nombre = document.createElement("div")

    const realEpisode = await fetch(datosPersonaje.episode)
    const b = await realEpisode.json()
    if (datosPersonaje.status == "Alive") {
        specie.innerHTML = "&#128154" + datosPersonaje.status + " - " + datosPersonaje.species

    } else if (datosPersonaje.status == "Dead") {
        specie.innerHTML = "&#128148" + datosPersonaje.status + " - " + datosPersonaje.species

    } else {
        specie.innerHTML = "&#128161" + datosPersonaje.status + " - " + datosPersonaje.species
    }
    location.innerHTML = "Last known location:\n" + datosPersonaje.location
    firstEpisode.innerHTML = "First seen in:\n" + b.name
    nombre.innerHTML = "-"+datosPersonaje.name

    info.appendChild(nombre)
    info.appendChild(specie)
    info.appendChild(location)
    info.appendChild(firstEpisode)

}

window.onload = () => {
    console.log(parseInt(window.innerWidth))
    const input =setInterval(async () => {
        getUrl()
        console.log("interval")
        const arrpersonajes = await leerPersonajes(urlA)
        if (arrpersonajes) {
            console.log("arrpersonajes")
            if (arrpersonajes.length == undefined) {
                 crearCuadroPersonaje(arrpersonajes)
                clearInterval(input)
            } else {
                arrpersonajes.forEach(async person => {
                     Promise.resolve( crearCuadroPersonaje(person))
                })
                clearInterval(input)
            }
        }

    }, 500)



}
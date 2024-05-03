let api_key = 'c14ebffb7f06220679861206d0e59ad0'
let urlBase = 'https://api.openweathermap.org/data/2.5/weather'
let difKelvin = 273.15

function kelvinaCelsius(kelvin) {
    return Math.floor(kelvin - difKelvin)
}

document.getElementById("botonBusqueda").addEventListener('click', () => {
    const ciudad = document.getElementById('ciudadEntrada').value
    if (ciudad) {
        fetchDatoClima(ciudad)
    }
})


function fetchDatoClima(ciudad) {
    fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
        .then(respuesta => respuesta.json())
        .then(respuesta => mostrarDadtosClima(respuesta)
        )
}



function mostrarDadtosClima(respuesta) {

    console.log(respuesta)

    const divDatosClima = document.getElementById('datosClima')
    divDatosClima.innerHTML = ''
    const nombreCiudad = respuesta.name
    const temperatura = respuesta.main.temp
    const descripcion = respuesta.weather[0].description
    const humedad = respuesta.main.humidity
    const tempMin = respuesta.main.temp_min
    const tempMax = respuesta.main.temp_max
    const icon = respuesta.weather[0].icon


    const ciudadTitulo = document.createElement('h2')
    ciudadTitulo.textContent = nombreCiudad

    const temperaturaInfo = document.createElement('p')
    temperaturaInfo.textContent = `La temperatura actual es: ${kelvinaCelsius(temperatura)}°C`

    const temperaturaMinInfo = document.createElement('p')
    temperaturaMinInfo.textContent = `Temperatura Minima: ${kelvinaCelsius(tempMin)}°C`

    const temperaturaMaxInfo = document.createElement('p')
    temperaturaMaxInfo.textContent = `Temperatura Maxima: ${kelvinaCelsius(tempMax)}°C`

    const humedadinfo = document.createElement('p')
    humedadinfo.textContent = `La humedad es: ${humedad}%`

    const iconoInfo = document.createElement('img')

    iconoInfo.src = `https://openweathermap.org/img/wn/${icon}.png`

    const descripcionInfo = document.createElement('p')
    descripcionInfo.textContent = `Descripcion Meteorologica:${descripcion}`

    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.appendChild(temperaturaInfo)
    divDatosClima.appendChild(temperaturaMinInfo)
    divDatosClima.appendChild(temperaturaMaxInfo)
    divDatosClima.appendChild(humedadinfo)
    divDatosClima.appendChild(iconoInfo)

    divDatosClima.appendChild(descripcionInfo)

}


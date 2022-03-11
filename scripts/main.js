window.onload = () => {
    getData()
}

const getData = () => {
    fetch('data.json')
    .then((res) => {
        return res.json()
    }).then((data) => {
        showData(data)
    })
}

showData = (data) => {
    document.getElementById('time').innerText = `${data.time}`
    document.getElementById('pollution').innerText = `${data.pollution}`
    document.getElementById('covidcases').innerText = `${data.covid.infectedCount}`
    document.getElementById('coviddeaths').innerText = `${data.covid.deceasedCount}`
    document.getElementById('weathertempurature').innerText = `${data.weather.temp}`
    document.getElementById('weatherclouds').innerText = `${data.weather.cloud}`
    document.getElementById('weatherkph').innerText = `${data.weather.wind_kph}`
    document.getElementById('weatherhumidity').innerText = `${data.weather.humidity}`
    document.getElementById('weatherfeelslike').innerText = `${data.weather.feelslike}`
    document.getElementById('weathercondition').innerText = `${data.weather.condition}`
}


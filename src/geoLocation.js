let lat, lon
if ('geolocation' in navigator) {
    console.log('geolocation available')
    navigator.geolocation.getCurrentPosition(position => {
        lat = position.coords.latitude
        lon = position.coords.longitude
        document.getElementById('latitude').textContent = lat
        document.getElementById('longitude').textContent = lon
    })
} else {
    console.log('geolocation not available')
}

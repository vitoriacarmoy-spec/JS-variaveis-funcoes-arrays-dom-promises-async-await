/*sincrono bloqueia o codigo de ser mostrado
asincrono mostra na hora
pode por uma funçao assincrona real no objeto de promessa 
async assincrono
await espera completar*/
function getWeather() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve('Sunny')
        }, 100)
    })
}

function getWeatherIcon(weather) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            switch (weather) {
                case 'Sunny':
                    resolve('☀️')
                    break

                case 'Cloudy':
                    resolve('☁️')
                    break

                case 'Rainy':
                    resolve('🌧️')
                    break

                default:
                    reject('NO ICON FOUND')
            }
        }, 100)
    })
}

function onSucess(data) {
    console.log(`Success param ${data}`)
}

function onError(error) {
    console.log(`Error param ${error}`)
}

getWeather()
    .then(getWeatherIcon)
    .then(onSucess, onError)
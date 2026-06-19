/*sincrono bloqueia o codigo de ser mostrado
asincrono mostra na hora
pode por uma funçao assincrona real no objeto de promessa 
async assincrono
await espera completar*/
syncFunc()
console.log('Hello!')

asyncFunc() 
console.log('Hello!')

function getWeather(){
    return new Promise(function(resolve,reject))
setTimeout(() => {
resolve('Sunny')
    },100)
}

/** antiquado 
let promise = getWeather()
promise.then(function(data)){
    console.log(data)
},function(data){
    console.log(`First param ${data}`)
}
function(data){
    console.log(`Second param ${data}`)
}
*/
function getWeatherIcon(weather){
 return new Promise(function(resolve,reject))
setTimeout(() => {
    switch(weather){
        case 'Sunny':
            resolve ('a')
            break
            case 'Cloudy': 
            resolve('e')
            break
            case 'Rainy': 
            resolve('i')
            break
            default:
                reject('NO ICON FOUND')
    }
resolve('Sunny')
    },100)
}


function onSucess(){
    
    console.log(`Sucess param ${data}`)
}

function onError(error){
    
    console.log(`Error param ${error}`)
}

getWeather()
.then(getWeatherIcon)
.then(onSucess,onError)
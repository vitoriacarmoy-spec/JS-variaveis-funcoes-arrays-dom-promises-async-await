/*sincrono bloqueia o codigo de ser mostrado
asincrono mostra na hora
pode por uma funçao assincrona real no objeto de promessa */
syncFunc()
console.log('Hello!')

asyncFunc() 
console.log('Hello!')

functiongetWeather(){
    return new Promise(function(resolve,reject)
setTimeout(function()){
resolve('Sunny')
    })
}


let promise = getWeather()

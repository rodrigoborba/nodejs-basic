//forma 1
//module.exports = 'My name is Rodrigo'

//forma 2
// module.exports = exports = function(){
//     console.log('My name is Rodrigo')
// }

//forma 3, recomendada no curso
module.exports.name = function(){
    let frase = 'My name is Rodrigo(exports)'
    console.log('imprimindo frase ' + frase)
    return frase
}

//forma 4
//alias será ignorado pela precedencia do module.exports
// exports.name = function(){
//     console.log('My name is Rodrigo(exports)')
// }

//forma 5
module.exports = {
    a: function() {
        let frase = 'My name is Rodrigo(exports)'
        console.log('imprimindo frase ' + frase)
        return frase
    },
    b: function() {
        console.log('outra function')
    }
}
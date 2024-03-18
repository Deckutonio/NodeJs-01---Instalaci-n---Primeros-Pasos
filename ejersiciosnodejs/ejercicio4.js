const os = require('node:os')
console.log('cantidad de espacio libre: ' + os.freemem())
const vec = []
for (let f = 0; f< 1000000; f++){
    vec.push(f)
}
console.log('cantidad de espacio libre luego de la cracion del vector: ' + os.freemem())
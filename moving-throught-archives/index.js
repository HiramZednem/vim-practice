const { ayuda } = require('./helper.js')

const suma = (ns) => {
  let acumulado = 0;
  for (i = 0; i < ns.length; i++) {
    acumulado += ns[i];
  }
  ayuda()
  return acumulado;
} 


// un poco de texto para eliminar
const numeros = [1, 2, 3, 4, 5];

const multiplicados = numeros.map(x => x * 2)
// a pares
const parejas = numeros.map(x => [x, x])

const mascotas = [
  { nombre: 'Pelusa',  age: 12, tipo: 'gato' },
  { nombre: 'Puchini', age: 12, tipo: 'perro' },
  { nombre: 'Pulga',   age: 10, tipo: 'perro' },
]
// edad promedio
const edades = mascotas.map(x => x.edad)
const resultado = suma(edades)
console.log(resultado / edades.length);

const array = [
  { name: 'Iphone', price: 4300, quantity: 6 },
  { name: 'Poco X3 Pro', price: 1900, quantity:  10},
  { name: 'Galaxy S21', price: 5500, quantity: 11},
  { name: 'Hauwei P50 Pro', price: 9000, quantity: 3},
];

/*** .find & .findIndex *********************** */

/** o método 'find' percorre o array
 * e traz o primeiro elemento onde
 * retorna true(verdadeiro) para 
 * a condição pedida
*/
const find = array.find( (product) => product.price >= 1000 );
// console.log( { find } );

/** o método 'findIndex' percorre o array
 * e traz o índice do primeiro elemento 
 * onde retorna true(verdadeiro) para
 * a condição pedida
*/
const findIndex = array.findIndex( (product) => product.price > 1000 );
// console.log( { findIndex } );

/*** .some & .every *************************** */

/** o método 'some' percorre o array
 * e procura se em algum valor cumpre a condição pedida
 * e retorna true(verdadeiro) ou false(falso) 
 * como resposta 
*/
const some = array.some( (product) => product.price > 1000 );
// console.log( { some } );

/** o método 'every' percorre o array
 * e procura se todos os valores cumprem a 
 * condição pedida e retorna true(verdadeiro)
 * ou false(falso) como resposta 
*/
const every = array.every( (product) => product.price >= 1000 );
// console.log( { every } );

/*** .map *************************** */

/** o método 'map' percorre o array
 * e cria um outro array com a mesma quantidade
 * de posições como está no original.
 * OBS: o map, normalmente, é utilizado
 * para fazer alterações no array como um todo
*/
const map = array.map( (product) => ({
  ...product,
  subtotal: product.quantity * product.price,
}) );
// console.log( { map } );

/*** .filter *************************** */

/** o método 'filter' percorre o array
 * e cria um outro array filtrado com
 * as informações que correspondem a
 * a condição pedida
*/
const filter = array.filter( (product) => product.quantity > 1 );
// console.log( { filter } );

/*** .reduce *************************** */

/** o método 'reduce' cria um outro array com
 * as informações do array original reduzidas e
 * as transforma em um outro tipo de dado
*/
const reduce = array.reduce( (total, product) => {
  // aqui obtemos o preço total dos produtos juntos
  return total + (product.price * product.quantity)
}, 0 );
console.log( { reduce } );
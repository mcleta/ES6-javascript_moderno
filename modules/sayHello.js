// exportar blocos de códigos para arquivo central

// maneira 1 de export
// module.exports = function sayHello(name) {
//   console.log(`Olá, ${name}!!!`);
// };

/****************************************************** */
// maneira 2 de export
// function sayHello(name) {
//   console.log(`Olá, ${name}!!!`);
// };

// export default sayHello;

/****************************************************** */
// maneira 3 de export
function sayHello(name) {
  console.log(`Olá, ${name}!!!`);
};

/** 
 * utilizando a destructuring exportamos
 * o bloco de código como obj para nomeá-lo
 */
export { sayHello };
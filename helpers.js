/** Atenção!!!!
 * todos os métodos abaixo utilizam "case sensitve" 
*/

/****************************************************** */
const tech = 'Murillo.Leta';

const array = ['Murillo', 'Casemiro', 'Leta'];

/****************************************************** */
/** o método 'includes' em uma string verifica 
 * se algum caracter ou conjunto de caracteres 
 * está presente na mesma
 */ 
const includesString = tech.includes('.');

/** o método 'includes' em um array/obj verifica 
 * se em algum índice há o valor pesquisado.
 * OBS: nesse caso deve-se passar o valor completo
 * ao invés de parte dele. Como por exemplo:
 * array.includes('Murillo')
 * array.includes('illo')
 */ 
const includesArray = array.includes('Murillo');
console.log({ includesString, includesArray });

/****************************************************** */
/** os métodos 'startsWith' e 'endsWith'
 * funcionam de maneira parecida como o 'includes'.
 * ele verifica a string começa/termina com algum 
 * caracter ou conjunto de caracteres específicos
*/
const startsWith = tech.startsWith('Mu');
const endsWith = tech.endsWith('eta');
console.log({ startsWith, endsWith });

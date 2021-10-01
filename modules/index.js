// importar blocos de códigos para o arquivo central

// maneira 1 de import
// const sayHello = require('./sayHello');

// sayHello('Murillo');

/****************************************************** */
// maneira 2 de import
// import sayHello from './sayHello.js';

// sayHello('Murillo');

/**OBS:
 * para utilizar a 2º maneira deve-se 
 * ou utilizar alguma ferramenta
 * de transpilação
 * ou mudar a extensão de todos os 
 * arquivos para '.mjs' e importar 
 * o arquivo com a extensão
 * ou criar o 'package.json' e utilizar
 * uma "flag", "type": "module", e
 * importar com a extensão '.js'
 */

/****************************************************** */
// maneira 3 de import
/** 
 * utilizando o destructuring importamos o obj
 * para uma variavel de mesmo nome
 */
import { sayHello as newName } from './sayHello.js';
// no import com destructuring utilizamos 'as' para renomear a variavel

newName('Murillo');

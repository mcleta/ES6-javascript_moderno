// obj
const user = {
  id: 01,
  firstName: "Murillo",
  lastName: "Leta",
  full_name: "Murillo Casemir Leta",
  age: 19,
  skills: ['html', 'css', 'js-basic', 'persistência'],
  active: false,
};

// Spread (espalhar) operator
const updateUser = {
  /**
   *  aplicando o 'spread operator' para clonar 
   *  as propriedades o obj e/ou array original
   * */
  ...user,
  /**
   * alterando o clone
   */
  skills: [...user.skills, 'Curiosidade'],
  active: true
}

/**OBS:
 * o 'spread operator' é utilizado para ter a 
 * imutabilidade de um obj e/ou array, ou seja,
 * clona-se o original para não altera-lo e 
 * depois dar ruim
 */
console.log(user);
console.log(updateUser);

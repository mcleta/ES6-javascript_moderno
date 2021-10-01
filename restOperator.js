// obj
const user = {
  id: 01,
  firstName: "Murillo",
  lastName: "Leta",
  full_name: "Murillo Casemir Leta",
  age: 19,
  skills: ['html', 'css', 'js-basic', 'persistência']
};


// Rest (resto) operator
// obs: a variavel onde se aplica o 'rest operator' deve-se ficar por ultimo, por ser o "resto"
const { firstName, skills, ...resto } = user;
const [ um ] = skills;

console.log(`Name: ${firstName}, Skill: ${um}`);
console.log(resto);

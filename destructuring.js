// obj
const user = {
  id: 01,
  firstName: "Murillo",
  lastName: "Leta",
  full_name: "Murillo Casemir Leta",
  age: 19,
  skills: ['html', 'css', 'js-basic', 'persistência']
};

// maneira padrão de guardar a propriedade do objeto em uma variavel
const idUser = user.id;

console.log(`id: ${idUser}`);

// destructuring/desestruturação para guardar a propriedade do objeto e array em uma variavel 
                      // renomeação de uma variavel ( nomeDaPropriedade/variavel: novoNome )
const { firstName, age, full_name: fullName, skills } = user;
const [um, dois, tres, quatro] = skills;

console.log(`
Name: ${firstName}
Age: ${age}
Full name: ${fullName}
`);
console.log(`Skills: ${um},  ${dois}, ${tres}, ${quatro}`);
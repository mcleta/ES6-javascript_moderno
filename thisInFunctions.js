// Callback de diferença do obj 'this'
function names() {
  // função padrão
  function funPadrao() {
    return this.name = "Bela";
  }
  
  // o 'this' em uma função padrão atua no escopo principal de onde é declarado
  // nesse exemplo é na função 'names'
  console.log(`Type: ${typeof new funPadrao()}, Value: ${funPadrao()}`)
  
// arrow function
  const pName = () => {
   return this.name = "João";
  }

  // o 'this' em uma arrow function atua no escopo onde é declarado
  // nesse exemplo é no console.log
  console.log(`Type: ${typeof pName()}, Value: ${pName()}`)  
}

names();
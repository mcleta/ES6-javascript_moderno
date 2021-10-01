const fakeApiCall = new Promise( (resolve, reject) => {
  setTimeout( () => {
    // resolve(`Sucesso!!!`);
    reject(`Deu ruim!!!!`);
  }, 2000 );
});

// fakeApiCall
//   .then( (res) => {
//     console.log(res);
//   })
//   .catch( (erro) => {
//     console.log(erro);
//   });


async function run() {
  try {
    const res = await fakeApiCall;
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

run()

console.log("Depois da promise.....")
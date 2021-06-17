(()=>{

  const sumar = (a: number, b: number):number => a + b;


  const nombre = (): string => 'Hola Mundo';

  const obtenerSalario =():Promise <string>=>{
      
    return new Promise((resolve, rejesct) => {

        resolve('Hola Mundo');
    });
  }

    obtenerSalario().then(a => console.log( a.toUpperCase()))

})();
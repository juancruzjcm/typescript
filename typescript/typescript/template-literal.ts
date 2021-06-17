(function(){

    //Juan Cruz Martinez (Edad: 27)
    
    function getEdad(){
      return 200 + 300; 
    }
    
    const nombre    = 'Juan Cruz';
    const apellido  = 'Martínez';
    const edad      = 27;
    
    /* const salida = nombre + " " + apellido + " ( " + edad + " )"; */
    
    const salida = `
     ${ nombre }
      ${ apellido }
       ( ${ getEdad() } )`; 
    
    console.log(salida)
    })();
    
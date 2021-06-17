(()=>{

    interface Xmen {
      nombre: string;
      edad: number;
    }
  
    const enviarMision = ( xmen: Xmen ) => {
  
      console.log(`Enviando a ${xmen.nombre} a la misión `);
    }
    const regresarAlCuartel = ( xmen: Xmen ) => {
  
      console.log(`Regresando a ${xmen.nombre} de la misión `);
    }
  
  
    const wolverine: Xmen = {
      nombre: 'Logan',
      edad: 100
    }
  
    enviarMision( wolverine );
    regresarAlCuartel( wolverine);
  
  })();
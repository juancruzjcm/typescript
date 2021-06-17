(()=>{

    const avenger = {
      nombre: 'Steve',
      clave: 'Capitán América',
      poder: 'Supersoldado'
    }
  
    const extraer =( {nombre, poder, clave }: any )=>{
  
      
        console.log (nombre);
        console.log (clave); 
        console.log (poder); 
  
  
      
    }
    // extraer( avenger );
  
    //Desestructuracion de arrelgos
  
    const avengers: string[] = ['Thor','Ironman','Spiderman'];
  
    const [ thor, ironman, spiderman] = avengers;
  
    console.log( thor); 
    console.log( ironman );  
    console.log( spiderman );  
  
  
    const extraerArr = ( [ thor, ironman, spiderman]: string[]) =>{
      console.log(thor);
      console.log( ironman);
      console.log( spiderman);
   
    }
    
    
    
    
    
  })();
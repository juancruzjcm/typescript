(()=>{

    console.log('Inicio');
   const promesaUno = new Promise((resolve, reject)=>{
  
  
    setTimeout(()=>{
      reject('Se terminó el timeOut');
    },1000);
  
  
  
   });
  
   promesaUno
      .then(mensaje => console.log(mensaje))
      .catch(err => console.warn( err ));
    
    console.log('Fin');
    
    
  })();
(()=>{

  /* 
    class Avenger {
        
        nombre: string = 'Sin nombre';
        equipo: string;
        nombreReal: string;

        puedePelear: boolean;
        peleasGanadas: number = 6;    
        
        constructor(nombre: string, equipo: string, nombreReal: string, puedePelear: boolean, peleasGanadas: number){

        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
        
        this.puedePelear = puedePelear;
        this.peleasGanadas = peleasGanadas;    
    
        }

    }    
    */ 


    class Avenger {
       /*  
        nombre: string = 'Sin nombre';
        equipo: string;
        nombreReal: string;

        puedePelear: boolean;
        peleasGanadas: number = 6;    
         */

        constructor( public nombre: string,
                     public equipo: string,
                     public nombreReal?: string,
                     public puedePelear?: boolean,
                     public peleasGanadas?: number ){}

    }    


    const antman = new Avenger('jon', 'crema');

    console.log(antman);

})();
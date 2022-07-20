const tarjetas = [
    {
      id: 1,
      titulo: 'Titulo 1',
      descripcion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
      imagen: 'https://picsum.photos/250/250?random=1'
    },
    {
      id: 2,
      titulo: 'Titulo 2',
      descripcion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
      imagen: 'https://picsum.photos/250/250?random=2'
    },
    {
      id: 3,
      titulo: 'Titulo 3',
      descripcion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
      imagen: 'https://picsum.photos/250/250?random=3'
    },
    {
      id: 4,
      titulo: 'Titulo 4',
      descripcion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
      imagen: 'https://picsum.photos/250/250?random=4'
    }
  ]
  

let coleccion = []

function agregarTarjeta (id) {
    let aux=0;
    for (const element of tarjetas) {
      if(element.id === id){
        if(coleccion.length > 0){
           for (const element1 of coleccion) {
             if(id === element1.id){
                aux++;
             }
           }
           if(aux===0)
           coleccion.push(element);
          }else{
            
              coleccion.push(element);
            
        }
      }
    }
  }
  console.log(tarjetas)
  agregarTarjeta (1)
  agregarTarjeta (2)
  agregarTarjeta (1)
  agregarTarjeta (2)
  agregarTarjeta (4)
  agregarTarjeta (4)

  console.log('array **********COLECCION***************')
  console.log(coleccion)

  function removerTarjeta(id) {

    for(let i=0;i<coleccion.length;i++){
        if(coleccion[i].id === id){
            coleccion.splice(i,1);
        } 
    }
   }
console.log('****REMOVER************')
   removerTarjeta(4)
   removerTarjeta(1)
   removerTarjeta(2)
//    coleccion.splice(0,1);
   console.log(coleccion);

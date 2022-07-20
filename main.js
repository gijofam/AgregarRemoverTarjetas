/* BASE DE DATOS */
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

/* TEMPLATE
<article class="tarjeta">
  <img src="** IMAGEN **" alt="** TITULO **" class="imagen__tarjeta">
  <div class="cuerpo__tarjeta">
    <h2 class="titulo__tarjeta">** TITULO **</h2>
    <p class="descripcion__tarjeta">
      ** DESCRIPCION **
    </p>
    <button class="agregar__btn" data-id="** ID **">agregar</button>
  </div>
</article>
*/

/* BUCAR EL ELEMENTO QUE CONTENDRA LAS TARJETAS */
const tarjetasContenedor = document.getElementById('tarjetasContenedor')

/* CREAR UNA FUNCION PARA PINTAR LAS TARJETAS EN EL DOM */
function pintarTarjetas () {
 let content = '';
 for (const element of tarjetas) {
  content += `<article class="tarjeta">
  <img src="${element.imagen}" alt="${element.titulo}" class="imagen__tarjeta">
  <div class="cuerpo__tarjeta">
    <h2 class="titulo__tarjeta">${element.titulo}</h2>
    <p class="descripcion__tarjeta">
      ${element.descripcion}
    </p>
    <button class="agregar__btn" data-id="${element.id}">agregar</button>
  </div>
</article>`;
 }

 tarjetasContenedor.innerHTML = content;
}

/* INVOCAR LA FUNCION */
pintarTarjetas();

/* CREAR UN NUEVO ARREGLO VACIO PARA AGREGAR LAS TARJETAS A LA COLECCION */
let coleccion = []

/* BUCAR EL ELEMENTO QUE CONTENDRA LAS TARJETAS DE LA COLECCION */
const coleccionContenedor = document.getElementById('coleccionContenedor')


/* CREAR UNA FUNCION PARA PINTAR LAS TARJETAS EN LA COLECCION */
function pintarColeccion () {
  let content = '';
  for (const element of coleccion) {
   content += `<article class="tarjeta">
   <img src="${element.imagen}" alt="${element.titulo}" class="imagen__tarjeta">
   <div class="cuerpo__tarjeta">
     <h2 class="titulo__tarjeta">${element.titulo}</h2>
     <p class="descripcion__tarjeta">
       ${element.descripcion}
     </p>
     <button class="remover__btn" data-id="${element.id}">remover</button>
   </div>
 </article>`;
  }
 
  coleccionContenedor.innerHTML = content;
}

/* INVOCAR LA FUNCION */
// pintarColeccion()



 

//   document.querySelectorAll('.agregar__btn').forEach(function(btn) {
//     btn.addEventListener('click', function (e){
//         console.log(e.target.dataset.id);
//     });
// });


/* CREAR UNA FUNCION PARA AGREGAR UNA TARJETA A LA COLECCION */
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

/* CREAR UNA FUNCION PARA REMOVER UNA TARJETA A LA COLECCION */
function removerTarjeta (id) {
  for(let i=0;i<coleccion.length;i++){
    if(coleccion[i].id === id){
        coleccion.splice(i,1);
    } 
  }
}

/* funciones agregadas */
// function getIdElement(){
  // let getElementId;
  // document.querySelector('.contenedor__principal').addEventListener('click', (e)=>{
  //       if(e.target.matches('.agregar__btn')){
  //     getElementId = e.target.dataset.id;
  //     // console.log(e.target)
  //     agregarTarjeta(parseInt(getElementId));
  //     // pintarColeccion()

  //   }
  // });

/* UTILIZAR EL DELEGADOR DE EVENTOS PARA AGREGAR LAS TARJETAS A LA COLECCION */
tarjetasContenedor.addEventListener('click', (e) => {

  if(e.target.matches('.agregar__btn')){
    agregarTarjeta(parseInt(e.target.dataset.id));  
  }

  // /* IMPORTANTE VOLVER A INVOCAR LA FUNCION PARA REFRESCAR LA COLECCION */
  pintarColeccion();
})

/* UTILIZAR EL DELEGADOR DE EVENTOS PARA REMOVER LAS TARJETAS DE LA COLECCION */
coleccionContenedor.addEventListener('click', (e) => {
if(e.target.matches('.remover__btn')){
  removerTarjeta(parseInt(e.target.dataset.id));
}

  /* IMPORTANTE VOLVER A INVOCAR LA FUNCION PARA REFRESCAR LA COLECCION */
  pintarColeccion();
})

 /* punto uno y dos *_* */

let ed = 'santisisto';

console.log('hola  '+ ed);  

 /* funciones *_* */
function areaTri(){

    let base = 5;
    let altura = 9;
    let area = (base * altura) / 2;
    return area;
};

console.log('el área del triángulo es: '+ areaTri());

 /* condiciones *_* */
 function verdaderoFalso(){

    let num = -1;
    let feliz = 'feliz';
    let triste = 'triste';
    if(num < 0){
        return triste;
    }else{
        return feliz;
    }
 };
 console.log('su numero esta: '+ verdaderoFalso());

  /* bucles */
  function bucles(){

    for(var i = 1; i <=10; i++){
        console.log('terminó el bucle '+ i);
    };
  };
  bucles();

    /* punto tres */
      /* seleccion de elementos */
      
const boton = document.getElementById('miBtn') ;
boton.addEventListener('click',function(){
    boton.innerHTML = 'tex'
});
      /*Modificación del Contenido*/
      
const ahr = document.getElementById('punto3') ;
ahr.addEventListener('click',function(){
    ahr.style.backgroundColor = 'blue';
});

      /*Eventos*/
      const pe3 =document.getElementById("pun3");
      pe3.addEventListener('click',function(){
    pe3.innerHTML = 'bofff lo hice'
});
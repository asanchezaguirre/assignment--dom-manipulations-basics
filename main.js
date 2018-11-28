
document.querySelector("#inject-html button").addEventListener('click',function(){
  // TASK #1
  var answerBoxEl = document.querySelector('#inject-html .answer-box')
  answerBoxEl.innerHTML = "<h2>Here is some text for you!!</h2>"
})


document.querySelector("#double button").addEventListener('click',function(){
  // TASK #2
  // you do the rest

  var answerPTagWithValue = document.querySelector('#compoundInvestment');
 answerPTagWithValue.innerHTML = answerPTagWithValue.innerHTML * 2


})



document.querySelector("#blow-up button").addEventListener('click',function(){
  //TASK #3
  // you do the rest

  var circle = document.querySelector(".circle-red");
  if (circle.offsetWidth < 320){
    circle.style.width = circle.offsetWidth * 2 + "px";
    circle.style.height = circle.offsetHeight * 2 + "px";
  }else {
    circle.style.width = "40px";
    circle.style.height = "40px";
  }  

}) 



document.querySelector("#remove button").addEventListener('click',function(){
  // TASK #4
var eliminarLista = document.querySelectorAll(".inactive");
eliminarLista.forEach(function(i){
  i.remove();
})
 
})


document.querySelector("#reverse-squares button").addEventListener('click',function(){
  // TASK #5
//se crea el arreglo para que en algùn momento se pueda guardar
var array = []
//creamos una variable del padre
var fatherBox = document.querySelector("#squares-box")
//creamos una variable de los hijos, para identificarlos
var box = document.querySelectorAll(".square")
//recorrermos los hijos
box.forEach(function(square){
//movemos los hijos al arreglo vacìo, para que no desaparezcan y despuès podamos subirlos de nuevo 
  array.push(square)
//eliminamos los hijos para despuès subirlos de nuevo
  square.remove();
})
//el arreglo existente lo mandamos al revès y recorremos
array.reverse().forEach(function(square){
  //agregamos los hijos con el nuevo arreglo
  fatherBox.appendChild(square)
})

})

document.querySelector("#pig-latin button").addEventListener('click',function(){
  // TASK #6

//Declaro un arreglo vacìo para subir lo que desapareceremos
var contenedorTexto = [];
//Doy una variable al padre
var container = document.querySelector("#tasks")
//Doy una variable a los hijos
var listItems = document.querySelectorAll("#tasks li")
//Itero sobre los hijos para modificarlos
listItems.forEach(function(item){
  //Creo una variable para cada item, seleccionando sòlo el texto
  var word= item.innerHTML;
  //Creo una variable para convertir en arreglo, darle la reversa, y unirlo
  var wordReverse = word.split("").reverse().join("");
  //Subo al array vacìo esa variable
  contenedorTexto.push(wordReverse);
  //Elimino cada item
  item.remove();
})
//itero en el contenedr vacìo
contenedorTexto.forEach(function(text){
  //Creo el elemento lista nuevamente en una variable
  var li = document.createElement("li");
  //Afirmo que la variable es igual a cada index-text
  li.innerHTML = text;
  
  container.appendChild(li);
})




})

document.querySelector("#cycle-image button").addEventListener('click',function(){
   //TASK #7
})

function generarexcusa() {
let who = ['El presidente', 'La Abuela' , 'El raton', 'El programador'];
let action = ['robo', 'quemo','cocino','exploto' ];
let what = [' el vestido', 'la Comida', 'el pastel' ,'el internet'];
let when = ['en san valentín',  'el domingo por la mañana', 'el día de la boda', 'en la reunión'];



function elementoaleatorio(Array){
let indicealeatorio = Math.floor(Math.random() * Array.length);
return Array[indicealeatorio];
}

let imagenExcusa = [
'https://www.shutterstock.com/image-vector/drawing-sweet-grandma-glasses-bun-600nw-2650044759.jpg' ,
'https://i.pinimg.com/736x/bf/1f/d5/bf1fd5bcb0a91233304714a769ef8344.jpg',
'https://images.ecestaticos.com/ma-8-qxW5do1IPv1-OUj5Z11KuA=/2x112:2271x1388/1600x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F113%2Fac0%2Fac0%2F113ac0ac08a602c6b4c82b8702ad9279.jpg', 'https://i.pinimg.com/236x/f2/e5/f3/f2e5f34cdb26c1705b48012b46adab15.jpg', 
];

let excusaGenerada =
elementoaleatorio(who) + ' ' +
elementoaleatorio(action) + ' ' +
elementoaleatorio(what) + ' ' +
elementoaleatorio(when) + '.';
document.getElementById('Excusa').innerHTML = excusaGenerada;


let img = document.getElementById('imagenExcusa');
img.src = elementoaleatorio(imagenExcusa);

}

Window.onload = function() {
generarexcusa(); };








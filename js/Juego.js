let imag = document.getElementsByTagName('img');
let cajas = document.getElementsByClassName('contenedorChico');

cajas[0].addEventListener('dragover', (evento)=>{
    evento.preventDefault();
})
cajas[1].addEventListener('dragover', (evento2)=>{
    evento2.preventDefault();
})
cajas[2].addEventListener('dragover', (evento3)=>{
    evento3.preventDefault();
})

imag[0].addEventListener('dragstart', (evento)=>{
    evento.dataTransfer.setData('Text', 'imagenes/rompe2.png');

})
imag[1].addEventListener('dragstart', (evento)=>{
    evento.dataTransfer.setData('Text', 'imagenes/rompe1.png');

})
imag[2].addEventListener('dragstart', (evento)=>{
    evento.dataTransfer.setData('Text', 'imagenes/rompe3.png');

})

cajas[0].addEventListener('drop', (evento)=>{
    console.log('drop1');
    let indicador1 = document.getElementById('Indicacion1');
    cajas[0].removeChild(indicador1);
    let img1 = evento.dataTransfer.getData('Text');

    imagen1 = document.createElement('img');
    imagen1.setAttribute('src', img1);
    imagen1.style.border = '0px';
    imagen1.style.width = '100%';
    imagen1.style.height = '100%';
    cajas[0].appendChild(imagen1);

})
imag[0].addEventListener('dragend', (evento)=>{
    imagenVieja1 = evento.target
    imagenVieja1.style.visibility = 'hidden';

})



cajas[1].addEventListener('drop', (evento)=>{
    console.log('drop2');

    let indicador2 = document.getElementById('Indicacion2');
    cajas[1].removeChild(indicador2);

    let img2 = evento.dataTransfer.getData('Text');

    imagen2 = document.createElement('img');
    imagen2.setAttribute('src', img2);
    imagen2.style.border = '0px';
    imagen2.style.width = '100%';
    imagen2.style.height = '100%';
    cajas[1].appendChild(imagen2);

})
imag[1].addEventListener('dragend', (evento)=>{
    imagenVieja2 = evento.target
    imagenVieja2.style.visibility = 'hidden';

})


cajas[2].addEventListener('drop', (evento)=>{
    console.log('drop3');

    let indicador3 = document.getElementById('Indicacion3');
    cajas[2].removeChild(indicador3);
    let img3 = evento.dataTransfer.getData('Text');

    imagen3 = document.createElement('img');
    imagen3.setAttribute('src', img3);
    imagen3.style.border = '0px';
    imagen3.style.width = '100%';
    imagen3.style.height = '100%';
    cajas[2].appendChild(imagen3);
})
imag[2].addEventListener('dragend', (evento)=>{
    imagenVieja3 = evento.target
    imagenVieja3.style.visibility = 'hidden';

})

let btn = document.getElementsByTagName('button');
btn[0].addEventListener('click',()=>{
    location.reload();
});
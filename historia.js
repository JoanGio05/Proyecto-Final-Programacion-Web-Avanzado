let botonInicio = document.getElementById('btn1');
let botonPausa = document.getElementById('btn2');
let video = document.querySelector('video');
botonInicio.addEventListener('click',()=>{
    video.play();
})
botonPausa.addEventListener('click',()=>{
    video.pause();
})
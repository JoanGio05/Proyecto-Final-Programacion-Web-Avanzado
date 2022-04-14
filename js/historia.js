let botonInicio = document.getElementById('btn1');
let botonPausa = document.getElementById('btn2');
let video = document.querySelector('video');
let p = document.getElementsByClassName('tiempo');

botonInicio.addEventListener('click',()=>{
    video.play();
})

botonPausa.addEventListener('click',()=>{
    video.pause();
})

window.addEventListener('load', ()=>{
    p[0].textContent = `Duracion video: ${video.duration}`;
})

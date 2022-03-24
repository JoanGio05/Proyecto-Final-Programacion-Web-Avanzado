let botonInicio = document.getElementById('btn1');
let botonPausa = document.getElementById('btn2');
let video = document.querySelector('video');
let p = document.getElementsByClassName('tiempo');
botonInicio.addEventListener('click',()=>{
    video.play();
    p[0].textContent = `Duracion del video: ${video.duration}`;
})
botonPausa.addEventListener('click',()=>{
    video.pause();
})

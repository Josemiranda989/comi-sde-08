window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');


    //clase 45

    const inputTitle = document.querySelector('#titulo');
    const grupoBotones = document.querySelectorAll('.grupoBotones');

    inputTitle.addEventListener('keydown', () => {
        grupoBotones.forEach(boton => {
            boton.style.backgroundColor ='red'
            console.log(boton);
        });
    })

    window.addEventListener('scroll',() => {
        console.log('hiciste scroll');
    })
}
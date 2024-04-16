import {Aguila, Lobo, Leon, Oso, Serpiente} from "./clases/Tipos.js";
import data from "./data.js";

let animales = [];
let imagenSrc;
let sonidoOrg;

const cardCreate = () => {
    try {
        const template = document.getElementById('Animales');
        template.innerHTML = ``;
        animales.forEach((key, i) => {
            template.innerHTML += `
            <div class="px-3 pb-2">
            <div class="bg-dark text-white ">
              <img
                height="200"
                src="./assets/imgs/${key.img}" 
                class= " rounded-3"
                data-bs-toggle="modal"  
                data-bs-target="#exampleModal" 
                onclick="modalDetails('${i}')" 
              />
              <div>
                <button onclick="playSound('${key.sonido}')" class="btn btn-secondary w-100"> <img height="30" src="assets/imgs/audio.svg" /> </button>
              </div>
            </div>
          </div>
            `
        })
    } catch (error) {
        console.log(error);
    }
}


window.playSound = (sonido) => {
    
    try {
        const animal = animales.find((item)=>{
            return item.sonido === sonido;
        })
        sonido == 'Aullido.mp3' ? animal.cantoLobo()
        : sonido == 'Chillido.mp3' ? animal.cantoAguila()
        : sonido == 'Grunido.mp3' ? animal.cantoOso()
        : sonido == 'Rugido.mp3' ? animal.cantoLeon()
        : sonido == 'Siseo.mp3' ? animal.cantoSiseo()
        : undefined;

        /* let musica = new Audio(`./assets/sounds/${sonido}`);
        musica.play(); */
    } catch (error) {
        console.log(error);
    }
}

window.modalDetails = (i) => {
    try {
        const modalBody = document.getElementsByClassName('modal-body')[0];
        const animal = animales[i];
        modalBody.innerHTML = `
        <div class="px-3 pb-2">
        <div class="card w-100 m-auto bg-dark text-white border-0">
        <div class="cardHeader bg-warning text-white border-0 mb-3 rounded-3">
          <h5 class="card-title" align="center">${animal.nombre}</h5>
        </div>
          <img
            src="./assets/imgs/${animal.img}"
            class="d-block m-auto w-100 rounded-3 "s 
          />
          <div class="card-body text-center">
            <h6 class="card-text ">${animal.rango}</h6>
            <h6 class="card-text m-0">Comentarios</h6>
            <hr/>
            <p>${animal.comentario}</p>
          </div>
        </div>
        </div>
        `
    } catch (error) {
        console.log(error)
    }
};

document.getElementById('animal').addEventListener('change', async (e) => {
    try {
        const animalSelected = e.target.value;
        const animales = await data.getData()
        const animalObject = await animales.find((animal)=>{
            return animal.nombre === animalSelected;
        })
        imagenSrc = `${animalObject.img}`;
        sonidoOrg = `${animalObject.sonido}`;
        const preview = document.getElementById('preview');
        preview.parentElement.classList.remove('p-5')
        preview.style.backgroundImage = `url(./assets/imgs/${imagenSrc})`;
    } catch (error) {
        console.log(error);
    }
});

document.getElementById('btnRegistrar').addEventListener('click', () =>{
    try {
        const nombre = document.getElementById('animal').value;
        const rango = document.getElementById('rango').value;
        const comentario = document.getElementById('comentarios').value;
        if(nombre && rango && comentario){
            //let animal = new Tipos(nombre, rango, comentario, imagenSrc, sonidoOrg);
            let animal = nombre == 'Leon' ? new Leon(nombre, rango, comentario, imagenSrc, sonidoOrg)
            : nombre == 'Lobo' ? new Lobo(nombre, rango, comentario, imagenSrc, sonidoOrg)
            : nombre == 'Oso' ? new Oso(nombre, rango, comentario, imagenSrc, sonidoOrg)
            : nombre == 'Serpiente' ? new Serpiente(nombre, rango, comentario, imagenSrc, sonidoOrg)
            : nombre == 'Aguila' ? new Aguila(nombre, rango, comentario, imagenSrc, sonidoOrg)
            :undefined;
            animales.push(animal);
            cardCreate();
        } else{
            alert('Faltan datos')
        }
    } catch (error) {
        console.log(error)
    }
});
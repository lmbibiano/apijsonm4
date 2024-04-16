import Animales from "./Animales.js";

// export default class Tipos extends Animales{
//     constructor(nombre, rango, comentario, img, sonido){
//         super(nombre, rango, comentario, img, sonido);
//     }
// }


const audioPlayer = document.getElementById('player');

export  class Leon extends Animales{
    constructor(nombre, rango, comentario, img, sonido){
        super(nombre, rango, comentario, img, sonido);
    }

    cantoLeon(){
        audioPlayer.src = `/assets/sounds/${this.sonido}`;
        audioPlayer.play();
    }
}
export class Lobo extends Animales{
    constructor(nombre, rango, comentario, img, sonido){
        super(nombre, rango, comentario, img, sonido);
    }

    cantoLobo(){
        audioPlayer.src = `/assets/sounds/${this.sonido}`;
        audioPlayer.play();
    }
}
export class Oso extends Animales{
    constructor(nombre, rango, comentario, img, sonido){
        super(nombre, rango, comentario, img, sonido);
    }

    cantoOso(){
        audioPlayer.src = `/assets/sounds/${this.sonido}`;
        audioPlayer.play();
    }
}
export class Serpiente extends Animales{
    constructor(nombre, rango, comentario, img, sonido){
        super(nombre, rango, comentario, img, sonido);
    }

    cantoSerpiente(){
        audioPlayer.src = `/assets/sounds/${this.sonido}`;
        audioPlayer.play();
    }
}
export class Aguila extends Animales{
    constructor(nombre, rango, comentario, img, sonido){
        super(nombre, rango, comentario, img, sonido);
    }

    cantoAguila(){
        audioPlayer.src = `/assets/sounds/${this.sonido}`;
        audioPlayer.play();
    }
}


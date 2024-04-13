import Animales from "./Animales.js";

export default class Tipos extends Animales{
    constructor(nombre, rango, comentario, img, sonido){
        super(nombre, rango, comentario, img, sonido);
    }
}
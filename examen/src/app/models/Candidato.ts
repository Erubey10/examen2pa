import PartidoPolitico from "./PartidoPolitico";
import Propuesta from "./Propuesta";

export default class Candidato {
    id: number;
    nombre: string;
    imagen: string;
    cargo: string;
    partidoPolitico: PartidoPolitico;
    propuestas: Propuesta[];
    votos: number;
    color: string;
    
    constructor(id: number, nombre: string, imagen: string, cargo: string, partidoPolitico: PartidoPolitico, propuestas: Propuesta[], votos: number, color: string) {
        this.id = id;
        this.nombre = nombre;
        this.imagen = imagen;
        this.cargo = cargo;
        this.partidoPolitico = partidoPolitico;
        this.propuestas = propuestas;
        this.votos = votos;
        this.color = color;
    }
}
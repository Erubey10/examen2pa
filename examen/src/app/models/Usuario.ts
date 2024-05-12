export default class Usuario {
    id: number;
    nombre: string;
    correo: string;
    contrasena: string;
    voto: Boolean;

    constructor(id: number, nombre: string, correo: string, contrasena: string) {
        this.id = id;
        this.nombre = nombre;
        this.correo = correo;
        this.contrasena = contrasena;
        this.voto = false;
    }
}
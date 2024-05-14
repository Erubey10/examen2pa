import { Injectable } from '@angular/core';
import Usuario from '../models/Usuario';

@Injectable({
    providedIn: 'root'
})
export class UsuarioController {
    private usuarios: Usuario[] = [
        { id: 1, nombre: 'Erubey Romero', correo: 'erubey@romero.com', contrasena: '123456', voto: false },
        { id: 2, nombre: 'Diego romero', correo: 'diego@romero.com', contrasena: '123456', voto: false },
    ];

    constructor() { }

    agregarUsuario(nombre: string,
        correo: string,
        contrasena: string
    ): void {
        const idNuevoUsuario = this.usuarios[this.usuarios.length - 1].id + 1;
        const nuevoUsuario = new Usuario(idNuevoUsuario, nombre, correo, contrasena);
        this.usuarios.push(nuevoUsuario);
    }

    /*obtenerUsuarioPorId(id: number): Usuario | undefined {
        const usuario = this.usuarios.find(u => u.id === id);
        return usuario;
    }*/

<<<<<<< HEAD
    login(nombreUsuario: string, password: string): Observable<Usuario | undefined> {
        const url = 'https://mybluu.tech:3004/api/iniciarSesion';
        const body = { nombreUsuario, password };
    
        return this.http.post<Usuario | undefined>(url, body)
          .pipe(
            tap(usuario => {
              if (usuario && usuario.id) {
                localStorage.setItem('idUsuario', usuario.id.toString());
              }
            }),
            catchError(() => of(undefined))
          );
      }
=======
    login(correo: string, contrasena: string): Usuario | undefined {
        const usuario = this.usuarios.find(u => u.correo === correo && u.contrasena === contrasena);
        return usuario;
    }
>>>>>>> parent of 94fdbe3 (endpoints added and modified views)

      marcarVoto(usuarioID: number, opcion: string): Observable<any | undefined> {
        const url = 'https://mybluu.tech:3004/api/registrarVoto';
        const body = { usuarioID, opcion };
        return this.http.post<any>(url, body)
          .pipe(
            catchError(() => of(undefined))
          );
      }
}

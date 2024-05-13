import { Injectable } from '@angular/core';
import Usuario from '../models/Usuario';
import { Observable, catchError, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class UsuarioController {
    private usuarios: Usuario[] = [
        { id: 1, nombre: 'Erubey Romero', correo: 'erubey@romero.com', contrasena: '123456', voto: false },
        { id: 2, nombre: 'Diego romero', correo: 'diego@romero.com', contrasena: '123456', voto: false },
    ];

    constructor(private http: HttpClient) { }

    agregarUsuario(nombre: string,
        correo: string,
        contrasena: string
    ): void {
        /*const idNuevoUsuario = this.usuarios[this.usuarios.length - 1].id + 1;
        const nuevoUsuario = new Usuario(idNuevoUsuario, nombre, correo, contrasena);
        this.usuarios.push(nuevoUsuario);*/
    }

    /*obtenerUsuarioPorId(id: number): Usuario | undefined {
        const usuario = this.usuarios.find(u => u.id === id);
        return usuario;
    }*/

    login(nombreUsuario: string, password: string): Observable<Usuario | undefined> {
        const url = 'http://mybluu.tech:3004/api/iniciarSesion';
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

      marcarVoto(usuarioID: number, opcion: string): Observable<any | undefined> {
        const url = 'http://mybluu.tech:3004/api/registrarVoto';
        const body = { usuarioID, opcion };
        return this.http.post<any>(url, body)
          .pipe(
            catchError(() => of(undefined))
          );
      }
}

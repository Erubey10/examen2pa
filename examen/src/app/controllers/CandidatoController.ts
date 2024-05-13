import { Injectable } from "@angular/core";
import Candidato from "../models/Candidato";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CandidatoController {
    private candidatos: Candidato[] = [
        {
            id: 1,
            nombre: 'Forrest Gump',
            imagen: '/assets/icon/img/frank.jpg',
            cargo: 'Presidente Nacional',
            partidoPolitico: {
                nombre: 'Partido del otro bando',
                imagen: 'https://wallpapercave.com/wp/wp5818367.jpg'
            },
            propuestas: [
                {
                    tema: 'Educación',
                    descripcion: 'Mejorar la infraestructiura y calidad de educación.'
                },
                {
                    tema: 'Salud',
                    descripcion: 'Aumentar el presupuesto en salud pública.'
                }
            ],
            votos: 3,
            color: 'rgb(30,144,255)'
        },
        {
            id: 2,
            nombre: 'Emilio Prime',
            imagen: '/assets/icon/img/guimel.jpg',
            cargo: 'Presidente Municipal',
            partidoPolitico: {
                nombre: 'Partido Castores',
                imagen: 'https://i.ytimg.com/vi/Or7W0auWRw0/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGCUgVSh_MA8=&rs=AOn4CLAERDJGjzzkO1p5IPQA_iFLkhi5Zw'
            },
            propuestas: [
                {
                    tema: 'Aperitiva',
                    descripcion: 'Todos los dias promo n ochovavia'
                },
                {
                    tema: 'Estoica',
                    descripcion: 'Programar todos los dias sin parar'
                },
            ],
            votos: 15,
            color: 'rgb(255,128,0)'
        }
    ];

    constructor(private http: HttpClient) { }

    obtenerCandidatos(): Observable<Candidato[]> {
        const url = 'http://localhost:3111/api/obtenerCandidatos';
        
        return this.http.get<Candidato[]>(url);
      }
    

    obtenerCandidatoPorNombre(nombre: string): Candidato | undefined {
        const candidato = this.candidatos.find(c => c.nombre === nombre);
        return candidato;
    }

    votarPorCandidato(id: number): void {
        const candidato = this.candidatos.find(c => c.id === id);
        if (candidato) {
            candidato.votos++;
        }
    }

}
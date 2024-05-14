import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ArcElement, BarController, BarElement, CategoryScale, Chart, DoughnutController, Legend, LineController, LineElement, LinearScale, PointElement, Title, Tooltip } from 'chart.js';
<<<<<<< HEAD
import { combineLatest, map } from 'rxjs';
import { ModalController, NavController } from '@ionic/angular'; // Importa ModalController
=======
>>>>>>> parent of 5afeb32 (ultimos endpoints)
import { CandidatoController } from 'src/app/controllers/CandidatoController';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.page.html',
  styleUrls: ['./resultados.page.scss'],
})
export class ResultadosPage implements AfterViewInit {
  @ViewChild('barCanvas')
  barCanvas!: ElementRef;
  @ViewChild('doughnutCanvas')
  doughnutCanvas!: ElementRef;

  barChart: any;
  doughnutChart: any;

  constructor(
    private candidatoController: CandidatoController,
    private navCtrl: NavController,
  ) {
  }

  ngAfterViewInit() {
    this.barChartMethod();
<<<<<<< HEAD
    this.doughnutChartMethod();
<<<<<<< HEAD
  }

  regresar() {
    this.navCtrl.navigateForward('/iniciopage');
  }


  // Función para generar un color aleatorio en formato hexadecimal
  getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
=======
>>>>>>> parent of 94fdbe3 (endpoints added and modified views)
=======
    //this.doughnutChartMethod();
>>>>>>> parent of 5afeb32 (ultimos endpoints)
  }

  barChartMethod() {
    Chart.register(
      CategoryScale,
      LinearScale,
      BarElement,
      Title,
      Tooltip,
      Legend,
      BarController
    );
<<<<<<< HEAD
<<<<<<< HEAD

    // Combina los observables de candidatos y votos
    combineLatest([
      this.candidatoController.obtenerCandidatos(),
      this.candidatoController.obtenerVotos()
    ]).pipe(
      // Mapea los votos para sumarlos por opción
      map(([candidatos, votos]) => {
        const opcionesVotos: Record<string, number> = {};

        for (const voto of votos) {
          if (opcionesVotos[voto.opcion]) {
            opcionesVotos[voto.opcion]++;
          } else {
            opcionesVotos[voto.opcion] = 1;
          }
        }
        return { candidatos, opcionesVotos };
      })
    ).subscribe(({ candidatos, opcionesVotos }) => {
      // Construye los datasets del gráfico de barras
      let color:any[] = []
      candidatos.map(c => {
        color.push({color: this.getRandomColor()})
      })

      this.barChart = new Chart(this.barCanvas.nativeElement, {
        type: 'bar',
        data: {
          labels: candidatos.map(c => c.nombre),
          datasets: [{
=======
    /*this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: this.candidatoController.obtenerCandidatos().map(c => c.nombre),
        datasets: [{
>>>>>>> parent of 5afeb32 (ultimos endpoints)
          label: '# of Votes',
          data: this.candidatoController.obtenerCandidatos().map(c => c.votos),
          backgroundColor: this.candidatoController.obtenerCandidatos().map(c => c.color),
          borderColor: 'rgb(30,144,255)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });*/
  }

<<<<<<< HEAD

=======
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: this.candidatoController.obtenerCandidatos().map(c => c.nombre),
        datasets: [{
          label: '# of Votes',
          data: this.candidatoController.obtenerCandidatos().map(c => c.votos),
          backgroundColor: this.candidatoController.obtenerCandidatos().map(c => c.color),
          borderColor: this.candidatoController.obtenerCandidatos().map(c => c.color),
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

>>>>>>> parent of 94fdbe3 (endpoints added and modified views)
  doughnutChartMethod() {
    Chart.register(DoughnutController, ArcElement, Tooltip, Legend);

    combineLatest([
      this.candidatoController.obtenerCandidatos(),
      this.candidatoController.obtenerVotos()
    ]).pipe(
      // Mapea los votos para sumarlos por opción
      map(([candidatos, votos]) => {
        const opcionesVotos: Record<string, number> = {};

        for (const voto of votos) {
          if (opcionesVotos[voto.opcion]) {
            opcionesVotos[voto.opcion]++;
          } else {
            opcionesVotos[voto.opcion] = 1;
          }
        }
        return { candidatos, opcionesVotos };
      })
    ).subscribe(({ candidatos, opcionesVotos }) => {
      // Construye los datasets del gráfico de barras
      const color = candidatos.map(() => this.getRandomColor());

      this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
        type: 'doughnut',
        data: {
          labels: Object.keys(opcionesVotos), // Obtener las opciones de voto como etiquetas
          datasets: [{
            label: '# of Votes',
            data: Object.values(opcionesVotos), // Obtener los recuentos de votos como datos
            backgroundColor: color,
            hoverOffset: 4
          }]
        }
      });
    });
  }
<<<<<<< HEAD

  salir() {
    console.log('Saliendo...');
    this.navCtrl.navigateBack('/home');
    localStorage.removeItem('idUsuario');
  }

=======
>>>>>>> parent of 94fdbe3 (endpoints added and modified views)
=======
  /*doughnutChartMethod() {
    Chart.register(DoughnutController, ArcElement, Tooltip, Legend);
    
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: this.candidatoController.obtenerCandidatos().map(c => c.nombre),
        datasets: [{
          label: '# of Votes',
          data: this.candidatoController.obtenerCandidatos().map(c => c.votos),
          backgroundColor: this.candidatoController.obtenerCandidatos().map(c => c.color),
          hoverOffset: 4
        }]
      }
    });
  }*/
>>>>>>> parent of 5afeb32 (ultimos endpoints)

}



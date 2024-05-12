import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ArcElement, BarController, BarElement, CategoryScale, Chart, DoughnutController, Legend, LineController, LineElement, LinearScale, PointElement, Title, Tooltip } from 'chart.js';
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

  constructor(private candidatoController: CandidatoController) {

  }

  ngAfterViewInit() {
    this.barChartMethod();
    this.doughnutChartMethod();
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

  doughnutChartMethod() {
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
  }

}



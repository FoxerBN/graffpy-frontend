import { Chart } from 'chart.js/auto';
import { getLast7Days } from '../../util/dateUtil';

export async function renderTempChart(canvasId: string) {
  const labels = getLast7Days(); // vždy 7 dní

  // Placeholder: náhodné teploty 15–30 °C
  const data = labels.map(() => Math.floor(Math.random() * 15) + 15);
  console.log(data);
  const ctx = document.getElementById(canvasId) as HTMLCanvasElement;
  new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: [{
        label: 'Priemerná teplota (°C)',
        data,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }]
    },
    options: {
      responsive: true
    }
  });
}

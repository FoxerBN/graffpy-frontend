import { Chart } from 'chart.js/auto';
import { getLast7Days } from '../../util/dateUtil';
import { fetchAllSystemData } from '../../service/weeklyData';
import type { WeeklySystemData } from '../../types/WeeklySystemData';

// Fetch data once at module level
let weeklySystemData: WeeklySystemData | null = null;

async function getSystemData() {
  if (!weeklySystemData) {
    weeklySystemData = await fetchAllSystemData();
    if (!weeklySystemData) {
      console.error('Failed to fetch system data');
    }
  }
  return weeklySystemData;
}

// CPU Temperature Chart
export async function renderCpuTempChart(canvasId: string) {
  const labels = getLast7Days();
  
  const weeklyData = await getSystemData();
  if (!weeklyData) return;
  
  const avgData = weeklyData.map((day: any) => parseFloat(day.avgCpuTemp));
  const maxData = weeklyData.map((day: any) => parseFloat(day.maxCpuTemp));
  const minData = weeklyData.map((day: any) => parseFloat(day.minCpuTemp));

  const ctx = document.getElementById(canvasId) as HTMLCanvasElement;
  new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: [
        {
          label: 'Priemerná teplota (°C)',
          data: avgData,
          borderColor: 'rgb(75, 192, 192)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          tension: 0.1,
          pointStyle: 'circle',
          pointRadius: 5,
          pointHoverRadius: 10,
          borderWidth: 3
        },
        {
          label: 'Maximálna teplota (°C)',
          data: maxData,
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          tension: 0.1,
          pointStyle: 'circle',
          pointRadius: 6,
          pointHoverRadius: 12,
          borderWidth: 3
        },
        {
          label: 'Minimálna teplota (°C)',
          data: minData,
          borderColor: 'rgb(54, 162, 235)',
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          tension: 0.1,
          pointStyle: 'circle',
          pointRadius: 6,
          pointHoverRadius: 10,
          borderWidth: 3
        }
      ]
    },
    options: {
      responsive: true,
      interaction: {
        intersect: false,
        mode: 'index'
      },
      scales: {
        y: {
          title: {
            display: true,
            text: 'Teplota (°C)'
          }
        }
      },
      plugins: {
        title: {
          display: true,
          text: 'CPU Teplota - Posledných 7 dní'
        }
      }
    }
  });
}

// CPU Percent Chart
export async function renderCpuPercentChart(canvasId: string) {
  const labels = getLast7Days();
  
  const weeklyData = await getSystemData();
  if (!weeklyData) return;
  
  const avgData = weeklyData.map((day: any) => parseFloat(day.avgCpuPercent));
  const maxData = weeklyData.map((day: any) => parseFloat(day.maxCpuPercent));
  const minData = weeklyData.map((day: any) => parseFloat(day.minCpuPercent));

  const ctx = document.getElementById(canvasId) as HTMLCanvasElement;
  new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: [
        {
          label: 'Priemerné CPU (%)',
          data: avgData,
          borderColor: 'rgb(153, 102, 255)',
          backgroundColor: 'rgba(153, 102, 255, 0.2)',
          tension: 0.1,
          pointStyle: 'circle',
          pointRadius: 6,
          pointHoverRadius: 10,
          borderWidth: 3
        },
        {
          label: 'Maximálne CPU (%)',
          data: maxData,
          borderColor: 'rgb(255, 159, 64)',
          backgroundColor: 'rgba(255, 159, 64, 0.2)',
          tension: 0.1,
          pointStyle: 'circle',
          pointRadius: 8,
          pointHoverRadius: 12,
          borderWidth: 3
        },
        {
          label: 'Minimálne CPU (%)',
          data: minData,
          borderColor: 'rgb(75, 192, 192)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          tension: 0.1,
          pointStyle: 'circle',
          pointRadius: 6,
          pointHoverRadius: 10,
          borderWidth: 3
        }
      ]
    },
    options: {
      responsive: true,
      interaction: {
        intersect: false,
        mode: 'index'
      },
      scales: {
        y: {
          title: {
            display: true,
            text: 'CPU (%)'
          },
          min: 0,
          max: 100
        }
      },
      plugins: {
        title: {
          display: true,
          text: 'CPU Využitie - Posledných 7 dní'
        }
      }
    }
  });
}

// RAM Percent Chart
export async function renderRamPercentChart(canvasId: string) {
  const labels = getLast7Days();
  
  const weeklyData = await getSystemData();
  if (!weeklyData) return;
  
  const avgData = weeklyData.map((day: any) => parseFloat(day.avgRamPercent));
  const maxData = weeklyData.map((day: any) => parseFloat(day.maxRamPercent));
  const minData = weeklyData.map((day: any) => parseFloat(day.minRamPercent));

  const ctx = document.getElementById(canvasId) as HTMLCanvasElement;
  new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: [
        {
          label: 'Priemerná RAM (%)',
          data: avgData,
          borderColor: 'rgb(255, 205, 86)',
          backgroundColor: 'rgba(255, 205, 86, 0.2)',
          tension: 0.1,
          pointStyle: 'circle',
          pointRadius: 6,
          pointHoverRadius: 10,
          borderWidth: 3
        },
        {
          label: 'Maximálna RAM (%)',
          data: maxData,
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          tension: 0.1,
          pointStyle: 'circle',
          pointRadius: 8,
          pointHoverRadius: 12,
          borderWidth: 3
        },
        {
          label: 'Minimálna RAM (%)',
          data: minData,
          borderColor: 'rgb(54, 162, 235)',
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          tension: 0.1,
          pointStyle: 'circle',
          pointRadius: 6,
          pointHoverRadius: 10,
          borderWidth: 3
        }
      ]
    },
    options: {
      responsive: true,
      interaction: {
        intersect: false,
        mode: 'index'
      },
      scales: {
        y: {
          title: {
            display: true,
            text: 'RAM (%)'
          },
          min: 0,
          max: 100
        }
      },
      plugins: {
        title: {
          display: true,
          text: 'RAM Využitie - Posledných 7 dní'
        }
      }
    }
  });
}

// Disk Space Doughnut Chart
export async function renderDiskSpaceChart(canvasId: string) {
  const weeklyData = await getSystemData();
  if (!weeklyData) return;

  // Použijeme posledný deň z týždňa
  const lastDay = weeklyData[weeklyData.length - 1];
  const freeSpace = parseFloat(lastDay.freeSpace);
  const totalSpace = parseFloat(lastDay.totalSpace);
  const usedSpace = totalSpace - freeSpace;

  const ctx = document.getElementById(canvasId) as HTMLCanvasElement;

  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Použité miesto', 'Voľné miesto'],
      datasets: [
        {
          label: 'Disk Space (GB)',
          data: [usedSpace, freeSpace],
          backgroundColor: [
            'rgb(255, 99, 132)',  // použité
            'rgb(75, 192, 192)'   // voľné
          ],
          hoverOffset: 10
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Disk Space - Posledný deň'
        }
      }
    }
  });
}

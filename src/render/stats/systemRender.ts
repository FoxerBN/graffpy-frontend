import { fetchSystemData } from "../../service/realTimeData";
import { calculateDangerousLevel, calculateDangerousLevelOfCPU } from "../../util/dangerousLevel";

// DOM element references
const cpuUsage = document.getElementById("cpu-usage") as HTMLElement;
const ramProgress = document.getElementById("ram-progress") as HTMLElement;
const ramDetails = document.getElementById("ram-details") as HTMLElement;
const cpuTemp = document.getElementById("temp-progress") as HTMLElement;
const diskProgress = document.getElementById("disk-progress") as HTMLElement;
const diskDetails = document.getElementById("disk-details") as HTMLElement;
const netDownload = document.getElementById("net-download") as HTMLElement;
const netUpload = document.getElementById("net-upload") as HTMLElement;
const dangerousLevel = document.getElementById("dangerous-level") as HTMLElement;
const cpuDangerLevel = document.getElementById("cpu-danger-level") as HTMLElement;

/**
 * Fetches and renders system statistics to the UI
 */
const renderSystemStats = async () => {
  try {
    const systemData = await fetchSystemData();
    if (!systemData) return;

    const [percent, gbInfo] = systemData.ram.split(",");
    console.log(systemData);

    // Update CPU usage display
    cpuUsage.style.setProperty("--value", systemData.cpu.replace("%", ""));
    cpuUsage.textContent = systemData.cpu;
    const cpuLevel = calculateDangerousLevelOfCPU(parseFloat(systemData.cpu));
    cpuDangerLevel.textContent = cpuLevel;
    cpuDangerLevel.className = `temp-${cpuLevel}`;

    

    // Update RAM usage and details
    ramProgress.style.setProperty("--value", percent.replace("%", ""));
    ramProgress.textContent = percent;
    ramDetails.textContent = gbInfo;

    // Update CPU temperature with status
    cpuTemp.style.setProperty("--value", systemData.cpu_temp.replace("°C", ""));
    cpuTemp.textContent = systemData.cpu_temp;
    const temperatureLevel = calculateDangerousLevel(
      parseFloat(systemData.cpu_temp),
    );
    dangerousLevel.textContent = temperatureLevel;
    dangerousLevel.className = `temp-${temperatureLevel}`;

    // Calculate and display disk usage
    const [freeSpace, totalSpace] = systemData.disk.split("/").map(parseFloat);
    const usedPercent = (((totalSpace - freeSpace) / totalSpace) * 100).toFixed(
      2,
    );
    diskProgress.style.setProperty("--value", usedPercent);
    diskProgress.textContent = `${usedPercent}%`;
    diskDetails.textContent = systemData.disk;

    // Parse and display network speeds
    const [download, upload] = systemData.net.split(" ↑ ");
    const downloadSpeed = download.replace("↓ ", "");
    const uploadSpeed = upload;
    netDownload.textContent = downloadSpeed;
    netUpload.textContent = uploadSpeed;
  } catch (error) {
    console.error("Chyba:", error);
  }
};
renderSystemStats();
// Fetch every 10 seconds
const intervalId = setInterval(renderSystemStats, 10000);

// Clear interval on page unload to prevent memory leaks
window.addEventListener("beforeunload", () => {
  clearInterval(intervalId);
});

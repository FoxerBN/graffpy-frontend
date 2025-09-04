import { fetchSystemData } from "../../service/realTimeData";
//*--ELEMENTS--*
const cpuUsage = document.getElementById("cpu-usage") as HTMLElement;
const ramProgress = document.getElementById("ram-progress") as HTMLElement;
const ramDetails = document.getElementById("ram-details") as HTMLElement;
const cpuTemp = document.getElementById("temp-progress") as HTMLElement;

const renderSystemStats = async () => {
  try {
    const systemData = await fetchSystemData();
    if (!systemData) return;
    const [percent, gbInfo] = systemData.ram.split(",");
    console.log(systemData);

    //*--CPU Usage--*
    cpuUsage.style.setProperty("--value", systemData.cpu.replace("%", ""));
    cpuUsage.textContent = systemData.cpu;

    // *--RAM Usage--*
    ramProgress.style.setProperty("--value", percent.replace("%", ""));
    ramProgress.textContent = percent;
    ramDetails.textContent = gbInfo;
    
    // *--CPU temperature--*
    cpuTemp.style.setProperty("--value", systemData.cpu_temp.replace("°C", ""));
    cpuTemp.textContent = systemData.cpu_temp;
  } catch (error) {
    console.error("Chyba:", error);
  }
};

renderSystemStats();

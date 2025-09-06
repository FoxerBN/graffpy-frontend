export const calculateDangerousLevel = (temperature: number): string => {
  if (temperature >= 80) {
    return "danger";
  } else if (temperature >= 70) {
    return "warning"
  } else {
    return "good";
  }
};

export const calculateDangerousLevelOfCPU = (cpuUsage: number): string => {
  if (cpuUsage >= 80) {
    return "danger";
  } else if (cpuUsage >= 70) {
    return "warning"
  } else {
    return "good";
  }
};

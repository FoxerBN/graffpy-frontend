export interface WeeklyDayData {
    avgCpuPercent: string;
    avgCpuTemp: string;
    avgRamPercent: string;
    maxCpuPercent: string;
    maxCpuTemp: string;
    maxRamPercent: string;
    minCpuPercent: string;
    minCpuTemp: string;
    minRamPercent: string;
    freeSpace: string;
    totalSpace: string;
}

export type WeeklySystemData = WeeklyDayData[];
import { getWeeklyData } from '../util/api';
import type { WeeklySystemData } from '../types/WeeklySystemData';

export async function fetchSystemData(): Promise<WeeklySystemData | null> {
  try {
    const data: WeeklySystemData = await getWeeklyData();
    console.log('Weekly system data:', data);
    return data;
  } catch (error) {
    console.error('API chyba:', error);
    return null;
  }
}

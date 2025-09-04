import { getRealTimeData } from '../util/api';
import type { SystemData } from '../types/SystemData';

export async function fetchSystemData(): Promise<SystemData | null> {
  try {
    const data: SystemData = await getRealTimeData();
    return data;
  } catch (error) {
    console.error('API chyba:', error);
    return null;
  }
}

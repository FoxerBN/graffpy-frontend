import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_TEST_API_URL,
  timeout: 5000
});


export async function getRealTimeData(){
  try {
    const response = await api.get('/api/process');
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
}

export async function getWeeklyData(){
  try {
    const response = await api.get('/api/weekly');
    return response.data;
  }catch (error) {
    console.error('Error fetching weekly data:', error);
    throw error;
  }
}

export default api;
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_TEST_API_URL,
  timeout: 5000
});

//example for fetch placeholder data
export async function getUsers(){
  try {
    const response = await api.get('/users');
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
}

export default api;
import './styles/font.css';
import './styles/style.css';
import { renderTempChart } from './charts/chartTemp';
import { fetchSystemData } from './service/realTimeData';

// Spusti všetko
renderTempChart('tempChart');
renderTempChart('tempChart2');
fetchSystemData()


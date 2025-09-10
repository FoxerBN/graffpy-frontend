import './styles/font.css';
import './styles/style.css';
import { renderCpuPercentChart,renderCpuTempChart,renderRamPercentChart,renderDiskSpaceChart } from './render/charts/chartTemp';
import './render/stats/systemRender';


renderCpuTempChart('cpu-temp-canvas');
renderCpuPercentChart('cpu-percent-canvas'); 
renderRamPercentChart('ram-percent-canvas');
renderDiskSpaceChart('disk-space-canvas');

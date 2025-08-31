import './styles/font.css';
import './styles/style.css';
import type { User } from './types/User';
import { renderTempChart } from './charts/chartTemp';
import { getUsers } from './util/api';
import { renderUserList } from './service/renderUserList';




async function init() {
  const users: User[] = await getUsers();
  renderUserList(users);

  console.log(users);
  renderTempChart('tempChart');
}
// setInterval(init, 1000);
init();

import type { User } from '../types/User';
const userList = document.getElementById('userList') as HTMLUListElement;

export async function renderUserList(users: User[]) {
  userList.innerHTML = '';
  users.forEach(user => {
    const li = document.createElement('li');
    li.textContent = user.name;
    userList.appendChild(li);
  });
}
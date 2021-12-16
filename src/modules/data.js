import { userName, userTaskElement } from './const';

export function fetchData() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((json) => {
      for (let i = 0; i < json.length; i++) {
        userName.push(json[i]['name']);
      }
      userName.forEach((el) => {
        userTaskElement.innerHTML += `<option >${el}</option>`;
      });
    });
}

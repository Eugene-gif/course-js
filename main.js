import { closeMenu } from "@/modules/menu";
import { switchPage } from "@/modules/switchPage";
import { loadPage } from "@/modules/loadPage";
import { setupTheme } from "@/modules/setupTheme";
// import getDataOne from "@/modules/examples/promisesOne/getDataOne"; // Унифицированная функция обработки промиса для получения данных
import getDataTodos from "@/modules/examples/promisesOne/getDataTodos";
import getDataUsers from "@/modules/examples/promisesOne/getDataUsers";
import getDataComments from "@/modules/examples/promisesOne/getDataComments";

let links = document.querySelectorAll('.nav__item a');
let pages = document.querySelectorAll('._page');

for(let i = 0; i < links.length; i++) {
  switchPage(links[i], pages[i], closeMenu);
}

window.addEventListener('load', () => {
  loadPage(links, pages, setupTheme);
  // setTimeout(() => {
    //   window.scrollTo(0, 0);
    // }, 30)
  });
  
  // Вызов функции получения всех Todo
  getDataTodos();
  // Вызов функции получения всех пользователей
  getDataUsers();
  // Вызов функции получения всех комментариев 
  getDataComments();
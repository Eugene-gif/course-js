import { closeMenu } from "@/modules/menu";
import { switchPage } from "@/modules/switchPage";
import { loadPage } from "@/modules/loadPage";
import { setupTheme } from "@/modules/setupTheme";
import getDataTodos from "@/modules/examples/promisesOne/getDataTodos";
import getDataUsers from "@/modules/examples/promisesOne/getDataUsers";
import getDataComments from "@/modules/examples/promisesOne/getDataComments";
import getAsyncTodos from "@/modules/examples/async-await/getAsyncTodos";
import getAsyncUsers from "@/modules/examples/async-await/getAsyncUsers";
import getAsyncComments from "@/modules/examples/async-await/getAsyncComments";

let links = document.querySelectorAll('.nav__item a');
let pages = document.querySelectorAll('._page');

for (let i = 0; i < links.length; i++) {
  switchPage(links[i], pages[i], closeMenu);
}

window.addEventListener('load', () => {
  loadPage(links, pages, setupTheme);
  // setTimeout(() => {
  //   window.scrollTo(0, 0);
  // }, 30)
});


// Вызов функции получения всех Todo
// getDataTodos();
getAsyncTodos();
// Вызов функции получения всех пользователей
// getDataUsers();
// getAsyncUsers();
// Вызов функции получения всех комментариев 
// getDataComments();
getAsyncComments();


























// const data = await getAsyncData(url);

// try {
//   console.log(data);
// } catch (error) {
//   console.log(error.message);
// }

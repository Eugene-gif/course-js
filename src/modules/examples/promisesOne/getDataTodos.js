import getDataOne from "@/modules/examples/promisesOne/getDataOne.js";

export default function getDataTodos () {
  return getDataOne('https://jsonplaceholder.typicode.com/todos')
  .then(data => console.log('Todos:', data))
  .catch(err => console.log(err.message))
}
import getAsyncData from "./getAsyncData";

const getAsyncTodos = async () => {
  const url = 'https://jsonplaceholder.typicode.com/todos';
  const data = await getAsyncData(url);

  try {
    console.log('Todos: ', data);
  } catch (error) {
    console.error(error.message);
  }
}

export default getAsyncTodos;
import getAsyncData from "./getAsyncData";

const getAsyncUsers = async () => {
  const url = 'https://jsonplaceholder.typicode.com/users';
  const users = await getAsyncData(url);

  try {
    const list = document.querySelector('.users');
    const newArr = users.map((el) => {
      let item = document.createElement('li');
      item.innerHTML = `
      <b>id: ${el.id}</b>; <br> 
      Name: ${el.name}; <br> 
      Email: ${el.email}; <br> 
      Phone: ${el.phone}`;
      list.append(item);
    });
    console.log(users);
  } catch (error) {
    console.error(error.message);
  }
}

export default getAsyncUsers;
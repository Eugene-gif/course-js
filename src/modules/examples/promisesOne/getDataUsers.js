import getDataOne from "@/modules/examples/promisesOne/getDataOne.js";

export default function getDataUsers () {
  return getDataOne('https://jsonplaceholder.typicode.com/users')
  .then(data => console.log('Users:', data))
  .catch(err => console.error(err.message))
}
import getDataOne from "@/modules/examples/promisesOne/getDataOne.js";

export default function getDataComments () {
  return getDataOne('https://jsonplaceholder.typicode.com/comments')
  .then(data => console.log('Comments:', data))
  .catch(err => console.error(err.message))
}
import getAsyncData from "./getAsyncData";

const getAsyncComments = async () => {
  const url = 'https://jsonplaceholder.typicode.com/comments';
  const comments = await getAsyncData(url);

  try {
    console.log('Comments: ', comments);
  } catch (error) {
    console.error(error.message);
  }
}

export default getAsyncComments;
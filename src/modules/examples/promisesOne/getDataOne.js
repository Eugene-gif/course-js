const getDataOne = (url) => {
  return new Promise((resolve, reject) =>
    fetch(url)
      .then(res => res.json())
      .then(json => resolve(json))
      .catch(error => reject(error))
  )
}

export default getDataOne;
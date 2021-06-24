export const loadHtmlData = (url) => {
  return fetch(url)
    .then((response) => {
      // console.log(url + " -> " + response.ok);
      if (response.ok) {
        return response.text();
      }
      throw new Error('Please enter currect url.');
    })
    .catch((err) => {
      console.log('failed to load ', url, err.message);
      return Promise.reject(err);
    });
};

class DataSource {
  static searchData(keyword) {
    console.log(keyword);
    return fetch(`https://dummyjson.com/products/category/${keyword}`)
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        if (responseJson.total) {
          console.log(responseJson.products);
          return Promise.resolve(responseJson.products);
        } else {
          return Promise.reject(`${keyword} is not found`);
        }
      });
  }
}

export default DataSource;
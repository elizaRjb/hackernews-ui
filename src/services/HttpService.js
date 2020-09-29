import axios from 'axios';

const BASE_URL = 'https://hacker-news.firebaseio.com/v0/';

class HttpService {
  request = (url, method, callbackSuccess = null, callbackError = null) => {
    const newUrl = BASE_URL + url;

    axios({
      method: method,
      url: newUrl,
    })
      .then(response => {
        callbackSuccess(response.data);
      })
      .catch(error => {
        console.log(error);
        callbackError();
      });
  };
}

export const http = new HttpService();

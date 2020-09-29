import { http } from 'services/HttpService';

class NewsService {
  getNewsList = (callbackSuccess, callbackError) => {
    const url = 'topstories.json?print=pretty';

    http.request(url, 'get', callbackSuccess);
  };

  getNewsItem = (id, callbackSuccess, callbackError) => {
    const url = `item/${id}.json?print=pretty`;

    http.request(url, 'get', callbackSuccess);
  };
}

export const newsService = new NewsService();

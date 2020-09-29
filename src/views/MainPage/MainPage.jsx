import React, { Component } from 'react';

import { newsService } from 'services/NewsService';

import Pagination from 'components/pagination/Pagination';

import List from './components/List';
import news from 'reducers/news';

class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newsList: [],
      isLoading: true,
      pageSize: 20,
      page: 0,
      listPerPage: [],
    };
  }

  componentDidMount() {
    const { pageSize, page } = this.state;

    const callbackSuccess = data => {
      this.setState({
        isLoading: false,
        newsList: data,
        listPerPage: data.slice(page, pageSize),
      });
    };

    newsService.getNewsList(callbackSuccess, null);
  }

  onButtonClick = type => {
    const { page, newsList, pageSize } = this.state;

    const currentPage = type === 'prev' ? page - 1 : page + 1;
    const startIndex = pageSize * currentPage;
    const list = newsList.slice(startIndex, startIndex + pageSize);

    this.setState({ listPerPage: list, page: currentPage });
  };

  render() {
    const { isLoading, newsList, listPerPage, page, pageSize } = this.state;

    const list = listPerPage ? <List list={listPerPage} /> : null;

    const totalPages = Math.floor(newsList.length / pageSize);

    if (isLoading) {
      return <span>Loading...</span>;
    }

    if (!newsList) {
      return null;
    }

    return (
      <div className="news-list-wrapper">
        {list}
        <Pagination page={page + 1} onButtonClick={this.onButtonClick} totalPages={totalPages} />
      </div>
    );
  }
}

export default MainPage;

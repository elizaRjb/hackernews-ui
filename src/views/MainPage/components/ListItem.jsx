import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { convertUnixTimeToLocalDate } from 'utils/util';

import { newsService } from 'services/NewsService';

import Loading from 'components/loading/Loading';

class ListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      newsItem: {},
    };
  }

  componentDidMount() {
    const { itemId } = this.props;

    const callbackSuccess = data => {
      this.setState({ newsItem: data, isLoading: false });
    };

    newsService.getNewsItem(itemId, callbackSuccess, null);
  }

  render() {
    const { isLoading, newsItem } = this.state;

    let item = null;

    if (isLoading) {
      return (
        <li>
          <Loading />
        </li>
      );
    }

    if (newsItem) {
      item = (
        <div>
          <Link to={`/story/${newsItem.id}`}>{newsItem.title}</Link>
          <p>
            <span>By: {newsItem.by}, &nbsp;</span>
            <span>{convertUnixTimeToLocalDate(newsItem.time)}</span>
          </p>
        </div>
      );
    }

    return <li>{item}</li>;
  }
}

export default ListItem;

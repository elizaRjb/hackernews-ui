import React, { Component } from 'react';

import { convertUnixTimeToLocalDate } from 'utils/util';

import { newsService } from 'services/NewsService';

import Modal from 'components/modal/Modal';

import Comment from './components/Comment';

class Story extends Component {
  constructor(props) {
    super(props);

    this.state = {
      storyData: null,
      isLoading: true,
    };
  }

  componentDidMount() {
    const {
      match: {
        params: { storyId },
      },
    } = this.props;

    console.log(storyId);

    const callbackSuccess = data => {
      this.setState({ storyData: data, isLoading: false });
      console.log(data);
    };

    newsService.getNewsItem(storyId, callbackSuccess, null);
  }

  render() {
    const { isLoading, storyData } = this.state;

    return (
      <Modal>
        {isLoading ? (
          <span>Loading...</span>
        ) : (
          <div className="story">
            <div className="story__top-section">
              <a href={storyData.url} title={storyData.title}>
                {storyData.title}
              </a>
              <p>
                <span>By: {storyData.by}</span>
                <span>{convertUnixTimeToLocalDate(storyData.time)}</span>
              </p>
            </div>
            <div className="story__comment-section">
              <h4>Comments:</h4>
              <div>{storyData.kids && storyData.kids.map(id => <Comment id={id} key={id} />)}</div>
            </div>
          </div>
        )}
      </Modal>
    );
  }
}

export default Story;

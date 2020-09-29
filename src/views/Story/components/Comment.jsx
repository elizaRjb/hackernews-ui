import React, { Component } from 'react';

import { newsService } from 'services/NewsService';

class Comment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      commentData: null,
    };
  }
  componentDidMount() {
    const { id } = this.props;

    const callbackSuccess = data => {
      this.setState({ commentData: data, isLoading: false });
    };

    newsService.getNewsItem(id, callbackSuccess, () => console.log('errro'));
  }

  render() {
    const { commentData, isLoading } = this.state;

    if (isLoading) return <span>Loading...</span>;

    if (commentData) {
      return (
        <div className="comment">
          <p className="comment__user">{commentData.by}:</p>
          <p className="comment__text" dangerouslySetInnerHTML={{ __html: commentData.text }} />
          {commentData.kids && commentData.kids.map(id => <Comment id={id} key={id} />)}
        </div>
      );
    }

    return null;
  }
}

export default Comment;

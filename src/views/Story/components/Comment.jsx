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

    return (
      <div className="comment">
        {isLoading && <span>Loading...</span>}
        {commentData && (
          <div>
            <p className="comment__user">{commentData.by}:</p>
            <p className="comment__text" dangerouslySetInnerHTML={{ __html: commentData.text }} />
            {commentData.kids && commentData.kids.map(id => <Comment id={id} key={id} />)}
          </div>
        )}
      </div>
    );
  }
}

export default Comment;

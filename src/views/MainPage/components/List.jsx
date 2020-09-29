import React, { Component } from 'react';

import ListItem from './ListItem';

class List extends Component {
  render() {
    const { list } = this.props;

    let items = [];

    if (list.length !== 0) {
      items = list.map(item => <ListItem key={item} itemId={item} />);
    }

    return <ul className="news-list">{items}</ul>;
  }
}

export default List;

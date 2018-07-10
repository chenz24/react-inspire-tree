import React from 'react';

class IndexLayout extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default IndexLayout;

import React from 'react';

class EmptyList extends React.Component {
  render() {
    return (
      <ul>
        <li className="leaf">
          <span className="node icon-file-empty empty">{this.props.text}</span>
        </li>
      </ul>
    );
  }
}

export default EmptyList;

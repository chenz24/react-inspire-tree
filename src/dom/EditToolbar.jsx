import React from 'react';
import blankNode from '../lib/blank-node';

export default class EditToolbar extends React.Component {
  constructor(props) {
    super(props);

    this.add = this.add.bind(this);
    this.edit = this.edit.bind(this);
    this.remove = this.remove.bind(this);
  }

  add(event) {
    event.stopPropagation();

    this.props.node.addChild(blankNode());
    this.props.node.expand();
  }

  edit(event) {
    event.stopPropagation();

    this.props.node.toggleEditing();
  }

  remove(event) {
    event.stopPropagation();

    this.props.node.remove();
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    const buttons = [];

    if (this.props.dom._tree.config.editing.edit) {
      buttons.push(<a className='btn icon icon-pencil' onClick={this.edit.bind(this)} title='Edit this node'></a>);
    }

    if (this.props.dom._tree.config.editing.add) {
      buttons.push(<a className='btn icon icon-plus' onClick={this.add.bind(this)} title='Add a child node'></a>);
    }

    if (this.props.dom._tree.config.editing.remove) {
      buttons.push(<a className='btn icon icon-minus' onClick={this.remove.bind(this)} title='Remove this node'></a>);
    }

    return <span className='btn-group'>{ buttons }</span>;
  }
}

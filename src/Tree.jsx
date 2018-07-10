import React from 'react';
import PropTypes from 'prop-types';
import InspireTree from 'inspire-tree';
import { isEqual } from 'lodash';
import TreeDom from './InspireTreeDOM';

class Tree extends React.Component {
  static propTypes = {
    // data: PropTypes.array,
    config: PropTypes.object,
    className: PropTypes.string,
  };

  constructor() {
    super();

    this.createInstance = this.createInstance.bind(this);
  }

  createInstance(params = {}) {
    let { data, config, columns } = this.props;
    if (params.data) data = params.data;
    if (params.config) config = params.config;
    if (params.columns) columns = params.columns;

    this.Instance = new InspireTree({ data, editable: true });
    new TreeDom(this.Instance, { target: this.treeNode, columns, ...config }); // eslint-disable-line
  }

  componentDidMount() {
    this.createInstance();
  }

  componentWillReceiveProps(nextProps) {
    if (!isEqual(this.props.data, nextProps.data)) {
      this.Instance.load(nextProps.data);
    }
  }

  render() {
    return (
      <div
        ref={tree => { this.treeNode = tree; }}
        className={this.props.className}
      />
    );
  }
}

export default Tree;

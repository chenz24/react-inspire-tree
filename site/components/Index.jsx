import React from 'react';
import data from '../data/baseData';
import Tree from '../../src/Tree';

class Index extends React.Component {
  componentDidMount() {
    const tree = this.tree.Instance;
    tree.on('node.selected', () => {
      // this.handleOnChange(tree.selected());
      console.log(tree.selected());
    });
    tree.on('node.contextmenu', (event, node) => {
      // this.handleOnChange(tree.selected());
      console.log(event, node);
    });
  }

  render() {
    return (
      <div>
        <Tree
          data={data}
          config={{ dragAndDrop: true, selection: { mode: 'checkbox' }, showCheckboxes: true, editable: true }}
          ref={tree => { this.tree = tree; }}
        />
      </div>
    );
  }
}

export default Index;

import React from 'react';
import { Link } from 'react-router';

class SideNav extends React.Component {
  render() {
    return (
      <aside className="list-group">
        <div className="menu">
          <p className="menu-label">Getting Start</p>
          <ul className="menu-list">
            <li><Link to="/introduction" activeClassName="is-active">Introduction</Link></li>
            <li><Link to="/usage" activeClassName="is-active">Usage</Link></li>
          </ul>

          <p className="menu-label">Demo</p>
          <ul className="menu-list">
            <li><Link to="/demo/basic-usage" activeClassName="is-active">Basic Usage</Link></li>
            <li><Link to="/demo/custom-appearance" activeClassName="is-active">Custom Appearance</Link></li>
            <li><Link to="/demo/dynamic-tree" activeClassName="is-active">Dynamic Tree</Link></li>
            <li><Link to="/demo/search" activeClassName="is-active">Search</Link></li>
            <li><Link to="/demo/select" activeClassName="is-active">Select</Link></li>
            <li><Link to="/demo/check-radio" activeClassName="is-active">Checkbox & Radio</Link></li>
            <li><Link to="/demo/editing" activeClassName="is-active">Inline Editing</Link></li>
            <li><Link to="/demo/drag-drop" activeClassName="is-active">Drag and Drop</Link></li>
          </ul>

          <p className="menu-label">InspireTree API</p>
          <ul className="menu-list">
            <li><a href="http://www.inspire-tree.com/docs/current/InspireTree.html" target="_blank">InspireTree</a></li>
            <li><a href="http://www.inspire-tree.com/docs/current/TreeNodes.html" target="_blank">TreeNodes</a></li>
            <li><a href="http://www.inspire-tree.com/docs/current/TreeNode.html" target="_blank">TreeNode</a></li>
          </ul>
        </div>
      </aside>
    );
  }
}

export default SideNav;

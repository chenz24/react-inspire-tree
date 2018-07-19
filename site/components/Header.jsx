import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {
  render() {
    return (
      <div className="container">
        <nav className="navbar is-dark">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item logo">
              <span>React-Inspire-Tree</span>
            </Link>
          </div>
          <div className="navbar-menu">
            <div className="navbar-end">
              <div className="navbar-item">
                <span className="tag is-rounded is-primary">V0.1.0</span>
              </div>
              <div className="navbar-item">
                <a href="https://git.internal.yunify.com/wayne/qing-design" className="button is-outlined is-light">
                  <span>Github</span>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;

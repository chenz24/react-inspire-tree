import React from 'react';
import Header from './Header';
import SideNav from './SideNav';
import Footer from './Footer';

class Layout extends React.Component {
  render() {
    return (
      <div>
        <div className="hero is-dark section-logo">
          <div className="hero-head">
            <Header/>
          </div>
        </div>
        <section className="section-main">
          <div className="container">
            <div className="columns">
              <div className="column is-2 side-nav">
                <SideNav/>
              </div>
              <div className="column is-10 main-content">
                {this.props.children}
              </div>
            </div>
          </div>
        </section>
        <Footer/>
      </div>
    );
  }
}

export default Layout;

import React from 'react';
import Element from './Element';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (<div className="main">
              <h1>Hello, React!</h1>
              <div>
                <h2>アプリ一覧</h2>
                <div className="appList">
                  {this.props.apps.map(app => { return (<Link to={app.link}><Element name={app.name} /></Link>); })}
                </div>
              </div>
            </div>);
  }
}

export default Home;
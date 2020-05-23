import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Home from './component/Home';
import WishList from './component/WishList';
import Schedule from './component/Schedule';
import './css/style.css';

class App extends React.Component {
  render() {
    const apps = [
                  // { name: "ホーム", link: "/"},
                  { name: "欲しいものリスト", link: "/app1" },
                  // { name: "進捗管理", link: "/app2" },
                  { name: "予定表", link: "/app2" }
                ];

        return (<BrowserRouter>
                  <Switch>
                    <Route exact path="/" component={ () => <Home apps={apps} />} />
                    <Route exact path="/app1" component={ () => <WishList path={"/app1"} /> } />
                    <Route exact path="/app2" component={ () => <Schedule path={"/app2"} /> } />
                  </Switch>
                </BrowserRouter>);
  }
}

export default App;

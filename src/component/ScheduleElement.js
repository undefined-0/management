import React from 'react';
import { BrowserRouter, Route, Link, Switch, useRouteMatch, useParams, useLocation } from 'react-router-dom';

import ScheduleDetail from './ScheduleDetail';

class ScheduleElement extends React.Component {
  constructor(props) {
    super(props);
    // this.props = props;
    this.state = { isModalOpen: false };
  }

  clickHander() {
    if (this.state.isModalOpen) {
      this.setState({ isModalOpen: false });
    }
    else {
      this.setState({ isModalOpen: true });
    }
  }

  render() {
    // let modal;

    // if (this.state.isModalOpen) {
    //   modal = (<div className="modal">
    //             <div className="modal-content">
    //               <p>{this.props.text}</p>
    //               <input type="button" value="hoge" />
    //               <input type="button" value="huga" />
    //             </div>
    //           </div>);
    // }

    return (
            // <div className="schedule-element" onClick={ () => this.clickHander() }>
            <div className="schedule-element">
              <img src={this.props.image} />
              <p>{this.props.text}</p>
              {/* {modal} */}
            </div>
            );
            {/* <BrowserRouter> */}
              {/* <Link to={this.props.link}> */}
              {/* </Link> */}
              {/* <Switch>
                <Route exact path={this.props.link} component={ () => <ScheduleDetail link={this.props.link} /> } />
              </Switch> */}
            {/* </BrowserRouter>); */}
  }
}

export default ScheduleElement;
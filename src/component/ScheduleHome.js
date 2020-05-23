import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import ScheduleElement from './ScheduleElement';

class ScheduleHome extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div className="main">
              <h1>Schedule</h1>

              <div className="schedule-list">
                {this.props.data.map( (datum) => {
                  return (<Link to={this.props.path + datum.link}>
                            <ScheduleElement 
                              text={datum.text}
                              image={datum.image}
                              link={this.props.path + datum.link} />
                          </Link>);
                })}
              </div>
            </div>);
  }
}

export default ScheduleHome;
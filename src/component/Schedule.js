import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import ScheduleElement from './ScheduleElement';
import ScheduleDetail from './ScheduleDetail';
import ScheduleHome from './ScheduleHome';

class Schedule extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // ここでデータベースからデータを取得する
    const sampleData = [
      { text: "Single Page Application is realized by React Router.",
        image: "https://via.placeholder.com/200x200.png",
        link: "/sch1" },
      { text: "Bakumatsushishi is the most interesting commentator in the world.",
        image: "https://via.placeholder.com/200x200.png",
        link: "/sch2" },
      { text: "Life is strange. I am looking for girl friend.",
        image: "https://via.placeholder.com/200x200.png",
        link: "/sch3" },
      { text: "Nyantako is fan and wise youtuber. Her video that name is \"make Blue eyes white dragon\" is famous.",
        image: "https://via.placeholder.com/200x200.png",
        link: "/sch4" }
    ];

    //return (<div className="main">
    //           <h1>Schedule</h1>
    //           <div className="schedule-list">
                {/* {sampleTexts.map( (text) => {
                  return (<ScheduleElement 
                            text={text.text}
                            image={text.image}
                            link={this.props.path + text.link} />);
                })} */}
                return (<BrowserRouter>
                  {/* {sampleTexts.map( (text) => {
                    return (<Link to={this.props.path + text.link}>
                              <ScheduleElement 
                                text={text.text}
                                image={text.image}
                                link={this.props.path + text.link} />
                            </Link>);
                  })} */}
                  <Switch>
                    <Route exact path={this.props.path} component={ () => <ScheduleHome path={this.props.path} data={sampleData} /> } />
                    {sampleData.map( (datum) => {
                      return <Route exact path={this.props.path + datum.link} component={ () => <ScheduleDetail link={this.props.path + datum.link} /> } />;
                    })}
                  </Switch>
                </BrowserRouter>);
              //</div>
            //</div>);
  }
}

export default Schedule;
import React from 'react';

class Element extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  clickHandler() {
    if (this.state.isOpen) {
      this.setState({ isOpen: false });
    }
    else {
      this.setState({ isOpen: true });
    }
  }

  render() {
    // let modal;

    // if (this.state.isOpen) {
    //   modal = (<p>{this.props.name}はまだできてないぞ</p>);
    // }

    return (<div
              className="element"
              // onClick={() => this.clickHandler()}
            >
              {this.props.name}
            </div>);
  }
}

export default Element;
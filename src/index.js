import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
  state = { time: new Date().toLocaleTimeString() };

  componentDidMount() {
    setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
  }

  render() {
    return (
      <div>
        <h1>{this.state.time}</h1>
      </div>
    );
  }
}

ReactDOM.render(<Clock />, document.querySelector('#root'));

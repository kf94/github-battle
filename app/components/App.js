var React = require('react');
var ReactDOM = require('react-dom');
var propTypes = require('prop-types');
var Popular = require('./Popular')

class App extends React.Component {
  render() {

    return (
      <div className="container">
          <Popular/>
      </div>
    )
  }
}

module.exports = App;
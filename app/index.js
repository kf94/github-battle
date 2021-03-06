var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');
var App = require('./components/App')

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

// class Badge extends React.Component {
//   render() {
//     return (
//       <div>
//         <img 
//           src={this.props.img}
//           alt="Avatar"
//           style={{width: 100, height: 100}} 
//         />
//         <h1>Name:{this.props.name} </h1>
//         <h3>username: {this.props.username}</h3>
//       </div>
//     )
//   }
// }

// Badge.propTypes = {
//   img: propTypes.string.isRequired,
//   name: propTypes.string.isRequired,
//   username: propTypes.string.isRequired
// }

// ReactDOM.render(
//   <Badge 
//     name='Tyler McGinnis'
//     username='tylermcginnis'
//     img='https://avatars0.githubusercontent.com/u/2933430?v=3&s=460'/>,
//   document.getElementById('app')
// );

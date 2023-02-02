import { Component } from 'react';
class Feed extends Component {
  render() {
    return (
      <div key={this.props.id}>
        <h3>{this.props.username}</h3>
        <a>
          {this.props.curtidas} curtidas / {this.props.comentarios} comentarios
        </a>
      </div>
    );
  }
}

export default Feed;

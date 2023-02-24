import React, { Component } from 'react';

class Feed extends Component {
  render() {
    return (
      <div>
        <div id={this.props.id}>
          <h3>{this.props.username}</h3>
          <a>
            {this.props.curtidas > 1
              ? this.props.curtidas + ' curtidas'
              : this.props.curtidas + ' curtida'}
            /
            {this.props.comentarios > 1
              ? this.props.comentarios + ' comentarios'
              : ''}
          </a>
          <hr />
        </div>
      </div>
    );
  }
}
export default Feed;

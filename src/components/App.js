import React, { Component } from "react";
// import { Route, Link } from 'react-router-dom';
import CommentList from "./CommentList";
import CommentBox from "./CommentBox";

class App extends Component {
  // renderButton() {
  //   if (this.props.auth) {
  //     return (
  //       <button onClick={() => this.props.changeAuth(false)}>Sign Out</button>
  //     );
  //   } else {
  //     return (
  //       <button onClick={() => this.props.changeAuth(true)}>Sign In</button>
  //     );
  //   }
  // }

  render() {
    return (
      <div>
        {/* {this.renderHeader()}
        <Route path="/post" component={CommentBox} />
        <Route path="/" exact component={CommentList} /> */}
        <CommentBox />
        <CommentList />
      </div>
    );
  }
}

export default App;

import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-redux-loading";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";
import NewTweet from "./NewTweet";
//import TweetPage from "./TweetPage";
import TweetPageFunc from "./TweetPageFunc";
import Nav from "./Nav";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className="container">
            <Nav />
            {this.props.loading === true ? (
              <h3 className="center">Loading...</h3>
            ) : (
              <div>
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/tweet/:id" element={<TweetPageFunc />} />
                  <Route path="/new" element={<NewTweet />} />
                </Routes>
              </div>
            )}
          </div>
        </Fragment>
      </Router>
    );
  }
}

const mapStateToProps = ({ authedUser }) => {
  return {
    loading: authedUser === null
  };
};

export default connect(mapStateToProps)(App);

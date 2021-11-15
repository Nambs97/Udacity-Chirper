import React, { Component } from "react";
import { connect } from "react-redux";
import TweetFunc from "./TweetFunc";
import NewTweet from "./NewTweet";

class TweetPage extends Component {
  render() {
    const { id, replies } = this.props;
    return (
      <div>
        <TweetFunc id={id} />
        <NewTweet replyTo={id} />
        {replies.length !== 0 && <h3 className="center">Replies</h3>}
        <ul>
          {replies.map((replyId) => (
            <li key={replyId}>
              <TweetFunc id={replyId} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ authedUser, tweets, users }, props) => {
  const id = props.id;
  return {
    id,
    replies: !tweets[id]
      ? []
      : tweets[id].replies.sort(
          (a, b) => tweets[b].timestamp - tweets[a].timestamp
        )
  };
};

export default connect(mapStateToProps)(TweetPage);

import React from "react";
import { useNavigate } from "react-router-dom";
import Tweet from "./Tweet";

export default function TweetFunc(props) {
  const navigate = useNavigate();
  return <Tweet id={props.id} navigate={navigate} />;
}

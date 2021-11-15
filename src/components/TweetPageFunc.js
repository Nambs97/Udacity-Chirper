import React from "react";
import TweetPage from "./TweetPage";
import { useParams } from "react-router-dom";

export default function TweetPageFunc() {
  const { id } = useParams();
  return <TweetPage id={id} />;
}

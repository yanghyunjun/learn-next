import React from "react";
import { NextPage } from "next";
import fetch from "isomorphic-unfetch";

const index: NextPage<{ shows: string }> = ({ shows }) => {
  console.log(shows);
  return <div>hello world</div>;
};

index.getInitialProps = async () => {
  const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
  const data = await res.json();
  return {
    shows: data,
  };
};

export default index;

import React from "react";

function Result(props) {
  console.log("llll", JSON.stringify(props.result));

  return <pre>{JSON.stringify(props.result, undefined, 4)}</pre>;
}

export default Result;

import React from 'react';
import ReactJson from 'react-json-view';
import {If,Then} from '../if/if.js';

function Result(props) {
  console.log('props.results.length : ',Object.entries(props.results).length );
  return(
    <>
      <If condition={Object.entries(props.results).length > 0}>
        <Then> <ReactJson src={props.results}/></Then>
      </If>
      <If condition={Object.entries(props.results).length === 0}>
        <Then> <h3>no result yet</h3></Then>
      </If>
    </>
  );
}

export default Result;

import React from 'react';

const Histoy = (props) => {
  console.log('props.history : ', props.history);
  let items = props.history.map((item, i) => <li key={i}>{item}</li>);

  return (
    <header className="history">
      <h1>History</h1>
      <ul>
        {items}
      </ul>
    </header>
  );
};

export default Histoy;
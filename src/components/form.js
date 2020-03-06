import React from 'react';
import { trackPromise } from 'react-promise-tracker';
function Form(props) {
  const handleSubmit = async event => {
    event.preventDefault();
    
    const raw = await trackPromise(fetch(props.url));
    const data = await raw.json();
    
    props.handler(data);
  };
  const handleChange = event => {
    event.preventDefault();
    let input = event.target.value;
    props.handelCh(input);
  };
  const method = event =>{
    event.preventDefault();
    let method = event.target.value;
    console.log('method : ', method);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} />
        <button onClick={method} value='GET'>GET</button>
        <button  onClick={method} value='POST'>POST</button>
        <button  onClick={method} value='PUT'>PUT</button>
        <button  onClick={method} value='PATCH'>PATCH</button>
        <button>DELETE</button>

        <button className="go" type='submit'>Go!</button>
      </form>
    </div>
  );
}

export default Form;
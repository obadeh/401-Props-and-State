import React from "react";

function Form(props) {
  const handleSubmit = async event => {
    event.preventDefault();
    console.log("url", props.url);
    const raw = await fetch(props.url);
    const data = await raw.json();
    console.log(data);
    console.log(props);
    console.log("fff", props.jj);
    props.handler(data);
    // return props.handler(data);
  };
  const handleChange = event => {
    event.preventDefault();
    let input = event.target.value;
    console.log("input", input);
    props.handelCh(input);
  };
  return (
      <div>
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} />
      <button>GET</button>
    </form>
    </div>
  );
}

export default Form;

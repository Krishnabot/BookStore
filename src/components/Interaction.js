import React from 'react';

const Interaction = (props) => {
  const { name, Click, id } = props;
  return (
    <div>
      <button onClick={Click} id={id} className="button" type="button">
        {name}
      </button>
    </div>
  );
};

export default Interaction;

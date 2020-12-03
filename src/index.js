import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

const onClick = () => {
  console.log("you did it!")
}

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={onClick} />
  </div>,
  document.getElementById('root')
);
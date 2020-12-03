import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

sayHello = () => <h1>Hello everyone!</h1>

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={this.sayHello} />
  </div>,
  document.getElementById('root')
);
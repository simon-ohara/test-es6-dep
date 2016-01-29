import React from 'react';
import ReactDOM from 'react-dom';
import { App, app } from './app-maker';
import MyComponent from './MyComponent';

export default node => {
  ReactDOM.render(
    <MyComponent />
  , node
  );
}

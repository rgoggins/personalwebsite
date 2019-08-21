import React from 'react';
import ReactDOM from 'react-dom';
import MainClass from './MainClass';

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(MainClass),
    document.getElementById('mount')
  );
});

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import state from "./Redux/State";

import {rerenderEntireTree} from "./render";

rerenderEntireTree(state)
/*
ReactDOM.render(
    <App state={state} addPost={addPost}/>,
  document.getElementById('root')
);*/
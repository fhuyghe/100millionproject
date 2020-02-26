import React from 'react';
import { hydrate, render } from 'react-dom';
import './index.scss';
import { App } from './components/App';
import ScrollToTop from './components/Shared/ScrollToTop'
// import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from "react-router-dom";


const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<Router><ScrollToTop /><App /></Router>, rootElement);
} else {
  render(<Router><ScrollToTop /><App /></Router>, rootElement);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

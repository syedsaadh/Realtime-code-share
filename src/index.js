import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";
import registerServiceWorker from "./registerServiceWorker";
import * as firebase from "firebase";
import * as config from "./firebase-config.json";
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();

import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";

export default class HomePage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="homepage">
          <p className="title">
            Share Code with in <span className="highlight">Realtime</span>.
            <br />
            Anywhere, Anytime and with <span className="highlight">Anyone</span>
            .
          </p>

          <p className="sub-title">
            Simple Realtime Code Sharing Editor App. Using Firebase Realtime
            Database and Code Mirror as Editor.
          </p>
          <div>
            <Link className="btn" to="/sad">
              Share Code
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

import React from "react";
import Header from "../../components/Header";
import CodeMirror from "react-codemirror";

require("codemirror/lib/codemirror.css");
require("codemirror/mode/javascript/javascript");
require("codemirror/theme/dracula.css");

export default class CodingPage extends React.Component {
  state = {
    code: Header.toString()
  };
  render() {
    return (
      <React.Fragment>
        <Header
          style={{ background: "#1d1f27" }}
          extras={<div>{Date()}</div>}
        />
        <div className="coding-page">
          <CodeMirror
            className="code-mirror-container"
            value={this.state.code}
            options={{
              theme: "dracula",
              lineNumbers: true,
              mode: "javascript"
            }}
          />
        </div>
      </React.Fragment>
    );
  }
}

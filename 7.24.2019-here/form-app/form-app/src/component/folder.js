import React, { Component } from "react";
import "./folder.css";

class Folder extends Component {
  state = {
    hide: false
  };

  hindFile = ev => {
    this.setState({ hide: !this.state.hide });
    // console.log(ev.target.children);
  };
  getWord = () => {
    if (this.state.hide) return "Hide my file";
    else return "Show my file"; //???????????????????????????????????????????????????
  };

  render() {
    return (
      <div>
        <div className="box">
          <div className="path">
            <div className="home folder">Home</div>
            {this.state.hide && (
              <div>
                <div className="home file">My.js</div>
                <div className="home file">My.css</div>
              </div>
            )}
          </div>
        </div>
        <div className="box2">
          <button onClick={this.hindFile} className="home togo">
            Toggle
          </button>
        </div>
      </div>
    );
  }
}

export default Folder;

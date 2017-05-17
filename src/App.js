import React from 'react';
import marked from 'marked';
import './App.css';
import SplitPane from 'react-split-pane';

class App extends React.Component {
  state = {
    text: ""
  };
  textChange = (e) => {
    this.setState( { text:e.target.value});
  };
  createMarkup = () => {
    let txt = this.state.text;
    // if( txt === "") txt = "type some text";
    return { __html: marked( txt)};
  };
  render = () => {
    const ta_style = {
      boxSizing: "border-box",
      width: "calc( 100% - 20px)",
      height: "calc( 100vh - 3rem)", // % doesn't work here!
      margin: "0 10px",
      resize: "none"
    };
    const preview_style = {
      margin: "0 10px",
      overflowY: "scroll",
      height: "100%"
    };
    // FIXME: split pane in container seems to get incorrect height info
    const split_pane = {
      maxHeight: "calc( 100% - 3rem)",
    };
    const outer = {
      display: "flex",
      flexDirection: "column",
      flex: "2"
    };
    const header = {
      fontSize: "2rem",
      fontWeight: "bold",
      textAlign: "center",
      height: "3rem"
    };
    return (
      <div style={outer}>
        <div id="my_header" style={header}>Markdown Previewer</div>
        <div>
          <SplitPane style={split_pane} split="vertical" defaultSize={"50%"}>
            <div>
              <textarea style={ta_style} onChange={this.textChange} value={this.state.text} />
            </div>
            <div style={preview_style} dangerouslySetInnerHTML={this.createMarkup()} ></div>
          </SplitPane>
        </div>
      </div>
    );
  };
}

export default App;

import React from 'react';
import marked from 'marked';
import './App.css';
import SplitPane from 'react-split-pane';

class App extends React.Component {
  state = {
    text: "",
    header_height : 0
  };

  componentDidMount = () => {
    this.setState( { header_height: document.getElementById('my_header').clientHeight});
  };
  textChange = (e) => {
    this.setState( { text:e.target.value});
  };
  createMarkup = () => {
    let txt = this.state.text;
    if( txt === "") txt = "type some text";
    return { __html: marked( txt)};
  };
  render = () => {
    const outer = {
      display: "flex",
      flexDirection: "column"
    };
    const ta_style = {
      boxSizing: "border-box",
      width: "calc( 100% - 20px)",
      height: "400px",
      maxHeight: `calc( 100% - ${this.state.header_height}px)`,
      margin: "0 10px",
      resize: "none"
    };
    const preview_style = {
      margin: "0 10px",
      overflowY: "scroll",
      height: `calc( 100% - ${this.state.header_height}px)`
    };
    // FIXME: split pane in container seems to get incorrect height info
    const split_pane = {
      maxHeight: `calc( 100% - ${this.state.header_height}px)`
    };
    return (
      <div style={outer}>
        <div id="my_header">
          <h1>Markdown Previewer</h1>
        </div>
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

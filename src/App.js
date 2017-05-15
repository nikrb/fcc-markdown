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
    if( txt === "") txt = "type some text";
    return { __html: marked( txt)};
  };
  render = () => {
    const outer = {
      display: "flex",
      flexDirection: "column"
    };
    const preview_wrapper = {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around"
    };
    return (
      <div style={outer}>
        <h1>Markdown Previewer</h1>
        <div style={preview_wrapper}>
          <SplitPane split="vertical" minSize={50} defaultSize={400}>
            <div>
              <textarea onChange={this.textChange} value={this.state.text} />
            </div>
            <div dangerouslySetInnerHTML={this.createMarkup()} />
          </SplitPane>
        </div>
      </div>
    );
  };
}

export default App;

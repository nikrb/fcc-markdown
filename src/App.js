import React from 'react';
import marked from 'marked';
import './App.css';

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
    const ip_text = {
      margin: "0 10px",
      flex: "1 1 auto"
    };
    const marked_up = {
      margin: "0 10px",
      flex: "1 1 auto",
      border: "1px solid black"
    };
    const outer = {
      display: "flex",
      flexDirection: "column"
    };
    const preview_wrapper = {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around"
    };
    const splitter_bar = {
      width: "0px",
      height: "400px",
      border: "5px solid rgba( 64, 64, 255, 0.5)"
    };
    return (
      <div style={outer}>
        <h1>Markdown Previewer</h1>
        <div style={preview_wrapper}>
          <div>
            <textarea style={ip_text} onChange={this.textChange} value={this.state.text} />
          </div>
          <div style={splitter_bar} className="splitter_bar"/>
          <div style={marked_up} dangerouslySetInnerHTML={this.createMarkup()} />
        </div>
      </div>
    );
  };
}

export default App;

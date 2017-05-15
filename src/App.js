import React from 'react';
import marked from 'marked';

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
    };
    const marked_up = {
      width: "400px",
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
    return (
      <div style={outer}>
        <h1>Markdown Previewer</h1>
        <div style={preview_wrapper}>
          <div>
            <textarea rows="12" cols="40" style={ip_text} onChange={this.textChange} value={this.state.text} />
          </div>
          <div style={marked_up} dangerouslySetInnerHTML={this.createMarkup()} />
        </div>
      </div>
    );
  };
}

export default App;

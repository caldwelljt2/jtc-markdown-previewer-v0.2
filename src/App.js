// import logo from './logo.svg';
// import './App.css';
import React, { useState } from 'react';
import MyPreview from './MarkdownPreview'
import placeholder from './Placeholder'
// import CustomPreview from './CustomPreview'

// eslint-disable-next-line no-unused-vars
const projectName = 'markdown-previewer';

function App() {
  const [myInput, setMyInput] = useState(placeholder)
  console.log(myInput, myInput.current)
  return (
    <div id="app" style={{ justifyContent: "center" }}>
      <div class="editorWrap">
      <div class="toolbar">Edit Here (Using Markdown):</div>

        <textarea type="textarea" id="editor" value={myInput} style={{
        }} onChange={event => { setMyInput(event.target.value) }} />
      </div>
      <div class="previewWrap">
      <div class="toolbar">Preview Markup:</div>

        <MyPreview myText={myInput} id="preview1" />
        {/* <CustomPreview markdown={myInput} id="preview2" /> */}
      </div>

    </div>
  );
}

export default App;

// what I want my output to look like:
// head
//  body
//    div-app

// /div
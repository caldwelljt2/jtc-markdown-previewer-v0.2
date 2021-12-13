import React from 'react'
import { MarkdownPreview } from 'react-marked-markdown'
// import Prism from 'prism'


const myPreview = (props) => {
    console.log(props.myText)
    return (
        <div style={{ 
            // 'display': 'flex',  alignItems: 'center', backgroundColor: "yellow", width: "50vw", alignContent: "center" 
        }}>
          
            {/* 
            <div className="toolbar" style={{}}>
                <i className="fa fa-free-code-camp" title="no-stack-dub-sack" />
                {props.text}Compontent '' Version:
                <i className="fa fa-arrows-alt" onClick={props.onClick} />
            </div>
            <h1>Raw Version:</h1>
            <h2>{props.myText}</h2> 
            */}

            <h1>Markup Version:</h1>
            <div>
                <MarkdownPreview id="preview" className="ui post content"
                    markedOptions={{
                        gfm: true,
                        tables: true,
                        breaks: true,
                        pedantic: false,
                        sanitize: true,
                        smartLists: true,
                        smartypants: false,
                        // highlight: function (code) {
                        //     return Prism.highlight(code, Prism.languages.javascript, 'javascript');
                        // }
                    }} value={props.myText} 
                    
                     />
            </div>
        </div>
    )
}

export default myPreview
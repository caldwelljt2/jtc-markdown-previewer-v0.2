import React from 'react'
import marked from 'marked'

const CustomPreview = (props) => {
    return (
      <div>
        <h1>Using marked() directly</h1>
        <div
          dangerouslySetInnerHTML={{
            // __html: marked(props.markdown, { renderer: marked.Renderer() }),
            __html:
              marked(props.markdown)
          }}
          id="preview"
          contenteditable="true"
        >
  
          {/* {marked(props.markdown)} */}
  
        </div>
      </div>
    );
  };

export default CustomPreview
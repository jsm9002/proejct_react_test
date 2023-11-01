import React from 'react'
import FilerobotImageEditor, {
  TABS,
  TOOLS,
} from 'react-filerobot-image-editor';

const Edit2 = () => {
    
  return (
    <FilerobotImageEditor
    source="https://scaleflex.airstore.io/demo/stephen-walker-unsplash.jpg"
    tabsIds={[TABS.ADJUST, TABS.ANNOTATE, TABS.WATERMARK, TABS.RESIZE]} // or {['Adjust', 'Annotate', 'Watermark']}
          defaultTabId={TABS.ANNOTATE} // or 'Annotate'
          defaultToolId={TOOLS.TEXT}
           // or 'Text'
          />
  )
}

export default Edit2
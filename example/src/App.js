import React from 'react'

import useUpload from 'drag-and-paste'

import './index.css'

export default function App() {
  const [boxRef, files] = useUpload()
  const [dragFocused, setDragFocused] = React.useState(false)

  React.useEffect(() => {
    console.log('New Files', files)
  }, [files])

  return (
    <div
      ref={boxRef}
      className={`app${dragFocused ? ' focused' : ''}`}
      tabIndex={-1}
      onDragEnter={() => setDragFocused(true)}
      onDragLeave={() => setDragFocused(false)}
      onMouseLeave={() => dragFocused && setDragFocused(false)}
    >
      Drop Or Paste Here.
      <br />
      Open DevTools Console
      <br />
      paste only support image
    </div>
  )
}

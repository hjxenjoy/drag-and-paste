# drag-and-paste

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/drag-and-paste.svg)](https://www.npmjs.com/package/drag-and-paste) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save drag-and-paste
```

## Usage

```tsx
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
```

## License

MIT © [hjxenjoy](https://github.com/hjxenjoy)

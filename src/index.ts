import React from 'react'

type ValidElement = HTMLDivElement | HTMLParagraphElement

function check(file: File, accept?: string) {
  if (!accept) {
    return true
  }
  const rules = accept
    .split(',')
    .map((type) =>
      /^\./.test(type) ? { suffix: type.substr(1) } : { mime: type.split('/') }
    )
    .filter((types) => {
      // like .png or image/* or image/png
      return (
        types.suffix ||
        (types.mime &&
          types.mime.length === 2 &&
          types.mime[0] &&
          types.mime[1])
      )
    })

  if (!rules.length) {
    return true
  }

  const [mainType, subType] = file.type.split('/')
  const { name } = file
  return rules.some((rule) =>
    // eslint-disable-next-line no-nested-ternary
    rule.suffix
      ? rule.suffix === name.split('.').pop()
      : rule.mime
      ? rule.mime[0] === mainType &&
        (rule.mime[1] === '*' || rule.mime[1] === subType)
      : false
  )
}

/**
 * upload drag and paste hooks
 * @param multiple multiple select default false
 * @param accept file type like .png,image/*,text/plain
 */
export default function useUpload(
  multiple?: boolean,
  accept?: string
): [React.RefObject<ValidElement>, File[]] {
  const [files, setFiles] = React.useState<File[]>([])
  const boxRef = React.useRef<ValidElement>(null)

  React.useEffect(() => {
    const box = boxRef.current

    function onPaste(event: ClipboardEvent): void {
      const items = event.clipboardData && event.clipboardData.items
      if (items && items.length) {
        for (let i = 0; i < items.length; i += 1) {
          const item = items[i]
          // clipboard only can accept one file
          if (item.kind === 'file') {
            const file = item.getAsFile()
            if (file && check(file, accept)) {
              setFiles([file])
            }
            break
          }
        }
      }
    }

    function onDrop(event: DragEvent): void {
      event.preventDefault()
      event.stopPropagation()

      if (event.dataTransfer && event.dataTransfer.files) {
        const blobs = Array.from(event.dataTransfer.files).filter((file) =>
          check(file, accept)
        )
        setFiles(multiple ? blobs : blobs.slice(0, 1))
      }
    }

    function prevent(evt: DragEvent): void {
      evt.preventDefault()
    }

    if (box) {
      box.addEventListener('paste', onPaste)
      box.addEventListener('drop', onDrop)
      box.addEventListener('dragenter', prevent)
      box.addEventListener('dragover', prevent)
    }

    return () => {
      if (box) {
        box.removeEventListener('paste', onPaste)
        box.removeEventListener('drop', onDrop)
        box.removeEventListener('dragenter', prevent)
        box.removeEventListener('dragover', prevent)
      }
    }
  }, [accept, multiple])

  return [boxRef, files]
}

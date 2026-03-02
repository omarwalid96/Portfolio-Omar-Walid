interface FormattedTextProps {
  text: string
  className?: string
  variant?: "inline" | "markdown"
}

function renderInlineMarkdown(text: string, keyPrefix = "part") {
  const parts = text.split(/(\*\*.*?\*\*)/g)

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      const boldText = part.slice(2, -2)
      return (
        <strong key={`${keyPrefix}-${index}`} className="font-bold">
          {boldText}
        </strong>
      )
    }
    return <span key={`${keyPrefix}-${index}`}>{part}</span>
  })
}

function renderMarkdownBlocks(text: string) {
  const normalizedText = text.replace(/\r\n/g, "\n").trim()
  if (!normalizedText) return null

  const blocks: JSX.Element[] = []
  const lines = normalizedText.split("\n")
  let paragraphLines: string[] = []
  let listItems: string[] = []

  const flushParagraph = () => {
    if (paragraphLines.length === 0) return
    const paragraphText = paragraphLines.join(" ").replace(/\s+/g, " ").trim()
    if (paragraphText) {
      const key = `p-${blocks.length}`
      blocks.push(<p key={key}>{renderInlineMarkdown(paragraphText, key)}</p>)
    }
    paragraphLines = []
  }

  const flushList = () => {
    if (listItems.length === 0) return
    const key = `ul-${blocks.length}`
    blocks.push(
      <ul key={key} className="list-disc pl-5">
        {listItems.map((item, index) => {
          const listItemText = item.replace(/\s+/g, " ").trim()
          return <li key={`${key}-${index}`}>{renderInlineMarkdown(listItemText, `${key}-${index}`)}</li>
        })}
      </ul>
    )
    listItems = []
  }

  for (const line of lines) {
    const trimmedLine = line.trim()

    if (!trimmedLine) {
      flushParagraph()
      continue
    }

    const bulletMatch = line.match(/^\s*-\s+(.*)$/)
    if (bulletMatch) {
      flushParagraph()
      listItems.push(bulletMatch[1].trim())
      continue
    }

    const isListContinuation = listItems.length > 0 && /^\s+/.test(line)
    if (isListContinuation) {
      listItems[listItems.length - 1] += ` ${trimmedLine}`
      continue
    }

    flushList()
    paragraphLines.push(trimmedLine)
  }

  flushParagraph()
  flushList()

  return blocks
}

export function FormattedText({ text, className = "", variant = "inline" }: FormattedTextProps) {
  if (variant === "markdown") {
    const markdownBlocks = renderMarkdownBlocks(text)
    if (!markdownBlocks) return null
    return <div className={`space-y-2 ${className}`.trim()}>{markdownBlocks}</div>
  }

  return <span className={className}>{renderInlineMarkdown(text)}</span>
}

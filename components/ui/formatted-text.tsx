interface FormattedTextProps {
  text: string
  className?: string
}

export function FormattedText({ text, className = "" }: FormattedTextProps) {
  // Parse **bold** syntax
  const parts = text.split(/(\*\*.*?\*\*)/g)

  return (
    <span className={className}>
      {parts.map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          // Remove ** and make bold
          const boldText = part.slice(2, -2)
          return <strong key={index} className="font-bold">{boldText}</strong>
        }
        return <span key={index}>{part}</span>
      })}
    </span>
  )
}

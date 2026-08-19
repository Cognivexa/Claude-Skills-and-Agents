function Heading({ level, children }) {
  if (level <= 1) return <h2>{children}</h2>
  if (level === 2) return <h3>{children}</h3>
  return <h4>{children}</h4>
}

function renderInline(text) {
  const nodes = []
  let key = 0

  for (const codePart of text.split(/(`[^`]+`)/g)) {
    if (codePart.startsWith('`') && codePart.endsWith('`') && codePart.length >= 2) {
      nodes.push(<code key={key++}>{codePart.slice(1, -1)}</code>)
      continue
    }

    for (const boldPart of codePart.split(/(\*\*[^*]+\*\*)/g)) {
      if (boldPart.startsWith('**') && boldPart.endsWith('**') && boldPart.length >= 4) {
        nodes.push(<strong key={key++}>{boldPart.slice(2, -2)}</strong>)
        continue
      }

      for (const italicPart of boldPart.split(/(\*[^*]+\*)/g)) {
        if (italicPart.startsWith('*') && italicPart.endsWith('*') && italicPart.length >= 2) {
          nodes.push(<em key={key++}>{italicPart.slice(1, -1)}</em>)
        } else if (italicPart) {
          nodes.push(italicPart)
        }
      }
    }
  }

  return nodes
}

const HEADING_RE = /^(#{1,4})\s+(.*)$/
const CHECKLIST_RE = /^[-*]\s+\[[ xX]\]\s+/
const BULLET_RE = /^[-*]\s+/
const ORDERED_RE = /^\d+\.\s+/
const BLOCK_START_RE = /^(#{1,4}\s|[-*]\s|\d+\.\s|```|\|)/

function parseTable(lines) {
  const dataLines = lines.filter((l, idx) => !(idx === 1 && /^[\s|:-]+$/.test(l)))
  const rows = dataLines.map((l) =>
    l
      .trim()
      .replace(/^\|/, '')
      .replace(/\|$/, '')
      .split('|')
      .map((c) => c.trim())
  )
  const [header, ...body] = rows
  return { header, body }
}

/** Renders a small, safe subset of Markdown (headings, paragraphs, lists,
 * checklists, tables, code fences, bold/italic/inline-code) as React nodes.
 * Not a general-purpose parser — built for this site's own skill/agent bodies. */
export default function MarkdownLite({ text }) {
  const lines = text.split('\n')
  const blocks = []
  let i = 0
  let key = 0

  while (i < lines.length) {
    const raw = lines[i]
    const trimmed = raw.trim()

    if (trimmed === '') {
      i++
      continue
    }

    if (trimmed.startsWith('```')) {
      i++
      const codeLines = []
      while (i < lines.length && !lines[i].trim().startsWith('```')) {
        codeLines.push(lines[i])
        i++
      }
      i++
      blocks.push(
        <pre className="code-block" key={key++}>
          {codeLines.join('\n')}
        </pre>
      )
      continue
    }

    if (trimmed.startsWith('|')) {
      const tableLines = []
      while (i < lines.length && lines[i].trim().startsWith('|')) {
        tableLines.push(lines[i])
        i++
      }
      const { header, body } = parseTable(tableLines)
      blocks.push(
        <table className="ref-table" key={key++}>
          <thead>
            <tr>
              {header.map((h, idx) => (
                <th key={idx}>{renderInline(h)}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {body.map((row, ridx) => (
              <tr key={ridx}>
                {row.map((cell, cidx) => (
                  <td key={cidx}>{renderInline(cell)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )
      continue
    }

    const heading = trimmed.match(HEADING_RE)
    if (heading) {
      blocks.push(
        <Heading level={heading[1].length} key={key++}>
          {renderInline(heading[2])}
        </Heading>
      )
      i++
      continue
    }

    if (CHECKLIST_RE.test(trimmed)) {
      const items = []
      while (i < lines.length && CHECKLIST_RE.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(CHECKLIST_RE, ''))
        i++
      }
      blocks.push(
        <ul className="checklist" key={key++}>
          {items.map((item, idx) => (
            <li key={idx}>{renderInline(item)}</li>
          ))}
        </ul>
      )
      continue
    }

    if (BULLET_RE.test(trimmed)) {
      const items = []
      while (i < lines.length && lines[i].trim() !== '' && BULLET_RE.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(BULLET_RE, ''))
        i++
      }
      blocks.push(
        <ul key={key++}>
          {items.map((item, idx) => (
            <li key={idx}>{renderInline(item)}</li>
          ))}
        </ul>
      )
      continue
    }

    if (ORDERED_RE.test(trimmed)) {
      const items = []
      while (i < lines.length && lines[i].trim() !== '' && ORDERED_RE.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(ORDERED_RE, ''))
        i++
      }
      blocks.push(
        <ol key={key++}>
          {items.map((item, idx) => (
            <li key={idx}>{renderInline(item)}</li>
          ))}
        </ol>
      )
      continue
    }

    const paraLines = [raw.trim()]
    i++
    while (i < lines.length && lines[i].trim() !== '' && !BLOCK_START_RE.test(lines[i].trim())) {
      paraLines.push(lines[i].trim())
      i++
    }
    blocks.push(<p key={key++}>{renderInline(paraLines.join(' '))}</p>)
  }

  return <>{blocks}</>
}

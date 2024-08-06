import { remark } from 'remark'
import html from 'remark-html'
import strip from 'strip-markdown'

export async function markdownToHtml(markdown) {
  const result = await remark().use(html).process(markdown)

  return result.toString()
}

export async function markdownToText(markdown) {
  const result = await remark().use(strip).process(markdown)

  return result.toString()
}

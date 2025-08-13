import type * as hast from 'hast'
import type * as mdast from 'mdast'
import type { RehypePlugin, RemarkPlugin } from '@astrojs/markdown-remark'
import { h } from 'hastscript'
import getReadingTime from 'reading-time'
import { toString } from 'mdast-util-to-string'

export const remarkDescription: RemarkPlugin = (options?: { maxChars?: number }) => {
  const maxChars = (options && options.maxChars) || 200
  return function (tree, { data }) {
    function findFirstParagraph(
      node: mdast.Root | mdast.RootContent,
    ): string | undefined {
      if ('children' in node && Array.isArray(node.children)) {
        for (const child of node.children) {
          if (
            child.type === 'paragraph' &&
            child.children.length > 0 &&
            child.children[0].type !== 'image'
          ) {
            const s = toString(child).trim()
            if (s.length > 0) {
              return s
            }
          } else {
            const result = findFirstParagraph(child)
            if (result) {
              return result
            }
          }
        }
      }
      return undefined
    }
    let description = data.astro?.frontmatter?.description || findFirstParagraph(tree)
    if (description && data.astro?.frontmatter) {
      if (description.length > maxChars) {
        const lastSpace = description.slice(0, maxChars).lastIndexOf(' ')
        description = description.slice(0, lastSpace) + '…'
      }
      data.astro.frontmatter.description = description
    }
  }
}

export const remarkReadingTime: RemarkPlugin = (_options?) => {
  return function (tree, { data }) {
    if (data.astro?.frontmatter) {
      const textOnPage = toString(tree)
      const readingTime = getReadingTime(textOnPage)
      // readingTime.text will give us minutes read as a friendly string,
      // i.e. "3 min read"
      data.astro.frontmatter.minutesRead = readingTime.text
    }
  }
}

export const rehypeTitleFigure: RehypePlugin = (_options?) => {
  function buildFigure(el: hast.Element) {
    const title = `${el.properties?.title || ''}`
    if (!title) return el
    const figure = h('figure', [h('img', { ...el.properties }), h('figcaption', title)])
    return figure
  }
  function isElement(content: hast.RootContent): content is hast.Element {
    return content.type === 'element'
  }
  function transformTree(node: hast.Root | hast.Element) {
    if (node.children) {
      node.children = node.children.map((child) => {
        if (isElement(child)) {
          if (child.tagName === 'img') {
            return buildFigure(child)
          } else {
            transformTree(child) // Recursively process child nodes
          }
        }
        return child
      })
    }
  }
  return function (tree: hast.Root) {
    transformTree(tree) // Start the recursive transformation
  }
}

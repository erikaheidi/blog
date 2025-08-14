// @ts-check
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import sitemap from '@astrojs/sitemap'
import mdx from '@astrojs/mdx'
import { rehypeHeadingIds } from '@astrojs/markdown-remark'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import expressiveCode from 'astro-expressive-code'
import siteConfig from './src/site.config'
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers'
import icon from 'astro-icon'
import {
  remarkDescription,
  remarkReadingTime,
  rehypeTitleFigure,
} from './src/settings-utils'
import { remarkGithubCard } from './src/plugins/remark-github-card'
import { fromHtmlIsomorphic } from 'hast-util-from-html-isomorphic'
import rehypeExternalLinks from 'rehype-external-links'
import remarkDirective from 'remark-directive' /* Handle ::: directives as nodes */
import rehypeUnwrapImages from 'rehype-unwrap-images'
import { remarkAdmonitions } from './src/plugins/remark-admonitions' /* Add admonitions */
import remarkMath from 'remark-math' /* for latex math support */
import rehypeKatex from 'rehype-katex' /* again, for latex math support */
import remarkGemoji from './src/plugins/remark-gemoji' /* for shortcode emoji support */
import rehypePixelated from './src/plugins/rehype-pixelated' /* Custom plugin to handle pixelated images */

// https://astro.build/config
export default defineConfig({
  site: siteConfig.site,
  trailingSlash: 'never',
  prefetch: true,
  markdown: {
    remarkPlugins: [
      [remarkDescription, { maxChars: 200 }],
      remarkReadingTime,
      remarkDirective,
      remarkGithubCard,
      remarkAdmonitions,
      remarkMath,
      remarkGemoji,
    ],
    rehypePlugins: [
      rehypeHeadingIds,
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'append',
          properties: {
            className: ['heading-anchor'],
          },
          content: fromHtmlIsomorphic(
            '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-link-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>',
            { fragment: true },
          ).children,
        },
      ],
      rehypeTitleFigure,
      [
        rehypeExternalLinks,
        {
          rel: ['noreferrer', 'noopener'],
          target: '_blank',
        },
      ],
      rehypeUnwrapImages,
      rehypePixelated,
      rehypeKatex,
    ],
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap(),
    expressiveCode({
      themes: siteConfig.themes.include,
      useDarkModeMediaQuery: false,
      defaultProps: {
        showLineNumbers: false,
        wrap: false,
      },
      plugins: [pluginLineNumbers()],
    }), // Must come after expressive-code integration
    mdx(),
    icon(),
  ],
  experimental: {
    contentIntellisense: true,
  },
  redirects: {
    "/minecraft/introduction-for-busy-grownups": "/posts/minecraft-introduction-for-busy-grownups",
    "/productivity/20240311_setting-up-obsidian-for-content-planning-and-project-management": "/posts/setting-up-obsidian-for-content-planning-and-project-management",
    "/onepagers/docker-basics-onepager": "/posts/docker-basics-onepager",
    "/3d-printing/20231101_introduction-to-3d-printing": "/posts/introduction-to-3d-printing",
    "/3d-printing/20231109_freecad-for-beginners": "/posts/freecad-for-beginners",
    "/3d-printing/20231109_from-svg-to-3dprinted-with-freecad": "/posts/from-svg-to-3dprinted-with-freecad",
    "/linux/20230523_installing-ohmyzsh-ubuntu2304": "/posts/installing-ohmyzsh-ubuntu",
    "/tech-writing/20221212_documentation-101": "/posts/documentation-101",
    "/tech-writing/20221216_setting-up-a-documentation-site": "/posts/setting-up-a-documentation-site",
    "/tech-writing/20221220_information-architecture": "/posts/information-architecture",
    "/about/erika": "/about",
    "/blog": "/posts"
  }
})

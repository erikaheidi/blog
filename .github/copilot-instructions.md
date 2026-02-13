# Copilot Instructions for eheidi.dev Blog

## Overview

This is a personal blog built with **Astro 5** and **TypeScript**, featuring a terminal-inspired design. The blog focuses on technology, 3D printing, technical writing, and gaming content. The site is deployed to GitHub Pages via GitHub Actions.

**Key Technologies:**
- Astro 5.16+ (Static Site Generator)
- TypeScript 5.8+
- Tailwind CSS 4 (via Vite plugin)
- MDX/Markdown for content
- Node.js 20+

## Project Structure

```
/
├── .github/
│   ├── workflows/
│   │   └── astro.yml          # GitHub Pages deployment workflow
│   └── copilot-instructions.md # This file
├── public/                     # Static assets
├── src/
│   ├── components/             # Reusable Astro/React components
│   ├── content/
│   │   ├── posts/              # Blog posts (Markdown/MDX)
│   │   ├── about/              # About page content
│   │   ├── home.md             # Homepage content
│   │   └── addendum.md         # Additional content
│   ├── layouts/                # Page layouts
│   ├── pages/                  # Astro pages (routing)
│   ├── plugins/                # Custom remark/rehype plugins
│   │   ├── remark-admonitions.ts
│   │   ├── remark-gemoji.ts
│   │   ├── remark-github-card.ts
│   │   └── rehype-pixelated.ts
│   ├── icons/                  # SVG icons
│   ├── styles/                 # Global styles
│   ├── content.config.ts       # Content collections config
│   ├── site.config.ts          # Site-wide configuration
│   └── utils.ts                # Utility functions
├── astro.config.mjs            # Astro configuration
├── tsconfig.json               # TypeScript configuration
├── package.json                # Dependencies and scripts
└── netlify.toml                # Netlify configuration (legacy)
```

## Build & Development Commands

**Always use these exact commands in this order:**

### Development
```bash
npm install              # Install dependencies (always run first)
npm run dev              # Start dev server at http://localhost:4321
```

### Production Build
```bash
npm run build            # Build for production (outputs to dist/)
npm run postbuild        # Build Pagefind search index (runs automatically after build)
npm run preview          # Preview production build locally
```

### Formatting
```bash
npm run format           # Format all files with Prettier
```

**Important:**
- Always run `npm install` before building or running dev server
- The build process has two steps: `astro build` followed by `pagefind --site dist` (handled automatically via postbuild script)
- Pagefind is required for search functionality; it must run after the Astro build completes

## Content Management

### Blog Posts
- Location: `src/content/posts/`
- Format: Markdown (`.md`) or MDX (`.mdx`)
- Can be in subdirectories (e.g., `posts/my-post/index.md`)
- Frontmatter schema (defined in `src/content.config.ts`):
  ```yaml
  ---
  title: string (required)
  published: date (required)
  draft: boolean (optional, default: false)
  description: string (optional)
  author: string (optional)
  tags: string[] (optional)
  coverImage:
    src: image (optional)
    alt: string
  toc: boolean (optional, default: true)
  ---
  ```

### Custom Markdown Features
The blog uses several custom remark/rehype plugins:
- **Admonitions** (`remark-admonitions`): Block-style callouts using `:::` syntax
- **GitHub Cards** (`remark-github-card`): Embed GitHub repository cards
- **Emoji** (`remark-gemoji`): Support for `:emoji:` shortcodes
- **Pixelated Images** (`rehype-pixelated`): Custom image processing
- **Math** (`remark-math` + `rehype-katex`): LaTeX math support
- **External Links** (`rehype-external-links`): Automatically add `rel` and `target` attributes

## Configuration Files

### Site Configuration (`src/site.config.ts`)
- Site metadata (title, description, author, URL)
- Navigation links
- Theme configuration (light/dark mode with Catppuccin themes)
- Social links
- Giscus comments configuration
- Pagination settings

### Astro Configuration (`astro.config.mjs`)
- Markdown/MDX processing plugins
- Tailwind CSS integration via Vite
- Sitemap generation
- Expressive Code for syntax highlighting
- URL redirects for legacy routes

### TypeScript Configuration (`tsconfig.json`)
- Path aliases:
  - `@components/*` → `src/components/*`
  - `@layouts/*` → `src/layouts/*`
  - `@types` → `src/types`
  - `@content` → `src/content.config`
  - `@utils` → `src/utils`

## Deployment & CI/CD

### GitHub Actions Workflow (`.github/workflows/astro.yml`)
- Triggers on push to `main` branch
- Uses Node.js 20
- Runs `npm ci` (clean install)
- Builds with `npm run build` (includes Astro build + Pagefind)
- Deploys to GitHub Pages
- **Note:** Use `npm ci` in CI environments, not `npm install`

### Deployment URL
- Production: https://eheidi.dev (via GitHub Pages)

## Code Style & Best Practices

### Formatting
- Use Prettier for all code formatting
- Run `npm run format` before committing changes
- Prettier configuration in `prettier.config.js`
- Uses `prettier-plugin-astro` for Astro files

### TypeScript
- Strict mode enabled (`extends: "astro/tsconfigs/strict"`)
- Use path aliases for imports
- Enable `verbatimModuleSyntax` for consistency

### Component Development
- Astro components use `.astro` extension
- React components are supported (JSX configured in tsconfig)
- Use Tailwind CSS for styling
- Keep components in `src/components/`

## Common Tasks

### Adding a New Blog Post
1. Create a new `.md` or `.mdx` file in `src/content/posts/`
2. Add required frontmatter (title, published date)
3. Write content using Markdown/MDX
4. Test locally with `npm run dev`
5. Format with `npm run format`

### Modifying Site Configuration
- Edit `src/site.config.ts` for site-wide settings
- Changes require server restart in dev mode

### Adding/Modifying URL Redirects
- Edit the `redirects` object in `astro.config.mjs`
- Format: `"/old-path": "/new-path"`

### Working with Plugins
- Custom plugins are in `src/plugins/`
- Plugins are registered in `astro.config.mjs`
- Follow the remark/rehype plugin API

## Validation Steps

Before finalizing changes:
1. Run `npm install` to ensure dependencies are current
2. Run `npm run build` to verify production build succeeds
3. Check that Pagefind index builds without errors (included in build)
4. Run `npm run format` to ensure code style is consistent
5. Test locally with `npm run preview` to verify production build
6. Verify no TypeScript errors: `npx tsc --noEmit`

## Troubleshooting

### Build Failures
- Ensure Node.js version is 20 or higher
- Run `npm install` to update dependencies
- Check that all frontmatter in posts matches the schema
- Verify no TypeScript errors

### Pagefind Issues
- Pagefind runs after the Astro build via `postbuild` script
- It requires the `dist/` directory to exist
- If search fails, ensure `npm run build` completed successfully

### Dev Server Issues
- Clear the `.astro` cache directory if experiencing issues
- Restart the dev server after modifying config files

## Important Notes

- **Do not** modify files in the `dev/` directory (used only for theme development reference)
- **Do not** commit the `dist/` directory (build artifacts)
- **Do not** commit `node_modules/` (dependencies)
- The `.astro/` cache directory is gitignored
- Always test builds before pushing to main branch (deployment is automatic)

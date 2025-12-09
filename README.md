# mongodb

Building a Project with Mongodb

# Commands

```
-- Crrate App

user@mac mongodb % npx create-next-app@15 .

✔ Would you like to use TypeScript? … No
✔ Which linter would you like to use? › ESLint
✔ Would you like to use Tailwind CSS? … No
✔ Would you like your code inside a `src/` directory? … Yes
✔ Would you like to use App Router? (recommended) … Yes
✔ Would you like to use Turbopack? (recommended) … No
? Would you like to customize the import alias (`@/*` by default)? › No

-- Setup prettier and lint

npm i -D prettier eslint-config-prettier eslint-plugin-prettier

-- Copy files from nextjs-15-app-router

.env.local
.eslintrc.json
.prettierignore
.prettierrc
next.config.mjs

-- Setup package.json

"scripts": {
"dev": "next dev",
"build": "next build && next export",
"start": "next start",
"lint": "next lint",
"format": "prettier --write .",
"deploy": "gh-pages -d out"
},

"repository": {
"type": "git",
"url": "git+https://github.com/devrazec/mongodb.git"
},

"homepage": "https://github.com/devrazec/mongodb",

-- Deploy

npm i -D gh-pages

npm run predeploy
npm run deploy

-- Create Files

gh-pages/.nojekyll
gh-pages/_next/.nojekyll

```

# Demo

https://devrazec.github.io/mongodb

# Project

https://github.com/devrazec/mongodb

# Files

https://github.com/devrazec/mongodb/tree/gh-pages

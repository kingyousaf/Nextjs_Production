# Features

- ⚛️ React 17
- ✨ TypeScript
- 💨 Tailwind CSS
- - 🏝 MUI - Component library
- 🗝 Next Authentication
- 💿 Planet Scale set up guide 
- 🃏 Jest — Configured for unit testing
- 📈 Absolute Import and Path Alias — Import components using @/ prefix
- 📏 ESLint — Find and fix problems in your code, also will auto sort your imports
- 💖 Prettier — Format your code consistently
- 🐶 Husky & Lint Staged — Run scripts on your staged files before they are committed
- 🤖 Conventional Commit Lint — Make sure you & your teammates follow conventional commit
- ⏰ Standard Version Changelog — Generate your changelog using yarn release
- 👷 Github Actions — Lint your code on PR
- 🚘 Automatic Branch and Issue Autolink — Branch will be automatically created on issue assign, and auto linked on PR
- 🔥 Snippets — A collection of useful snippets
- 👀 Default Open Graph — Awesome open graph generated using og.thcl.dev, fork it and deploy!
- 🗺 Site Map — Automatically generate sitemap.xml
- 📦 Expansion Pack — Easily install common libraries, additional components, and configs



# Setting up Prisma with Planet Scale 

Starter docs [example](https://github.com/planetscale/nextjs-starter)

- First hve the PlanetScale cli [installed](https://planetscale.com/cli) 
- Then sign in to your account from the terminal ```bash pscale auth login```

## Creating a database
- This can be done from either the `terminal` or `dashboard` over at planetScale

### Terminal 
- Run ```bash pscale database create nameOfDatabase```

#### Password create
- run ```bash pscale password create nameOfDatabase main nameOfPassword```
- Then you will get the info that you need to put in the `DATABASE_URL` IN THE `.env` file 
- Use the info given and replace it into this removing the `<>` after putting each one in

`.env` url string

```bash
DATABASE_URL=mysql://<USERNAME>:<PLAIN_TEXT_PASSWORD>@<ACCESS_HOST_URL>/<DATABASE_NAME>?sslaccept=strict
```

# Connecting to the database
- To connect to it you need the password 
- This can be done through the terminal or on the dashboard

# Pushing the prisma model to planetScale 

- After following the steps above and making your prisma models run 
- ```bash npx prisma db push```

# Deploying to production 

- Go to planet scale project
- Then promote the main branch to production
- Then press the deploy with vercel button or do it manually and add the .env variable

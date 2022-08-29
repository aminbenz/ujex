<div id="top"></div>
<!-- PROJECT LOGO -->

<div align="center">
    <img src="public/poroject/brand/logo.png"  alt="Logo"  width="100" >
  <!-- <h3 align="center">Ujex</h3> -->
  <p align="center">
Ujex is an open-source React UI library is a collection of materials, & components that are easy to use support multi-themes & that you can readily use or modify to meet your needs
    <br />
    <!-- <a href="https://ujex.io/">View Demo</a> -->
  </p>
</div>

<br>

## Table of Contents

- [Table of Contents](#table-of-contents)
  - [Built With](#built-with)
- [Introduction](#introduction)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Setup](#project-setup)
- [Engine Locking](#engine-locking)
- [Git Setup](#git-setup)
- [Code Formatting and Quality Tools](#code-formatting-and-quality-tools)
  - [ESLint](#eslint)
  - [Prettier](#prettier)
- [Git Hooks](#git-hooks)
- [VSCode Configuration](#vscode-configuration)
- [Directory Structure](#directory-structure)
- [Adding Storybook](#adding-storybook)
- [Creating a Component](#creating-a-component)

<img src="./public/poroject/thumbnail.jpg">

_"Ujex is an open-source React UI library is a collection of materials, & components that are easy to use support multi-themes & that you can readily use or modify to meet your needs."_

Ujex Build with Nextjs As described in their words above, Nextjs is very much an all-in-one fullstack modern application building solution. It includes first class support for Typescript and React, while offering easy solutions for some of the most common requirements in a modern application like routing, API, postCSS tools, and code-splitting.

It also supports both static site generation (for lightning fast static HTML pages that can be hosted anywhere) or with managed hosting services like Vercel/AWS/etc that run a Node server and support full on-demand data loading and server-side rendered pages.

### Built With

- [React.js](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [Typescript]()
- [SASS]()
- [Storybook]()

## Introduction

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- yarn

  ```sh
  npm install --global yarn
  ```

### Installation

1. Clone the repo

   ```sh
   git clone https://github.com/aminbenz/ujex.git
   ```

2. Install packages

   ```sh
   yarn install
   ```

3. start app

   ```sh
   yarn docs
   ```

Please review the table of contents to get an idea of each of the topics we will be touching in this Tuto.

<!-- I will freely acknowledge many of them are strict and opinionated configurations, if any of tem don't appeal to you then in most cases you can simply skip over those sections and should still be able to complete the tutorial without too much trouble.

Now, with all that said, if you are ready, let's dive right in! -->

## Project Setup

We'll begin by creating a default Ujex application with a Typescript template.

```bash
npx create-next-app --ts ujex-app

cd ujex-app
```

First we will test to make sure the app is working. We're going to be using `yarn` for this example, but you could just as easily use NPM if you choose.

```
yarn install

yarn dev
```

You should see the demo app available on [http://localhost:3000](http://localhost:3000)

![First Page Load](https://res.cloudinary.com/dqse2txyi/image/upload/v1649125549/blogs/nextjs-fullstack-app-template/first-load_sm29jf.png)

Also recommended to run

```
yarn build
```

To ensure you can successfully do a production build of the project. It's recommended (but not required) to close your dev server when running a Ujex build. Most of the time there is no issue but occasionally the build can put your dev server in a weird state that requires a restart.

You should get a nice little report on the command line of all the pages built with green coloured text implying they are small and efficient. We'll try to keep them that way as we develop the project.

## Engine Locking

We would like for all developers working on this project to use the same Node engine and package manager we are using. To do that we create two new files:

- `.nvmrc` - Will tell other uses of the project which version of Node is used
- `.npmrc` - Will tell other users of the project which package manager is used

We are using `Node v18 Hydrogen` and `yarn` for this project so we set those values like so:

`.nvmrc`

```.nvmrc
lts/Hydrogen
```

`.npmrc`

```
engine-strict=true
```

You can check your version of Node with `node --version` and make sure you are setting the correct one. A list of Node version codenames can be found [here](https://github.com/nodejs/Release/blob/main/CODENAMES.md)

Note that the use of `engine-strict` didn't specifically say anything about `yarn`, we do that in `package.json`:

`package.json`

```json
  "name": "ujex",
  "author": "Amin Benz",
  "description": "Ujex is an open-source React UI library a collection of materials & components that support multi-themes easy to use and that you can readily use or modify to meet your needs.",
  "version": "0.1.0",
  "private": false,
  "license" : "MIT"
  "homepage": "https://github.com/aminbenz/ujex"
  "engines": {
    "node": ">=16.0.0",
    "yarn": ">=1.22.0",
    "npm": "please-use-yarn"
  },
  ...
```

The `engines` field is where you specify the specific versions of the tools you are using.

## Git Setup

This would be a good time to make our first commit to our remote repo, to make sure our changes are backed up, and to follow best practices for keeping related changes grouped within a single commit before moving to something new.

By default your Ujex project will already have a repo initialized. You can check what branch you are on with `git status`. It should say something like:

```
On branch main
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   README.md

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        .npmrc
        .nvmrc
```

This tells us we are on the `main` branch and we have not staged or made any commits yet.

Let's commit our changes so far.

```
git add .

git commit -m 'project initialization'
```

The first command will add and stage all files in your project directory that aren't ignored in `.gitignore`. The second will make a commit of the state of your current project with the message we wrote after the `-m` flag.

```
Settings -> Repositories -> Repository default branch
```

Now you are ready to add the remote origin of your repository and push. Github will give you the exact instructions when you create it. Your syntax may be a little different than mine depending on if you are using HTTPS rather than SSH.

```
git remote add origin git@github.com:aminbenz/ujex.git

git push -u origin https://github.com/aminbenz/ujex
```

Note that from this point on we will be using the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#summary) standard and specifically the Angular convention [described here](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#type)

The reason being like many other features in this project to simply set a **consistent** standard for all developers to use to minimize train-up time when contributing to the project. I personally have very little concern as to what standard is chosen, as long as everyone agrees to follow it that is the most important thing.

Consistency is everything!

## Code Formatting and Quality Tools

In order to set a standard that will be used by all contributors to the project to keep the code style consistent and basic best practices followed we will be implementing two tools:

- [eslint](https://eslint.org/) - For best practices on coding standards
- [prettier](https://prettier.io/) - For automatic formatting of code files

### ESLint

We'll begin with ESLint, which is easy because it automatically comes installed and pre-configured with Ujex projects.

We are just going to add a little bit of extra configuration and make it a bit stricter than it is by default. If you disagree with any of the rules it sets, no need to worry, it's very easy to disable any of them manually. We configure everything in `.eslintrc.json` which should already exist in your root directory:

`.eslintrc.json`

```json
{
  "extends": ["next", "next/core-web-vitals", "eslint:recommended"],
  "globals": {
    "React": "readonly"
  },
  "rules": {
    "no-unused-vars": [1, { "args": "after-used", "argsIgnorePattern": "^_" }]
  }
}
```

In the above small code example we have added a few additional defaults, we have said that `React` will always be defined even if we don't specifically import it, and I have added a personal custom rule that I like which allows you to prefix variables with an underscore \_ if you have declared them but not used them in the code.

I find that scenario comes up often when you are working on a feature and want to prepare variables for use later, but have not yet reached the point of implementing them.

You can test out your config by running:

```
yarn lint
```

You should get a message like:

```
✔ No ESLint warnings or errors
Done in 1.47s.
```

If you get any errors then ESLint is quite good at explaining clearly what they are. If you encounter a rule you don't like you can disable it in "rules" by simply setting it to 1 (warning) or 0 (ignore) like so:

```json
  "rules": {
    "no-unused-vars": 0, // As example: Will never bug you about unused variables again
  }
```

Let's make a commit at this point with the message `build: configure eslint`

### Prettier

Prettier will take care of automatically formatting our files for us. Let's add it to the project now.

It's only needed during development, so I'll add it as a `devDependency` with `-D`

```
yarn add -D prettier
```

I also recommend you get the [Prettier VS Code extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) so that VS Code can handle the formatting of the files for you and you don't need to rely on the command line tool. Having it installed and configured in your project means that VSCode will use your project's settings, so it's still necessary to add it here.

We'll create two files in the root:

`.prettierrc`

```.prettierrc
{
  "trailingComma": "es5",
  "tabWidth": 2,
  "semi": true,
  "singleQuote": true
}
```

<!-- Those values are entirely at your discretion as to what is best for your team and project. -->

`.prettierignore`

```
.yarn
.next
dist
node_modules
```

In that file I've placed a list of directories that I don't want Prettier to waste any resources working on. You can also use patterns like \*.html to ignore groups of types of files if you choose.

Now we add a new script to `package.json` so we can run Prettier:

`package.json`

```
  ...
  "scripts: {
    ...
    "prettier": "prettier --write ."
  }
```

You can now run

```
yarn prettier
```

to automatically format, fix and save all files in your project you haven't ignored. By default my formatter updated about 5 files. You can see them in your list of changed files in the source control tab on the left of VS Code.

Let's make another commit with `build: implement prettier`.

## Git Hooks

One more section on configuration before we start getting into component development. Remember you're going to want this project to be as rock solid as possible if you're going to be building on it in the long term, particularly with a team of other developers. It's worth the time to get it right at the start.

We are going to implement a tool called [Husky](https://typicode.github.io/husky/#/)

Husky is a tool for running scripts at different stages of the git process, for example add, commit, push, etc. We would like to be able to set certain conditions, and only allow things like commit and push to succeed if our code meets those conditions, presuming that it indicates our project is of acceptable quality.

To install Husky run

```
yarn add -D husky

npx husky install
```

The second command will create a `.husky` directory in your project. This is where your hooks will live.

 <!-- Make sure this directory is included in your code repo as it's intended for other developers as well, not just yourself. -->

Add the following script to your `package.json` file:

`package.json`

```
  ...
  "scripts: {
    ...
    "prepare": "husky install"
  }
```

This will ensure Husky gets installed automatically when other developers run the project.

To create a hook run

```
npx husky add .husky/pre-commit "yarn lint"
```

The above says that in order for our commit to succeed, the `yarn lint` script must first run and succeed. "Succeed" in this context means no errors. It will allow you to have warnings (remember in the ESLint config a setting of 1 is a warning and 2 is an error in case you want to adjust settings).

Let's create a new commit with the message `ci: implement husky`. If all has been setup properly your lint script should run before the commit is allowed to occur.

We're going to add another one:

```
npx husky add .husky/pre-push "yarn build"
```

The above ensures that we are not allowed to push to the remote repository unless our code can successfully build. That seems like a pretty reasonable condition doesn't it? Feel free to test it by committing this change and trying to push.

---

Lastly we are going to add one more tool. We have been following a standard convention for all our commit messages so far, let's ensure that everyone on the team is following them as well (including ourselves!). We can add a linter for our commit messages:

```
yarn add -D @commitlint/config-conventional @commitlint/cli
```

To configure it we will be using a set of standard defaults, but I like to include that list explicitly in a `commitlint.config.js` file since I sometimes forget what prefixes are available:

`commitlint.config.js`

```js
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-leading-blank': [1, 'always'],
    'body-max-line-length': [2, 'always', 100],
    'footer-leading-blank': [1, 'always'],
    'footer-max-line-length': [2, 'always', 100],
    'header-max-length': [2, 'always', 100],
    'scope-case': [2, 'always', 'lower-case'],
    'subject-case': [
      2,
      'never',
      ['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
    ],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        'build',
        'chore',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'style',
        'test',
        'translation',
        'security',
        'changeset',
      ],
    ],
  },
};
```

Then enable commitlint with Husky by using:

```
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'
# Sometimes above command doesn't work in some command interpreters
# You can try other commands below to write npx --no -- commitlint --edit $1
# in the commit-msg file.
npx husky add .husky/commit-msg \"npx --no -- commitlint --edit '$1'\"
# or
npx husky add .husky/commit-msg "npx --no -- commitlint --edit $1"
```

Feel free to try some commits that _don't_ follow the rules and see how they are not accepted, and you receive feedback that is designed to help you correct them.

I'm going to create a new commit now with the message `ci: implement commitlint`.

You can see the result of the complete culmination of this setup in the screenshot below, hopefully yours looks similar:

![Dev Experience](https://res.cloudinary.com/dsnmvf1en/image/upload/v1660232949/commitcode_uq5ifx.jpg)

## VSCode Configuration

Now that we have implemented ESLint and Prettier we can take advantage of some convenient VS Code functionality to have them be run automatically.

Create a directory in the root of your project called `.vscode` and inside a file called `settings.json`. This will be a list of values that override the default settings of your installed VS Code.

The reason we want to place them in a folder for the project is that we can set specific settings that only apply to this project, and we can share them with the rest of our team by including them in the code repository.

Within `settings.json` we will add the following values:

`.vscode/settings.json`

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll": true,
    "source.organizeImports": true
  }
}
```

The above will tell VS Code to use your Prettier extension as the default formatter (you can override manually if you wish with another one) and to automatically format your files and organize your import statements every time you save.

Very handy stuff and just another thing you no longer need to think about so you can focus on the important things like solving business problems.

I'll now make a commit with message `build: implement vscode project settings`.

<!-- TODO: -->
<!-- ## Debugging -->

<!-- Let's set up a convenient environment for debugging our application in case we run into any issues during development.

Inside of your `.vscode` directory create a `launch.json` file:

`launch.json`

```json
{
  "version": "0.1.0",
  "configurations": [
    {
      "name": "Ujex: debug server-side",
      "type": "node-terminal",
      "request": "launch",
      "command": "npm run dev"
    },
    {
      "name": "Ujex: debug client-side",
      "type": "pwa-chrome",
      "request": "launch",
      "url": "http://localhost:3000"
    },
    {
      "name": "Ujex: debug full stack",
      "type": "node-terminal",
      "request": "launch",
      "command": "npm run dev",
      "console": "integratedTerminal",
      "serverReadyAction": {
        "pattern": "started server on .+, url: (https?://.+)",
        "uriFormat": "%s",
        "action": "debugWithChrome"
      }
    }
  ]
}
```

With that script in place you have three choices for debugging. CLick the little "bug & play icon" on the left of VS Code or press `Ctrl + Shift + D` to access the debugging menu. You can select which script you want to run and start/stop it with the start/stop buttons.

![VS Code Debugger](https://res.cloudinary.com/dqse2txyi/image/upload/v1649168143/blogs/nextjs-fullstack-app-template/vscode-debugger_x1puqk.png)

In addition to this, or if you are not using VS Code, we can also set up some helpful debugging scripts in your project.

First we will install the [cross-env](https://www.npmjs.com/package/cross-env) which will; be necessary to set environment variables if you have teammates working on different environments (Windows, Linux, Mac, etc).

```
yarn add -D cross-env
```

With that package installed we can update our `package.json` `dev` script to look like the following:

`package.json`

```json
{
  ...
  "scripts": {
    ...
    "dev": "cross-env NODE_OPTIONS='--inspect' next dev",
  },
}
```

This will allow you to log server data in the browser while working in dev mode, making it easier to debug issues.

At this stage I'll be making a new commit with message `build: add debugging configuration` -->

## Directory Structure

This section is now going to cover setting up the folder structure in our project. This is one of those topics that many people will have _extremely strong opinions about_, and for good reason! Directory structure can really make or break a project in the long term when it gets out of control, especially when fellow team members have to spend unnecessary time trying to guess where to put things (or find things).

I personally like to take a fairly simplistic approach, keep things separated basically in a class model/view style. We will be using three primary folders:

```
src/components
src/lib
src/pages
src/stories (docs)
```

- `component` - The individual UI components that make up the app will live in here
- `lib` - Business/app/domain logic will live in here.
- `pages` - Will be the actual routes/pages as per the required Ujex structure.
- `stories` - Will be the actual Ujex Documentation

We will have other folders in addition to this to support the project, but the core of almost everything that makes up the unique app that we are building will be housed in these three directories.

Within `components` we will have subdirectories that kind of group similar types of components together. You can use any method you prefer to do this. I have used the MUI library quite a bit in my time, so I tend to follow the same organization they use for components in [their documentation](https://mui.com/getting-started/installation/)

For example inputs, surfaces, navigation, utils, layout etc.

You don't need to create these directories in advance and leave them empty. I would just create them as you go while building your components.

<!-- This section is simply designed to explain how I will be setting up this project, there are many other ways you might choose to organize yours and I would encourage you to choose whatever works best for you and your team. -->

At this point I will be making a commit with message `rfc: create directory structure`

## Adding Storybook

One of the great modern tools available to us if you aren't already familiar with it is called [Storybook](https://storybook.js.org/).

Storybook gives us an environment to show off and test the React components we are building outside of the application we are using them in. It's great tool to connect developers with designers and be able to verify components we have developed look and function as per design requirements in an isolated environment without the overhead of the rest of the app.

Note that Storybook is meant as a visual testing tool, we will be implementing other tools later for functional unit testing and end-to-end testing.

The best way to learn how to use Storybook is installing it and trying it out!

```
npx sb init --builder webpack5
```

We'll be using the webpack5 version to stay up to date with the latest version of webpack

When Storybook installs it automatically detects a lot of things about your project, like how it is a React app, and other tools you are using. It should take care fo all that configuration itself.

If you get a prompt about the eslintPlugin, you can say "yes". We are going to configure it manually though, so no worries if you get a message saying it didn't auto-configure.

Open up `.eslintrc.json` and update it to the following:

`.eslintrc.json`

```json
{
  "extends": [
    "plugin:storybook/recommended", // New
    "next",
    "next/core-web-vitals",
    "eslint:recommended"
  ],
  "globals": {
    "React": "readonly"
  },
  // New
  "overrides": [
    {
      "files": ["*.stories.@(ts|tsx|js|jsx|mjs|cjs)"],
      "rules": {
        // example of overriding a rule
        "storybook/hierarchy-separator": "error"
      }
    }
  ],
  "rules": {
    "no-unused-vars": [1, { "args": "after-used", "argsIgnorePattern": "^_" }]
  }
}
```

I have added `// New` to mark the two new sections and lines that are Storybook specific.

You'll notice that Storybook has also added as `/ujex` directory to the root of your project with a number of examples in. If you are new to Storybook I highly recommend you look through them and leave them there until you are comfortable creating your own without the templates.

Before we run it we need to make sure we are using webpack5. Add the following to your `package.json` file:

`package.json`

```json
{
  ...
  "resolutions": {
    "webpack": "^5"
  }
}
```

Then run

```
yarn install
```

To ensure webpack5 is installed.

Next we have to update the `.storybook/main.js` file:

`storybook/main.js`

```js
module.exports = {
  stories: ['../ujex/**/*.ujex.mdx', '../ujex/**/*.ujex.@(js|jsx|ts|tsx)'],
  /** Expose public folder to storybook as static */
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
};
```

Here we have changed the pattern for stories files so that it will pick up any `.ujex` files inside our components (or other) directories.

We have also exposed Ujex's "public" folder as a static directory so we can test things like images, media, etc in Storybook.

Lastly, before we run Storybook itself, let's add some helpful values in `storybook/preview.js`. This is the file where we can control the defaults for how our stories render.

`.storybook/preview.js`

```js
import { rest, setupWorker } from 'msw';
import '../styles/globals.css';
import * as NextImage from 'next/image';
import YourTheme from './YourTheme';

const BREAKPOINTS_INT = {
  xs: 375,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
};

const customViewports = Object.fromEntries(
  Object.entries(BREAKPOINTS_INT).map(([key, val], idx) => {
    console.log(val);
    return [
      key,
      {
        name: key,
        styles: {
          width: `${val}px`,
          height: `${(idx + 5) * 10}vh`,
        },
      },
    ];
  })
);

// Allow Storybook to handle Next's <Image> component
const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  docs: {
    theme: YourTheme,
  },
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'dark',
        value: '#1a1a1d',
      },
      {
        name: 'light',
        value: 'white',
      },
    ],
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: { viewports: customViewports },
};

if (typeof global.process === 'undefined') {
  const worker = setupWorker(
    rest.get('http://localhost:3000/api/hello', (req, res, ctx) => {
      return res(ctx.json({ name: 'John Doh' }));
    })
  );
  worker.start();
}
```

`.storybook/YourTheme.js`

```js
import { create } from '@storybook/theming';

const THEME = {
  primary: '#39f0c6',
  secondary: '#5b8eff',
  text: '#e1e1eb',
  bg: '#1a1a1d',
  bg200: '#242428',
  bg400: '#272a2e',
  bg600: '#25282c',
  border: '#80808023',
  radius: '10px',
  'radius-sm': '10px',
};

export default create({
  base: THEME.bg200,

  //  Colors
  colorPrimary: THEME.primary,
  colorSecondary: THEME.secondary,

  // (bg & left sidebar)
  appBg: THEME.bg200,
  // rigth sidebar
  appContentBg: THEME.bg200,
  appBorderColor: THEME.border,
  appBorderRadius: THEME.radius,

  // Text colors
  textColor: THEME.text,
  textInverseColor: '#b9b8bd',

  // Toolbar default and active colors
  barTextColor: THEME.text,
  barSelectedColor: THEME.primary,
  barBg: THEME.bg400,

  // Form colors
  inputBg: THEME.bg,
  inputBorder: THEME.border,
  inputTextColor: THEME.text,
  inputBorderRadius: THEME['radius-sm'],

  // Typography
  fontBase:
    'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,  sans-serif',
  fontCode: 'monospace',

  // Brand
  brandTitle: 'Ujex',
  brandUrl: 'https://ujex.io',
  brandImage: '/brand/logo.svg',
  brandTarget: '_self',
});
```

There are a few personal preferences in the above, but you can configure it how you want. Be sure to set the default breakpoints to match whatever is important to you in your app. We are also adding a handler so that Storybook can handle Next's `<Image>` component without crashing.

Now we are ready to test it. Run:

```
yarn ujex
```

If all goes well you'll see a message in your console that looks like:

<!-- change Secreenshot -->

![Storybook Started](https://res.cloudinary.com/dsnmvf1en/image/upload/v1660233552/ujex_tllcnl.png)

And you'll be able to access it on [http://localhost:73](http://localhost:73)

![Storybook Main](https://res.cloudinary.com/dqse2txyi/image/upload/v1649131644/blogs/nextjs-fullstack-app-template/storybook-main_yktgqh.png)

I would encourage you to play around and get familiar with the examples if you've never used it before.

At this stage I'll be making a commit with message `build: implement storybook`.

## Creating a Component

It's time to bring together all the configuration we have done and look at how we might create and implement our first component using the standards we have set for ourselves.

We'll just create a simple card. Create the following directory structure:

`ujex/components/cards/Card`

And inside that directory we'll create `BaseTemplate.tsx`. This will follow a standard pattern of filename matching the directories leading up to it. This allows us for example to have other types of cards in the `cards` directory like `PhotoCard` or `TextCard` etc.

`index.tsx`

```tsx
import Image from 'next/image';
import { ellipsis } from '../../../../helpers';

type ListProps = {
  id?: string | number;
  title: string;
  description?: string;
  image?: string;
  text?: string;
  bg?: string;
  fontSize: number | string;
  style?: React.CSSProperties;
};

export const Card: React.FC<ListProps> = ({
  id,
  title,
  description,
  image,
  bg,
  text,
  style,
  fontSize,
}) => {
  const styles = {
    style: {
      backgroundColor: bg,
      color: text,
      fontSize,
      ...style,
    },
  };

  return (
    <div key={id} {...styles} className={`card`}>
      {image && (
        <div className="image-container">
          <Image layout="fill" src={image} alt={title} />
        </div>
      )}
      <div className="card-info">
        <h4 className="title">{title}</h4>
        <span className="description">
          {description && ellipsis(description, 50)}
        </span>
      </div>
    </div>
  );
};
```

Every single one of our components is going to follow this exact structure. Even if it does not use props it will still export an empty props interface for the component. The reason for this is it will allow us to replicate this exact structure across many components and files, and interchange components/imports using the same expected pattern and just find/replace the names of the components.

When you begin working with the stories and mock props etc it will become quickly apparent how convenient and powerful it is to maintain a consistent naming scheme and interface for all your component files.

This goes back to the **consistency is everything** point we made earlier.

Next I am going to make a style module file that lives next to the component. By default Ujex gives you a `/styles` directory which I personally do not use, but if you prefer to keep all your styles in the same place that's a fine choice. I just prefer to keep them with the components.

`sass/components/_card.scss`

```scss
.card {
  display: grid;
  align-content: start;
  background-color: let(bg-200);
  border-radius: let(radius);
  padding: 10px 10px 20px 10px;
  min-height: 230px;
  max-width: 190px;
  &:hover {
    background-color: let(bg-400);
  }

  .image-container {
    position: relative;
    margin: auto;
    width: 100%;
    height: 120px;
    overflow: hidden;
    border-radius: 15px;
    margin-bottom: 10px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .card-info {
    position: relative;

    .title {
      font-weight: 600;
      font-size: 16px;
      letter-spacing: 0.5px;
      margin: 5px 0;
      cursor: pointer;
      display: inline-block;
      &:hover {
        text-decoration: underline;
      }
    }

    .description {
      font-size: 14px;
      color: let(gray);
      display: -webkit-box;
      overflow: hidden;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      text-overflow: ellipsis;
    }
}
```

(use css modules if you like) As a standard empty template for where your top level styles will go on your component. You can update your `Card/index` as follows:

`Card/index.tsx`

```tsx
import styles from './Card.module.css';

export interface CardProps {}

export const Card: React.FC<CardProps> = () => {
  return <div className={styles.container}>Hello world!</div>;
};
```

Now we have a clean template for our styling.

Let's add an example prop to our template so we can handle the standard we'll be using for components props:

I'm not going to get into all the details of what each different part of a `stories` file entails, for that your best resource is the official Storybook documentation.

The goal here is to create a consistent easily copy/paste-able pattern of component building and testing.

Let's try this one out. Run:

```
yarn docs
```

If all goes well you will be greeted by your fine looking base component (if not I encourage you to revisit the previous section and check if you missed any of the configurations).

![Storybook Base Template](https://res.cloudinary.com/dsnmvf1en/image/upload/v1660233893/ujexx_koasoi.png)

Now that we're starting to create more files it's good to get into the habit of running `yarn lint` before doing your commits to make sure everything is clean and ready to go. I'm going to make a commit with message `build: create Card component`.

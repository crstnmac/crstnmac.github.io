---
key: 4
name: react-tailwind-storybook
title: React + Tailwindcss + Storybook
year: 08 May 2021
id: react-tailwind-storybook
# description: |
#   React + Tailwindcss + Storybook
---

## React + Tailwindcss + Storybook

After reading [this](https://tailwindcss.com/docs/utility-first) from Tailwind, I was intrested in the combination of React + Tailwind CSS, so I will create a sample project. And we will use Storybook so the we can see the component we create.

### Refferenced sites/books

1.  Utility tea first and Tailwind CSS of recommended
    https://qiita.com/Takazudo/items/5180f5eb6d798a52074f

2.  Tailwind CSS
    https://tailwindcss.com/

3.  tailwindlabs / tailwindcss-forms
    https://github.com/tailwindlabs/tailwindcss-forms

4.  postcss / postcss --PostCSS 8 for end users
    https://github.com/postcss/postcss/wiki/PostCSS-8-for-end-users

5.  The PostCSS 8 support status of the tool is displayed.
    Install Tailwind CSS with Create React App
    https://tailwindcss.com/docs/guides/create-react-app

6.  gsoft-inc / craco
    https://github.com/gsoft-inc/craco

7.  Installation
    https://tailwindcss.com/docs/installation

8.  Configuration
    https://tailwindcss.com/docs/configuration

    `npx tailwindcss init -p`

    A description of the command flag was given here.

9.  Storybook
    https://storybook.js.org/

10. Install Storybook
    https://storybook.js.org/docs/react/get-started/install

11. Introduction to Storybook for React
    https://storybook.js.org/docs/react/get-started/introduction

12. Integrating React, Tailwind and Storybook
    https://johnclarke73.medium.com/integrating-react-tailwind-and-storybook-3ae124aff0d9

---

## Procedure

### Create react-tailwindcss-sample-app with create react app

---

Execute the follwing command from the command prompt to create a project.

```sh
 cd /directory
 npx create-react-app react-tailwind-sample
 cd react-tailwind-sample
 yarn start
```

### Install tailwind CSS

---

Execute the following command reffering to the page [Install tailwind CRA app](https://tailwindcss.com/docs/guides/create-react-app). And also install [@tailwindcss/forms](https://github.com/tailwindlabs/tailwindcss-forms).
Tailwind CSS supports PostCSS8 but CRA doesnt seem to so we will use PostCSS7.

- `yarn add -D tailwindcss@npm:@tailwindcss/postcss7-compat @tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9`

- `yarn add @tailwindcss/forms`

### Install and configure CRACO

---

Configure and install CRACO by executing the command refferening to the tailwind css page.You need to change the Post CSS settings.
`yarn add @craco/craco`

After installing craco change scripts in `package.json`

Change `react-scripts` --> `craco` in scripts.

```json
"scripts":{
    "start":"craco start",
    "build":"craco build",
    "test":"craco test",
    "eject":"craco eject"
}
```

In the root project directory create `craco.config.js` and write the following contents.

```js
module.exports = {
  style: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
};
```

### Config tailwind & postcss

Execute `npx tailwindcss init -p` in the root of the proj.It will create a `tailwind.config.js` and `postcss.config.js` files

Modify `tailwind.config.js` as follows:-

```js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
```

and `postcss.config.js` as remains the same:-

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

### Change `src/index.css`

---

clear all the contents of `src/index.css` and add the foll0wing:-

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
@tailwind forms;
```

### Change `src/App.js`

---

Make sure tailwind css is available

change the `src/App.js` as follows:

```js
import "./App.css";
import "./index.css";
function App() {
  return (
    <div className="pt-4 pl-4 text-red-600 text-4xl font-extrabold">
      React + tailwindcss
    </div>
  );
}

export default App;
```

`yarn start`

You should get the text displyed in red color
So now your Frontend is working with Tailwind css. Next we will setup Storybook.

### Install storybook

---

Run `npx sb init`

and then start the storybook

```sh
yarn storybook
```

You should get a dashboard of storybook displayed in your browser.

Now when you run our react application ie:- `yarn start` in another terminal you get an error related to multiple babel verisons.
To resolve that we have to downgrade our babel.
Execute the below command in terminal.

```sh
yarn add -D babel-loader@8.1.0
```

after the version is down `yarn start`

and we will get the react logo screen.

### Modify `.storybook/preview.js` & `.storybook/main.js`

---

modify `.storybook/preview.js` as follows:

```js
import "../src/index.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
```

and modify `.storybook/main.js` as follows:

```js
const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\,css&/,
      use: [
        {
          loader: "postcss-loader",
          options: {
            ident: "postcss",
            plugins: [require("tailwindcss"), require("autoprefixer")],
          },
        },
      ],
      include: path.resolve(__dirname, "../"),
    });
    return config;
  },
};
```

Delete `/stories` from `/src`.

### Create a sample component and display in storybook

create `src/components` directory

create `sample` directory inside components
and create a file `ListItem.js`

and add the following:-

```js
import React from "react";

const ListItem = ({ image, title, author }) => (
  <article className="p-2 flex space-x-4">
    <img className="flex-none w-16 h-16 rounded-lg" src={image} alt="" />
    <div>
      <div>
        <dt className="sr-only">Title</dt>
        <dd className="text-2xl font-bold">{title}</dd>
      </div>
      <div className="mt-0.5">
        <dt className="sr-only">Author</dt>
        <dd className="text-sm font-semibold text-indigo-500">By {author}</dd>
      </div>
    </div>
  </article>
);

export default ListItem;
```

and create another file `ListItem.stories.js` and add the following content:-

```js
import React from "react";

import ListItem from "./ListItem";
import dog from "./dog.jpg";

export default {
  title: "sample/ListItem",
  component: ListItem,
};

const Template = (args) => <ListItem {...args} />;

export const Default = Template.bind({});

Default.args = {
  image: dog,
  title: "Pinku",
  author: "Criston",
};
```

Next lets describe the List component by creating a file called `List.js`

and add the following content:

```js
import React from "react";

import ListItem from "./ListItem";

const List = ({ items }) => (
  <ul className="divide-y divide-gray-600">
    {items.map((item) => (
      <ListItem key={item.title} {...item} />
    ))}
  </ul>
);

export default List;
```

and then create `ListItem.stories.js` and add the following contents:

```js
import React from "react";

import List from "./List";
import dog from "./dog.jpg";

export default {
  title: "sample/List",
  component: List,
};

const Template = (args) => <List {...args} />;

export const Default = Template.bind({});

Default.args = {
  items: [
    {
      image: dog,
      title: "Sample Book 1",
      author: "The author is a dog",
    },
    {
      image: dog,
      title: "Sample Book 1",
      author: "The author is a dog",
    },
    {
      image: dog,
      title: "Sample Book 1",
      author: "The author is a dog",
    },
  ],
};
```

Then open storybook you will see the component.
Storybook will give us good documentation of a component and team members will be able to understand the components easily.
We can use these components in our react app.

# Gatsby Starter: Prismic

A typography-heavy & light-themed Gatsby Starter which uses the Headless CMS [Prismic](https://prismic.io/).

[Demo Website](https://gatsby-starter-prismic.netlify.com/)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/LekoArts/gatsby-starter-prismic)

## About Me

I hope you like my starters and create something awesome! To see some of my work you can visit my [website](https://www.lekoarts.de) or support me on [Patreon](https://www.patreon.com/lekoarts) to get some neat rewards (4K images, project files, tutorial insights). Every pledge on Patreon helps me creating more free starters!

Also check out the other _gatsby-starters_:

- [gatsby-starter-portfolio-emma](https://github.com/LekoArts/gatsby-starter-portfolio-emma)
- [gatsby-starter-portfolio-emilia](https://github.com/LekoArts/gatsby-starter-portfolio-emilia)
- [gatsby-starter-portfolio-bella](https://github.com/LekoArts/gatsby-starter-portfolio-bella)
- [gatsby-starter-portfolio-cara](https://github.com/LekoArts/gatsby-starter-portfolio-cara)
- [gatsby-starter-minimal-blog](https://github.com/LekoArts/gatsby-starter-minimal-blog)

Check out the [Gatsby Starter Portfolio Overview](https://gatsby-starter-portfolio.netlify.com/)!

## Features

Multiple features of Prismic are used in this starter:

- **Slices**: Enrich your blogposts with custom quotes, images or codeblocks. You can order them how you like. When you used the _Image-Slice_ the image will get inserted and optimized by **gatsby-image**
- **Labels**: When marking a single word or a whole block with the given labels, Prism.js will transform these to syntax-highlighted codeblocks
- **Relationship fields**: Categorize your blogposts in Categories via a relationship field. You can change categories on the fly
- **Both custom types (Single / Repeatable)**: (Nearly) Every aspect of the website is managed with Prismic. The social media links or the recent projects get both managed in Prismic, no hardcoded entries!

Therefore the starter has following features:

- Prismic as Headless CMS
- Emotion for styling
- PrismJS highlighting
- Responsive images (gatsby-image)
  - The right image size for every screen size
  - Traced SVG Loading (Lazy-Loading)
  - WebP Support
- SEO
  - Sitemap
  - Schema.org JSONLD
  - OpenGraph Tags
  - Twitter Tags
  - Favicons
- Offline Support
- WebApp Manifest Support
- Typography.js
- Absolute modules imports
- Configurable
  - Use the `website.js` to easily change the most important information
  - Themeable with `theme.js`

## Getting Started

Check your development environment! You'll need [Node.js](https://nodejs.org/en/), the [Gatsby CLI](https://www.gatsbyjs.org/docs/) and [node-gyp](https://github.com/nodejs/node-gyp#installation) installed. The official Gatsby website also lists two articles regarding this topic:

- [Gatsby on Windows](https://www.gatsbyjs.org/docs/gatsby-on-windows/)
- [Check your development environment](https://www.gatsbyjs.org/tutorial/part-zero/)

To copy and install this starter run this command (with "project-name" being the name of your folder you wish to install it in):

```shell
gatsby new project-name https://github.com/LekoArts/gatsby-starter-prismic
cd project-name
```

## Prismic

You have to know the basics of Prismic's interface in order to be able to make the necessary changes / setup your project accordingly. You can also checkout the document ["Sourcing from Prismic"](https://www.gatsbyjs.org/docs/sourcing-from-prismic/) I wrote for the official Gatsby documentation.

### Content types

If you want to use the exact same custom types and only want to get up and running, follow these steps:

1. Setup an account on Prismic and go to your custom types
2. Click the button "Create New" and choose "Repeatable Type". Give it the name `Post` (the API ID should be `post` automatically)
3. On the right side you have a sidebar with **Build mode** and **JSON editor**. Open the **JSON editor** tab and insert the data from `.prismic/post.json`. Save your type

Follow the second and third step (with the respective file from `.prismic`) for the following types:

| Name       | API ID     | Type       |
| ---------- | ---------- | ---------- |
| Category   | category   | Repeatable |
| Hero Links | hero_links | Single     |
| Homepage   | homepage   | Single     |
| Projects   | projects   | Single     |

These are the exact same content types I used for this starter.

### API key

You need to define the API Key for your Prismic repository in `gatsby-config.js` ([Video tutorial](https://www.youtube.com/watch?v=iH0P4KcOeVc)). You can retrieve the key here:

- You can generate an access token in the **API & Security** section of your repository settings. Setting a **Callback URL** is not necessary.
- The token will be listed under "Permanent access tokens".

It's best to store the API Key in an environment variable. Create the file `.env.development` in the root dir of your project. Its content should be:

`API_KEY=OIJSOJIO-YOURKEYHERE-EAJNALÖKND`

If you deploy to Netlify you can also setup an environment variable.

More information on the source plugin: [gatsby-source-prismic](https://github.com/angeloashmore/gatsby-source-prismic)

### Labels

Prismic gives you the tool called **Label** in the Rich Text field. You can wrap single words or complete text blocks with a label (they will have a yellow background when labeled). Normally this is just a `<span>` with a name, but the `gatsby-config.js` converts these marked words/blocks into code blocks with PrismJS classnames (and therefore syntax highlighting 🎉).

The two usecases:

- You mark a single word / sentence and apply the `text` label: Inline code (single backtick in markdown)
- You choose the `Preformatted` block (where can also choose the Headings) and apply any other (except `text`) label: Code block (three backticks in markdown)

### Slices

The `Post` custom types offers four slices in the slice zone:

- **Code Block**: This slice automatically inserts a `Preformatted` field in which you can paste your code. Before inserting you should choose a **Label** for the correct syntax highlighting
- **Quote**: A quote in a `blockquote`
- **Text**: Your normal _Rich Text_ field
- **Image**: This image won't be inlined with a Prismic URL, but downloaded and processed with `gatsby-image`

## Development

Before running the local development server you'll need to add Content to your Prismic site! Go to your documents (`https://your-name.prismic.io/documents/`) and create content with the newly created types. Fill out the `Homepage`, `Hero Links`, and `Projects` single type. Create some categories and add at least one Post. **Please note**: You have to publish all these documents (not only saving them)!

After that you can run the local server:

```shell
npm run dev
```

### Adding new features/plugins

You can add other features by having a look at the offical [plugins page](https://www.gatsbyjs.org/plugins/)

### Building your site

```shell
npm run build
```

Copy the content of the `public` folder to your webhost or use a website like Netlify which automates that for you.

## Configuration

You can configure your setup in `config/website`:

```JS
module.exports = {
  _pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  _title: 'Gatsby Starter - Prismic.io', // Navigation and Site Title
  _titleAlt: 'Prismic Starter', // Title for JSONLD
  description: 'A bright single-page portfolio starter with big typography & images for Gatsby.',
  _url: 'https://gatsby-starter-prismic.netlify.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  logo: '/logos/logo-1024.png', // Used for SEO

  // JSONLD / Manifest
  favicon: 'src/favicon.png', // Used for manifest favicon generation
  shortName: 'Prismic', // shortname for manifest. MUST be shorter than 12 characters
  author: 'LekoArts', // Author for schemaORGJSONLD
  themeColor: '#3D63AE',
  backgroundColor: '#EBEDF2',

  twitter: '@starter_prismicio', // Twitter Username
};
```

You can also change the colors, container widths and other stuff in `src/styles/theme`:

```JS
const theme = {
  colors: {
    primary: '#3D63AE',
    bg: '#fff',
    black: '#000',
    greyLight: '#EBEDF2',
    greyBlue: '#a2bce2',
    grey: '#595C62',
    greyDark: '#303643',
    greyDarker: '#1c252b',
  },
  maxWidth: '1000px',
  breakpoints: {
    xs: '400px',
    s: '600px',
    m: '900px',
    l: '1200px',
  },
};

export default theme;
```

**Attention:** You also need to edit `static/robots.txt` to include your domain!

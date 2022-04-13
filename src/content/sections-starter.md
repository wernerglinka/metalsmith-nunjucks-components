---
layout: sections.njk
bodyClasses: "section-starter-overview"

seo:
  title: Sections Starter | Metalsmith Nunjucks Components
  description: "A collection of Nunjucks components for use with Metalsmith"
  socialImage: "v1648838418/components-library/ms-nj-social-image_jb9yox.jpg"
  canonicalOverwrite: ""

sections:
  - section: intro
    disabled: false
    inContainer: true
    marginTop: false
    marginBottom: false
    paddingTop: false
    paddingBottom: false
    backgroundColor: ""
    targetId: ""
    text:
      title: Metalsmith Site Starter
      hasColumns: true
      prose: |-
        Download this starter to expedite buildiing your Metalsmith site with the sectioned page paradigm. The starter helps you to build fast, robust and adaptable websites. The knowledge and experience of many web developers are reflected in this system.

        Content is written in [Markdown](https://marked.js.org/) and templates are coded with [Nunjucks](https://mozilla.github.io/nunjucks/). All page content is defined in the frontmatter of each page. There are no long-text markdown sections. Rather content text area fields in the page frontmatter are compiled into HTML with a Nunjucks filter. 

        Styles are written in SCSS, scripts in Javasript and compiled with Metalsmith plugins. The bolierplate includes Normalize.css which makes browsers render all elements more consistently and in line with modern standards. It precisely targets only the styles that need normalizing.

        Page sections are defined as YAML objects in the frontmatter. This approach lends itself to an easy integration with headless CMSs like NetlifyCMS or forestry.io. Get more [detailed explanations in this blogpost](https://glinka.co/blog).

        This website provides the starter, [page sections](/page-sections) and [base components](/base-components). The page sections are bare-bones interpretations of universal information presentation patterns that can be found on almost every corporate website. Sections are composed of base components and are used to build complete pages. The base components can also be used independently to build new components.

        If you have built a new component that you think would be useful for other developers, please [issue a pull request](https://github.com/wernerglinka/metalsmith-nunjucks-components). 

      header: "h1"
      subTitle: ""
    hasCtas: true
    ctas:
      - url: "https://github.com"
        label: "Get the Starter"
        isExternal: true
        isButton: true
        buttonStyle: "primary"
  
  - section: intro
    disabled: false
    inContainer: true
    marginTop: true
    marginBottom: true
    paddingTop: false
    paddingBottom: false
    backgroundColor: ""
    targetId: ""
    text:
      title: Getting Started
      hasColumns: false
      prose: |-
        ### Create a Metalsmith site locally.

        Clone the starter repository to create a new site.

        ```bash
        git clone https://github.com/wernerglinka/metalsmith-sections-starter.git new-site 
        ```

        ### Start developing.

        Navigate into your new site’s directory and start it up.
        
        ```bash
        cd new-site/
        npm install
        npm start
        ```

        Open the source code and start composing your pages!

        Your site is now running at `http://localhost:3000`

        Open the `new-site` directory in your code editor of choice and edit `src/content/index.md`. Save your changes and the browser will update in real time!

      header: "h2"
      subTitle: ""
    hasCtas: false
    ctas:
      - url: ""
        label: ""
        isExternal: true
        isButton: true
        buttonStyle: "primary"
---

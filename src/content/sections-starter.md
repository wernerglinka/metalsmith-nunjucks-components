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
        [Download this starter](https://github.com/wernerglinka/metalsmith-company-starter) to expedite building your Metalsmith site with the sectioned page paradigm. The starter helps you to build fast, robust and adaptable websites. The knowledge and experience of many web developers are reflected in this system. You can [checkout a demo here](https://metalsmith-company-starter.netlify.app/).

        Content is written in [Markdown](https://marked.js.org/) and templates are coded with [Nunjucks](https://mozilla.github.io/nunjucks/). All page content is defined in the frontmatter of each page. There are no long-text markdown sections. Rather, content text area fields in the page frontmatter are compiled into HTML with a Nunjucks filter. 

        Styles are written in SCSS, scripts in Javasript and compiled with Metalsmith plugins. The bolierplate includes [Normalize.css](https://necolas.github.io/normalize.css/) which makes browsers render all elements more consistently and in line with modern standards. It precisely targets only the styles that need normalizing.

        Page sections are defined as YAML objects in the frontmatter. This approach lends itself to an easy integration with headless CMSs like [Netlify CMS](https://www.netlifycms.org/) or [forestry.io](https://forestry.io/). Get more [detailed explanations in this blogpost](https://www.glinka.co/blog/building-flexible-page-layouts/).

        This website provides [page sections](/page-sections) and [base components](/base-components). The page sections are bare-bones interpretations of universal information presentation patterns that can be found on almost every corporate website. Sections are composed of base components and are used to build complete pages. The base components can also be used independently to build new components.

        All images are served from [Cloudinary](https://cloudinary.com/).

        If you have built a new component that you think would be useful for other developers, please [issue a pull request](https://github.com/wernerglinka/metalsmith-nunjucks-components). 

        [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/wernerglinka/metalsmith-company-starter)

      header: "h1"
      subTitle: ""
    hasCtas: true
    ctas:
      - url: "https://github.com/wernerglinka/metalsmith-company-starter"
        label: "Get the Starter"
        isExternal: true
        isButton: true
        buttonStyle: "primary"
  
---

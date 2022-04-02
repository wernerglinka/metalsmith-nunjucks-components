---
layout: sections.njk
bodyClasses: "components-overview"

seo:
  title: Metalsmith Nunjucks Components Library
  description: "A collection of Nunjucks components for use with Metalsmith"
  socialImage: "v1648838418/components-library/ms-nj-social-image_jb9yox.jpg"
  canonicalOverwrite: ""

sections:
  - component: intro
    disabled: false
    inContainer: true
    marginTop: false
    marginBottom: false
    paddingTop: false
    paddingBottom: false
    backgroundColor: ""
    targetId: ""
    title: Metalsmith Boilerplate
    prose: |-
      This is the boilderplate to build your Metalsmith site with the sectioned page paradigm. The boilerplate helps you to build fast, robust and adaptable websites. The knowledge and experience of many web developers are reflected in this system.

      Content is written in [Markdown](https://marked.js.org/) and templates are coded with [Nunjucks](https://mozilla.github.io/nunjucks/). All page content is defined in the frontmatter of each page. There are no long-text markdown sections. Rather content text area fields in the page frontmatter are compiled into HTML with a Nunjucks filter. 

      Styles are written in SCSS, scripts in Javasript and compiled with Metalsmith plugins. The bolierplate includes Normalize.css which makes browsers render all elements more consistently and in line with modern standards. It precisely targets only the styles that need normalizing.

      Page sections are defined as a YAML object in the frontmatter. This approach lends itself to an easy integration with headless CMSs like NetlifyCMS or forestry.io. Get more [detailed explanations in this blogpost](https://glinka.co/blog).

    header: "h1"
    subTitle: ""
    hasCtas: true
    ctas:
      - url: "https://github.com"
        label: "Get the boilerplate"
        isExternal: true
        isButton: true
        buttonStyle: "primary"
  
---

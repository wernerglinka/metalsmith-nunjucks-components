---
layout: sections.njk
bodyClasses: "list-component"

seo:
  title: L:ist Component | Metalsmith Nunjucks Components
  description: "A component that renders a list of items."
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
      title: List
      header: "h1"
      subTitle: "A base component that renders a list of items"
      prose: |-
        Renders a list of images/icons with a title and description. The item may be wrapped with a link. The description/prose is written in [marked](https://marked.js.org/) markdown. All available list items are defined in a json file, which is located in the `src/content/data/` directory, and injected into the metalsmith metadata with the `@metalsmith/metadata` plugin. In this example we are using the `awards.json` file. Then the list if filterred with the `selections` array.

        ```yaml
        list:
          source: awards
          selections:
            - title: "Award1"
            - title: "Award2" 
            - title: "Award3"
              
        ```
        - **source** - This is the key of the Metalsmith metadata object which holds all available list items.
        - **selections** - This is an array of keys that are used to filter the list items.

        For an usage example see the [badges](/page-sections/badges).

    hasCtas: false
    ctas:
      - url: ""
        label: ""
        isExternal: false
        isButton: true
        buttonStyle: "primary"
  
  - section: base-component-demo
    disabled: false
    inContainer: true
    component: list
    list:
      source: awards
      selections:
        - title: "Award1"
        - title: "Award2" 
        - title: "Award3"
  
  - section: intro
    disabled: false
    inContainer: true
    marginTop: false
    marginBottom: true
    paddingTop: false
    paddingBottom: true
    backgroundColor: ""
    targetId: ""
    text:
      title: Base Components Library
      header: "h3"
      subTitle: "Library of all code snippets for the base components" 
      prose: ""
    hasCtas: true
    ctas:
      - url: "/assets/downloads/base-components=archive.zip"
        label: "Download the Library"
        isExternal: false
        isButton: true
        buttonStyle: "primary"
---
---
layout: sections.njk
bodyClasses: "ctas-component"

seo:
  title: CTAs Component | Metalsmith Nunjucks Components
  description: "A component that renders buttons and/or links"
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
      title: CTAs
      header: "h1"
      subTitle: "A base component that renders multiple buttons and/or links"
      prose: |-
        Renders links as buttons or text links. The link target may be a local - or external page.

        ### Usage
        ```yaml
          ctas:
            - url: "https://github.com/wernerglinka/ms-components"
              label: Get the Starter
              isExternal: true
              isButton: true
              buttonStyle: "primary"
            - url: "https://github.com/wernerglinka/ms-components"
              label: Get the Starter
              isExternal: true
              isButton: false
              buttonStyle: "primary"
        ```
        - **url** - The link target
        - **label** - The link text
        - **isExternal** - When true, adds `target="_blank"` and `rel="noopener noreferrer"` attributes to the link
        - **isButton** - When true, renders the lionk as a button
        - **buttonStyle** - Defines the button style, uses `default`, `primary` and `secondary`

        For an usage example see the [media section](/page-sections/media).

    hasCtas: false
    ctas:
      - url: ""
        label: ""
        isExternal: true
        isButton: true
        buttonStyle: "primary"

  - section: base-component-demo
    disabled: false
    inContainer: true
    component: ctas
    ctas:
      - url: "https://github.com/wernerglinka/ms-components"
        label: Get the Starter
        isExternal: true
        isButton: true
        buttonStyle: "primary"
      - url: "https://github.com/wernerglinka/ms-components"
        label: Get the Starter
        isExternal: true
        isButton: false
        buttonStyle: "primary"
  
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
      title: "Package"
      header: "h3"
      subTitle: ""
      prose: |-
        
        The download package includes the following:

        - Template file
        - SCSS file
        - YAML object

    hasCtas: true
    ctas:
      - url: "https://github.com"
        label: "Download CTAs Component"
        isExternal: true
        isButton: true
        buttonStyle: "primary"
  
---
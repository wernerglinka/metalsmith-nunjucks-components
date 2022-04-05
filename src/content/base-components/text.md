---
layout: sections.njk
bodyClasses: "text-component"

seo:
  title: Text Component | Metalsmith Nunjucks Components
  description: "A component that renders a header, sub title and some text. All are optional"
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
    text:
      title: Text
      header: "h1"
      subTitle: "A base component that renders a title, sub title and a body of markdown"
      prose: |-
        The title tag can be set with the `header` property. The prose or body text is written in [marked](https://marked.js.org/) markdown.

        ```yaml
          text:
            title: Text
            header: "h1"
            subTitle: "A base component that renders a title, sub title and a body of text"
            prose: |-
              The title tag can be set with the `header` property....
            
        ```

        ## Package
        The download package includes the following:

        - Template file
        - SCSS file
        - YAML object

    hasCtas: true
    ctas:
      - url: "https://github.com"
        label: "Download Text Component"
        isExternal: true
        isButton: true
        buttonStyle: "primary"
  
---
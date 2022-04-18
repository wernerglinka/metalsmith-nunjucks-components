---
layout: sections.njk
bodyClasses: "icon-component"

seo:
  title: Icon Component | Metalsmith Nunjucks Components
  description: "A component that renders an icon"
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
      title: Icon
      header: "h1"
      subTitle: "A base component that renders an icon"
      prose: |-
        Icons are rendered as inline svg, eliminating extra http requests, the additional weight of a icon font package and the quality issues with images.  SVG icons can be scaled to any size without quality degradation and can be styled with css. 

        This component requires that all icons are stored as Nunjucks files in directory `templates/icons`. Then in the frontmatter, only the nunjucks file name is required.

        ```yaml
          icon: "feather"  
        ```

        - **icon** - The icon file name without the file extension.

        A typical svg files looks like this.

        ```html
        <svg stroke="#000000" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
          <line x1="16" y1="8" x2="2" y2="22"></line>
          <line x1="17.5" y1="15" x2="9" y2="15"></line>
        </svg>
        ```

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
    component: icon
    icon: "feather"

---
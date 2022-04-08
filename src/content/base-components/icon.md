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
          icon: "arrow-down"  
        ```

        - **icon** - The icon file name without the file extension.

        A typical svg files looks like this.

        ```html
        <svg viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <g id="arrow-down" transform="translate(1.000000, 1.000000)">
              <line x1="7" y1="0" x2="7" y2="14" id="Path"></line>
              <polyline id="Path" points="14 7 7 14 0 7"></polyline>
          </g>
        </svg>
        ```

        For an usage example see the [media section](/page-sections/media).

        ## Package
        The download package includes the following:

        - Template file
        - SCSS file
        - YAML object

    hasCtas: true
    ctas:
      - url: "https://github.com"
        label: "Download Icon Component"
        isExternal: true
        isButton: true
        buttonStyle: "primary"
  
---
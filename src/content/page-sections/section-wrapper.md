---
layout: sections.njk
bodyClasses: "page-sections-wrapper"

seo:
  title: Page Sections Wrapper | Metalsmith Nunjucks Components
  description: "A wrapper for page sections"
  socialImage: "v1648838418/components-library/ms-nj-social-image_jb9yox.jpg"
  canonicalOverwrite: ""

sections:
  - section: intro
    disabled: false
    inContainer: true
    marginTop: false
    marginBottom: true
    paddingTop: false
    paddingBottom: false
    backgroundColor: ""
    targetId: ""
    text:
      title: Page Sections Wrapper
      header: "h1"
      subTitle: ""
      prose: |-
        All page sections are enclosed in a section wrapper. The wrapper is used to render a section either inside a container or full-width. The wrapper is also used to add margins and apply a background color.

        These are the properties that are common to all sections:

        ```yaml
        sectionClass: ""
        inContainer: true
        hasBackground: false
        bgColor: "#f0f0f0"
        backgroundIsDark: false
        marginTop: true
        marginBottom: true
        paddingTop: false
        paddingBottom: false
        ```
        - **sectionClass** - A class to be added to the section.
        - **inContaine** -  Adds class `inContainer` to the section wrapper.
        - **hasBackground** - If `true` the section will have a background color.
        - **bgColor** - The background color in hex., e.g. `#ffffff`.
        - **backgroundIsDark** - Adds class `backgroundDark` to the section wrapper. This allows the text color to be adjusted for readability.
        - **marginTop** - Adds class `marginTop` to the section wrapper.
        - **marginBottom** -  Adds class `marginBottom` to the section wrapper.
        - **paddingTop** - Adds class `paddingTop` to the section.
        - **paddingBottom** - Adds class `paddingBottom` to the section.
    hasCtas: false
    ctas:
      - url: ""
        label: ""
        isExternal: true
        isButton: true
        buttonStyle: "primary"
    
---


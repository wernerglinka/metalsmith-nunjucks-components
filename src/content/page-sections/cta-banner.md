---
layout: sections.njk
bodyClasses: "cta-banner-section"

seo:
  title: CTA Banner Section | Metalsmith Nunjucks Components
  description: "A page section"
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
      title: CTA Banner
      header: "h1"
      subTitle: "A page section that renders a CTA Banner."
      prose: |-
        The CTA Banner is a simple component that renders a banner with a title, subtitle, and a button, it may either span the full width of the page or be contained within a container.
        
        The CTA Banner is composed of the following base components:
        - Text
        - CTAs

        ```yaml
        section: cta-banner
        sectionClass: "example"
        animateSection: true
        inContainer: true
        hasBackground: true
        backgroundColor: "#fca311"
        backgroundIsDark: false
        marginTop: true
        marginBottom: true
        paddingTop: false
        paddingBottom: false
        reverse: false
        text:
          title: Leave long-text pages behind and build better Websites.
          header: "h2"
          subTitle: Using "sectioned" pages to build flexible page layouts
          prose: ""
        hasCtas: true
        ctas:
          - url: "https://github.com/wernerglinka/ms-components"
            label: Get the Starter
            isExternal: true
            isButton: true
            buttonStyle: "primary"

        ```
   
    hasCtas: false
    ctas:
      - url: ""
        label: ""
        isExternal: true
        isButton: true
        buttonStyle: "primary"

  - section: cta-banner
    sectionClass: "example"
    animateSection: true
    inContainer: false
    hasBackground: true
    backgroundColor: "#fca311"
    backgroundIsDark: false
    marginTop: true
    marginBottom: true
    paddingTop: false
    paddingBottom: false
    text:
      title: Leave long-text pages behind and build better Websites.
      header: "h2"
      subTitle: Using "sectioned" pages to build flexible page layouts
      prose: ""
    hasCtas: true
    ctas:
      - url: "https://github.com/wernerglinka/ms-components"
        label: Get the Starter
        isExternal: true
        isButton: true
        buttonStyle: "primary"
        
---
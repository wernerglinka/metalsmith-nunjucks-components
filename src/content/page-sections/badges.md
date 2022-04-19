---
layout: sections.njk
bodyClasses: "badges-section"

seo:
  title: Badges Section | Metalsmith Nunjucks Components
  description: "An badges page section"
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
      title: Badges
      header: "h1"
      subTitle: "A page section that renders a list of badges"
      prose: |-
        The badges section is a simple component that renders a list of badges. The badges may be used to show a list of **features**, a list of **awards** or **customers**. Badges may be linked to internal or external pages thus potentionally adding SEO value.
        
        The CTA Banner is composed of the following base components:
        - Text
        - List
        - CTAs

        ```yaml
        section: badges
        sectionClass: "example"
        animateSection: true
        inContainer: true
        hasBackground: false
        backgroundColor: ""
        backgroundIsDark: false
        marginTop: true
        marginBottom: true
        paddingTop: false
        paddingBottom: false
        text:
          title: Awards.
          header: "h2"
          subTitle: Look at how many awards we have won.
          prose: "We keep trying and they are piling up."
        list:
          source: awards
          selections:
            - title: "Award1"
            - title: "Award2" 
            - title: "Award3"
            - title: "Award4"
            - title: "Award5"
        hasCtas: true
        ctas:
          - url: "/base-components/"
            label: Check out our award winning products
            isExternal: false
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

  - section: badges
    sectionClass: "example"
    animateSection: true
    inContainer: true
    hasBackground: false
    backgroundColor: ""
    backgroundIsDark: false
    marginTop: true
    marginBottom: true
    paddingTop: false
    paddingBottom: false
    text:
      title: Awards.
      header: "h2"
      subTitle: Look at how many awards we have won.
      prose: "We keep trying and they are piling up."
    list:
      source: awards
      selections:
        - title: "Award1"
        - title: "Award2" 
        - title: "Award3"
        - title: "Award4"
        - title: "Award5"
    hasCtas: true
    ctas:
      - url: "/base-components/"
        label: Check out our award winning products
        isExternal: false
        isButton: false
        buttonStyle: "primary"
    
---
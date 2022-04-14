---
layout: sections.njk
bodyClasses: "image-component"

seo:
  title: Lottie Component | Metalsmith Nunjucks Components
  description: "A component that renders an animated lottie file"
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
      title: Lottie
      header: "h1"
      subTitle: "A base component that renders an animated lottie file."
      prose: |-
        Lottie is an open source animation file format that’s tiny, high quality, interactive, and can be manipulated at runtime.

        ### Dependencies

        - [Lottie Player](https://lottiefiles.com/web-player)
        
        ### Usage

        ```yaml
          lottieData:
            src: "https://assets9.lottiefiles.com/datafiles/MUp3wlMDGtoK5FK/data.json"
            control:
              autoplay: true
              loop: true
        ```
        - **src** - The lottie file URL
        - **control.autoplay** - Starts the animation upon load when TRUE
        - **control.loop** - Loops the animation when TRUE

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
    component: lottie
    lottieData:
      src: "https://assets9.lottiefiles.com/datafiles/MUp3wlMDGtoK5FK/data.json"
      control:
        autoplay: true
        loop: true
  
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
        - Javascript file

    hasCtas: true
    ctas:
      - url: "https://github.com"
        label: "Download Lottie Component"
        isExternal: true
        isButton: true
        buttonStyle: "primary"
---
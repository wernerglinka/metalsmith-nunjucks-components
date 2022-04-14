---
layout: sections.njk
bodyClasses: "video-component"

seo:
  title: Video Component | Metalsmith Nunjucks Components
  description: "A component that renders a video either inline or in a modal overlay"
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
      title: Video
      header: "h1"
      subTitle: "A base component that renders a video."
      prose: |-
        The video is rendered in a model overlay.

        ```yaml
          video:
            inline: false
            src: youtube
            id: "eu5lv2Umn3M"
            tn: "v1649365834/metalsmith-components/deepPurple_nvqi3g.jpg"
            aspectRatio: "56.25"
            caption: ""
        ```
        - **inline** - When false, plays video in a modal overlay
        - **src** - The video source, currently only YouTube is supported
        - **id** - The video id, something like eu5lv2Umn3M
        - **tn** - A video thumbnail
        - **aspectRation** - the aspect ratio of the image. Used to prevent any content movement when the high-res image in inserted into the DOM.
        - **caption** - used it to give credit or whatever makes sense.
        
  - section: base-component-demo
    disabled: false
    inContainer: true
    component: video
    title: "Renders in a modal overlay"
    video:
      inline: false
      src: youtube
      id: "eu5lv2Umn3M"
      tn: "v1649365834/metalsmith-components/deepPurple_nvqi3g.jpg"
      aspectRatio: "56.25"

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
      title: ""
      header: "h1"
      subTitle: ""
      prose: |-
        ```yaml
          video:
            inline: true
            src: youtube
            id: "OorZcOzNcgE"
            tn: "v1649962060/metalsmith-components/deepPurple2_d05gj3.jpg"
            aspectRatio: "56.25"
            caption: ""
        ```
        For an usage example see the [media section](/page-sections/media).
        
  - section: base-component-demo
    disabled: false
    inContainer: true
    component: video
    title: "Renders inline"
    video:
      inline: true
      src: youtube
      id: "OorZcOzNcgE"
      tn: "v1649962060/metalsmith-components/deepPurple2_d05gj3.jpg"
      aspectRatio: "56.25"
  
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
        label: "Download video Component"
        isExternal: true
        isButton: true
        buttonStyle: "primary"
---
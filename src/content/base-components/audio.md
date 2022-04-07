---
layout: sections.njk
bodyClasses: "audio-component"

seo:
  title: Audio Component | Metalsmith Nunjucks Components
  description: "A component that renders audio controls with an optional background image."
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
      title: Audio
      header: "h1"
      subTitle: "A base component that renders audio controls for an audio source"
      prose: |-
        The component plays audio formats `mpg3` and `ogg`.

        ### Usage
        
        ```yaml
          audio:
            ogg: "v1639165770/gatsby4mdx/audio/sample-ogg-file_fmjjrl.ogg"
            mpeg: "v1639165774/gatsby4mdx/audio/sample-mp3-file_hwsxlc.mp3"
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
        label: "Download Audio Component"
        isExternal: true
        isButton: true
        buttonStyle: "primary"
  
---
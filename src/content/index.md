---
layout: sections.njk
bodyClasses: "home"
bodyBackgroundImage: "v1648837357/components-library/components-background_mfr1ag.jpg"

seo:
  title: Metalsmith Nunjucks Components Library
  description: "A collection of Nunjucks components for use with Metalsmith"
  socialImage: "v1648838418/components-library/ms-nj-social-image_jb9yox.jpg"
  canonicalOverwrite: ""

sections:
  - section: home-banner
    disabled: false
    animateSection: false
    inContainer: true
    marginTop: false
    marginBottom: true
    paddingTop: false
    paddingBottom: true
    backgroundColor: ""
    targetId: ""
    text:
      title: Metalsmith Components
      header: "h1"
      headerClass: ""
      subTitle: "A collection of Nunjucks components to be used with Metalsmith"
      prose: |-
        Metalsmith Components is a library for component-based website development. It includes base components and page sections for flexible page layouts. Leave long-text pages behind and implement flexible content models.
    hasCtas: false
    ctas:
      - url: ""
        label: ""
        isExternal: false
        isButton: true
        buttonStyle: "primary"
  
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
      title: "Build better pages with Metalsmith Components"
      header: "h2"
      prose: |-
        Metalsmith Components embrace a modular page building paradigm. Rather than using the markdown body for all content, a structured content model is defined in the page fontmatter. Frontmatter objects define pages section templates. As a result page layout files are much shorter, as the code is organized into smaller component files, components can easily be reused on any page. 

        Let's have a look at what that looks like. Here is how this page is build:

        ```yaml
        ---
        layout: sections.njk
        bodyClasses: "home"
        bodyBackgroundImage: "v1648837357/components-library/components-background_mfr1ag.jpg"

        seo:
          title: Metalsmith Nunjucks Components Library
          description: "A collection of Nunjucks components for use with Metalsmith"
          socialImage: "v1648838418/components-library/ms-nj-social-image_jb9yox.jpg"
          canonicalOverwrite: ""

        sections:
          - section: home-banner
            ...
          - section: intro
            
          - section: media
            ...
        ---
        ```
        - `layout` is used to determine which template to use for the page.
        - `bodyClasses` is used to add classes to the body tag. 
        - `bodyBackgroundImage` sets the background image for the body. 
        - The `seo` object contains the SEO metadata for the page. 
        - The `sections` array contains the sections to be rendered on the page.

        Here we see that the page is built with a `sections` array. Let's have a closer look at the media section.

        ## Composable Sections

        This following code example shows a simplified media section, which is composed of the base components `text`, `ctas` and `image`. 
        
        ```yaml
        section: media
        text:
          title: Metalsmith Company Starter
          header: "h1"
          subTitle: Using "sectioned" pages to build flexible page layouts
          prose: This starter is build in the style of a company marketing site. The components on this site are bare-bone interpretations of common information presentation patterns that can be found on many corporate websites. [The source code for this site can be found on GitHub](https://github.com/wernerglinka/metalsmith-company-starter).
        hasCtas: true
        ctas:
          - url: "https://github.com/wernerglinka/ms-components"
            label: Get the Starter
            isExternal: true
            isButton: true
            buttonStyle: "primary"
            isVideoTrigger: false
            videoId: ""
        image:
          src: "v1647546742/tgc2022/corporate_ip4qbt.jpg"
          alt: "Metalsmith Javascript"
          aspectRatio: "56.25"
          caption: "Photo by Josh Hild from Pexels"
        ```
      
        A simplified media template that consumes this data looks like this. Note that the template calls base components to render the text, image and the CTAs.

        ```html
        {% from "../partials/ctas.njk" import ctas %}
        {% from "../partials/responsive-image.njk" import responsiveImage %}
        {% from "../partials/text.njk" import text %}

        <section class="section-media>
          <div class="content">
            <div class="prose">
              {{ text(params.text)}}
              {% if params.hasCtas %}
                {{ ctas(params.ctas) }}
              {% endif %}
            </div>

            <div class="media">
              {{ responsiveImage(params.image, site) }}
            </div>
          </div>
        </section>
        ```

        And this is the rendered page section:

  - section: media
    sectionClass: "example"
    animateSection: true
    inContainer: true
    hasBackground: false
    bgColor: ""
    bgIsDark: false
    marginTop: true
    marginBottom: true
    paddingTop: false
    paddingBottom: false
    reverse: false
    text:
      title: Metalsmith Company Starter
      header: "h1"
      subTitle: Using "sectioned" pages to build flexible page layouts
      prose: This starter is build in the style of a company marketing site. The components on this site are bare-bone interpretations of common information presentation patterns that can be found on many corporate websites. [The source code for this site can be found on GitHub](https://github.com/wernerglinka/metalsmith-company-starter).
    hasCtas: true
    ctas:
      - url: "https://github.com/wernerglinka/ms-components"
        label: Get the Starter
        isExternal: true
        isButton: true
        buttonStyle: "primary"
        isVideoTrigger: false
        videoId: ""
    mediaType: Image
    video:
      inline: false
      src: youtube
      id: ""
      tn: ""
      aspectRatio: ""
      caption:
    image:
      src: "v1649349741/metalsmith-components/corporate_jwbmek.jpg"
      alt: "Metalsmith Javascript"
      aspectRatio: "56.25"
      caption: "Photo by Josh Hild from Pexels"
    lottieData:
      src: ""
      control:
        autoplay: true
        loop: true
    icon: ""
    audio:
      bgImage: ""
      aspectRatio: ""
      ogg: ""
      mpeg: ""
      caption:

  - section: intro
    disabled: false
    inContainer: true
    marginTop: false
    marginBottom: true
    paddingTop: true
    paddingBottom: true
    backgroundColor: ""
    targetId: ""
    text:
      title: ""
      header: "h2"
      prose: |-
        This website code is available at [GitHub](https://github.com/wernerglinka/metalsmith-nunjucks-components). 

    hasCtas: true
    ctas:
      - url: "/sections-starter/"
        label: Get Started
        isExternal: false
        isButton: true
        buttonStyle: "secondary"
        isVideoTrigger: false
        videoId: ""
---

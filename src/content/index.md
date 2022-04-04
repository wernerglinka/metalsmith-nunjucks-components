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
  - component: home-banner
    disabled: false
    animateSection: false
    inContainer: true
    marginTop: false
    marginBottom: true
    paddingTop: false
    paddingBottom: true
    backgroundColor: ""
    targetId: ""
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
  
  - component: intro
    disabled: false
    inContainer: true
    marginTop: false
    marginBottom: false
    paddingTop: false
    paddingBottom: false
    backgroundColor: ""
    targetId: ""
    title: Overview
    prose: |-
      Metalsmith Components embrace a modular page building paradigm. Rather than using the markdown body for all content, a structured content model is defined in the page fontmatter. Frontmatter objects define pages section templates. As a result page layout files are much shorter, as the code is organized into smaller component files, components can easily be reused on any page. 

      Let's have a look at what that looks like. 
      
      This frontmatter example shows a hero section that is composed with several base components. The banner has a title, sub title, some text and an image. It also has the option of using multiple call-to-actions.
      
      ```yaml
      component: banner
      title: Metalsmith Company Starter
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
    
      The banner template that consumes this data looks like this. Note that the template calls base components to render the text, image and the CTAs.

      ```html
      {% from "../partials/ctas.njk" import ctas %}
      {% from "../partials/responsive-image.njk" import responsiveImage %}
      {% from "../partials/text.njk" import text %}

      <section class="section-banner>
        <div class="content columns">
          <div class="prose">
            {{ text(params)}}
            {% if params.hasCtas %}
              {{ ctas(params) }}
            {% endif %}
          </div>

          <div class="media">
            {{ responsiveImage(params.image, site) }}
          </div>
        </div>
      </section>
      ```

      And this is the rendered page section:

  - component: image
    disabled: false
    animateSection: false
    inContainer: true
    marginTop: true
    marginBottom: false
    paddingTop: false
    paddingBottom: false
    backgroundColor: ""
    targetId: ""
    maxWidth: 1100
    alignment: center
    hasBorder: true
    image:
      src: "v1649092749/metalsmith-components/banner-example_nwvnre.png"
      aspectRatio: "38.4"
      caption: ""
---

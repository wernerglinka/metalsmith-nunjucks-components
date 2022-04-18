---
layout: sections.njk
bodyClasses: "image-component"

seo:
  title: Image Component | Metalsmith Nunjucks Components
  description: "A component that renders a low-resolution image and then lazy-loads a high-resolution image when the image is in or enters the viewport"
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
      title: Image
      header: "h1"
      subTitle: "A base component that renders a responsive image."
      prose: |-
        The image is loaded in very low resolution and blurred with CSS. This low-res image will be rendered at the same size as the original image to avoid content shift when the high-res image is rendered. Once the low-res images are loaded, images in the viewport will be immediately updated by fading-in their high-res version. All images outside the viewport remain low-res and will be lazy-loaded/faded-in once scrolling into the viewport.

        This component will ensure that the image is always properly sized, regardless of screen size or device pixel ratio and that the best image format that the browsers supports is loaded.

        This component uses [cloudinary.com](https://cloudinary.com/) to fetch properly sized images and the optimal image format.

        ```yaml
          image:
            src: "v1649349741/metalsmith-components/corporate_jwbmek.jpg"
            alt: "cloudinary"
            aspectRatio: "56.25"
            caption: "Optional image caption"
        ```
        - **src** - the Cloudinary image id. The image ID will be combined with the Cloudinary baseURL in the template. The Cloudinary baseURL is available from the site object in Metalsmith metadata. By combining the BaseURL and the image id we get the high-res image src.
        - **alt** - the alt text
        - **aspectRatio** - the aspect ratio of the image. Used to prevent any content movement when the high-res image in inserted into the DOM.
        - **caption** - used it to give credit or whatever makes sense.

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
    component: image
    image:
      src: "v1649349741/metalsmith-components/corporate_jwbmek.jpg"
      alt: "cloudinary"
      aspectRatio: "56.25"
      caption: "Optional image caption"
  
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
      title: Base Components Library
      header: "h3"
      subTitle: "Library of all code snippets for the base components" 
      prose: ""
    hasCtas: true
    ctas:
      - url: "/assets/downloads/base-components=archive.zip"
        label: "Download the Library"
        isExternal: false
        isButton: true
        buttonStyle: "primary"
---
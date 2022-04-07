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
            src: "v1639779216/gatsby4mdx/cloudinary-logo_njlkd9.jpg"
            alt: "cloudinary"
            aspectRatio: "56.25"
            caption: "Optional image caption"
        ```
        - **src** - the Cloudinary image id. The image ID will be combined with the Cloudinary baseURL in the template. The Cloudinary baseURL is available from the site object in Metalsmith metadata. By combining the BaseURL and the image id we get the high-res image src.
        - **alt** - the alt text
        - **aspectRatio** - the aspect ratio of the image. Used to prevent any content movement when the high-res image in inserted into the DOM.
        - **caption** - used it to give credit or whatever makes sense.


        ## Package
        The download package includes the following:

        - Template file
        - SCSS file
        - YAML object
        - Javascript file

    hasCtas: true
    ctas:
      - url: "https://github.com"
        label: "Download Text Component"
        isExternal: true
        isButton: true
        buttonStyle: "primary"
  
---
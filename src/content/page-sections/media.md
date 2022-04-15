---
layout: sections.njk
bodyClasses: "media-section"

seo:
  title: Media Section | Metalsmith Nunjucks Components
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
      title: Media
      header: "h1"
      subTitle: "A page section that renders a Media Object."
      prose: |-
        The media object is a pattern one can find all over the web. It refers to a two-column box with an image on one side and related text on the other. However, this media section is a variation of that pattern in that it supports a variety of media types. It supports images, videos, icons, audio and animated lottie files.

        The page section is composed of the following base components:
        - Text
        - CTAs
        - Image, Icon, Audio, Video or Lottie 
   
    hasCtas: false
    ctas:
      - url: ""
        label: ""
        isExternal: true
        isButton: true
        buttonStyle: "primary"

  - section: tabbed-sections
    disabled: false
    inContainer: true
    marginTop: true
    marginBottom: true
    paddingTop: false
    paddingBottom: true
    tabs:
      - image:
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
            title: Media Section with image
            header: "h2"
            subTitle: ""
            prose: ""
          hasCtas: false
          ctas:
            - url: ""
              label: ""
              isExternal: true
              isButton: true
              buttonStyle: "primary"
        
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
          marginBottom: false
          paddingTop: false
          paddingBottom: false
          backgroundColor: ""
          targetId: ""
          text:
            title: ""
            header: "h2"
            subTitle: ""
            prose: |-

              ### Frontmatter for the image example

              ```yaml
              section: media
              sectionClass: ""
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
                src: ""
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
              ```

              ### frontmatter properties

              The above example code shows how the section is composed of the text, ctas and the various media type options. The media type is selected by the `mediaType` property. 

          hasCtas: false
          ctas:
            - url: ""
              label: ""
              isExternal: true
              isButton: true
              buttonStyle: "primary"
      
      - icon:
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
            title: Media Section with icon
            header: "h2"
            subTitle: ""
            prose: ""
          hasCtas: false
          ctas:
            - url: ""
              label: ""
              isExternal: true
              isButton: true
              buttonStyle: "primary"
        
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
            title: Using an Icon instead
            header: "h1"
            subTitle: ""
            prose: Icons are stored in the `templates/icons` directory as Nunjucks files. The feather icon that is used here is from Feather Icons.
          hasCtas: true
          ctas:
            - url: "https://feathericons.com/"
              label: "Checkout Feather Icons"
              isExternal: true
              isButton: false
              buttonStyle: "primary"
              isVideoTrigger: false
              videoId: ""
          mediaType: Icon
          video:
            inline: false
            src: youtube
            id: ""
            tn: ""
            aspectRatio: ""
            caption:
          image:
            src: ""
            alt: ""
            aspectRatio: ""
            caption: ""
          lottieData:
            src: ""
            control:
              autoplay: true
              loop: true
          icon: "feather"
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
          marginBottom: false
          paddingTop: false
          paddingBottom: false
          backgroundColor: ""
          targetId: ""
          text:
            title: ""
            header: "h2"
            subTitle: ""
            prose: |-

              ### Frontmatter for the icon example

              ```yaml
              section: media
              sectionClass: ""
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
                title: Using an Icon instead
                header: "h1"
                subTitle: ""
                prose: Icons are stored in the `templates/icons` directory as Nunjucks files.
              hasCtas: false
              ctas:
                - url: ""
                  label: ""
                  isExternal: true
                  isButton: true
                  buttonStyle: "primary"
                  isVideoTrigger: false
                  videoId: ""
              mediaType: Icon
              video:
                inline: false
                src: youtube
                id: ""
                tn: ""
                aspectRatio: ""
                caption:
              image:
                src: ""
                alt: ""
                aspectRatio: ""
                caption: ""
              lottieData:
                src: ""
                control:
                  autoplay: true
                  loop: true
              icon: "feather"
              audio:
                bgImage: ""
                aspectRatio: ""
                ogg: ""
                mpeg: ""
                caption:
              ```

              ### frontmatter properties

              The above example code shows how the section is composed of the text, ctas and the various media type options. The media type is selected by the `mediaType` property. 

          hasCtas: false
          ctas:
            - url: ""
              label: ""
              isExternal: true
              isButton: true
              buttonStyle: "primary"
      
      - audio:
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
            title: Media Section with audio
            header: "h2"
            subTitle: ""
            prose: ""
          hasCtas: false
          ctas:
            - url: ""
              label: ""
              isExternal: true
              isButton: true
              buttonStyle: "primary"
        
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
            title: Using Audio
            header: "h1"
            subTitle: ... with an optional background image
            prose: The audio base component uses the responsive image base component to display a background image.
          hasCtas: false
          ctas:
            - url: ""
              label: ""
              isExternal: true
              isButton: true
              buttonStyle: "primary"
              isVideoTrigger: false
              videoId: ""
          mediaType: Audio
          video:
            inline: false
            src: youtube
            id: ""
            tn: ""
            aspectRatio: ""
            caption:
          image:
            src: ""
            alt: ""
            aspectRatio: ""
            caption: ""
          lottieData:
            src: ""
            control:
              autoplay: true
              loop: true
          icon: ""
          audio:
            bgImage: "v1649450685/metalsmith-components/trees-water_egdhlq.jpg"
            aspectRatio: "56.25"
            ogg: "v1649450616/metalsmith-components/assets/sample-ogg-file_zs5gnm.ogg"
            mpeg: "v1649450603/metalsmith-components/assets/sample-mp3-file_fus77z.mp3"
            caption:
        
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
            header: "h2"
            subTitle: ""
            prose: |-

              ### Frontmatter for the audio example

              ```yaml
              section: media
              sectionClass: ""
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
                title: Using Audio
                header: "h1"
                subTitle: ... with an optional background image
                prose: The audio base component uses the responsive image base component to display a background image.
              hasCtas: false
              ctas:
                - url: ""
                  label: ""
                  isExternal: true
                  isButton: true
                  buttonStyle: "primary"
                  isVideoTrigger: false
                  videoId: ""
              mediaType: Audio
              video:
                inline: false
                src: youtube
                id: ""
                tn: ""
                aspectRatio: ""
                caption:
              image:
                src: ""
                alt: ""
                aspectRatio: ""
                caption: ""
              lottieData:
                src: ""
                control:
                  autoplay: true
                  loop: true
              icon: ""
              audio:
                bgImage: "v1649450685/metalsmith-components/trees-water_egdhlq.jpg"
                aspectRatio: "56.25"
                ogg: "v1649450616/metalsmith-components/assets/sample-ogg-file_zs5gnm.ogg"
                mpeg: "v1649450603/metalsmith-components/assets/sample-mp3-file_fus77z.mp3"
                caption:
              ```

              ### frontmatter properties

              The above example code shows how the section is composed of the text, ctas and the various media type options. The media type is selected by the `mediaType` property. 

          hasCtas: false
          ctas:
            - url: ""
              label: ""
              isExternal: true
              isButton: true
              buttonStyle: "primary"

      - lottie:
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
            title: Media Section with Lottie animation
            header: "h2"
            subTitle: ""
            prose: ""
          hasCtas: false
          ctas:
            - url: ""
              label: ""
              isExternal: true
              isButton: true
              buttonStyle: "primary"
        
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
            title: Using a Lottie Animation
            header: "h1"
            subTitle: ""
            prose: Animated svg in Lottie format. Lottie is an open source animation file format that’s tiny, high quality, interactive, and can be manipulated at runtime. The top 500 apps on the App store now use Lottie to engage users and enhance conversions.
          hasCtas: true
          ctas:
            - url: "https://lottiefiles.com/lottie"
              label: "Read more about Lottie"
              isExternal: true
              isButton: true
              buttonStyle: "primary"
              isVideoTrigger: false
              videoId: ""
          mediaType: Lottie
          video:
            inline: false
            src: youtube
            id: ""
            tn: ""
            aspectRatio: ""
            caption:
          image:
            src: ""
            alt: ""
            aspectRatio: ""
            caption: ""
          lottieData:
            src: "/assets/animations/example3.json"
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
          marginBottom: false
          paddingTop: false
          paddingBottom: false
          backgroundColor: ""
          targetId: ""
          text:
            title: ""
            header: "h2"
            subTitle: ""
            prose: |-

              ### Frontmatter for the lottie animation example

              ```yaml
              section: media
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
                title: Using a Lottie Animation
                header: "h1"
                subTitle: ""
                prose: Animated svg in Lottie format. Lottie is an open source animation file format that’s tiny, high quality, interactive, and can be manipulated at runtime. The top 500 apps on the App store now use Lottie to engage users and enhance conversions.
              hasCtas: true
              ctas:
                - url: "https://lottiefiles.com/lottie"
                  label: "Read more about Lottie"
                  isExternal: true
                  isButton: true
                  buttonStyle: "primary"
                  isVideoTrigger: false
                  videoId: ""
              mediaType: Lottie
              video:
                inline: false
                src: youtube
                id: ""
                tn: ""
                aspectRatio: ""
                caption:
              image:
                src: ""
                alt: ""
                aspectRatio: ""
                caption: ""
              lottieData:
                src: "/assets/animations/example3.json"
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
              ```

              ### frontmatter properties

              The above example code shows how the section is composed of the text, ctas and the various media type options. The media type is selected by the `mediaType` property. 

          hasCtas: false
          ctas:
            - url: ""
              label: ""
              isExternal: true
              isButton: true
              buttonStyle: "primary"

      - video:
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
            title: Media Section with Video
            header: "h2"
            subTitle: ""
            prose: ""
          hasCtas: false
          ctas:
            - url: ""
              label: ""
              isExternal: true
              isButton: true
              buttonStyle: "primary"
        
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
            title: Show a video in a modal
            header: "h1"
            subTitle: ""
            prose: The video base component uses the responsive image base component to display a background image. Alternatively, the video may be shown inline.
          hasCtas: false
          ctas:
            - url: ""
              label: ""
              isExternal: true
              isButton: true
              buttonStyle: "primary"
              isVideoTrigger: false
              videoId: ""
          mediaType: Video
          video:
            inline: false
            src: youtube
            id: "eu5lv2Umn3M"
            tn: "v1649365834/metalsmith-components/deepPurple_nvqi3g.jpg"
            aspectRatio: "56.25"
            caption:
          image:
            src: ""
            alt: ""
            aspectRatio: ""
            caption: ""
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
          marginBottom: false
          paddingTop: false
          paddingBottom: false
          backgroundColor: ""
          targetId: ""
          text:
            title: ""
            header: "h2"
            subTitle: ""
            prose: |-

              ### Frontmatter for the video example

              ```yaml
              section: media
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
                title: Show a video in a modal
                header: "h1"
                subTitle: ""
                prose: The video base component uses the responsive image base component to display a background image. Alternatively, the video may be shown inline.
              hasCtas: false
              ctas:
                - url: ""
                  label: ""
                  isExternal: true
                  isButton: true
                  buttonStyle: "primary"
                  isVideoTrigger: false
                  videoId: ""
              mediaType: Video
              video:
                inline: false
                src: youtube
                id: "eu5lv2Umn3M"
                tn: "v1649365834/metalsmith-components/deepPurple_nvqi3g.jpg"
                aspectRatio: "56.25"
                caption:
              image:
                src: ""
                alt: ""
                aspectRatio: ""
                caption: ""
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
              ```

              ### frontmatter properties

              The above example code shows how the section is composed of the text, ctas and the various media type options. The media type is selected by the `mediaType` property. 

          hasCtas: false
          ctas:
            - url: ""
              label: ""
              isExternal: true
              isButton: true
              buttonStyle: "primary"
---
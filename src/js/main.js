/* global window, document */
// NOTE: main.js is called at the end of the document body - no DOMContentLoaded event needed

import loadResponsiveImage from "./modules/load-responsive-image";
import navigation from "./modules/navigation";
import modalVideo from "./modules/modal-video";
import inlineVideo from "./modules/inline-video";
import tabbed from "./modules/tabbed-sections";

function initPage() {
  // load the youTube video JS api
  // https://developers.google.com/youtube/iframe_api_reference
  // This code loads the IFrame Player API code asynchronously.
  const tag = document.createElement("script");
  tag.src = "https://www.youtube.com/iframe_api";
  const firstScriptTag = document.getElementsByTagName("script")[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // use a promise to manage the async onYouTubeIframeAPIReady function
  window.videoAPIReady = new Promise(resolve => {
    // upon YouTube API Ready we resolve the promise
    // we can then initialize video players in other modules
    // e.g. videoAPIReady.then(() => {})
    window.onYouTubeIframeAPIReady = () => resolve();
  });

  navigation.init();
  loadResponsiveImage.init();
  if (document.querySelector(".js-modal-video")) {
    modalVideo.init();
  }
  if (document.querySelector(".js-inline-video")) {
    inlineVideo.init();
  }
  if (document.querySelector(".js-tabbed-sections")) {
    tabbed.init();
  }
}

(function() {
  initPage();
})();

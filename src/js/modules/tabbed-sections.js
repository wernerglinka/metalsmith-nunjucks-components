/* global window, document, IntersectionObserver */
import debounce from "../utilities/debounce";

/**
 * Manage the tabbed sections display
 * @params {*} none
 * @return {function} initializes the tabbed sections display
 */
const tabbed = (function() {
  const getPanesWrapperHeight = (tabPanes, allTabs) => {
    // measure all tab panes height and attach height to element
    let tabPanesWrapperHeight = 0;
    tabPanes.forEach(tabPane => {
      const tabPaneHeight = tabPane.getBoundingClientRect().height;
      tabPane.style.height = `${tabPaneHeight}px`;
      tabPane.style.position = "absolute";
      tabPane.style.opacity = "0";

      // get the highest tab pane height
      tabPanesWrapperHeight = tabPanesWrapperHeight < tabPaneHeight ? tabPaneHeight : tabPanesWrapperHeight;
    });

    // get active tab target
    const activeTab = allTabs
      .querySelector(".active")
      .querySelector("a")
      .getAttribute("href");
    // get the active tab pane
    const activeTabPane = document.querySelector(activeTab);
    // make active tab pane visible
    activeTabPane.style.opacity = "1";

    return tabPanesWrapperHeight;
  };

  const init = () => {
    const allTabs = document.querySelector(".js-tabs");
    const tabPanes = document.querySelectorAll(".js-tab-content");
    const TabPanesWrapper = document.querySelector(".js-tab-content-wrapper");

    // make first tab/tab-pane active
    const firstTab = allTabs.querySelector(".js-tab");
    firstTab.classList.add("active");

    // set the height for the tab panes wrapper
    TabPanesWrapper.style.height = getPanesWrapperHeight(tabPanes, allTabs);

    // get href attribute from first tab
    const firstTabHref = firstTab.querySelector("a").getAttribute("href");
    // ... and make that corresponding pane visible
    // first set z-index to 1 for the first tab pane so it covers all other panes
    document.querySelector(firstTabHref).style.zIndex = "1";
    document.querySelector(firstTabHref).style.opacity = "1";
    document.querySelector(firstTabHref).classList.add("active");

    // now add transition style so all pane transitions are smooth
    tabPanes.forEach(tabPane => {
      tabPane.style.transition = "opacity 0.5s ease-in-out";
    });

    // add click event listener to all tabs
    allTabs.addEventListener("click", e => {
      e.preventDefault();
      e.stopImmediatePropagation();

      // get the clicked tab
      const clickedTab = e.target.closest(".js-tab");
      // get the href attribute from the clicked tab
      const clickedTabHref = clickedTab.querySelector("a").getAttribute("href");
      // get the clicked tab pane
      const clickedTabPane = document.querySelector(clickedTabHref);
      // get the active tab and its href attribute
      const activeTab = allTabs.querySelector(".active");
      const activeTabHref = activeTab.querySelector("a").getAttribute("href");
      // hide the active tab pane
      document.querySelector(activeTabHref).style.opacity = "0";
      // remove active class from active tab
      activeTab.classList.remove("active");
      // add active class to clicked tab
      clickedTab.classList.add("active");
      // show the clicked tab pane
      clickedTabPane.style.opacity = "1";
      // set z-index to 1 for the clicked tab pane so it covers all other panes
      clickedTabPane.style.zIndex = "1";
      // remove z-index from the active tab pane
      document.querySelector(activeTabHref).style.zIndex = "0";
    });

    // add resize event listener to the window to update the tab panes height
    window.addEventListener(
      "resize",
      debounce(() => {
        TabPanesWrapper.style.height = getPanesWrapperHeight(tabPanes, allTabs);
      }),
      500
    );
  };

  return { init };
})();

export default tabbed;

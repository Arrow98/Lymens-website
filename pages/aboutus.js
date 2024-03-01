const listOFIDS = [
    "about-us",
    "our-mission",
    "our-vision",
    "our-core-values",
    "our-history",
  ];
  function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
  
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  function doElementsTouch(element1, element2) {
    const rect1 = element1.getBoundingClientRect();
    const rect2 = element2.getBoundingClientRect();
  
    const horizontalOverlap =
      rect1.right >= rect2.left && rect1.left <= rect2.right;
  
    const verticalOverlap =
      rect1.bottom >= rect2.top && rect1.top <= rect2.bottom;
  
    return horizontalOverlap && verticalOverlap;
  }
  
  function isMobileOrTablet() {
    const maxWidthForMobileAndTablet = 998;
  
    return window.innerWidth <= maxWidthForMobileAndTablet;
  }
  
  $(document).ready(function () {
    if (isMobileOrTablet()) {
      $("h2").sticky();
    }
  
    const lastH2 = document.getElementById("our-history");
    const footerElement = document.getElementById("footer");
    const sidebarElement = document.getElementById("sidebar-links");
  
    window.addEventListener("scroll", function () {
      if (isMobileOrTablet()) {
        $("h2").sticky("refresh");
      }
  
      if (footerElement.getBoundingClientRect().top < 650) {
        sidebarElement.style.position = "relative";
      } else {
        sidebarElement.style.position = "fixed";
      }
  
      if (doElementsTouch(lastH2, footerElement)) {
        $("h2").css({ visibility: "hidden" });
      } else {
        $("h2").css({ visibility: "visible" });
      }
  
      let elementIsFound = false;
      for (const id of listOFIDS) {
        const element = document.getElementById(id);
        const elementSideBarLink = document.getElementById(id + "-sidebar-link");
  
        if (!elementIsFound && isElementInViewport(element)) {
          elementSideBarLink.parentElement.classList.add("psf-active-link");
          elementIsFound = true;
        } else {
          elementSideBarLink.parentElement.classList.remove("psf-active-link");
        }
      }
    });
  });
  
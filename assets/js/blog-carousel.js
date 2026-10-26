(() => {
  const carousels = document.querySelectorAll("[data-article-carousel]");

  if (!carousels.length || typeof window.Splide === "undefined") {
    return;
  }

  const mobileViewport = window.matchMedia("(max-width: 767px)");
  carousels.forEach((carousel) => {
    const splide = new window.Splide(carousel, {
      type: "loop",
      direction: "rtl",
      perPage: 3,
      perMove: 1,
      gap: "1.5rem",
      pagination: false,
      arrows: true,
      drag: true,
      autoplay: false,
      speed: 450,
      updateOnMove: true,
      keyboard: true,
      mediaQuery: "max",
      breakpoints: {
        1023: {
          perPage: 2,
        },
        767: {
          perPage: 1,
          focus: "center",
        },
      },
      i18n: {
        prev: "اسلاید قبلی",
        next: "اسلاید بعدی",
      },
    });

    const syncMobileActiveCard = () => {
      carousel
        .querySelectorAll(".article-card.is-active")
        .forEach((card) => card.classList.remove("is-active"));

      if (!mobileViewport.matches) {
        return;
      }

      const activeSlide = carousel.querySelector(
        ".splide__slide.is-active.is-visible:not([aria-hidden='true'])",
      );

      activeSlide?.querySelector(".article-card")?.classList.add("is-active");
    };

    [
      "mounted",
      "active",
      "inactive",
      "visible",
      "hidden",
      "moved",
      "updated",
      "resized",
      "refresh",
    ].forEach((eventName) => splide.on(eventName, syncMobileActiveCard));

    if (typeof mobileViewport.addEventListener === "function") {
      mobileViewport.addEventListener("change", syncMobileActiveCard);
    } else {
      mobileViewport.addListener(syncMobileActiveCard);
    }

    splide.mount();
  });
})();

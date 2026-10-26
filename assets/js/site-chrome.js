(() => {
  // The production origin is centralized here so static deployments under
  // /pre-blog/ never resolve Donyaro application links against GitHub Pages.
  const SITE_ORIGIN = "https://donyaro.ir";
  const scriptSource = document.currentScript?.src;
  const assetRoot = scriptSource
    ? new URL("../", scriptSource).href
    : new URL("./assets/", document.baseURI).href;
  const siteHref = (path) => `${SITE_ORIGIN}${path}`;

  const userIcon = `
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10"></circle>
      <circle cx="12" cy="10" r="3"></circle>
      <path d="M6.7 19.4c.9-2.5 2.7-3.8 5.3-3.8s4.4 1.3 5.3 3.8"></path>
    </svg>`;
  const menuIcon = `
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M4 6h16M4 12h16M4 18h16"></path>
    </svg>`;
  const closeIcon = `
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="m6 6 12 12M18 6 6 18"></path>
    </svg>`;

  const renderHeader = (host) => {
    host.innerHTML = `
      <header class="site-navbar" data-site-navbar>
        <div class="navbar-container">
          <div class="site-navbar__primary">
            <a class="site-navbar__logo" href="${siteHref("/")}" aria-label="صفحه اصلی دنیارو">
              <img src="${assetRoot}images/logo.webp" alt="لوگو دنیارو" width="140" height="70" />
            </a>

            <nav class="site-navbar__nav" aria-label="پروازهای دنیارو">
              <a class="site-navbar__link" href="${siteHref("/flights/domestic")}">
                <span class="site-navbar__icon site-navbar__icon--domestic" aria-hidden="true"></span>
                <span>پرواز داخلی</span>
              </a>
              <a class="site-navbar__link" href="${siteHref("/flights/international")}">
                <span class="site-navbar__icon site-navbar__icon--international" aria-hidden="true"></span>
                <span>پرواز خارجی</span>
              </a>
            </nav>
          </div>

          <div class="site-navbar__desktop-actions">
            <a class="site-navbar__phone" href="tel:+982126500000" aria-label="تماس با دنیارو به شماره ۰۲۱۲۶۵۰۰۰۰۰">
              <span class="site-navbar__phone-number">02126500000</span>
              <span class="site-navbar__icon site-navbar__icon--phone" aria-hidden="true"></span>
            </a>
            <a class="site-navbar__login" href="${siteHref("/profile")}">ورود / ثبت نام</a>
          </div>

          <div class="site-navbar__mobile-actions">
            <a class="site-navbar__account" href="${siteHref("/profile")}" aria-label="حساب کاربری">
              ${userIcon}
            </a>
            <button
              class="site-navbar__menu-trigger"
              type="button"
              aria-label="باز کردن منو"
              aria-expanded="false"
              aria-controls="mobile-navigation"
              data-mobile-menu-trigger
            >
              <span class="site-navbar__menu-icon site-navbar__menu-icon--open">${menuIcon}</span>
              <span class="site-navbar__menu-icon site-navbar__menu-icon--close">${closeIcon}</span>
            </button>
          </div>
        </div>
      </header>

      <nav
        class="mobile-navigation"
        id="mobile-navigation"
        aria-label="منوی اصلی"
        aria-hidden="true"
        inert
        data-mobile-navigation
      >
        <ul>
          <li>
            <a href="${siteHref("/flights/international")}" data-mobile-menu-link>
              <span class="site-navbar__icon site-navbar__icon--international" aria-hidden="true"></span>
              <span>پرواز خارجی</span>
            </a>
          </li>
          <li>
            <a href="${siteHref("/flights/domestic")}" data-mobile-menu-link>
              <span class="site-navbar__icon site-navbar__icon--domestic" aria-hidden="true"></span>
              <span>پرواز داخلی</span>
            </a>
          </li>
          <li>
            <a href="${siteHref("/profile")}" data-mobile-menu-link>
              <span class="mobile-navigation__inline-icon" aria-hidden="true">${userIcon}</span>
              <span>حساب کاربری</span>
            </a>
          </li>
          <li>
            <a href="tel:+982126500000" data-mobile-menu-link>
              <span class="site-navbar__icon site-navbar__icon--phone" aria-hidden="true"></span>
              <span>پشتیبانی</span>
            </a>
          </li>
        </ul>
      </nav>`;
  };

  const footerHeading = (title, level = "h3") => `
    <div class="site-footer__heading">
      <${level}>${title}</${level}>
      <span class="site-footer__segments" aria-hidden="true">
        <i></i><i></i><i></i><i></i>
      </span>
    </div>`;

  const renderFooter = (footer) => {
    footer.innerHTML = `
      <div class="site-footer__inner">
        <a class="site-footer__logo" href="${siteHref("/")}" aria-label="صفحه اصلی دنیارو">
          <img src="${assetRoot}images/logo.webp" alt="لوگو دنیارو" width="140" height="70" loading="lazy" />
        </a>

        <div class="site-footer__content-grid">
          <div class="site-footer__about">
            <p>
              «دنیارو همیشه همراه شماست تا خرید بلیط هواپیما را ساده، سریع و با بهترین قیمت تجربه کنید. از جست‌وجو و مقایسه تا رزرو و پیگیری پرواز، همه چیز در دنیارو به آسانی انجام می‌شود.
              <br />
              ۷ روز هفته و ۲۴ ساعت شبانه‌روز پاسخگوی شما هستیم تا خیال‌تان از هر نظر راحت باشد و سفری آسان، امن و مقرون به‌صرفه را تجربه کنید.»
            </p>
          </div>

          <div class="site-footer__link-columns">
            <section class="site-footer__link-column">
              ${footerHeading("خدمات ما")}
              <ul>
                <li>
                  <a href="${siteHref("/flights/domestic")}">
                    <span class="footer-label--desktop">خرید بلیط پرواز داخلی</span>
                    <span class="footer-label--mobile">بلیط پرواز داخلی</span>
                  </a>
                </li>
                <li>
                  <a href="${siteHref("/flights/international")}">
                    <span class="footer-label--desktop">خرید بلیط پرواز خارجی</span>
                    <span class="footer-label--mobile">بلیط پرواز خارجی</span>
                  </a>
                </li>
              </ul>
            </section>

            <section class="site-footer__link-column">
              ${footerHeading("اطلاعات تکمیلی")}
              <ul>
                <li>
                  <a class="footer-link--desktop" href="${siteHref("/rules/common")}">قوانین و مقررات</a>
                  <a class="footer-link--mobile" href="${siteHref("/rules")}">قوانین و مقررات</a>
                </li>
                <li>
                  <a class="footer-link--desktop" href="${siteHref("/faq/common")}">سوالات متداول</a>
                  <a class="footer-link--mobile" href="${siteHref("/faq")}">سوالات متداول</a>
                </li>
                <li><a href="${siteHref("/departure-tax")}">عوارض خروج از کشور</a></li>
              </ul>
            </section>

            <section class="site-footer__link-column">
              ${footerHeading("دنیارو")}
              <ul>
                <li><a href="${siteHref("/about-us")}">درباره ما</a></li>
                <li><a href="${siteHref("/contact-us")}">تماس با ما</a></li>
                <li><span class="site-footer__disabled-link" aria-disabled="true">فرصت های شغلی</span></li>
              </ul>
            </section>
          </div>

          <section class="site-footer__contact">
            ${footerHeading("تماس با ما")}
            <div class="site-footer__contact-list">
              <div class="site-footer__contact-item">
                <span class="site-footer__contact-icon site-footer__contact-icon--support" aria-hidden="true"></span>
                <p>
                  تلفن پشتیبانی:
                  <a href="tel:02126500000">02126500000</a>
                  <span aria-hidden="true"> - </span>
                  <a href="tel:09191112606">09191112606</a>
                </p>
              </div>
              <div class="site-footer__contact-item">
                <span class="site-footer__contact-icon site-footer__contact-icon--location" aria-hidden="true"></span>
                <a href="https://maps.app.goo.gl/UTxfhd4wrgNSd7jo7" target="_blank" rel="noopener noreferrer">
                  تهران، یادگار امام (ره)، تقاطع شهید چمران، هتل پارسیان اوین
                </a>
              </div>
            </div>
          </section>

          <section class="site-footer__certificates">
            ${footerHeading("مجوزها")}
            <div class="site-footer__certificate-list">
              <a class="site-footer__certificate" href="https://logo.samandehi.ir/Verify.aspx?id=114566&amp;p=rfthrfthaodsdshwgvkagvka" target="_blank" rel="noopener noreferrer" aria-label="اعتبارسنجی نشان ساماندهی">
                <img src="https://logo.samandehi.ir/logo.aspx?id=114566&amp;p=nbpdnbpdshwlujynwlbqwlbq" alt="ساماندهی" loading="lazy" />
              </a>
              <a class="site-footer__certificate" href="https://trustseal.enamad.ir/?id=745432&amp;Code=JoTL8N0MVs7hMGFVl560wMTLdtW5c1Ei" target="_blank" rel="noopener noreferrer" referrerpolicy="origin" aria-label="اعتبارسنجی نماد اعتماد الکترونیکی">
                <img src="https://trustseal.enamad.ir/logo.aspx?id=745432&amp;Code=JoTL8N0MVs7hMGFVl560wMTLdtW5c1Ei" alt="نماد اعتماد الکترونیکی" loading="lazy" referrerpolicy="origin" />
              </a>
              <a class="site-footer__certificate" href="https://caa.gov.ir/" target="_blank" rel="noopener noreferrer" aria-label="سازمان هواپیمایی کشوری">
                <img src="${assetRoot}certificates/state-airline.svg" alt="سازمان هواپیمایی کشوری" loading="lazy" />
              </a>
              <a class="site-footer__certificate" href="https://farasa.cao.ir/sysworkflow/fa/modern/3810212626028ab03488017019616799/6464336316028ab04e3c618028352200.php" target="_blank" rel="noopener noreferrer" aria-label="سامانه حقوق مسافر">
                <img src="${assetRoot}certificates/passenger-rights.svg" alt="حقوق مسافر" loading="lazy" />
              </a>
              <a class="site-footer__certificate" href="https://www.aira.ir/" target="_blank" rel="noopener noreferrer" aria-label="انجمن شرکت‌های هواپیمایی ایران">
                <img src="${assetRoot}certificates/aira.png" alt="انجمن شرکت‌های هواپیمایی ایران" loading="lazy" />
              </a>
              <a class="site-footer__certificate" href="https://qr.mojavez.ir/trace/6461615" target="_blank" rel="noopener noreferrer" aria-label="استعلام مجوز ۶۴۶۱۶۱۵">
                <img src="${assetRoot}certificates/mojavez.svg" alt="درگاه ملی مجوزها" loading="lazy" />
              </a>
              <a class="site-footer__certificate" href="https://qr.mojavez.ir/trace/6461543" target="_blank" rel="noopener noreferrer" aria-label="استعلام مجوز ۶۴۶۱۵۴۳">
                <img src="${assetRoot}certificates/mojavez.svg" alt="درگاه ملی مجوزها" loading="lazy" />
              </a>
            </div>
          </section>
        </div>

        <nav class="site-footer__quick-links" aria-label="پیوندهای سریع">
          <a href="${siteHref("/flights/airports")}">فرودگاه ها</a><span>|</span>
          <a href="${siteHref("/flights/charter")}">بلیط چارتر</a><span>|</span>
          <a href="${siteHref("/flights/airline/mahan")}">ماهان</a><span>|</span>
          <a href="${siteHref("/flights/airline/iranair")}">ایران ایر</a><span>|</span>
          <a href="${siteHref("/flights/airline/zagros")}">زاگرس</a><span>|</span>
          <a href="${siteHref("/flights/airline/qeshmair")}">قشم ایر</a><span>|</span>
          <a href="${siteHref("/flights/airline/ata")}">آتا</a><span>|</span>
          <a href="${siteHref("/flights/domestic/tehran")}">تهران</a><span>|</span>
          <a href="${siteHref("/flights/domestic/shiraz")}">شیراز</a><span>|</span>
          <a href="${siteHref("/flights/domestic/isfahan")}">اصفهان</a><span>|</span>
          <a href="${siteHref("/flights/domestic/mashhad")}">مشهد</a><span>|</span>
          <a href="${siteHref("/flights/domestic/qeshm")}">قشم</a><span>|</span>
          <a href="${siteHref("/flights/domestic/yazd")}">یزد</a><span>|</span>
          <a href="${siteHref("/flights/domestic/kish")}">کیش</a><span>|</span>
          <a href="${siteHref("/flights/domestic/tabriz")}">تبریز</a><span>|</span>
          <a href="${siteHref("/flights/domestic/kerman")}">کرمان</a><span>|</span>
          <a href="${siteHref("/flights/international/istanbul")}">استانبول</a>
        </nav>

        <hr />

        <div class="site-footer__bottom">
          <p>
            <span class="footer-copyright--desktop">کلیه حقوق این سایت محفوظ و متعلق به شرکت خدمات مسافرت هوایی و جهانگردی میامی گشت می باشد.</span>
            <span class="footer-copyright--mobile">کلیه حقوق این سایت محفوظ و متعلق به شرکت خدمات مسافرت هوایی و جهانگردی میامی گشت می‌باشد.</span>
          </p>
          <div class="site-footer__socials" aria-label="شبکه‌های اجتماعی دنیارو">
            <a href="mailto:support@donyaro.ir" target="_blank" rel="noopener noreferrer" aria-label="ایمیل دنیارو"><span class="site-footer__social-icon site-footer__social-icon--email" aria-hidden="true"></span></a>
            <a href="https://api.whatsapp.com/send?phone=9191112606" target="_blank" rel="noopener noreferrer" aria-label="واتساپ دنیارو"><span class="site-footer__social-icon site-footer__social-icon--whatsapp" aria-hidden="true"></span></a>
            <a href="https://www.instagram.com/donyaro_official/" target="_blank" rel="noopener noreferrer" aria-label="اینستاگرام دنیارو"><span class="site-footer__social-icon site-footer__social-icon--instagram" aria-hidden="true"></span></a>
            <a href="https://t.me/donyaro_officiall" target="_blank" rel="noopener noreferrer" aria-label="تلگرام دنیارو"><span class="site-footer__social-icon site-footer__social-icon--telegram" aria-hidden="true"></span></a>
          </div>
        </div>
      </div>`;
  };

  document.querySelectorAll("[data-site-header]").forEach(renderHeader);
  document.querySelectorAll("[data-site-footer]").forEach(renderFooter);

  const header = document.querySelector("[data-site-navbar]");
  const menu = document.querySelector("[data-mobile-navigation]");
  const menuTrigger = document.querySelector("[data-mobile-menu-trigger]");

  if (!header || !menu || !menuTrigger) return;

  const mobileViewport = window.matchMedia("(max-width: 767px)");
  let isMenuOpen = false;
  let lockedScrollY = 0;
  let previousScrollY = 0;
  let animationFrameId = null;
  let previousBodyStyles = null;

  const getClampedScrollY = () => {
    const maximumScrollY = Math.max(
      0,
      document.documentElement.scrollHeight - window.innerHeight,
    );

    return Math.min(maximumScrollY, Math.max(0, window.scrollY));
  };

  const setMenuState = (open, { restoreFocus = false } = {}) => {
    if (isMenuOpen === open) return;

    isMenuOpen = open;
    menuTrigger.setAttribute("aria-expanded", String(open));
    menuTrigger.setAttribute("aria-label", open ? "بستن منو" : "باز کردن منو");
    menu.setAttribute("aria-hidden", String(!open));
    menu.toggleAttribute("inert", !open);
    menu.classList.toggle("mobile-navigation--open", open);
    document.body.classList.toggle("site-menu-open", open);

    if (open) {
      header.classList.remove("site-navbar--hidden");
      lockedScrollY = getClampedScrollY();
      previousBodyStyles = {
        position: document.body.style.position,
        top: document.body.style.top,
        width: document.body.style.width,
        overflow: document.body.style.overflow,
      };
      document.body.style.position = "fixed";
      document.body.style.top = `-${lockedScrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
      menu.querySelector("a")?.focus({ preventScroll: true });
      return;
    }

    if (previousBodyStyles) {
      document.body.style.position = previousBodyStyles.position;
      document.body.style.top = previousBodyStyles.top;
      document.body.style.width = previousBodyStyles.width;
      document.body.style.overflow = previousBodyStyles.overflow;
      previousBodyStyles = null;
      window.scrollTo(0, lockedScrollY);
      previousScrollY = lockedScrollY;
    }

    if (restoreFocus) {
      menuTrigger.focus({ preventScroll: true });
    }
  };

  menuTrigger.addEventListener("click", () => {
    setMenuState(!isMenuOpen, { restoreFocus: isMenuOpen });
  });

  menu.addEventListener("click", (event) => {
    if (event.target.closest("[data-mobile-menu-link]")) {
      setMenuState(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && isMenuOpen) {
      setMenuState(false, { restoreFocus: true });
    }
  });

  const handleViewportChange = () => {
    if (!mobileViewport.matches && isMenuOpen) {
      setMenuState(false);
    }
  };

  if (typeof mobileViewport.addEventListener === "function") {
    mobileViewport.addEventListener("change", handleViewportChange);
  } else {
    mobileViewport.addListener(handleViewportChange);
  }

  const updateHeaderVisibility = () => {
    animationFrameId = null;

    if (isMenuOpen) return;

    const currentScrollY = getClampedScrollY();
    const scrollDelta = currentScrollY - previousScrollY;
    const threshold = mobileViewport.matches ? 120 : 200;
    previousScrollY = currentScrollY;

    if (currentScrollY <= threshold) {
      header.classList.remove("site-navbar--hidden");
      return;
    }

    if (Math.abs(scrollDelta) <= 2) return;

    header.classList.toggle("site-navbar--hidden", scrollDelta > 0);
  };

  const handleScroll = () => {
    if (animationFrameId !== null) return;
    animationFrameId = window.requestAnimationFrame(updateHeaderVisibility);
  };

  previousScrollY = getClampedScrollY();
  header.classList.toggle(
    "site-navbar--hidden",
    previousScrollY > (mobileViewport.matches ? 120 : 200),
  );
  window.addEventListener("scroll", handleScroll, { passive: true });
})();

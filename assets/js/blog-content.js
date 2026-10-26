(() => {
  const scriptSource = document.currentScript?.src || "assets/js/blog-content.js";
  const assetRoot = new URL("../", scriptSource).href;

  const categories = {
    latest: {
      title: "جدیدترین مقالات",
      sectionId: "latest-articles",
    },
    "travel-guide": {
      title: "راهنمای سفر",
      sectionId: "travel-guide",
    },
    "iran-tourism": {
      title: "ایرانگردی",
      sectionId: "iran-tourism",
    },
    "world-tourism": {
      title: "جهانگردی",
      sectionId: "world-tourism",
    },
  };

  const articles = {
    "travel-to-istanbul": {
      title: "راهنمای سفر به استانبول؛ نکات مهم قبل از سفر",
      titleLead: "راهنمای سفر به استانبول؛",
      titleAccent: "نکات مهم قبل از سفر",
      category: "travel-guide",
      image: "istanbul.jpg",
      alt: "مسجد اورتاکوی و تنگه بسفر در استانبول",
      excerpt: "از انتخاب زمان مناسب تا شناخت محله‌ها و حمل‌ونقل شهری، برای سفر به استانبول آماده شوید.",
      lead: "استانبول شهری میان آسیا و اروپا است که محله‌های تاریخی، بازارهای رنگارنگ و ساحل بسفر را کنار هم دارد. برنامه‌ریزی درست کمک می‌کند زمان سفر را بهتر مدیریت کنید.",
      points: [
        "برای بازدید از بخش‌های مختلف شهر، برنامه هر روز را بر اساس یک منطقه تنظیم کنید.",
        "استانبول‌کارت برای استفاده از مترو، تراموا، اتوبوس و کشتی‌های شهری کاربردی است.",
        "برای گشت‌وگذار در محله‌های قدیمی، کفش راحت و زمان کافی در نظر بگیرید.",
      ],
    },
    "best-time-dubai": {
      title: "بهترین زمان سفر به دبی؛ راهنمای آب‌وهوا و هزینه‌ها",
      titleLead: "بهترین زمان سفر به دبی؛",
      titleAccent: "راهنمای آب‌وهوا و هزینه‌ها",
      category: "travel-guide",
      image: "dubai.jpg",
      alt: "نمای شهر دبی و برج خلیفه",
      excerpt: "فصل مناسب سفر به دبی را با توجه به آب‌وهوا، رویدادها و بودجه سفرتان انتخاب کنید.",
      lead: "دبی در بیشتر روزهای سال آفتابی است، اما دما و هزینه سفر در فصل‌های مختلف تفاوت زیادی دارد. انتخاب زمان مناسب به نوع تفریح و بودجه شما بستگی دارد.",
      points: [
        "ماه‌های خنک‌تر برای پیاده‌روی، ساحل و برنامه‌های فضای باز مناسب‌تر هستند.",
        "در زمان نمایشگاه‌ها و تعطیلات، رزرو زودتر هتل و پرواز انتخاب‌های بیشتری در اختیارتان می‌گذارد.",
        "برای سفر اقتصادی‌تر، فصل‌های خلوت‌تر و پیشنهادهای ترکیبی پرواز و هتل را بررسی کنید.",
      ],
    },
    "kish-attractions": {
      title: "جاهای دیدنی کیش؛ از سواحل آرام تا تفریحات هیجان‌انگیز",
      titleLead: "جاهای دیدنی کیش؛",
      titleAccent: "از سواحل آرام تا تفریحات هیجان‌انگیز",
      category: "iran-tourism",
      image: "kish.jpg",
      alt: "ساحل جزیره کیش",
      excerpt: "با دیدنی‌های طبیعی، تاریخی و تفریحی کیش آشنا شوید و برنامه سفر متنوعی بچینید.",
      lead: "کیش علاوه بر ساحل و تفریحات دریایی، دیدنی‌های تاریخی و مسیرهای آرام برای دوچرخه‌سواری دارد. با یک برنامه متعادل می‌توانید تجربه‌های متنوع جزیره را ببینید.",
      points: [
        "ساعات خنک صبح و غروب را برای ساحل‌گردی و فعالیت‌های فضای باز انتخاب کنید.",
        "برای تفریحات دریایی محبوب، ظرفیت و شرایط آب‌وهوایی روز سفر را از قبل بررسی کنید.",
        "بازدید از شهر زیرزمینی کاریز و شهر باستانی حریره را در برنامه قرار دهید.",
      ],
    },
    "flight-ticket-guide": {
      title: "راهنمای خرید بلیط هواپیما؛ نکاتی برای انتخاب بهتر",
      titleLead: "راهنمای خرید بلیط هواپیما؛",
      titleAccent: "نکاتی برای انتخاب بهتر",
      category: "travel-guide",
      image: "flight.jpg",
      alt: "نمای بال هواپیما در میان ابرها",
      excerpt: "برای انتخاب پرواز مناسب، قیمت، قوانین بلیط و زمان حرکت را با دقت مقایسه کنید.",
      lead: "خرید بلیط هواپیما فقط به پیدا کردن کمترین قیمت محدود نمی‌شود. ساعت پرواز، میزان بار، قوانین تغییر و استرداد و موقعیت فرودگاه بر کیفیت سفر اثر دارند.",
      points: [
        "پیش از پرداخت، نام مسافر و تاریخ و مسیر پرواز را دوباره بررسی کنید.",
        "قوانین بار و استرداد در پروازهای سیستمی و چارتر می‌تواند متفاوت باشد.",
        "زمان رفت‌وآمد تا فرودگاه و فاصله مناسب برای پروازهای اتصال‌دار را در نظر بگیرید.",
      ],
    },
    "travel-to-tbilisi": {
      title: "راهنمای سفر به تفلیس؛ شهری برای فرهنگ و طبیعت",
      titleLead: "راهنمای سفر به تفلیس؛",
      titleAccent: "شهری برای فرهنگ و طبیعت",
      category: "world-tourism",
      image: "tbilisi.jpg",
      alt: "نمای شهر تفلیس در گرجستان",
      excerpt: "محله‌های قدیمی، غذاهای محلی و چشم‌اندازهای تفلیس را در یک برنامه سفر جمع‌وجور بشناسید.",
      lead: "تفلیس با کوچه‌های قدیمی، معماری متنوع و کافه‌های کوچک، مقصدی مناسب برای یک سفر شهری است. بخش زیادی از دیدنی‌های مرکز شهر را می‌توان پیاده کشف کرد.",
      points: [
        "برای شناخت بافت تاریخی، گشت را از تفلیس قدیم و حمام‌های گوگردی آغاز کنید.",
        "تله‌کابین ناریکالا چشم‌انداز گسترده‌ای از رود کورا و شهر دارد.",
        "برای سفرهای یک‌روزه اطراف تفلیس، مسیر و زمان برگشت را از پیش مشخص کنید.",
      ],
    },
    "affordable-travel-destinations": {
      title: "مقاصد سفر اقتصادی؛ تجربه‌های تازه با بودجه کمتر",
      titleLead: "مقاصد سفر اقتصادی؛",
      titleAccent: "تجربه‌های تازه با بودجه کمتر",
      category: "world-tourism",
      image: "georgia.jpg",
      alt: "چشم‌انداز کوهستانی گرجستان",
      excerpt: "با انتخاب مقصد و زمان مناسب، هزینه‌های اقامت، رفت‌وآمد و تفریح را بهتر مدیریت کنید.",
      lead: "سفر اقتصادی به معنی حذف تجربه‌های خوب نیست. انتخاب مقصد، فصل خلوت و برنامه‌ریزی برای هزینه‌های روزانه می‌تواند بودجه سفر را کنترل‌پذیر کند.",
      points: [
        "هزینه کلی مقصد را با احتساب اقامت، حمل‌ونقل و خوراک مقایسه کنید.",
        "سفر در فصل‌های کم‌تقاضا معمولاً انتخاب‌های بیشتر و قیمت‌های مناسب‌تری دارد.",
        "برای جابه‌جایی درون‌شهری، حمل‌ونقل عمومی و مسیرهای پیاده را از قبل بشناسید.",
      ],
    },
    "isfahan-shopping": {
      title: "بهترین مراکز خرید اصفهان؛ از بازارهای سنتی تا پاساژهای مدرن",
      titleLead: "بهترین مراکز خرید اصفهان؛",
      titleAccent: "از بازارهای سنتی تا پاساژهای مدرن",
      category: "iran-tourism",
      image: "isfahan.jpg",
      alt: "معماری تاریخی اصفهان",
      excerpt: "بازارهای قدیمی و مراکز خرید جدید اصفهان را برای خرید سوغات و گردش شهری بشناسید.",
      lead: "خرید در اصفهان فرصتی برای دیدن صنایع‌دستی، معماری بازارهای تاریخی و مراکز تجاری جدید است. انتخاب محل خرید به سلیقه، زمان و محدوده اقامت شما بستگی دارد.",
      points: [
        "برای صنایع‌دستی و سوغات، بازار بزرگ اصفهان و حجره‌های اطراف میدان نقش جهان را ببینید.",
        "مراکز خرید جدید گزینه‌های متنوعی برای پوشاک، سرگرمی و غذا دارند.",
        "زمان بازدید را با فاصله محل اقامت و ساعات شلوغی بازار هماهنگ کنید.",
      ],
    },
    "best-time-istanbul": {
      title: "بهترین زمان سفر به استانبول؛ انتخاب فصل مناسب",
      titleLead: "بهترین زمان سفر به استانبول؛",
      titleAccent: "انتخاب فصل مناسب",
      category: "travel-guide",
      image: "istanbul.jpg",
      alt: "مسجد اورتاکوی و تنگه بسفر در استانبول",
      excerpt: "آب‌وهوا، شلوغی و هزینه‌ها را مقایسه کنید تا فصل مناسب سفر به استانبول را پیدا کنید.",
      lead: "هر فصل در استانبول حال‌وهوای متفاوتی دارد. روزهای معتدل برای گشت شهری مناسب‌اند و فصل‌های خلوت‌تر می‌توانند هزینه سفر را کاهش دهند.",
      points: [
        "بهار و اوایل پاییز معمولاً برای پیاده‌روی و بازدید از فضای باز دلپذیرتر هستند.",
        "در فصل‌های پرتقاضا، هتل و پرواز را زودتر رزرو کنید.",
        "پیش‌بینی هوا را نزدیک سفر بررسی کنید و برای بارش‌های ناگهانی آماده باشید.",
      ],
    },
    "best-hotels-kish": {
      title: "بهترین هتل‌های کیش برای اقامتی آرام و به‌یادماندنی",
      titleLead: "بهترین هتل‌های کیش؛",
      titleAccent: "اقامتی آرام و به‌یادماندنی",
      category: "iran-tourism",
      image: "hotel.jpg",
      alt: "اتاق روشن و آرام هتل",
      excerpt: "موقعیت، امکانات و بودجه را بسنجید تا هتل مناسب سفر خود به کیش را انتخاب کنید.",
      lead: "هتل مناسب در کیش باید با هدف سفر شما هماهنگ باشد. نزدیکی به ساحل، مراکز خرید یا تفریحات و همچنین خدمات رفت‌وآمد از معیارهای مهم انتخاب هستند.",
      points: [
        "موقعیت هتل را نسبت به برنامه روزانه و مسیرهای رفت‌وآمد مقایسه کنید.",
        "امکانات اتاق، وعده‌های غذایی و خدمات ترانسفر را پیش از رزرو بررسی کنید.",
        "نظرهای تازه مسافران دید واقع‌بینانه‌تری از کیفیت خدمات ارائه می‌کنند.",
      ],
    },
    "istanbul-attractions": {
      title: "جاهای دیدنی استانبول؛ از محله‌های تاریخی تا ساحل بسفر",
      titleLead: "جاهای دیدنی استانبول؛",
      titleAccent: "از محله‌های تاریخی تا ساحل بسفر",
      category: "world-tourism",
      image: "istanbul.jpg",
      alt: "مسجد اورتاکوی در ساحل بسفر استانبول",
      excerpt: "دیدنی‌های تاریخی و محله‌های زنده استانبول را برای یک برنامه چندروزه دسته‌بندی کنید.",
      lead: "استانبول مجموعه‌ای از بناهای تاریخی، محله‌های پرجنب‌وجوش و مسیرهای ساحلی است. دسته‌بندی دیدنی‌ها بر اساس منطقه از رفت‌وآمدهای اضافه جلوگیری می‌کند.",
      points: [
        "برای دیدن ایاصوفیه، مسجد آبی و کاخ توپکاپی یک روز کامل به منطقه تاریخی اختصاص دهید.",
        "کشتی‌های شهری راهی ساده برای تماشای بسفر و جابه‌جایی میان دو سوی شهر هستند.",
        "محله‌های گالاتا، بالات و کادیکوی هرکدام فضای متفاوتی برای پیاده‌روی دارند.",
      ],
    },
  };

  const lists = {
    latest: [
      "travel-to-istanbul",
      "best-time-dubai",
      "kish-attractions",
      "flight-ticket-guide",
      "travel-to-tbilisi",
      "affordable-travel-destinations",
    ],
    "travel-guide": ["travel-to-istanbul", "best-time-dubai", "best-time-istanbul"],
    "iran-tourism": ["kish-attractions", "isfahan-shopping", "best-hotels-kish"],
    "world-tourism": ["istanbul-attractions", "affordable-travel-destinations", "travel-to-tbilisi"],
  };

  const articleHref = (slug) => `single.html?article=${encodeURIComponent(slug)}`;
  const categoryHref = (key) => `category.html?category=${encodeURIComponent(key)}`;

  const articleCardMarkup = (slug) => {
    const article = articles[slug];
    const category = categories[article.category];
    const href = articleHref(slug);

    return `
      <article class="article-card">
        <img class="article-card__image" src="${assetRoot}images/${article.image}" alt="${article.alt}" loading="lazy">
        <a class="article-card__image-link" href="${href}" aria-label="خواندن ${article.title}"></a>
        <div class="article-card__gradient" aria-hidden="true"></div>
        <a class="article-card__category" href="${categoryHref(article.category)}">${category.title}</a>
        <div class="article-card__content">
          <h2 class="article-card__title"><a class="article-card__title-link" href="${href}">${article.title}</a></h2>
          <p class="article-card__excerpt">${article.excerpt}</p>
        </div>
        <a class="article-card__cta" href="${href}" aria-label="ادامه نوشته ${article.title}">
          <span>ادامه<br>نوشته</span>
          <img src="${assetRoot}icons/arrow-left.svg" alt="">
        </a>
      </article>`;
  };

  const carouselSectionMarkup = (categoryKey) => {
    const category = categories[categoryKey];
    const cards = lists[categoryKey]
      .map((slug) => `<li class="splide__slide">${articleCardMarkup(slug)}</li>`)
      .join("");

    return `
      <section class="blog-card-preview article-section splide" id="${category.sectionId}" data-article-carousel data-article-list="${categoryKey}" aria-label="${category.title}">
        <div class="article-section__header">
          <h2 class="heading blog-card-preview__heading">${category.title}</h2>
          <a class="article-section__all" href="${categoryHref(categoryKey)}">
            مشاهده همه
            <img src="${assetRoot}icons/arrow-left.svg" alt="">
          </a>
        </div>
        <div class="article-section__carousel">
          <div class="splide__arrows blog-card-preview__arrows">
            <button class="splide__arrow splide__arrow--prev blog-card-preview__arrow" type="button" aria-label="مقاله قبلی">
              <img src="${assetRoot}icons/arrow-left.svg" alt="">
            </button>
            <button class="splide__arrow splide__arrow--next blog-card-preview__arrow" type="button" aria-label="مقاله بعدی">
              <img src="${assetRoot}icons/arrow-left.svg" alt="">
            </button>
          </div>
          <div class="splide__track">
            <ul class="splide__list">${cards}</ul>
          </div>
        </div>
      </section>`;
  };

  const enhanceCard = (card, slug) => {
    const article = articles[slug];
    if (!article) return;

    const href = articleHref(slug);
    const image = card.querySelector(":scope > .article-card__image");
    const gradient = card.querySelector(":scope > .article-card__gradient");
    const title = card.querySelector(".article-card__content h2");
    const excerpt = card.querySelector(".article-card__content p");
    const cta = card.querySelector(":scope > .article-card__cta");

    if (image) {
      image.src = `${assetRoot}images/${article.image}`;
      image.alt = article.alt;
    }

    if (!card.querySelector(":scope > .article-card__image-link")) {
      const imageLink = document.createElement("a");
      imageLink.className = "article-card__image-link";
      imageLink.href = href;
      imageLink.setAttribute("aria-label", `خواندن ${article.title}`);
      gradient?.before(imageLink);
    }

    if (!card.querySelector(":scope > .article-card__category")) {
      const categoryLink = document.createElement("a");
      categoryLink.className = "article-card__category";
      categoryLink.href = categoryHref(article.category);
      categoryLink.textContent = categories[article.category].title;
      gradient?.after(categoryLink);
    }

    if (title) {
      title.textContent = "";
      const titleLink = document.createElement("a");
      titleLink.className = "article-card__title-link";
      titleLink.href = href;
      titleLink.textContent = article.title;
      title.append(titleLink);
    }

    if (excerpt) excerpt.textContent = article.excerpt;
    if (cta) {
      cta.href = href;
      cta.setAttribute("aria-label", `ادامه نوشته ${article.title}`);
    }
  };

  const enhanceHomepageCards = () => {
    const latestSection = document.querySelector('[data-article-list="latest"]');
    latestSection?.setAttribute("data-article-carousel", "");
    latestSection
      ?.querySelectorAll(".article-card")
      .forEach((card, index) => enhanceCard(card, lists.latest[index]));

    document.querySelectorAll("[data-featured-article]").forEach((card) => {
      const slug = card.dataset.featuredArticle;
      const article = articles[slug];
      if (!article) return;

      const href = articleHref(slug);
      const cta = card.querySelector(
        ":scope > .featured-card__cta, :scope > .content > a",
      );
      const title = card.querySelector(".content h2, .cutout p");
      const gradient = card.querySelector(":scope > .image-gradient");

      if (cta) {
        cta.href = href;
        cta.setAttribute("aria-label", `ادامه نوشته ${article.title}`);
      }

      if (title) {
        title.textContent = "";
        const titleLink = document.createElement("a");
        titleLink.className = "featured-card__title-link";
        titleLink.href = href;
        titleLink.textContent = article.title;
        title.append(titleLink);
      }

      if (!card.querySelector(":scope > .featured-card__image-link")) {
        const imageLink = document.createElement("a");
        imageLink.className = "featured-card__image-link";
        imageLink.href = href;
        imageLink.setAttribute("aria-label", `خواندن ${article.title}`);
        gradient?.after(imageLink);
      }

      if (!card.querySelector(":scope > .featured-card__category")) {
        const categoryLink = document.createElement("a");
        categoryLink.className = "featured-card__category";
        categoryLink.href = categoryHref(article.category);
        categoryLink.textContent = categories[article.category].title;
        gradient?.after(categoryLink);
      }
    });

    const extraSections = document.querySelector("[data-homepage-sections]");
    if (extraSections) {
      extraSections.innerHTML = ["travel-guide", "iran-tourism", "world-tourism"]
        .map(carouselSectionMarkup)
        .join("");
    }
  };

  const renderArticle = () => {
    const articlePage = document.querySelector("[data-single-article]");
    if (!articlePage) return;

    const requestedSlug = new URLSearchParams(window.location.search).get("article");
    const slug = articles[requestedSlug] ? requestedSlug : "flight-ticket-guide";
    const article = articles[slug];
    const category = categories[article.category];

    document.title = `${article.title} | وبلاگ دنیارو`;

    const description = document.querySelector('meta[name="description"]');
    description?.setAttribute("content", article.excerpt);

    const image = articlePage.querySelector(".article-hero__media > img");
    if (image) {
      image.src = `${assetRoot}images/${article.image}`;
      image.alt = article.alt;
    }

    const heading = articlePage.querySelector(".article-hero__title-panel > h1");
    if (heading) {
      heading.textContent = "";
      heading.append(`${article.titleLead} `);
      const accent = document.createElement("span");
      accent.textContent = article.titleAccent;
      heading.append(accent);
    }

    const body = articlePage.querySelector(".article-body__content");
    if (body) {
      body.innerHTML = `
        <p class="article-body__lead">${article.lead}</p>
        <h2>پیش از سفر چه نکاتی را بررسی کنیم؟</h2>
        <p>${article.excerpt} بهتر است پیش از تصمیم نهایی، زمان سفر، هزینه‌ها و شرایط مقصد را با نیازهای خود مقایسه کنید.</p>
        <h2>نکات کلیدی</h2>
        <ul>${article.points.map((point) => `<li>${point}</li>`).join("")}</ul>
        <h2>جمع‌بندی</h2>
        <p>با برنامه‌ریزی مرحله‌به‌مرحله و بررسی اطلاعات به‌روز، می‌توانید انتخاب مطمئن‌تری داشته باشید و از زمان سفر بهتر استفاده کنید.</p>
        <p><a href="${categoryHref(article.category)}">مشاهده مقاله‌های بیشتر در دسته ${category.title}</a></p>`;
    }
  };

  const renderCategoryArchive = () => {
    const archive = document.querySelector("[data-category-archive]");
    if (!archive) return;

    const requestedCategory = new URLSearchParams(window.location.search).get("category");
    const categoryKey = categories[requestedCategory] ? requestedCategory : "latest";
    const category = categories[categoryKey];
    const slugs = categoryKey === "latest" ? Object.keys(articles) : lists[categoryKey];

    document.title = `${category.title} | وبلاگ دنیارو`;
    const heading = archive.querySelector("[data-category-title]");
    if (heading) heading.textContent = category.title;

    const grid = archive.querySelector("[data-category-grid]");
    if (grid) grid.innerHTML = slugs.map(articleCardMarkup).join("");
  };

  enhanceHomepageCards();
  renderArticle();
  renderCategoryArchive();
})();

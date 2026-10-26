(() => {
  "use strict";

  const storageKey = "donyaro-preview-unlocked";
  const allowedCodes = new Set(["hajhossein", "asghar"]);
  const root = document.documentElement;
  let isUnlocked = false;

  root.style.visibility = "hidden";

  try {
    isUnlocked = window.sessionStorage.getItem(storageKey) === "1";
  } catch {
    isUnlocked = false;
  }

  if (!isUnlocked) {
    const enteredCode = window.prompt(
      "برای مشاهده نسخه پیش‌نمایش، کد دسترسی را وارد کنید:",
    );

    isUnlocked = allowedCodes.has(enteredCode);

    if (isUnlocked) {
      try {
        window.sessionStorage.setItem(storageKey, "1");
      } catch {
        // The current page remains unlocked if storage is unavailable.
      }
    }
  }

  if (isUnlocked) {
    root.style.visibility = "";
    return;
  }

  document.open();
  document.write(`<!doctype html>
    <html lang="fa" dir="rtl">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>دسترسی محدود | دنیارو</title>
        <style>
          * { box-sizing: border-box; }
          html, body { min-height: 100%; }
          body {
            display: grid;
            place-items: center;
            margin: 0;
            padding: 1.5rem;
            color: #2a2b35;
            font-family: system-ui, sans-serif;
            text-align: center;
            background: #fff;
          }
          main { max-width: 30rem; }
          h1 { margin: 0 0 0.75rem; font-size: 1.5rem; }
          p { margin: 0; line-height: 1.8; }
        </style>
      </head>
      <body>
        <main>
          <h1>دسترسی امکان‌پذیر نیست</h1>
          <p>کد واردشده صحیح نبود. برای تلاش دوباره، صفحه را تازه‌سازی کنید.</p>
        </main>
      </body>
    </html>`);
  document.close();
})();

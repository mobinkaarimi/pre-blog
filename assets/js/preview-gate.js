(() => {
  "use strict";

  const storageKey = "donyaro-preview-access";
  const allowedCodes = new Set(["hajhosserin", "asghar"]);
  const root = document.documentElement;
  let accessGranted = false;

  try {
    accessGranted = window.sessionStorage.getItem(storageKey) === "granted";
  } catch {
    accessGranted = false;
  }

  if (!accessGranted) {
    const enteredCode = window.prompt(
      "برای مشاهده نسخه پیش‌نمایش، کد دسترسی را وارد کنید:",
    );

    accessGranted = allowedCodes.has(enteredCode);

    if (accessGranted) {
      try {
        window.sessionStorage.setItem(storageKey, "granted");
      } catch {
        // The current page remains unlocked if storage is unavailable.
      }
    }
  }

  if (accessGranted) {
    root.classList.remove("preview-locked");
  }
})();

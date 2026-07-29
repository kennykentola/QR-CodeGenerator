export function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;

  const register = () => {
    navigator.serviceWorker
      .register("/app-sw.js", {
        scope: "/",
        // Never serve the SW script from the browser cache.
        // This prevents stale "text/html" cached responses from blocking
        // re-registration after Vercel fixes the MIME type.
        updateViaCache: "none",
      })
      .then((reg) => {
        console.log("[PWA] Service Worker registered with scope:", reg.scope);
      })
      .catch((error) => {
        // Surface MIME-type errors clearly to aid debugging.
        if (error?.message?.includes("MIME")) {
          console.error(
            "[PWA] SW blocked: wrong MIME type. " +
            "Check vercel.json — /app-sw.js must be served as application/javascript.",
            error
          );
        } else {
          console.error("[PWA] Service Worker registration failed:", error);
        }
      });
  };

  if (document.readyState === "complete" || document.readyState === "interactive") {
    register();
  } else {
    window.addEventListener("load", register);
  }
}

export function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;

  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/app-sw.js").catch((error) => {
      console.error("[PWA] Service worker registration failed", error);
    });
  });
}

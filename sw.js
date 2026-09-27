// Service worker mínimo — necessário para o Chrome considerar o app instalável.
// Não faz cache: cada abertura sempre busca a versão mais recente da página e dos dados.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", () => self.clients.claim());
self.addEventListener("fetch", (event) => {
  event.respondWith(fetch(event.request));
});

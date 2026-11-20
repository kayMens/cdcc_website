const menuToggle = document.querySelector("[data-menu-toggle]");
const mobileMenu = document.querySelector("[data-mobile-menu]");
const searchToggle = document.querySelector("[data-search-toggle]");
const searchPanel = document.querySelector("[data-search-panel]");
const megaMenu = document.querySelector("[data-mega-menu]");
const megaTriggers = document.querySelectorAll("[data-mega-trigger]");
const megaPanels = document.querySelectorAll("[data-mega-panel]");

function closeSearch() {
  if (searchPanel) searchPanel.hidden = true;
}

function closeMegaMenu() {
  if (!megaMenu) return;
  megaMenu.hidden = true;
  megaTriggers.forEach((trigger) => trigger.setAttribute("aria-expanded", "false"));
}

function openMegaMenu(name) {
  megaMenu.hidden = false;
  megaTriggers.forEach((trigger) => trigger.setAttribute("aria-expanded", String(trigger.dataset.megaTrigger === name)));
  megaPanels.forEach((panel) => { panel.hidden = panel.dataset.megaPanel !== name; });
  closeSearch();
}

if (menuToggle) menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  mobileMenu.hidden = isOpen;
  if (!isOpen) { closeSearch(); closeMegaMenu(); }
});

if (searchToggle) searchToggle.addEventListener("click", () => {
  searchPanel.hidden = !searchPanel.hidden;
  if (!searchPanel.hidden) {
    mobileMenu.hidden = true;
    menuToggle.setAttribute("aria-expanded", "false");
    closeMegaMenu();
    document.querySelector("#site-search").focus();
  }
});

megaTriggers.forEach((trigger) => trigger.addEventListener("click", () => {
  if (trigger.getAttribute("aria-expanded") === "true") closeMegaMenu();
  else openMegaMenu(trigger.dataset.megaTrigger);
}));

document.addEventListener("click", (event) => {
  if (megaMenu && !megaMenu.hidden && !event.target.closest("[data-mega-menu], [data-mega-trigger]")) closeMegaMenu();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") { closeMegaMenu(); closeSearch(); }
});

if (mobileMenu) mobileMenu.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  mobileMenu.hidden = true;
  menuToggle.setAttribute("aria-expanded", "false");
}));

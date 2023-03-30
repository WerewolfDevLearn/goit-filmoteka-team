const LOADER_TEMPLATE =
  '<div class="loader"><div></div><div></div><div></div><div></div></div>';

function htmlToElement(html) {
  const template = document.createElement('template');
  template.innerHTML = html;
  return template.content.firstChild;
}

function setLoader(selector) {
  const targetElement = document.querySelector(selector);
  const existingLoader = targetElement?.querySelector('.loader');
  if (existingLoader) return;
  const loaderElement = htmlToElement(LOADER_TEMPLATE);
  targetElement.appendChild(loaderElement);
}

function removeLoader(selector) {
  const targetElement = document.querySelector(selector);
  const loaderElement = targetElement?.querySelector('.loader');
  loaderElement?.remove();
}

function removeGlobalLoader() {
  const loaderElement = document.querySelector('.global-loader');
  loaderElement?.remove();
}

export { setLoader, removeLoader, removeGlobalLoader };

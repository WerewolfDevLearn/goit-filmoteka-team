function toggleNotification(successful) {
  const notifyEl = document.querySelector('.notification');

  if (successful) {
    notifyEl.classList.add('is-hidden');
    return;
  }
  notifyEl.classList.remove('is-hidden');
}

export { toggleNotification };

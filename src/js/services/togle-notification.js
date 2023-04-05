export function toggleNotification(boolean) {
  const notifyEl = document.querySelector('.notification');

  if (boolean) {
    notifyEl.classList.add('opacityZero');
    return;
  }
  notifyEl.classList.remove('opacityZero');
  setTimeout(() => {
    notifyEl.classList.add('opacityZero');
  }, 5000);
  return;
}

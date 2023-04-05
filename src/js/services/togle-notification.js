export function toggleNotification(flag) {
  const notifyEl = document.querySelector('.notification');
  console.log('notifyEl: ', notifyEl);
  console.log(flag);
  if (flag) {
    notifyEl.classList.add('opacityZero');
    return;
  }
  notifyEl.classList.remove('opacityZero');
  setTimeout(() => {
    notifyEl.classList.add('opacityZero');
  }, 5000);
  return;
}

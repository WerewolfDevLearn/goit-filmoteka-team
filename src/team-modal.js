const teamRefs = {
  openModalTeam: document.querySelector('[data-open-modal-team]'),
  closeModalTeam: document.querySelector('[data-close-modal-team]'),
  backdropTeam: document.querySelector('[data-backdrop-team]'),
  modalTeam: document.querySelector('[data-modal-team]'),
};

teamRefs.openModalTeam.addEventListener('click', toggleModal);
teamRefs.closeModalTeam.addEventListener('click', toggleModal);

teamRefs.backdropTeam.addEventListener('click', logBackdropClick);

function toggleModal() {
  //   document.body.classList.toggle("open-modal-window");
  //   teamRefs.modalTeam.classList.toggle("is-hidden");
  teamRefs.backdropTeam.classList.toggle('is-hidden');
}

function logBackdropClick() {}

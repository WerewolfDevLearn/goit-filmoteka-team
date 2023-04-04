const teamRefs = {
  openModalTeam: document.querySelector('[data-open-modal-team]'),
  closeModalTeam: document.querySelector('[data-close-modal-team]'),
  backdropTeam: document.querySelector('[data-backdrop-team]'),
  modalTeam: document.querySelector('[data-modal-team]'),
};

teamRefs.openModalTeam.addEventListener('click', toggleModal);
teamRefs.closeModalTeam.addEventListener('click', toggleModal);
teamRefs.backdropTeam.addEventListener('click', logBackdropClick);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    toggleModal();
  }
});

export default function toggleModal() {
  teamRefs.backdropTeam.classList.toggle('is-hidden');
}

function logBackdropClick() {
  teamRefs.backdropTeam.classList.add('is-hidden');
  teamRefs.modalTeam.add('is-hidden');
}

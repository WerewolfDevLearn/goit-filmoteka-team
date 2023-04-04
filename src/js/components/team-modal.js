// const teamRefs = {
//   openModalTeam: document.querySelector('[data-open-modal-team]'),
//   closeModalTeam: document.querySelector('[data-close-modal-team]'),
//   // backdropTeam: document.querySelector('[data-backdrop-team]'),
//   modalTeam: document.querySelector('[data-modal-team]'),
// };

const openModalTeam = document.querySelector('[data-open-modal-team]');
const closeModalTeam = document.querySelector('[data-close-modal-team]');
const backdropTeam = document.querySelector('[data-backdrop-team]');
const modalTeam = document.querySelector('[data-modal-team]');

openModalTeam.addEventListener('click', turnOnModal);
closeModalTeam.addEventListener('click', closeModalTm);
backdropTeam.addEventListener('click', closeModalTm);
backdropTeam.addEventListener('keydown', escapeListTeam);

// const listTeam = document.addEventListener('keydown', function (e) {
//   if (e.key === 'Escape') {
//     toggleModal();
//     document.removeEventListener('listTeam')
//   }
// });

function closeModalTm() {
  document.removeEventListener('keydown', escapeListTeam);
  document.removeEventListener('click', closeModalTm);
  backdropTeam.classList.add('is-hidden');
}

function turnOnModal() {
  backdropTeam.classList.remove('is-hidden');
  const listTeam = document.addEventListener('keydown', escapeListTeam);
}

function escapeListTeam(e) {
  if (e.key === 'Escape') {
    closeModalTm();
  }
}

// export default function toggleModal() {
//   teamRefs.backdropTeam.classList.toggle('is-hidden');
// }

// function logBackdropClick() {
//   teamRefs.backdropTeam.classList.add('is-hidden');
//  }

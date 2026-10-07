export function createModal() {
  const modal = document.createElement('div');
  modal.className = 'modal';

  const body = document.body;

  const modalContent = document.createElement('div');
  modalContent.className = 'modal__content';

  modal.append(modalContent);

  const modalBody = document.createElement('div');
  modalBody.className = 'modal__body';
  modalContent.append(modalBody);

  const closeButton = document.createElement('button');
  closeButton.className = 'modal__close button';
  closeButton.type = 'button';
  closeButton.textContent = 'Close';
  closeButton.addEventListener('click', closeModal);

  modalContent.append(closeButton);

  function openModal() {
    document.body.append(modal);
    modal.classList.add('active');
    body.classList.add('scroll-block');
    document.addEventListener('keydown', handleEscape);
  }

  function closeModal() {
    modal.remove();
    body.classList.remove('scroll-block');
    document.removeEventListener('keydown', handleEscape);
  }

  function setContent(content) {
    modalBody.replaceChildren(content);
  }

  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  function handleEscape(event) {
    if (event.key === 'Escape') {
      closeModal();
    }
  }

  return {
    modal,
    openModal,
    closeModal,
    setContent,
  };
}

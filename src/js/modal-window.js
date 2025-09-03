(() => {
  const refs = {
    form: document.getElementById('subscribe-form'),
    modal: document.querySelector('[data-modal]'),
    closeModalBtns: document.querySelectorAll('[data-modal-close]'),
  };

  refs.form.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(refs.form);
    const email = formData.get('email');

    console.log('Імітація надсилання даних:', email);

    setTimeout(() => {
      refs.modal.classList.add('is-open');
      refs.form.reset();
    }, 1000);
  });

  refs.closeModalBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      refs.modal.classList.remove('is-open');
    });
  });
})();

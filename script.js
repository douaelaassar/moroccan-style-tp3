// Moroccan Style - interactions JavaScript
document.querySelectorAll('.current-year').forEach(el => {
  el.textContent = new Date().getFullYear();
});

// Filtrage des produits dans la page Collection
const categoryFilter = document.getElementById('categoryFilter');
if (categoryFilter) {
  categoryFilter.addEventListener('change', function () {
    document.querySelectorAll('.product-item').forEach(item => {
      item.classList.toggle('d-none', this.value !== 'all' && item.dataset.category !== this.value);
    });
  });
}

// Boutons des produits : démonstration simple
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    alert('Merci pour votre intérêt pour : ' + button.dataset.product + ' !');
  });
});

// Validation et confirmation du formulaire de contact (démo front-end)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();
    event.stopPropagation();
    contactForm.classList.add('was-validated');

    if (contactForm.checkValidity()) {
      const messageBox = document.getElementById('formMessage');
      const firstName = document.getElementById('name').value.trim().split(' ')[0];
      messageBox.className = 'alert alert-success mb-0';
      messageBox.textContent = 'Merci ' + firstName + ' ! Votre message a bien été pris en compte (démonstration).';
      contactForm.reset();
      contactForm.classList.remove('was-validated');
    }
  });
}

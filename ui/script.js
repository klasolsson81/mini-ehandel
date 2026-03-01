/*  Roast & Brew — Micro interactions
    1. Kategori-filter på produktlistan (index.html)
    2. Formulärvalidering + bekräftelse (page2.html)
*/

// --- 1. Kategori-filter ---
const filterButtons = document.querySelectorAll('.filter-btn[data-category]');
const productCards = document.querySelectorAll('#product-grid .card');

filterButtons.forEach(function (btn) {
  btn.addEventListener('click', function () {
    var category = btn.getAttribute('data-category');

    // Uppdatera aktiv knapp
    filterButtons.forEach(function (b) { b.classList.remove('active'); });
    btn.classList.add('active');

    // Visa/dölj kort
    productCards.forEach(function (card) {
      if (category === 'all' || card.getAttribute('data-category') === category) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// --- 2. Formulärvalidering ---
var orderForm = document.getElementById('order-form');

if (orderForm) {
  orderForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var valid = true;

    // Validera namn
    var name = document.getElementById('name');
    var nameError = document.getElementById('name-error');
    if (!name.value.trim()) {
      nameError.classList.remove('hidden');
      valid = false;
    } else {
      nameError.classList.add('hidden');
    }

    // Validera e-post
    var email = document.getElementById('email');
    var emailError = document.getElementById('email-error');
    if (!email.value.trim() || !email.value.includes('@')) {
      emailError.classList.remove('hidden');
      valid = false;
    } else {
      emailError.classList.add('hidden');
    }

    // Validera adress
    var address = document.getElementById('address');
    var addressError = document.getElementById('address-error');
    if (!address.value.trim()) {
      addressError.classList.remove('hidden');
      valid = false;
    } else {
      addressError.classList.add('hidden');
    }

    // Om allt OK — visa bekräftelse
    if (valid) {
      document.getElementById('order-section').style.display = 'none';
      var confirmation = document.getElementById('confirmation');
      confirmation.classList.add('show');
      document.getElementById('order-id').textContent = 'RB-' + Date.now();
    }
  });
}

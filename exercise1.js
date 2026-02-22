// exercise1.js

const accordion = document.querySelector('.accordion');

accordion.addEventListener('click', function (event) {

  // 1. Find trigger safely
  const trigger = event.target.closest('.accordion-trigger');
  if (!trigger) return;

  // 2. Find parent item
  const item = trigger.closest('.accordion-item');

  // 3. Close ALL items first
  const allItems = document.querySelectorAll('.accordion-item');
  allItems.forEach(function (el) {
    if (el !== item) {
      el.classList.remove('open');
    }
  });

  // 4. Toggle clicked item
  item.classList.toggle('open');
});
// exercise3.js

const filterBar = document.querySelector('#filter-bar');
const cards = document.querySelectorAll('.card');
const filterBtns = document.querySelectorAll('.filter-btn');

filterBar.addEventListener('click', function (event) {

  // 1. Guard
  if (!event.target.matches('.filter-btn')) return;

  const clickedBtn = event.target;

  // 2. Update active state
  filterBtns.forEach(function (btn) {
    btn.classList.remove('active');
  });

  clickedBtn.classList.add('active');

  // 3. Read filter value
  const filter = clickedBtn.dataset.filter;

  // 4. Filter cards
  cards.forEach(function (card) {

    if (filter === 'all') {
      card.classList.remove('hidden');
      return;
    }

    const shouldHide = card.dataset.category !== filter;
    card.classList.toggle('hidden', shouldHide);
  });
});

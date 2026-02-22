// exercise2.js

const tagInput = document.querySelector('#tag-input');
const tagContainer = document.querySelector('#tag-container');

// -- Add tag --
tagInput.addEventListener('keydown', function (event) {
  if (event.key !== 'Enter') return;

  const value = tagInput.value.trim();
  if (!value) return;

  // Create tag
  const tag = document.createElement('div');
  tag.className = 'tag';
  tag.innerHTML = `${value} <span class="tag-remove">&times;</span>`;

  tagContainer.appendChild(tag);

  // Clear input
  tagInput.value = '';
});

// -- Remove tag via delegation --
tagContainer.addEventListener('click', function (event) {
  if (!event.target.matches('.tag-remove')) return;

  const tag = event.target.closest('.tag');
  if (tag) tag.remove();
});

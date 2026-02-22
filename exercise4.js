// exercise4.js

const editList = document.querySelector('#edit-list');

editList.addEventListener('dblclick', function (event) {

  // 1. Find closest item
  const item = event.target.closest('.edit-item');
  if (!item) return;

  // 2. Prevent double activation
  if (item.classList.contains('editing')) return;

  // 3. Enter edit mode
  const originalText = item.textContent;

  item.textContent = '';

  const input = document.createElement('input');
  input.value = originalText;

  item.appendChild(input);
  item.classList.add('editing');
  input.focus();

  let isEditing = true;

  // -- Commit --
  function commitEdit() {
    if (!isEditing) return;
    isEditing = false;

    const newText = input.value.trim() || originalText;
    item.textContent = newText;
    item.classList.remove('editing');
  }

  // -- Cancel --
  function cancelEdit() {
    if (!isEditing) return;
    isEditing = false;

    item.textContent = originalText;
    item.classList.remove('editing');
  }

  // Key handling
  input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      commitEdit();
    }
    if (e.key === 'Escape') {
      cancelEdit();
    }
  });

  // Blur saves
  input.addEventListener('blur', function () {
    commitEdit();
  });

});
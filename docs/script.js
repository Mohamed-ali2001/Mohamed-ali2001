// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Project filter chips
const chips = document.querySelectorAll('.chip');
const cards = document.querySelectorAll('.card');

chips.forEach(chip => {
  chip.addEventListener('click', () => {
    chips.forEach(c => c.classList.remove('is-active'));
    chip.classList.add('is-active');
    const filter = chip.dataset.filter;
    cards.forEach(card => {
      if (filter === 'all') {
        card.style.display = '';
      } else {
        const tags = card.dataset.tags.split(' ');
        card.style.display = tags.includes(filter) ? '' : 'none';
      }
    });
  });
});

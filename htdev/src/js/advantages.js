const advantagesList = document.querySelector('.advantages__list');
const advantagesBtn = document.querySelector('.advantages__item-btn');

advantagesList.addEventListener('click', function(event) {
  let btn = event.target.closest("BUTTON");

  if (!btn) return;

  const advantagesDscr = btn.parentNode.parentNode.lastChild;

  // console.log(advantagesDscr);
  btn.classList.toggle("advantages__item-btn--active");
  advantagesDscr.classList.toggle("advantages__item-dscr--active");

})
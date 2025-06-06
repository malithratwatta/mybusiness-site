const logo = document.getElementById('logo');
window.addEventListener('scroll', () => {
  logo.classList.toggle('logo-small', window.scrollY > 50);
  logo.classList.toggle('logo-large', window.scrollY <= 50);
});

const counters = document.querySelectorAll('.counter');
const animateCounters = () => {
  counters.forEach(counter => {
    counter.innerText = '0';
    const update = () => {
      const target = +counter.getAttribute('data-count');
      const current = +counter.innerText;
      const increment = Math.ceil(target / 100);
      if (current < target) {
        counter.innerText = `${current + increment}`;
        setTimeout(update, 40);
      } else {
        counter.innerText = target;
      }
    };
    update();
  });
};
let statsSeen = false;
window.addEventListener('scroll', () => {
  const stats = document.getElementById('stats');
  const rect = stats.getBoundingClientRect();
  if (!statsSeen && rect.top < window.innerHeight) {
    statsSeen = true;
    animateCounters();
  }
});

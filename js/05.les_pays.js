const map = document.querySelector('.map');
const img = document.getElementById('zoom-img');

map.addEventListener('mousemove', (e) => {
  const boundingRect = map.getBoundingClientRect();
  const x = (e.clientX - boundingRect.left) / map.offsetWidth;
  const y = (e.clientY - boundingRect.top) / map.offsetHeight;
  
  img.style.transformOrigin = `${x * 100}% ${y * 100}%`;
});

map.addEventListener('mouseenter', () => {
  img.classList.add('zoomed');
});

map.addEventListener('mouseleave', () => {
  img.classList.remove('zoomed');
});
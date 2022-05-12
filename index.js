const toggleBtn = document.querySelector('.toggleBtn')
const icon = document.querySelector('.nav_icon')
const menu = document.querySelector('.nav_menu')

toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
  icon.classList.toggle('active');
})
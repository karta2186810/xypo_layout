import SmoothScroll from 'smooth-scroll'
import './js/animation'
import './css/index.scss'


const menuBtn = document.getElementById('menu-btn')
const sideNav = document.getElementById('side-nav')

menuBtn.addEventListener('click', () => {
  if (!sideNav.classList.contains('open')) {
    sideNav.classList.add('open')
  } else {
    sideNav.classList.remove('open')
  }
})

new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true
})
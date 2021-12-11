import { listeners } from './modules/listeners.js'

const outer = document.querySelector('.outer')

window.onload = () => {
  outer.style.width = `${window.innerWidth}px`;
  outer.style.height = `${window.innerHeight}px`;
}

window.onresize = () => {
  outer.style.width = `${window.innerWidth}px`;
  outer.style.height = `${window.innerHeight}px`;
}

listeners();

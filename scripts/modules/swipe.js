const swipeRight = () => {
  const active = document.querySelector('.active');
  const right = (document.querySelector('.active .right').value)
  console.log(active);
  console.log(right);
  if (right) {
    const next = document.getElementById(right);
    console.log(next);
    active.classList.add('move-left')
    next.classList.add('set-right');
    next.classList.remove('hidden');
    next.classList.add('active');
    next.classList.add('move-left');
    setInterval(() => {
      active.classList.remove('active');
      active.classList.add('hidden');
      active.classList.remove('move-left');
      next.classList.remove('set-right');
      next.classList.remove('move-left');
    }, 500);
  }
}

const swipeLeft = () => {
  const active = document.querySelector('.active');
  const left = (document.querySelector('.active .left').value)
  console.log(active);
  console.log(left);
  if (left) {
    const next = document.getElementById(left);
    console.log(next)
    active.classList.add('move-right');
    next.classList.add('set-left');
    next.classList.remove('hidden');
    next.classList.add('active');
    next.classList.add('move-right');
    setInterval(() => {
      // active.classList.remove('active');
      // active.classList.add('hidden');
      // active.classList.remove('move-right');
      // next.classList.remove('set-left');
      // next.classList.remove('move-right');
    }, 500);
  }
}

export { swipeRight, swipeLeft }

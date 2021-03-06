// let scrollPos = 0
// const nav = document.querySelector('.header')

// function checkPosition () {
//   let windowY = window.scrollY
//   console.log(windowY)
//   if (windowY < scrollPos) {
//     // Scrolling UP
//     nav.classList.add('is-visible')
//     nav.classList.remove('is-hidden')
//   } else {
//     // Scrolling DOWN
//     nav.classList.add('is-hidden')
//     nav.classList.remove('is-visible')
//   }
//   scrollPos = windowY
// }

// window.addEventListener('scroll', checkPosition)
// if (
//   'IntersectionObserver' in window &&
//   'IntersectionObserverEntry' in window &&
//   'intersectionRatio' in window.IntersectionObserverEntry.prototype
// ) {
//   let observer = new IntersectionObserver(entries => {
//     if (entries[0].boundingClientRect.y < 0) {
//       console.log('past')
//       document.body.classList.add('header-not-at-top')
//     } else {
//       console.log('not')
//       document.body.classList.remove('header-not-at-top')
//     }
//   })
//   observer.observe(document.querySelector('#top-of-site-pixel-anchor'))
// }

// Scroll stuff

window.addEventListener('scroll', function () {
  const elementTarget = document.querySelector('.about')
  let header = document.querySelector('.header__all')

  if (
    window.scrollY >
    elementTarget.offsetTop + elementTarget.offsetHeight - 5
  ) {
    header.classList.add('scrolled')
  } else if (
    window.scrollY <
    elementTarget.offsetTop + elementTarget.offsetHeight - 5
  ) {
    header.classList.remove('scrolled')
  }
})

// Menu Stuff

const menuBtn = document.querySelector('.menu-btn')
const closeBtn = document.querySelector('.close-btn')
const menuItems = document.querySelectorAll('.mobile-menu__item')

menuBtn.addEventListener('click', function (e) {
  e.preventDefault()
  let mobileMenu = document.querySelector('.mobile-menu')

  mobileMenu.classList.add('clicked')
})

closeBtn.addEventListener('click', function () {
  let mobileMenu = document.querySelector('.mobile-menu')

  mobileMenu.classList.remove('clicked')
})

for (let item = 0; item < menuItems.length; item++) {
  menuItems[item].addEventListener('click', function () {
    let mobileMenu = document.querySelector('.mobile-menu')

    mobileMenu.classList.remove('clicked')
  })
}

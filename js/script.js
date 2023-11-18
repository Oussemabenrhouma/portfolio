// smooth scroll
const allLinks = document.querySelectorAll('a')
allLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    const href = link.getAttribute('href')
    if (href === '#') {
      e.preventDefault()
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
    if (href !== '#' && href.startsWith('#')) {
      e.preventDefault()
      const sectionEl = document.querySelector(href)
      sectionEl.scrollIntoView({ behavior: 'smooth' })
    }
  })
})
// stricky navigation
const sectionHeroEl = document.querySelector('.section-hero')
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0]
    if (ent.isIntersecting === false) {
      document.body.classList.add('sticky')
    }
    if (ent.isIntersecting === true) {
      document.body.classList.remove('sticky')
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: '-40px'
  }
)
obs.observe(sectionHeroEl)

// Dynamic Text Effect
const dynamicText = document.querySelector('.dynamic-text')
const words = ['Java', 'Angular', 'SpringBoot', 'Symfony', 'Laravel']

let wordIndex = 0
let charIndex = 0
let isDeleting = false

const typeEffect = () => {
  const currentWord = words[wordIndex]
  const currentChar = currentWord.substring(0, charIndex)
  dynamicText.textContent = currentChar
  dynamicText.classList.add('stop-blinking')

  if (!isDeleting && charIndex < currentWord.length) {
    charIndex++
    setTimeout(typeEffect, 200)
  } else if (isDeleting && charIndex > 0) {
    charIndex--
    setTimeout(typeEffect, 100)
  } else {
    isDeleting = !isDeleting
    dynamicText.classList.remove('stop-blinking')
    wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex
    setTimeout(typeEffect, 1200)
  }
}

typeEffect()

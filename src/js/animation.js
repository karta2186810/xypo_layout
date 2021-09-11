const titleCallback = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (!entry.target.classList.contains('title-ani')) {
        entry.target.classList.add('title-ani')
      }
    } else {
      entry.target.classList.remove('title-ani')
    }
  })
}
const textCallback = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (!entry.target.classList.contains('text-ani')) {
        entry.target.classList.add('text-ani')
      }
    } else {
      entry.target.classList.remove('text-ani')
    }
  })
}
const titles = document.getElementsByClassName('title')
const observerTitle = new IntersectionObserver(titleCallback, {
  threshold: 0.5
})
const texts = document.getElementsByTagName('p')
const observerText = new IntersectionObserver(textCallback, {
  threshold: 0.5
})

for (let i = 0; i < titles.length; i ++) {
  observerTitle.observe(titles[i])
}
for (let i = 0; i < texts.length; i ++) {
  observerText.observe(texts[i])
}
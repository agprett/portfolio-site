let languages = [
  {
    name: 'Javascript',
    img: ''
  },
  {
    name: 'React',
    img: ''
  },
  {
    name: 'Redux',
    img: ''
  },
  {
    name: 'Axios',
    img: ''
  },
  {
    name: 'HTML',
    img: ''
  },
  {
    name: 'CSS',
    img: ''
  },
  {
    name: 'D3',
    img: ''
  },
  {
    name: 'Node',
    img: ''
  },
  {
    name: 'Express',
    img: ''
  },
  {
    name: 'PostgreSQL',
    img: ''
  }
]

const languagesDisplay = document.getElementById('languages-display')

languagesDisplay.innerHTML = ''

languages.forEach(language => {
  const languageDisp = document.createElement('div')
  languageDisp.innerHTML = `
  <p>${language.name}</p>`

  languagesDisplay.appendChild(languageDisp)
})

const navButtons = document.querySelectorAll('nav button')

const scrollToTag = (element) => {
  if(element === 'contact'){
    document.getElementById(element).scrollIntoView({block: 'end', behavior: 'smooth'})
  } else if(element === 'top') {
    document.getElementById(element).scrollIntoView({behavior: 'smooth'})
  } else {
    window.scrollTo({
      top: document.getElementById(element).getBoundingClientRect().top + window.pageYOffset - 85,
      behavior: 'smooth'})
  }
}

navButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    event.preventDefault()

    scrollToTag(button.value)
  })
})

const brokenSite = document.getElementById('broken-site')

brokenSite.addEventListener('click', (event) => {
  event.preventDefault()
  alert(`I'm very sorry, but with some recent security updates I did, the site is no longer functioning. I am working hard to get it back up and running. Please refer to the Github repo if you want a look at what I've been doing!`)
})
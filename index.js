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